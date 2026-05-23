/* HVAC PRO - app.js
   ARQUIVO COMPLETO

   CORREÇÃO FINAL DAS CORES DO ACERVO:
   - O app agora decide a cor por fonteTipo/nivelConfianca de forma explícita.
   - VERDE tem prioridade sobre AZUL.
   - BRANCO tem prioridade sobre VERDE e AZUL.
   - A cor é aplicada por inline style, então não depende do style.css.

   CORES:
   AZUL  = oficial
   VERDE = confiável não oficial
   BRANCO = informação sugerida
*/

const gasData = window.gasData || {};
const errorCategories = window.errorCategories || [];
const brandsByCategory = window.brandsByCategory || {};
const modelsByBrand = window.modelsByBrand || {};
const errorCodesByModel = window.errorCodesByModel || {};
const acervoTecnico = window.acervoTecnico || [];

let cards = [];
let current = 0;
let startX = 0;
let endX = 0;
let catCurrent = 0;
let brandCurrent = 0;
let modelCurrent = 0;
let codeCurrent = 0;

function normalizeSearchText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeAcervoCodeText(value) {
  return normalizeSearchText(value).replace(/[^a-z0-9]/g, "");
}

function safeValue(value, fallback) {
  return value || fallback || "Não informado";
}

function hasConcreteAcervoValue(value) {
  const raw = String(value || "");
  const text = normalizeSearchText(raw);
  if (!text) return false;

  return /\d/.test(raw) ||
    text.includes("btu") ||
    text.includes("r32") ||
    text.includes("r410a") ||
    text.includes("r22") ||
    text.includes("127v") ||
    text.includes("220v") ||
    text.includes("380v") ||
    text.includes("pol") ||
    text.includes("mm") ||
    text.includes("kg") ||
    text.includes(" g") ||
    text.includes("g/");
}

function isWeakAcervoValue(value) {
  const text = normalizeSearchText(value);

  if (!text) return true;
  if (text === "-") return true;
  if (text === "nao aplicavel") return true;
  if (text === "nao se aplica") return true;

  if (hasConcreteAcervoValue(value)) return false;

  if (text.includes("nao informado")) return true;
  if (text.includes("não informado")) return true;
  if (text.includes("validar etiqueta")) return true;
  if (text.includes("validar manual")) return true;
  if (text.includes("validar procedimento")) return true;
  if (text.includes("validar tabela")) return true;
  if (text.includes("validar modelo")) return true;
  if (text.includes("validar codigo")) return true;
  if (text.includes("validar código")) return true;
  if (text.includes("validar combinacao")) return true;
  if (text.includes("validar combinação")) return true;
  if (text.includes("nao cadastrado")) return true;
  if (text.includes("não cadastrado")) return true;
  if (text.includes("confirmar no site")) return true;
  if (text.includes("confirmar no manual")) return true;
  if (text.includes("confirmar no fabricante")) return true;

  return false;
}

function acervoSourceTokens(item, fieldKey) {
  const fontesCampos = item && item.fontesCampos ? item.fontesCampos : {};
  const confiancaCampos = item && item.confiancaCampos ? item.confiancaCampos : {};

  const values = [
    fontesCampos[fieldKey],
    confiancaCampos[fieldKey],
    item?.fonteTipo,
    item?.nivelConfianca,
    item?.fonte,
    item?.observacaoFonte,
    item?.status
  ];

  return values.map((v) => normalizeSearchText(v)).filter(Boolean);
}

function acervoDataLevel(item, fieldKey) {
  const tokens = acervoSourceTokens(item, fieldKey);
  const joined = tokens.join(" | ");

  // 1) BRANCO primeiro: informação sugerida sempre vence.
  const suggestedKeys = [
    "informacao_sugerida",
    "informação_sugerida",
    "informacao sugerida",
    "informação sugerida",
    "sugerida",
    "sugestiva",
    "sugerido",
    "sugestivo",
    "fonte_internet",
    "internet",
    "fonte_usuario",
    "fonte usuário",
    "usuario",
    "usuário",
    "relato",
    "campo nao confirmado",
    "campo não confirmado",
    "nao_confirmada",
    "não_confirmada",
    "nao confirmada",
    "não confirmada"
  ];

  if (suggestedKeys.some((key) => joined.includes(key))) return "suggested";

  // 2) VERDE antes de azul: "NAO_OFICIAL" contém "OFICIAL", então verde precisa vir antes.
  const trustedKeys = [
    "distribuidor_tecnico_autorizado",
    "distribuidor técnico autorizado",
    "distribuidor tecnico autorizado",
    "distribuidor_técnico_autorizado",
    "distribuidor autorizado",
    "distribuidor",
    "autorizado",
    "catalogo tecnico",
    "catálogo técnico",
    "fonte_tecnica_confiavel_nao_oficial",
    "fonte técnica confiável não oficial",
    "fonte tecnica confiavel nao oficial",
    "nao_oficial",
    "não_oficial",
    "nao oficial",
    "não oficial",
    "nao-oficial",
    "não-oficial",
    "confiavel nao oficial",
    "confiável não oficial"
  ];

  if (trustedKeys.some((key) => joined.includes(key))) return "trusted";

  // 3) AZUL oficial.
  const officialKeys = [
    "fabricante_oficial",
    "fabricante oficial",
    "fabricante",
    "manual oficial",
    "pagina oficial",
    "página oficial",
    "ficha tecnica oficial",
    "ficha técnica oficial",
    "suporte oficial",
    "inmetro",
    "ence",
    "etiqueta",
    "placa de identificacao",
    "placa de identificação",
    "confirmado_manual_oficial",
    "confirmado_fonte_oficial",
    "confirmado_ficha_tecnica_oficial",
    "confirmado_suporte_oficial",
    "confirmado_inmetro",
    "confirmado_etiqueta",
    "oficial"
  ];

  if (officialKeys.some((key) => joined.includes(key))) return "official";

  // Se chegou aqui, é dado sem classificação explícita. Para segurança visual, tratar como sugerido branco.
  return "suggested";
}

function acervoColor(level) {
  if (level === "trusted") return "#22c55e";
  if (level === "suggested") return "#ffffff";
  return "#38bdf8";
}

function acervoLabel(level) {
  if (level === "trusted") return "Confiável não oficial";
  if (level === "suggested") return "Informação sugerida";
  return "Oficial";
}

function renderAcervoField(label, value, item, fieldKey) {
  if (isWeakAcervoValue(value)) return "";

  const level = acervoDataLevel(item, fieldKey);
  const color = acervoColor(level);
  const title = acervoLabel(level);

  return `
    <div class="info-row">
      <span>${label}:</span><br>
      <strong class="acervo-${level}" style="color:${color} !important;">${value}</strong>
      <small style="display:block;opacity:.72;margin-top:4px;color:${color};">${title}</small>
    </div>
  `;
}

function renderAcervoTextField(label, value) {
  if (isWeakAcervoValue(value)) return "";

  return `
    <div class="info-row">
      <span>${label}:</span><br>
      ${value}
    </div>
  `;
}

function renderAcervoManual(label, value, text) {
  if (!value || !String(value).startsWith("http")) return "";

  return `
    <div class="info-row">
      <span>${label}:</span><br>
      <a href="${value}" target="_blank" rel="noopener">${text}</a>
    </div>
  `;
}

function updateCarousel() {
  cards = document.querySelectorAll(".card");
  if (!cards.length) return;

  cards.forEach((card, index) => {
    card.className = "card";

    const left = (current - 1 + cards.length) % cards.length;
    const right = (current + 1) % cards.length;
    const farLeft = (current - 2 + cards.length) % cards.length;
    const farRight = (current + 2) % cards.length;

    if (index === current) card.classList.add("center");
    else if (index === left) card.classList.add("left");
    else if (index === right) card.classList.add("right");
    else if (index === farLeft) card.classList.add("far-left");
    else if (index === farRight) card.classList.add("far-right");
    else card.classList.add("hidden");
  });
}

function next() {
  cards = document.querySelectorAll(".card");
  if (!cards.length) return;
  current = (current + 1) % cards.length;
  updateCarousel();
}

function prev() {
  cards = document.querySelectorAll(".card");
  if (!cards.length) return;
  current = (current - 1 + cards.length) % cards.length;
  updateCarousel();
}

function searchHome() {
  const input = document.getElementById("homeSearch");
  if (!input) return;

  const value = normalizeSearchText(input.value);
  if (value.length < 2) return;

  const map = [
    { keys: ["manifold", "pressao", "pressão"], index: 0 },
    { keys: ["erros", "erro", "defeito", "defeitos"], index: 1 },
    { keys: ["testes", "teste", "multimetro", "multímetro"], index: 2 },
    { keys: ["gases", "gas", "gás", "refrigerante"], index: 3 },
    { keys: ["modelos", "modelo", "equipamento"], index: 4 },
    { keys: ["acervo", "acervo tecnico", "acervo técnico", "manual", "manuais", "manual tecnico", "manual técnico"], index: 5 }
  ];

  const found = map.find((item) => {
    return item.keys.some((key) => {
      const cleanKey = normalizeSearchText(key);
      return cleanKey.includes(value) || value.includes(cleanKey);
    });
  });

  if (found) {
    current = found.index;
    updateCarousel();
  }
}

function setupMainSwipe() {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  carousel.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (event) => {
    endX = event.changedTouches[0].clientX;
    const diff = endX - startX;
    if (diff > 45) prev();
    if (diff < -45) next();
  });
}

function openScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });

  const screen = document.getElementById(id);
  if (!screen) return;
  screen.classList.add("active");

  if (id === "home") updateCarousel();

  if (id === "gases") {
    const gases = document.getElementById("gases");
    if (gases) gases.scrollTop = 0;
  }

  if (id === "erros") {
    const erros = document.getElementById("erros");
    if (erros) erros.scrollTop = 0;

    const typeStep = document.getElementById("typeStep");
    const brandStep = document.getElementById("brandStep");
    const modelStep = document.getElementById("modelStep");
    const codeStep = document.getElementById("codeStep");

    if (typeStep) typeStep.style.display = "block";
    if (brandStep) brandStep.style.display = "none";
    if (modelStep) modelStep.style.display = "none";
    if (codeStep) codeStep.style.display = "none";

    renderCategoryCarousel();
  }

  if (id === "acervo") {
    const acervo = document.getElementById("acervo");
    if (acervo) acervo.scrollTop = 0;

    const acervoSearch = document.getElementById("acervoSearch");
    if (acervoSearch && !acervoSearch.value.trim()) renderAcervoIntro();
  }
}

/* GASES */

function renderGas(name) {
  const key = String(name || "").toUpperCase();
  const gas = gasData[key];
  const gasInfo = document.getElementById("gasInfo");
  if (!gasInfo) return;

  if (!gas) {
    gasInfo.innerHTML = `
      <h2>Não encontrado</h2>
      <div class="info-row">Digite um gás válido.</div>
    `;
    return;
  }

  const ptRows = Array.isArray(gas.pt)
    ? gas.pt.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")
    : "";

  gasInfo.innerHTML = `
    <h2>${gas.nome || key}</h2>
    <div class="info-row"><span>Tipo:</span><br>${gas.tipo || "-"}</div>
    <div class="info-row"><span>Composição:</span><br>${gas.composicao || "-"}</div>
    <div class="info-row"><span>Aplicação:</span><br>${gas.aplicacao || "-"}</div>
    <div class="info-row"><span>Óleo:</span><br>${gas.oleo || "-"}</div>
    <div class="info-row"><span>Segurança:</span><br>${gas.seguranca || "-"}</div>
    <div class="info-row"><span>GWP:</span><br>${gas.gwp || "-"}</div>
    <div class="info-row"><span>ODP:</span><br>${gas.odp || "-"}</div>
    <div class="info-row"><span>Ebulição:</span><br>${gas.ebulição || gas.ebulicao || "-"}</div>
    <div class="info-row"><span>Crítica:</span><br>${gas.critica || "-"}</div>
    <div class="info-row"><span>Pressão crítica:</span><br>${gas.pressaoCritica || "-"}</div>
    <div class="info-row"><span>Glide:</span><br>${gas.glide || "-"}</div>
    <div class="info-row"><span>Transferência:</span><br>${gas.transferencia || "-"}</div>
    <div class="info-row"><span>Evaporação típica:</span><br>${gas.faixaEvaporacao || "-"}</div>
    <div class="info-row"><span>Condensação típica:</span><br>${gas.faixaCondensacao || "-"}</div>
    <div class="info-row"><span>Campo:</span><br>${gas.campo || "-"}</div>
    <div class="info-row">
      <span>Tabela PT resumida:</span>
      ${ptRows ? `<table class="pt-table"><thead><tr><th>Temp.</th><th>Pressão</th></tr></thead><tbody>${ptRows}</tbody></table>` : `<div class="note">Tabela PT ainda não cadastrada para este gás.</div>`}
      <div class="note">Valores aproximados para referência rápida. Conferir tabela oficial para ajuste fino.</div>
    </div>
  `;
}

function selectGas(name, element) {
  document.querySelectorAll(".gas-chip").forEach((chip) => chip.classList.remove("active-gas"));
  if (element) element.classList.add("active-gas");

  const gasSearch = document.getElementById("gasSearch");
  if (gasSearch) gasSearch.value = name;

  renderGas(name);
}

function searchGas() {
  const input = document.getElementById("gasSearch");
  if (!input) return;

  const value = input.value.trim();
  if (value.length >= 2) renderGas(value);
}

/* ÍCONES DO MÓDULO ERROS */

function svgSplit() {
  return `<svg viewBox="0 0 100 100" fill="none"><rect x="15" y="25" width="70" height="32" rx="8" stroke="#ff3636" stroke-width="6"/><path d="M24 44H76" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/><path d="M34 62C42 68 58 68 66 62" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/></svg>`;
}

function svgCassete() {
  return `<svg viewBox="0 0 100 100" fill="none"><rect x="22" y="18" width="56" height="56" rx="8" stroke="#ff3636" stroke-width="6"/><rect x="36" y="32" width="28" height="28" rx="5" stroke="#ff3636" stroke-width="5"/><path d="M50 20V32M50 60V72M24 46H36M64 46H76" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/></svg>`;
}

function svgJanela() {
  return `<svg viewBox="0 0 100 100" fill="none"><rect x="22" y="20" width="56" height="60" rx="8" stroke="#ff3636" stroke-width="6"/><path d="M30 38H70" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/><path d="M34 52H66M34 63H66" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/><circle cx="67" cy="70" r="4" fill="#ff3636"/></svg>`;
}

function svgPisoTeto() {
  return `<svg viewBox="0 0 100 100" fill="none"><rect x="18" y="24" width="64" height="28" rx="7" stroke="#ff3636" stroke-width="6"/><path d="M28 42H72" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/><path d="M30 58V76M50 58V76M70 58V76" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/></svg>`;
}

/* ERROS */

function activeCategory() {
  return errorCategories[catCurrent]?.name || "";
}

function activeBrand() {
  const brands = brandsByCategory[activeCategory()] || [];
  return brands[brandCurrent] || "";
}

function activeModel() {
  const models = modelsByBrand[activeBrand()] || [];
  return models[modelCurrent] || "";
}

function getCodes() {
  const key = activeBrand() + "|" + activeModel();
  const codes = errorCodesByModel[key];

  if (Array.isArray(codes) && codes.length) return codes;

  return [
    {
      code: "E1",
      title: "Falha genérica",
      cause: "Código ainda não refinado para este modelo.",
      test: "Verificar alimentação, sensores, comunicação e placas.",
      solution: "Cadastrar diagnóstico específico na próxima etapa.",
      sourceLevel: "DIAGNOSTICO_CAMPO"
    },
    {
      code: "E3",
      title: "Ventilador / sensor",
      cause: "Possível falha no motor, sensor ou rotação.",
      test: "Verificar motor, capacitor, sensor Hall e placa.",
      solution: "Corrigir componente defeituoso.",
      sourceLevel: "DIAGNOSTICO_CAMPO"
    }
  ];
}

function formatSourceLevel(sourceLevel) {
  const map = {
    DIAGNOSTICO_CAMPO: "Diagnóstico de campo",
    VALIDAR_MANUAL_MODELO: "Validar no manual do modelo",
    BASE_APP_ORIGINAL: "Base original do app",
    BASE_APP_ORIGINAL_VALIDAR_MANUAL: "Base original do app / validar manual",
    OFICIAL_SAMSUNG_SUPORTE: "Suporte oficial Samsung",
    OFICIAL_MIDEA_FREEMATCH: "Manual técnico Midea FreeMatch",
    OFICIAL_MIDEA_PORTATIL_REFERENCIA: "Referência oficial Midea",
    OFICIAL_FUJITSU_MANUAL_LED: "Manual Fujitsu / leitura por LED",
    OFICIAL_CONSUL_SUPORTE_GERAL: "Suporte oficial Consul",
    OFICIAL_TRANE_U_MATCH: "Manual técnico Trane",
    LISTA_TECNICA_NAO_OFICIAL_VALIDAR: "Lista técnica não oficial / validar"
  };

  return map[sourceLevel] || sourceLevel || "Não informado";
}

function renderCategoryCarousel() {
  const box = document.getElementById("categoryCarousel");
  if (!box) return;

  box.innerHTML = errorCategories.map((cat, index) => `
    <div class="category-card" onclick="selectTypeAndOpenBrand(${index})">
      <div class="cat-icon">${cat.icon}</div>
      <div class="cat-title">${cat.name}</div>
    </div>
  `).join("");

  updateCategoryCarousel();
}

function updateCategoryCarousel() {
  const catCards = document.querySelectorAll(".category-card");
  if (!catCards.length) return;

  catCards.forEach((card, index) => {
    card.className = "category-card";
    const left = (catCurrent - 1 + catCards.length) % catCards.length;
    const right = (catCurrent + 1) % catCards.length;

    if (index === catCurrent) card.classList.add("cat-center");
    else if (index === left) card.classList.add("cat-left");
    else if (index === right) card.classList.add("cat-right");
    else card.classList.add("cat-hidden");
  });
}

function nextCategory() {
  if (!errorCategories.length) return;
  catCurrent = (catCurrent + 1) % errorCategories.length;
  updateCategoryCarousel();
}

function prevCategory() {
  if (!errorCategories.length) return;
  catCurrent = (catCurrent - 1 + errorCategories.length) % errorCategories.length;
  updateCategoryCarousel();
}

function searchErrorType() {
  const input = document.getElementById("errorTypeSearch");
  if (!input) return;

  const value = normalizeSearchText(input.value);
  if (value.length < 2) return;

  const index = errorCategories.findIndex((cat) => {
    return cat.search.some((term) => {
      const cleanTerm = normalizeSearchText(term);
      return cleanTerm.includes(value) || value.includes(cleanTerm);
    });
  });

  if (index >= 0) {
    catCurrent = index;
    updateCategoryCarousel();
  }
}

function selectTypeAndOpenBrand(index) {
  catCurrent = index;
  brandCurrent = 0;

  document.getElementById("typeStep").style.display = "none";
  document.getElementById("brandStep").style.display = "block";
  document.getElementById("modelStep").style.display = "none";
  document.getElementById("codeStep").style.display = "none";

  renderBrandCarousel();
}

function backToType() {
  document.getElementById("brandStep").style.display = "none";
  document.getElementById("modelStep").style.display = "none";
  document.getElementById("codeStep").style.display = "none";
  document.getElementById("typeStep").style.display = "block";
}

function renderBrandCarousel() {
  const brands = brandsByCategory[activeCategory()] || [];
  const box = document.getElementById("brandCarousel");
  if (!box) return;

  box.innerHTML = brands.map((brand, index) => `
    <div class="brand-card" onclick="selectBrandAndOpenModel(${index})">
      <div class="brand-title">${brand}</div>
      <div class="brand-sub">${activeCategory()}</div>
    </div>
  `).join("");

  updateBrandCarousel();
}

function updateBrandCarousel() {
  const brandCards = document.querySelectorAll(".brand-card");
  if (!brandCards.length) return;

  brandCards.forEach((card, index) => {
    card.className = "brand-card";
    const left = (brandCurrent - 1 + brandCards.length) % brandCards.length;
    const right = (brandCurrent + 1) % brandCards.length;

    if (index === brandCurrent) card.classList.add("brand-center");
    else if (index === left) card.classList.add("brand-left");
    else if (index === right) card.classList.add("brand-right");
    else card.classList.add("brand-hidden");
  });
}

function nextBrand() {
  const brands = brandsByCategory[activeCategory()] || [];
  if (!brands.length) return;
  brandCurrent = (brandCurrent + 1) % brands.length;
  updateBrandCarousel();
}

function prevBrand() {
  const brands = brandsByCategory[activeCategory()] || [];
  if (!brands.length) return;
  brandCurrent = (brandCurrent - 1 + brands.length) % brands.length;
  updateBrandCarousel();
}

function searchBrand() {
  const input = document.getElementById("brandSearch");
  if (!input) return;

  const value = normalizeSearchText(input.value);
  if (value.length < 1) return;

  const brands = brandsByCategory[activeCategory()] || [];
  const index = brands.findIndex((brand) => {
    const cleanBrand = normalizeSearchText(brand);
    return cleanBrand.includes(value) || value.includes(cleanBrand);
  });

  if (index >= 0) {
    brandCurrent = index;
    updateBrandCarousel();
  }
}

function selectBrandAndOpenModel(index) {
  brandCurrent = index;
  modelCurrent = 0;

  document.getElementById("brandStep").style.display = "none";
  document.getElementById("modelStep").style.display = "block";
  document.getElementById("codeStep").style.display = "none";

  const modelSearch = document.getElementById("modelSearch");
  if (modelSearch) modelSearch.value = "";

  renderModelCarousel();
}

function backToBrand() {
  document.getElementById("modelStep").style.display = "none";
  document.getElementById("codeStep").style.display = "none";
  document.getElementById("brandStep").style.display = "block";
}

function renderModelCarousel() {
  const brand = activeBrand();
  const models = modelsByBrand[brand] || ["Modelo não cadastrado"];
  const box = document.getElementById("modelCarousel");
  if (!box) return;

  box.innerHTML = models.map((model, index) => `
    <div class="model-card" onclick="selectModelAndOpenCodes(${index})">
      <div class="model-title">${model}</div>
      <div class="model-sub">${brand}</div>
    </div>
  `).join("");

  updateModelCarousel();
  renderModelInfo();
}

function updateModelCarousel() {
  const modelCards = document.querySelectorAll(".model-card");
  if (!modelCards.length) return;

  modelCards.forEach((card, index) => {
    card.className = "model-card";
    const left = (modelCurrent - 1 + modelCards.length) % modelCards.length;
    const right = (modelCurrent + 1) % modelCards.length;

    if (index === modelCurrent) card.classList.add("model-center");
    else if (index === left) card.classList.add("model-left");
    else if (index === right) card.classList.add("model-right");
    else card.classList.add("model-hidden");
  });

  renderModelInfo();
}

function nextModel() {
  const models = modelsByBrand[activeBrand()] || [];
  if (!models.length) return;
  modelCurrent = (modelCurrent + 1) % models.length;
  updateModelCarousel();
}

function prevModel() {
  const models = modelsByBrand[activeBrand()] || [];
  if (!models.length) return;
  modelCurrent = (modelCurrent - 1 + models.length) % models.length;
  updateModelCarousel();
}

function searchModel() {
  const input = document.getElementById("modelSearch");
  if (!input) return;

  const value = normalizeSearchText(input.value);
  const models = modelsByBrand[activeBrand()] || [];

  if (value.length < 1) {
    renderModelInfo();
    return;
  }

  const index = models.findIndex((model) => {
    const cleanModel = normalizeSearchText(model);
    return cleanModel.includes(value) || value.includes(cleanModel);
  });

  if (index >= 0) {
    modelCurrent = index;
    updateModelCarousel();
  } else {
    const modelInfo = document.getElementById("modelInfo");
    if (modelInfo) {
      modelInfo.innerHTML = `
        <h2>Modelo informado</h2>
        <div class="info-row"><span>Marca:</span><br>${activeBrand()}</div>
        <div class="info-row"><span>Modelo/Série digitado:</span><br>${input.value}</div>
      `;
    }
  }
}

function renderModelInfo() {
  const modelInfo = document.getElementById("modelInfo");
  if (!modelInfo) return;

  modelInfo.innerHTML = `
    <h2>${activeBrand()}</h2>
    <div class="info-row"><span>Tipo:</span><br>${activeCategory()}</div>
    <div class="info-row"><span>Modelo/Linha selecionado:</span><br>${activeModel()}</div>
    <div class="info-row"><span>Próximo passo:</span><br>Toque no card do modelo para ver os códigos de erro.</div>
  `;
}

function selectModelAndOpenCodes(index) {
  modelCurrent = index;
  codeCurrent = 0;

  document.getElementById("modelStep").style.display = "none";
  document.getElementById("codeStep").style.display = "block";

  const codeSearch = document.getElementById("codeSearch");
  if (codeSearch) codeSearch.value = "";

  renderCodeCarousel();
}

function backToModel() {
  document.getElementById("codeStep").style.display = "none";
  document.getElementById("modelStep").style.display = "block";
}

function renderCodeCarousel() {
  const codes = getCodes();
  const box = document.getElementById("codeCarousel");
  if (!box) return;

  box.innerHTML = codes.map((item) => `
    <div class="code-card">
      <div class="code-title">${item.code}</div>
      <div class="code-sub">${item.title}</div>
    </div>
  `).join("");

  updateCodeCarousel();
  renderCodeInfo();
}

function updateCodeCarousel() {
  const codeCards = document.querySelectorAll(".code-card");
  if (!codeCards.length) return;

  codeCards.forEach((card, index) => {
    card.className = "code-card";
    const left = (codeCurrent - 1 + codeCards.length) % codeCards.length;
    const right = (codeCurrent + 1) % codeCards.length;

    if (index === codeCurrent) card.classList.add("code-center");
    else if (index === left) card.classList.add("code-left");
    else if (index === right) card.classList.add("code-right");
    else card.classList.add("code-hidden");
  });

  renderCodeInfo();
}

function nextCode() {
  const codes = getCodes();
  if (!codes.length) return;
  codeCurrent = (codeCurrent + 1) % codes.length;
  updateCodeCarousel();
}

function prevCode() {
  const codes = getCodes();
  if (!codes.length) return;
  codeCurrent = (codeCurrent - 1 + codes.length) % codes.length;
  updateCodeCarousel();
}

function searchCode() {
  const input = document.getElementById("codeSearch");
  const codeInfo = document.getElementById("codeInfo");
  if (!input) return;

  const value = normalizeSearchText(input.value);
  const codes = getCodes();

  if (value.length < 1) {
    renderCodeInfo();
    return;
  }

  const index = codes.findIndex((item) => {
    const sourceText = formatSourceLevel(item.sourceLevel);
    const fullText = normalizeSearchText([item.code, item.title, item.cause, item.test, item.solution, item.sourceLevel, sourceText].join(" "));
    const cleanCode = normalizeSearchText(item.code);
    return fullText.includes(value) || value.includes(cleanCode);
  });

  if (index >= 0) {
    codeCurrent = index;
    updateCodeCarousel();
    return;
  }

  if (codeInfo) {
    codeInfo.innerHTML = `
      <h2>Nada encontrado</h2>
      <div class="info-row"><span>Busca:</span><br>${input.value}</div>
      <div class="info-row">Nenhum defeito deste modelo contém esse termo.</div>
      <div class="info-row"><span>Dica:</span><br>Tente buscar por código, sensor, comunicação, compressor, ventilador, baixa carga, alta pressão, dreno ou placa.</div>
    `;
  }
}

function renderCodeInfo() {
  const codeInfo = document.getElementById("codeInfo");
  const codes = getCodes();
  const item = codes[codeCurrent];
  if (!codeInfo || !item) return;

  const sourceText = formatSourceLevel(item.sourceLevel);

  codeInfo.innerHTML = `
    <h2>${item.code} - ${item.title}</h2>
    <div class="info-row"><span>Tipo:</span><br>${activeCategory()}</div>
    <div class="info-row"><span>Marca:</span><br>${activeBrand()}</div>
    <div class="info-row"><span>Modelo/Linha:</span><br>${activeModel()}</div>
    <div class="info-row"><span>Causa provável:</span><br>${item.cause || "-"}</div>
    <div class="info-row"><span>Teste em campo:</span><br>${item.test || "-"}</div>
    <div class="info-row"><span>Solução sugerida:</span><br>${item.solution || "-"}</div>
    <div class="info-row"><span>Fonte/base:</span><br>${sourceText}</div>
  `;
}

/* ACERVO TÉCNICO */

function acervoMatchesSearch(item, searchValue) {
  const rawSearch = normalizeSearchText(searchValue);
  const compactSearch = normalizeAcervoCodeText(searchValue);

  if (compactSearch.length < 2) return false;

  const codigos = Array.isArray(item.codigoBusca) ? item.codigoBusca : [];
  const termos = [item.modelo, ...codigos].filter(Boolean);

  return termos.some((term) => {
    const rawTerm = normalizeSearchText(term);
    const compactTerm = normalizeAcervoCodeText(term);
    if (!compactTerm) return false;

    const rawMatch = rawTerm.includes(rawSearch) || rawSearch.includes(rawTerm);
    const compactMatch = compactTerm.includes(compactSearch) || compactSearch.includes(compactTerm);

    return rawMatch || compactMatch;
  });
}

function renderAcervoIntro() {
  const acervoInfo = document.getElementById("acervoInfo");
  if (!acervoInfo) return;

  acervoInfo.innerHTML = `
    <h2>Acervo Técnico</h2>
    <div class="info-row"><span>Como usar:</span><br>Digite o modelo ou código da etiqueta da evaporadora ou condensadora.</div>
    <div class="info-row"><span>Padrão da ficha:</span><br>O app exibe somente campos com dados técnicos úteis. Campos sem informação útil ficam ocultos.</div>
    <div class="info-row"><span style="color:#38bdf8;font-weight:800;">Azul:</span><br>Dado oficial: fabricante, manual oficial, ficha oficial, INMETRO/ENCE ou etiqueta validada.</div>
    <div class="info-row"><span style="color:#22c55e;font-weight:800;">Verde:</span><br>Dado confiável, mas não oficial direto: distribuidor técnico autorizado ou fonte técnica vinculada.</div>
    <div class="info-row"><span style="color:#ffffff;font-weight:800;">Branco:</span><br>Informação sugerida: internet, usuário ou campo ainda não confirmado. Conferir antes de aplicar em campo.</div>
  `;
}

function searchAcervoTecnico() {
  const input = document.getElementById("acervoSearch");
  const acervoInfo = document.getElementById("acervoInfo");
  if (!input || !acervoInfo) return;

  const value = normalizeSearchText(input.value);

  if (value.length < 2) {
    renderAcervoIntro();
    return;
  }

  const resultados = acervoTecnico.filter((item) => acervoMatchesSearch(item, input.value));

  if (!resultados.length) {
    acervoInfo.innerHTML = `
      <h2>Modelo não cadastrado</h2>
      <div class="info-row"><span>Busca:</span><br>${input.value}</div>
      <div class="info-row">Nenhum modelo/código cadastrado no Acervo Técnico contém esse termo.</div>
      <div class="info-row"><span>Orientação:</span><br>Confira o código na etiqueta da evaporadora ou condensadora e tente novamente.</div>
    `;
    return;
  }

  acervoInfo.innerHTML = resultados.map(renderAcervoItem).join("");
}

function renderAcervoItem(item) {
  const ficha = [
    renderAcervoField("Modelo", item.modelo, item, "modelo"),
    renderAcervoField("Marca", item.marca, item, "marca"),
    renderAcervoField("Linha", item.linha, item, "linha"),
    renderAcervoField("Tipo", item.tipo, item, "tipo"),
    renderAcervoField("Capacidade", item.capacidade, item, "capacidade"),
    renderAcervoField("Tensão", item.tensao, item, "tensao"),
    renderAcervoField("Fluido refrigerante", item.fluidoRefrigerante, item, "fluidoRefrigerante"),
    renderAcervoField("Carga de gás", item.cargaGas, item, "cargaGas"),
    renderAcervoField("Corrente", item.correnteNominal, item, "correnteNominal"),
    renderAcervoField("Disjuntor", item.disjuntor, item, "disjuntor"),
    renderAcervoField("Tubulação líquido / alta", item.tubulacaoAlta, item, "tubulacaoAlta"),
    renderAcervoField("Tubulação sucção / baixa", item.tubulacaoBaixa, item, "tubulacaoBaixa"),
    renderAcervoField("Superaquecimento", item.superaquecimento, item, "superaquecimento"),
    renderAcervoField("Subresfriamento", item.subresfriamento, item, "subresfriamento"),
    renderAcervoField("Comprimento máximo", item.comprimentoMaximo, item, "comprimentoMaximo"),
    renderAcervoField("Desnível máximo", item.desnivelMaximo, item, "desnivelMaximo"),
    renderAcervoField("Carga adicional", item.cargaAdicional, item, "cargaAdicional"),
    renderAcervoManual("Manual de instalação", item.manualInstalacao, "Abrir manual de instalação"),
    renderAcervoManual("Manual técnico/manutenção", item.manualManutencao, "Abrir manual técnico/manutenção"),
    renderAcervoTextField("Fonte", item.fonte)
  ].join("");

  return `
    <h2>${safeValue(item.modelo, "Equipamento")}</h2>
    ${ficha}
    <div class="note">Azul = oficial. Verde = confiável não oficial. Branco = informação sugerida.</div>
  `;
}

/* SWIPE DOS CARROSSÉIS INTERNOS */

function setupSwipe(id, prevFn, nextFn) {
  const element = document.getElementById(id);
  if (!element) return;

  let sx = 0;
  let ex = 0;

  element.addEventListener("touchstart", (event) => {
    sx = event.touches[0].clientX;
  });

  element.addEventListener("touchend", (event) => {
    ex = event.changedTouches[0].clientX;
    const diff = ex - sx;
    if (diff > 45) prevFn();
    if (diff < -45) nextFn();
  });
}

function initApp() {
  cards = document.querySelectorAll(".card");
  current = 0;

  updateCarousel();
  setupMainSwipe();

  setupSwipe("categoryCarousel", prevCategory, nextCategory);
  setupSwipe("brandCarousel", prevBrand, nextBrand);
  setupSwipe("modelCarousel", prevModel, nextModel);
  setupSwipe("codeCarousel", prevCode, nextCode);

  const acervoSearch = document.getElementById("acervoSearch");
  if (acervoSearch) acervoSearch.addEventListener("input", searchAcervoTecnico);

  renderGas("R410A");
  renderCategoryCarousel();
  renderAcervoIntro();
}

window.addEventListener("load", initApp);
