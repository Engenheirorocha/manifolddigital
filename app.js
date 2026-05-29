/* HVAC PRO - app.js
   ARQUIVO COMPLETO ESTÁVEL - v6621

   Correção principal:
   - A etiqueta gerada por máscara agora exibe campos separados:
     Gás provável
     Tensão provável
     Corrente estimada
     Tubulação provável

   Regras:
   - Fabricante selecionado trava a busca.
   - Se LG estiver selecionado, o app não retorna Midea.
   - Primeiro busca código exato no acervo.
   - Se não achar, aplica máscara do fabricante selecionado.
*/

const gasData = window.gasData || {};
const errorCategories = window.errorCategories || [];
const brandsByCategory = window.brandsByCategory || {};
const modelsByBrand = window.modelsByBrand || {};
const errorCodesByModel = window.errorCodesByModel || {};

let cards = [];
let current = 0;
let startX = 0;
let endX = 0;

let catCurrent = 0;
let brandCurrent = 0;
let modelCurrent = 0;
let codeCurrent = 0;

/* =========================================================
   FUNÇÕES GERAIS
========================================================= */

function normalizeSearchText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeAcervoCode(value) {
  return normalizeSearchText(value).replace(/[^a-z0-9]/g, "");
}

function safeValue(value, fallback) {
  return value || fallback || "Não informado";
}

function getAcervoTecnico() {
  if (Array.isArray(window.acervoTecnico)) return window.acervoTecnico;
  return [];
}

function isWeakAcervoValue(value) {
  const text = normalizeSearchText(value);

  if (!text) return true;
  if (text === "-") return true;
  if (text === "nao informado" || text === "não informado") return true;
  if (text.includes("nao informado")) return true;
  if (text.includes("não informado")) return true;
  if (text.includes("validar etiqueta")) return true;
  if (text.includes("validar manual")) return true;
  if (text.includes("confirmar no fabricante")) return true;
  if (text.includes("confirmar no manual")) return true;

  return false;
}

/* =========================================================
   CORES / CONFIANÇA DO ACERVO
========================================================= */

function getAcervoSourceText(item, fieldKey) {
  const fontesCampos = item && item.fontesCampos ? item.fontesCampos : {};
  const confiancaCampos = item && item.confiancaCampos ? item.confiancaCampos : {};

  return normalizeSearchText([
    fontesCampos[fieldKey] || "",
    confiancaCampos[fieldKey] || "",
    item && item.fonteTipo ? item.fonteTipo : "",
    item && item.nivelConfianca ? item.nivelConfianca : "",
    item && item.status ? item.status : "",
    item && item.fonte ? item.fonte : "",
    item && item.observacaoFonte ? item.observacaoFonte : ""
  ].join(" "));
}

function getAcervoColorStyle(item, fieldKey) {
  const source = getAcervoSourceText(item, fieldKey);

  const isSuggested =
    source.includes("informacao_sugerida") ||
    source.includes("informação_sugerida") ||
    source.includes("informacao sugerida") ||
    source.includes("informação sugerida") ||
    source.includes("sugerida") ||
    source.includes("sugerido") ||
    source.includes("sugestao") ||
    source.includes("sugestão") ||
    source.includes("internet") ||
    source.includes("usuario") ||
    source.includes("usuário") ||
    source.includes("relato") ||
    source.includes("campo");

  if (isSuggested) {
    return {
      color: "#94a3b8",
      label: "Sugerido / campo"
    };
  }

  const isTrustedNonOfficial =
    source.includes("confiavel_nao_oficial") ||
    source.includes("confiável_não_oficial") ||
    source.includes("confiavel nao oficial") ||
    source.includes("confiável não oficial") ||
    source.includes("nao_oficial") ||
    source.includes("não_oficial") ||
    source.includes("nao oficial") ||
    source.includes("não oficial") ||
    source.includes("distribuidor") ||
    source.includes("autorizado") ||
    source.includes("catalogo tecnico") ||
    source.includes("catálogo técnico") ||
    source.includes("fonte tecnica") ||
    source.includes("fonte técnica") ||
    source.includes("revenda") ||
    source.includes("pdf tecnico") ||
    source.includes("pdf técnico");

  if (isTrustedNonOfficial) {
    return {
      color: "#94a3b8",
      label: "Confiável / complementar"
    };
  }

  return {
    color: "#94a3b8",
    label: "Oficial"
  };
}

function renderAcervoField(label, value, item, fieldKey) {
  if (isWeakAcervoValue(value)) return "";

  const style = getAcervoColorStyle(item, fieldKey);

  return `
    <div class="info-row">
      <span>${label}:</span><br>
      <strong style="color:#f8fafc !important;">${value}</strong>
      <small style="display:block;opacity:.80;margin-top:4px;color:${style.color};">${style.label}</small>
    </div>
  `;
}

function renderMascaraField(label, value) {
  if (isWeakAcervoValue(value)) return "";

  return `
    <div class="info-row">
      <span>${label}:</span><br>
      <strong style="color:#f8fafc !important;">${value}</strong>
      <small style="display:block;opacity:.72;margin-top:4px;color:#94a3b8;">Leitura por máscara</small>
    </div>
  `;
}

function renderAcervoTextField(label, value) {
  if (isWeakAcervoValue(value)) return "";

  return `
    <div class="info-row">
      <span>${label}:</span><br>
      <strong style="color:#f8fafc !important;">${value}</strong>
    </div>
  `;
}

function renderAcervoManual(label, value, text) {
  if (!value || !String(value).startsWith("http")) return "";

  return `
    <div class="info-row manual-row">
      <span>${label}:</span><br>
      <a href="${value}" target="_blank" rel="noopener">${text}</a>
    </div>
  `;
}

/* =========================================================
   CARROSSEL PRINCIPAL
========================================================= */

function updateCarousel() {
  cards = document.querySelectorAll(".card");
  if (!cards.length) return;

  cards.forEach((card, index) => {
    card.className = "card";

    const left = (current - 1 + cards.length) % cards.length;
    const right = (current + 1) % cards.length;
    const farLeft = (current - 2 + cards.length) % cards.length;
    const farRight = (current + 2) % cards.length;

    if (index === current) {
      card.classList.add("center");
    } else if (index === left) {
      card.classList.add("left");
    } else if (index === right) {
      card.classList.add("right");
    } else if (index === farLeft) {
      card.classList.add("far-left");
    } else if (index === farRight) {
      card.classList.add("far-right");
    } else {
      card.classList.add("hidden");
    }
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
    { keys: ["acervo", "acervo tecnico", "acervo técnico", "manual", "manuais", "manual tecnico", "manual técnico", "consultar equipamento", "condensador", "condensadora"], index: 5 }
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

/* =========================================================
   TELAS
========================================================= */

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

    validarFabricanteAcervo();

    const acervoSearch = document.getElementById("acervoSearch");
    if (acervoSearch && !acervoSearch.value.trim()) {
      renderAcervoIntro();
    }
  }
}

/* =========================================================
   GASES
========================================================= */

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

/* =========================================================
   ÍCONES DO MÓDULO ERROS
========================================================= */

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

/* =========================================================
   ERROS
========================================================= */

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

/* =========================================================
   CONSULTAR EQUIPAMENTO / ACERVO + MÁSCARA
========================================================= */

function getFabricanteSelecionado() {
  const select = document.getElementById("acervoFabricante");
  if (!select) return "";
  return String(select.value || "").trim().toUpperCase();
}

function marcaCombinaComFabricanteSelecionado(marcaItem, fabricanteSelecionado) {
  const marca = normalizeSearchText(marcaItem);
  const fabricante = normalizeSearchText(fabricanteSelecionado);

  if (!fabricante) return false;
  if (!marca) return false;

  const grupos = {
    lg: ["lg"],
    midea: ["midea", "springer", "carrier"],
    gree: ["gree"],
    elgin: ["elgin"],
    samsung: ["samsung"],
    consul: ["consul"],
    electrolux: ["electrolux"],
    daikin: ["daikin"],
    fujitsu: ["fujitsu"],
    komeco: ["komeco"],
    philco: ["philco"],
    agratto: ["agratto"],
    tcl: ["tcl"]
  };

  const lista = grupos[fabricante] || [fabricante];

  return lista.some((nome) => {
    return marca === nome || marca.includes(nome) || nome.includes(marca);
  });
}

function validarFabricanteAcervo() {
  const fabricante = getFabricanteSelecionado();
  const status = document.getElementById("fabricanteStatus");
  const acervoInfo = document.getElementById("acervoInfo");

  if (!status) return;

  if (!fabricante) {
    status.innerHTML = "Selecione um fabricante para aplicar a máscara correta.";
    status.className = "fabricante-status";
    return;
  }

  const mascaras = Array.isArray(window.mascarasFabricantes) ? window.mascarasFabricantes : [];

  const mascaraExiste = mascaras.some((item) => {
    return String(item.fabricante || "").toUpperCase() === fabricante;
  });

  if (mascaraExiste) {
    status.innerHTML = "✅ Fabricante validado: " + fabricante;
    status.className = "fabricante-status fabricante-ok";
  } else {
    status.innerHTML = "⚠ Fabricante selecionado, mas a máscara ainda não está cadastrada.";
    status.className = "fabricante-status fabricante-alerta";
  }

  const input = document.getElementById("acervoSearch");

  if (input && input.value.trim()) {
    searchAcervoTecnico();
  } else if (acervoInfo) {
    renderAcervoIntro();
  }
}

window.validarFabricanteAcervo = validarFabricanteAcervo;

function getAcervoSearchTextParts(item) {
  const codigos = Array.isArray(item && item.codigoBusca) ? item.codigoBusca : [];

  return {
    codigos: codigos.filter(Boolean),
    modelo: item && item.modelo ? item.modelo : "",
    tipoCodigo: item && item.tipoCodigo ? item.tipoCodigo : "",
    marca: item && item.marca ? item.marca : ""
  };
}

function isCondensadoraAcervo(item) {
  const tipoCodigo = normalizeSearchText(item && item.tipoCodigo ? item.tipoCodigo : "condensadora");

  if (!tipoCodigo) return true;

  return (
    tipoCodigo.includes("condensadora") ||
    tipoCodigo.includes("condensador") ||
    tipoCodigo.includes("unidade externa") ||
    tipoCodigo.includes("externa")
  );
}

function getAcervoSearchRank(item, searchValue, fabricanteSelecionado) {
  if (!item) return 99;
  if (!isCondensadoraAcervo(item)) return 99;

  const parts = getAcervoSearchTextParts(item);

  if (!marcaCombinaComFabricanteSelecionado(parts.marca, fabricanteSelecionado)) {
    return 99;
  }

  const rawSearch = normalizeSearchText(searchValue);
  const compactSearch = normalizeAcervoCode(searchValue);

  if (compactSearch.length < 3) return 99;

  const codigos = parts.codigos.map((codigo) => ({
    raw: normalizeSearchText(codigo),
    compact: normalizeAcervoCode(codigo)
  })).filter((codigo) => codigo.compact);

  const modeloRaw = normalizeSearchText(parts.modelo);
  const modeloCompact = normalizeAcervoCode(parts.modelo);

  if (codigos.some((codigo) => codigo.compact === compactSearch || codigo.raw === rawSearch)) {
    return 0;
  }

  if (modeloCompact === compactSearch || modeloRaw === rawSearch) {
    return 1;
  }

  return 99;
}

function getAcervoSearchResults(baseAcervo, searchValue, fabricanteSelecionado) {
  const ranked = baseAcervo
    .map((item, index) => ({
      item,
      index,
      rank: getAcervoSearchRank(item, searchValue, fabricanteSelecionado)
    }))
    .filter((result) => result.rank < 99)
    .sort((a, b) => {
      if (a.rank !== b.rank) return a.rank - b.rank;
      return a.index - b.index;
    });

  if (!ranked.length) return [];

  const bestRank = ranked[0].rank;

  return ranked.filter((result) => result.rank === bestRank).map((result) => result.item);
}

function renderAcervoIntro() {
  const acervoInfo = document.getElementById("acervoInfo");
  if (!acervoInfo) return;

  acervoInfo.innerHTML = `
    <h2>Consultar Equipamento</h2>
    <div class="info-row"><span>Etapa 1:</span><br>Selecione o fabricante do equipamento.</div>
    <div class="info-row"><span>Etapa 2:</span><br>Digite o código exato do condensador conforme a etiqueta da unidade externa.</div>
    <div class="info-row"><span>Máscara:</span><br>O fabricante selecionado limita a leitura ao padrão correto e evita conflito entre marcas.</div>
    <div class="info-row"><span>Versão:</span><br>app.js v6621 — exibe gás, tensão, corrente e tubulação provável.</div>
  `;
}

function searchAcervoTecnico() {
  const input = document.getElementById("acervoSearch");
  const acervoInfo = document.getElementById("acervoInfo");
  if (!input || !acervoInfo) return;

  const rawValue = String(input.value || "").trim();
  const value = normalizeSearchText(rawValue);
  const fabricante = getFabricanteSelecionado();

  if (!fabricante) {
    acervoInfo.innerHTML = `
      <h2>Selecione o fabricante</h2>
      <div class="info-row">Antes de digitar o código, selecione o fabricante para o app aplicar a máscara correta.</div>
    `;
    return;
  }

  if (value.length < 2) {
    renderAcervoIntro();
    return;
  }

  const baseAcervo = getAcervoTecnico();
  const resultados = getAcervoSearchResults(baseAcervo, rawValue, fabricante);

  if (resultados.length) {
    acervoInfo.innerHTML = resultados.map(renderAcervoItem).join("");
    return;
  }

  if (typeof window.interpretarMascaraFabricante === "function") {
    const leitura = window.interpretarMascaraFabricante(fabricante, rawValue);

    if (leitura && leitura.encontrado) {
      acervoInfo.innerHTML = renderMascaraItem(leitura);
      return;
    }

    acervoInfo.innerHTML = `
      <h2>Código não reconhecido pela máscara</h2>
      <div class="info-row"><span>Fabricante selecionado:</span><br><strong style="color:#f8fafc !important;">${fabricante}</strong></div>
      <div class="info-row"><span>Código digitado:</span><br><strong style="color:#f8fafc !important;">${rawValue}</strong></div>
      <div class="info-row"><span>Motivo:</span><br>${leitura && leitura.motivo ? leitura.motivo : "Máscara não encontrou padrão compatível."}</div>
      <div class="info-row"><span>Próximo passo:</span><br>Conferir se o fabricante selecionado está correto ou validar o código na etiqueta/manual.</div>
    `;
    return;
  }

  acervoInfo.innerHTML = `
    <h2>Máscara não carregada</h2>
    <div class="info-row">O arquivo <strong>databases/mascaras_fabricantes.js</strong> não foi carregado.</div>
  `;
}

function renderAcervoItem(item) {
  const ficha = [
    renderAcervoField("Marca", item.marca, item, "marca"),
    renderAcervoField("Modelo", item.modelo, item, "modelo"),
    renderAcervoField("Linha", item.linha, item, "linha"),
    renderAcervoField("Tipo", item.tipo, item, "tipo"),
    renderAcervoField("Capacidade", item.capacidade, item, "capacidade"),
    renderAcervoField("Tensão", item.tensao, item, "tensao"),
    renderAcervoField("Corrente", item.corrente || item.correnteNominal, item, "correnteNominal"),
    renderAcervoField("Gás", item.gas || item.fluidoRefrigerante, item, "fluidoRefrigerante"),
    renderAcervoField("Carga de gás", item.cargaGas, item, "cargaGas"),
    renderAcervoField("Tubulação", item.tubulacao, item, "tubulacao"),
    renderAcervoField("Tubulação líquido / alta", item.tubulacaoAlta, item, "tubulacaoAlta"),
    renderAcervoField("Tubulação sucção / baixa", item.tubulacaoBaixa, item, "tubulacaoBaixa"),
    renderAcervoTextField("Fonte", item.fonte),
    renderAcervoManual("Manual de instalação", item.manualInstalacao, "🔗 Abrir manual de instalação do fabricante")
  ].join("");

  return `
    <h2>${safeValue(item.modelo, "Condensador")}</h2>
    ${ficha}
    <div class="note">Resultado encontrado no acervo técnico do fabricante selecionado. Campos sem informação validada não aparecem.</div>
  `;
}

function renderMascaraItem(leitura) {
  const ficha = [
    renderMascaraField("Fabricante", leitura.fabricante),
    renderMascaraField("Grupo", leitura.grupo),
    renderMascaraField("Código do condensador", leitura.codigo),
    renderMascaraField("Máscara aplicada", leitura.mascaraAplicada),
    renderMascaraField("Tipo de código", leitura.tipoCodigo),
    renderMascaraField("Linha provável", leitura.linhaProvavel),
    renderMascaraField("Tipo provável", leitura.tipoProvavel),
    renderMascaraField("Tecnologia provável", leitura.tecnologiaProvavel),
    renderMascaraField("Capacidade provável", leitura.capacidadeProvavel),
    renderMascaraField("Ciclo provável", leitura.cicloProvavel),
    renderMascaraField("Gás provável", leitura.gasProvavel),
    renderMascaraField("Tensão provável", leitura.tensaoProvavel),
    renderMascaraField("Corrente estimada", leitura.correnteEstimada),
    renderMascaraField("Tubulação provável", leitura.tubulacaoProvavel),
    renderMascaraField("Confiabilidade da máscara", leitura.confiabilidadeMascara),
    renderMascaraField("Origem da leitura", leitura.origemLeitura),
    renderMascaraField("Observação técnica", leitura.observacao)
  ].join("");

  return `
    <h2>Etiqueta gerada por máscara</h2>
    ${ficha}
    <div class="note">Essa leitura é automática por padrão de engenharia do fabricante selecionado. Dados como gás, tensão, corrente e tubulação são prováveis/estimados e devem ser validados na etiqueta ou manual.</div>
  `;
}

/* =========================================================
   SWIPE DOS CARROSSÉIS INTERNOS
========================================================= */

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

/* =========================================================
   INIT
========================================================= */

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
  if (acervoSearch) {
    acervoSearch.addEventListener("input", searchAcervoTecnico);
  }

  const acervoFabricante = document.getElementById("acervoFabricante");
  if (acervoFabricante) {
    acervoFabricante.addEventListener("change", validarFabricanteAcervo);
  }

  renderGas("R410A");
  renderCategoryCarousel();
  validarFabricanteAcervo();
  renderAcervoIntro();
}

window.addEventListener("load", initApp);
