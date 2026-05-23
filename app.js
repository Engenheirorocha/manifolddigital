/* HVAC PRO - app.js
   Versao com Acervo Tecnico ativo.
   Mantem: Home, carrossel principal, Gases, Erros/Defeitos e busca do Acervo.
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

function safeValue(value, fallback) {
  return value || fallback || "Não informado no manual oficial";
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

  if (id === "home") {
    updateCarousel();
  }

  if (id === "gases") {
    const gases = document.getElementById("gases");
    if (gases) gases.scrollTop = 0;
  }

  if (id === "erros") {
    const erros = document.getElementById("erros");
    if (erros) erros.scrollTop = 0;

    document.getElementById("typeStep").style.display = "block";
    document.getElementById("brandStep").style.display = "none";
    document.getElementById("modelStep").style.display = "none";
    document.getElementById("codeStep").style.display = "none";

    renderCategoryCarousel();
  }

  if (id === "acervo") {
    const acervo = document.getElementById("acervo");
    if (acervo) acervo.scrollTop = 0;

    const acervoSearch = document.getElementById("acervoSearch");
    if (acervoSearch && !acervoSearch.value.trim()) {
      renderAcervoIntro();
    }
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
      ${
        ptRows
          ? `<table class="pt-table"><thead><tr><th>Temp.</th><th>Pressão</th></tr></thead><tbody>${ptRows}</tbody></table>`
          : `<div class="note">Tabela PT ainda não cadastrada para este gás.</div>`
      }
      <div class="note">Valores aproximados para referência rápida. Conferir tabela oficial para ajuste fino.</div>
    </div>
  `;
}

function selectGas(name, element) {
  document.querySelectorAll(".gas-chip").forEach((chip) => {
    chip.classList.remove("active-gas");
  });

  if (element) {
    element.classList.add("active-gas");
  }

  const gasSearch = document.getElementById("gasSearch");
  if (gasSearch) {
    gasSearch.value = name;
  }

  renderGas(name);
}

function searchGas() {
  const input = document.getElementById("gasSearch");
  if (!input) return;

  const value = input.value.trim();
  if (value.length >= 2) {
    renderGas(value);
  }
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

  if (Array.isArray(codes) && codes.length) {
    return codes;
  }

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

  box.innerHTML = errorCategories
    .map((cat, index) => {
      return `
        <div class="category-card" onclick="selectTypeAndOpenBrand(${index})">
          <div class="cat-icon">${cat.icon}</div>
          <div class="cat-title">${cat.name}</div>
        </div>
      `;
    })
    .join("");

  updateCategoryCarousel();
}

function updateCategoryCarousel() {
  const catCards = document.querySelectorAll(".category-card");
  if (!catCards.length) return;

  catCards.forEach((card, index) => {
    card.className = "category-card";

    const left = (catCurrent - 1 + catCards.length) % catCards.length;
    const right = (catCurrent + 1) % catCards.length;

    if (index === catCurrent) {
      card.classList.add("cat-center");
    } else if (index === left) {
      card.classList.add("cat-left");
    } else if (index === right) {
      card.classList.add("cat-right");
    } else {
      card.classList.add("cat-hidden");
    }
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

  box.innerHTML = brands
    .map((brand, index) => {
      return `
        <div class="brand-card" onclick="selectBrandAndOpenModel(${index})">
          <div class="brand-title">${brand}</div>
          <div class="brand-sub">${activeCategory()}</div>
        </div>
      `;
    })
    .join("");

  updateBrandCarousel();
}

function updateBrandCarousel() {
  const brandCards = document.querySelectorAll(".brand-card");
  if (!brandCards.length) return;

  brandCards.forEach((card, index) => {
    card.className = "brand-card";

    const left = (brandCurrent - 1 + brandCards.length) % brandCards.length;
    const right = (brandCurrent + 1) % brandCards.length;

    if (index === brandCurrent) {
      card.classList.add("brand-center");
    } else if (index === left) {
      card.classList.add("brand-left");
    } else if (index === right) {
      card.classList.add("brand-right");
    } else {
      card.classList.add("brand-hidden");
    }
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
  if (modelSearch) {
    modelSearch.value = "";
  }

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

  box.innerHTML = models
    .map((model, index) => {
      return `
        <div class="model-card" onclick="selectModelAndOpenCodes(${index})">
          <div class="model-title">${model}</div>
          <div class="model-sub">${brand}</div>
        </div>
      `;
    })
    .join("");

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

    if (index === modelCurrent) {
      card.classList.add("model-center");
    } else if (index === left) {
      card.classList.add("model-left");
    } else if (index === right) {
      card.classList.add("model-right");
    } else {
      card.classList.add("model-hidden");
    }
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
    document.getElementById("modelInfo").innerHTML = `
      <h2>Modelo informado</h2>
      <div class="info-row"><span>Marca:</span><br>${activeBrand()}</div>
      <div class="info-row"><span>Modelo/Série digitado:</span><br>${input.value}</div>
    `;
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
  if (codeSearch) {
    codeSearch.value = "";
  }

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

  box.innerHTML = codes
    .map((item) => {
      return `
        <div class="code-card">
          <div class="code-title">${item.code}</div>
          <div class="code-sub">${item.title}</div>
        </div>
      `;
    })
    .join("");

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

    if (index === codeCurrent) {
      card.classList.add("code-center");
    } else if (index === left) {
      card.classList.add("code-left");
    } else if (index === right) {
      card.classList.add("code-right");
    } else {
      card.classList.add("code-hidden");
    }
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
    const fullText = normalizeSearchText([
      item.code,
      item.title,
      item.cause,
      item.test,
      item.solution,
      item.sourceLevel,
      sourceText
    ].join(" "));

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

function renderAcervoIntro() {
  const acervoInfo = document.getElementById("acervoInfo");
  if (!acervoInfo) return;

  acervoInfo.innerHTML = `
    <h2>Acervo Técnico</h2>
    <div class="info-row"><span>Como usar:</span><br>Digite o modelo ou código da máquina no campo acima.</div>
    <div class="info-row"><span>Objetivo:</span><br>Organizar dados oficiais de manuais, instalação, manutenção, gás, corrente, tubulação, capacitor, placa eletrônica e observações técnicas por modelo.</div>
    <div class="info-row"><span>Status:</span><br>Busca técnica ativa. Primeiro teste com o modelo de exemplo cadastrado no acervo.</div>
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

  const resultados = acervoTecnico.filter((item) => {
    const codigos = Array.isArray(item.codigoBusca) ? item.codigoBusca.join(" ") : "";

    const texto = normalizeSearchText([
      item.marca,
      item.modelo,
      codigos,
      item.linha,
      item.tipo,
      item.capacidade,
      item.fluidoRefrigerante,
      item.fonte,
      item.status
    ].join(" "));

    return texto.includes(value);
  });

  if (!resultados.length) {
    acervoInfo.innerHTML = `
      <h2>Nada encontrado</h2>
      <div class="info-row"><span>Busca:</span><br>${input.value}</div>
      <div class="info-row">Nenhum modelo cadastrado no Acervo Técnico contém esse termo.</div>
      <div class="info-row"><span>Dica:</span><br>Digite o código exato da etiqueta ou parte do modelo. Exemplo de teste: EXEMPLO.</div>
    `;
    return;
  }

  acervoInfo.innerHTML = resultados.map(renderAcervoItem).join("");
}

function renderAcervoItem(item) {
  const manualInstalacao = item.manualInstalacao && String(item.manualInstalacao).startsWith("http")
    ? `<a href="${item.manualInstalacao}" target="_blank" rel="noopener">Abrir manual de instalação</a>`
    : safeValue(item.manualInstalacao, "Não cadastrado ainda");

  const manualManutencao = item.manualManutencao && String(item.manualManutencao).startsWith("http")
    ? `<a href="${item.manualManutencao}" target="_blank" rel="noopener">Abrir manual de manutenção/técnico</a>`
    : safeValue(item.manualManutencao, "Não cadastrado ainda");

  return `
    <h2>${safeValue(item.marca, "-")} - ${safeValue(item.modelo, "-")}</h2>
    <div class="info-row"><span>Linha:</span><br>${safeValue(item.linha)}</div>
    <div class="info-row"><span>Tipo de equipamento:</span><br>${safeValue(item.tipo)}</div>
    <div class="info-row"><span>Capacidade:</span><br>${safeValue(item.capacidade)}</div>
    <div class="info-row"><span>Ano/faixa de fabricação:</span><br>${safeValue(item.anoFabricacao, "Validar etiqueta/manual")}</div>
    <div class="info-row"><span>Fluido refrigerante:</span><br>${safeValue(item.fluidoRefrigerante, "Validar etiqueta/manual")}</div>
    <div class="info-row"><span>Corrente nominal / trabalho:</span><br>${safeValue(item.correnteNominal)}</div>
    <div class="info-row"><span>Superaquecimento:</span><br>${safeValue(item.superaquecimento, "Validar procedimento técnico do fabricante")}</div>
    <div class="info-row"><span>Subresfriamento:</span><br>${safeValue(item.subresfriamento, "Validar procedimento técnico do fabricante")}</div>
    <div class="info-row"><span>Capacitor:</span><br>${safeValue(item.capacitor)}</div>
    <div class="info-row"><span>Placa eletrônica:</span><br>${safeValue(item.placaEletronica)}</div>
    <div class="info-row"><span>Tubulação líquido / alta:</span><br>${safeValue(item.tubulacaoAlta)}</div>
    <div class="info-row"><span>Tubulação sucção / baixa:</span><br>${safeValue(item.tubulacaoBaixa)}</div>
    <div class="info-row"><span>Manual de instalação:</span><br>${manualInstalacao}</div>
    <div class="info-row"><span>Manual de manutenção/técnico:</span><br>${manualManutencao}</div>
    <div class="info-row"><span>Fonte:</span><br>${safeValue(item.fonte, "Não informado")}</div>
    <div class="info-row"><span>Status:</span><br>${safeValue(item.status, "Não informado")}</div>
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
  if (acervoSearch) {
    acervoSearch.addEventListener("input", searchAcervoTecnico);
  }

  renderGas("R410A");
  renderCategoryCarousel();
  renderAcervoIntro();
}

window.addEventListener("load", init
