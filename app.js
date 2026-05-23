/* HVAC PRO - app.js */
/* Lógica principal do aplicativo */

/* =========================
   ESTADOS GERAIS
========================= */

let cards = [];
let current = 0;

let catCurrent = 0;
let brandCurrent = 0;
let modelCurrent = 0;
let codeCurrent = 0;

let startX = 0;
let endX = 0;

/* =========================
   HELPERS DE BANCO DE DADOS
========================= */

function getGasDatabase() {
  return typeof gasData !== "undefined" ? gasData : {};
}

function getErrorCategories() {
  return typeof errorCategories !== "undefined" ? errorCategories : [];
}

function getBrandsByCategory() {
  return typeof brandsByCategory !== "undefined" ? brandsByCategory : {};
}

function getModelsByBrand() {
  return typeof modelsByBrand !== "undefined" ? modelsByBrand : {};
}

function getErrorCodesByModel() {
  return typeof errorCodesByModel !== "undefined" ? errorCodesByModel : {};
}

/* =========================
   CARROSSEL PRINCIPAL
========================= */

function updateCarousel() {
  if (!cards || !cards.length) return;

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
  if (!cards.length) return;
  current = (current + 1) % cards.length;
  updateCarousel();
}

function prev() {
  if (!cards.length) return;
  current = (current - 1 + cards.length) % cards.length;
  updateCarousel();
}

function searchHome() {
  const input = document.getElementById("homeSearch");
  if (!input) return;

  const value = input.value.trim().toLowerCase();
  if (value.length < 2) return;

  const map = [
    { keys: ["manifold", "pressao", "pressão"], index: 0 },
    { keys: ["erros", "erro", "defeito", "defeitos"], index: 1 },
    { keys: ["testes", "teste", "multimetro", "multímetro"], index: 2 },
    { keys: ["gases", "gas", "gás", "refrigerante"], index: 3 },
    { keys: ["modelos", "modelo", "equipamento"], index: 4 }
  ];

  const found = map.find((item) =>
    item.keys.some((key) => key.includes(value) || value.includes(key))
  );

  if (found) {
    current = found.index;
    updateCarousel();
  }
}

/* =========================
   TROCA DE TELAS
========================= */

function openScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (!target) return;

  target.classList.add("active");

  if (id === "gases") {
    target.scrollTop = 0;
  }

  if (id === "erros") {
    target.scrollTop = 0;

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
}

/* =========================
   GASES
========================= */

function renderGas(name) {
  const database = getGasDatabase();
  const key = String(name || "").toUpperCase();
  const gas = database[key];

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
    ? gas.pt
        .map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`)
        .join("")
    : "";

  gasInfo.innerHTML = `
    <h2>${gas.nome || "-"}</h2>

    <div class="info-row"><span>Tipo:</span><br>${gas.tipo || "-"}</div>
    <div class="info-row"><span>Composição:</span><br>${gas.composicao || "-"}</div>
    <div class="info-row"><span>Aplicação:</span><br>${gas.aplicacao || "-"}</div>
    <div class="info-row"><span>Óleo:</span><br>${gas.oleo || "-"}</div>
    <div class="info-row"><span>Segurança:</span><br>${gas.seguranca || "-"}</div>
    <div class="info-row"><span>GWP:</span><br>${gas.gwp || "-"}</div>
    <div class="info-row"><span>ODP:</span><br>${gas.odp || "-"}</div>
    <div class="info-row"><span>Ebulição:</span><br>${gas["ebulição"] || "-"}</div>
    <div class="info-row"><span>Crítica:</span><br>${gas.critica || "-"}</div>
    <div class="info-row"><span>Pressão crítica:</span><br>${gas.pressaoCritica || "-"}</div>
    <div class="info-row"><span>Glide:</span><br>${gas.glide || "-"}</div>
    <div class="info-row"><span>Transferência:</span><br>${gas.transferencia || "-"}</div>
    <div class="info-row"><span>Evaporação típica:</span><br>${gas.faixaEvaporacao || "-"}</div>
    <div class="info-row"><span>Condensação típica:</span><br>${gas.faixaCondensacao || "-"}</div>
    <div class="info-row"><span>Campo:</span><br>${gas.campo || "-"}</div>

    <div class="info-row">
      <span>Tabela PT resumida:</span>

      <table class="pt-table">
        <thead>
          <tr>
            <th>Temp.</th>
            <th>Pressão</th>
          </tr>
        </thead>
        <tbody>${ptRows}</tbody>
      </table>

      <div class="note">
        Valores aproximados para referência rápida. Conferir tabela oficial para ajuste fino.
      </div>
    </div>
  `;
}

function selectGas(name, el) {
  document.querySelectorAll(".gas-chip").forEach((chip) => {
    chip.classList.remove("active-gas");
  });

  if (el) el.classList.add("active-gas");

  const gasSearch = document.getElementById("gasSearch");
  if (gasSearch) gasSearch.value = name;

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

/* =========================
   ERROS - ESTADOS ATIVOS
========================= */

function activeCategory() {
  const categories = getErrorCategories();
  return categories[catCurrent] ? categories[catCurrent].name : "";
}

function activeBrand() {
  const brands = getBrandsByCategory()[activeCategory()] || [];
  return brands[brandCurrent] || "";
}

function activeModel() {
  const models = getModelsByBrand()[activeBrand()] || [];
  return models[modelCurrent] || "";
}

function getCodes() {
  const database = getErrorCodesByModel();
  const key = activeBrand() + "|" + activeModel();

  return (
    database[key] || [
      {
        code: "E1",
        title: "Falha genérica",
        cause: "Código ainda não refinado para este modelo.",
        test: "Verificar alimentação, sensores, comunicação e placas.",
        solution: "Cadastrar diagnóstico específico na próxima etapa."
      },
      {
        code: "E3",
        title: "Ventilador / sensor",
        cause: "Possível falha no motor, sensor ou rotação.",
        test: "Verificar motor, capacitor, sensor Hall e placa.",
        solution: "Corrigir componente defeituoso."
      }
    ]
  );
}

/* =========================
   ERROS - TIPO DE EQUIPAMENTO
========================= */

function renderCategoryCarousel() {
  const box = document.getElementById("categoryCarousel");
  const categories = getErrorCategories();

  if (!box) return;

  box.innerHTML = categories
    .map(
      (cat, index) => `
        <div class="category-card" onclick="selectTypeAndOpenBrand(${index})">
          <div class="cat-icon">${cat.icon || ""}</div>
          <div class="cat-title">${cat.name}</div>
        </div>
      `
    )
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
  const categories = getErrorCategories();
  if (!categories.length) return;

  catCurrent = (catCurrent + 1) % categories.length;
  updateCategoryCarousel();
}

function prevCategory() {
  const categories = getErrorCategories();
  if (!categories.length) return;

  catCurrent = (catCurrent - 1 + categories.length) % categories.length;
  updateCategoryCarousel();
}

function searchErrorType() {
  const input = document.getElementById("errorTypeSearch");
  const categories = getErrorCategories();

  if (!input || !categories.length) return;

  const value = input.value.trim().toLowerCase();
  if (value.length < 2) return;

  const index = categories.findIndex((cat) =>
    Array.isArray(cat.search)
      ? cat.search.some((term) => term.includes(value) || value.includes(term))
      : String(cat.name || "").toLowerCase().includes(value)
  );

  if (index >= 0) {
    catCurrent = index;
    updateCategoryCarousel();
  }
}

function selectTypeAndOpenBrand(index) {
  catCurrent = index;
  brandCurrent = 0;

  updateCategoryCarousel();

  const typeStep = document.getElementById("typeStep");
  const brandStep = document.getElementById("brandStep");
  const modelStep = document.getElementById("modelStep");
  const codeStep = document.getElementById("codeStep");

  if (typeStep) typeStep.style.display = "none";
  if (brandStep) brandStep.style.display = "block";
  if (modelStep) modelStep.style.display = "none";
  if (codeStep) codeStep.style.display = "none";

  renderBrandCarousel();
}

function backToType() {
  const typeStep = document.getElementById("typeStep");
  const brandStep = document.getElementById("brandStep");
  const modelStep = document.getElementById("modelStep");
  const codeStep = document.getElementById("codeStep");

  if (brandStep) brandStep.style.display = "none";
  if (modelStep) modelStep.style.display = "none";
  if (codeStep) codeStep.style.display = "none";
  if (typeStep) typeStep.style.display = "block";
}

/* =========================
   ERROS - MARCAS
========================= */

function renderBrandCarousel() {
  const brands = getBrandsByCategory()[activeCategory()] || [];
  const box = document.getElementById("brandCarousel");

  if (!box) return;

  box.innerHTML = brands
    .map(
      (brand, index) => `
        <div class="brand-card" onclick="selectBrandAndOpenModel(${index})">
          <div class="brand-title">${brand}</div>
          <div class="brand-sub">${activeCategory()}</div>
        </div>
      `
    )
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
  const brands = getBrandsByCategory()[activeCategory()] || [];
  if (!brands.length) return;

  brandCurrent = (brandCurrent + 1) % brands.length;
  updateBrandCarousel();
}

function prevBrand() {
  const brands = getBrandsByCategory()[activeCategory()] || [];
  if (!brands.length) return;

  brandCurrent = (brandCurrent - 1 + brands.length) % brands.length;
  updateBrandCarousel();
}

function searchBrand() {
  const input = document.getElementById("brandSearch");
  const brands = getBrandsByCategory()[activeCategory()] || [];

  if (!input || !brands.length) return;

  const value = input.value.trim().toLowerCase();
  if (value.length < 1) return;

  const index = brands.findIndex((brand) => {
    const normalized = brand.toLowerCase();
    return normalized.includes(value) || value.includes(normalized);
  });

  if (index >= 0) {
    brandCurrent = index;
    updateBrandCarousel();
  }
}

function selectBrandAndOpenModel(index) {
  brandCurrent = index;
  modelCurrent = 0;

  const brandStep = document.getElementById("brandStep");
  const modelStep = document.getElementById("modelStep");
  const codeStep = document.getElementById("codeStep");
  const modelSearch = document.getElementById("modelSearch");

  if (brandStep) brandStep.style.display = "none";
  if (modelStep) modelStep.style.display = "block";
  if (codeStep) codeStep.style.display = "none";
  if (modelSearch) modelSearch.value = "";

  renderModelCarousel();
}

function backToBrand() {
  const brandStep = document.getElementById("brandStep");
  const modelStep = document.getElementById("modelStep");
  const codeStep = document.getElementById("codeStep");

  if (modelStep) modelStep.style.display = "none";
  if (codeStep) codeStep.style.display = "none";
  if (brandStep) brandStep.style.display = "block";
}

/* =========================
   ERROS - MODELOS
========================= */

function renderModelCarousel() {
  const brand = activeBrand();
  const models = getModelsByBrand()[brand] || ["Modelo não cadastrado"];
  const box = document.getElementById("modelCarousel");

  if (!box) return;

  box.innerHTML = models
    .map(
      (model, index) => `
        <div class="model-card" onclick="selectModelAndOpenCodes(${index})">
          <div class="model-title">${model}</div>
          <div class="model-sub">${brand}</div>
        </div>
      `
    )
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
  const models = getModelsByBrand()[activeBrand()] || [];
  if (!models.length) return;

  modelCurrent = (modelCurrent + 1) % models.length;
  updateModelCarousel();
}

function prevModel() {
  const models = getModelsByBrand()[activeBrand()] || [];
  if (!models.length) return;

  modelCurrent = (modelCurrent - 1 + models.length) % models.length;
  updateModelCarousel();
}

function searchModel() {
  const input = document.getElementById("modelSearch");
  const modelInfo = document.getElementById("modelInfo");
  const models = getModelsByBrand()[activeBrand()] || [];

  if (!input || !modelInfo) return;

  const value = input.value.trim().toLowerCase();

  if (value.length < 1) {
    renderModelInfo();
    return;
  }

  const index = models.findIndex((model) => {
    const normalized = model.toLowerCase();
    return normalized.includes(value) || value.includes(normalized);
  });

  if (index >= 0) {
    modelCurrent = index;
    updateModelCarousel();
  } else {
    modelInfo.innerHTML = `
      <h2>Modelo informado</h2>
      <div class="info-row"><span>Marca:</span><br>${activeBrand()}</div>
      <div class="info-row"><span>Modelo/Série digitado:</span><br>${input.value}</div>
    `;
  }
}

function renderModelInfo() {
  const modelInfo = document.getElementById("modelInfo");
  if (!modelInfo) return;

  const brand = activeBrand();
  const model = activeModel();

  modelInfo.innerHTML = `
    <h2>${brand || "Marca"}</h2>
    <div class="info-row"><span>Tipo:</span><br>${activeCategory() || "-"}</div>
    <div class="info-row"><span>Modelo/Linha selecionado:</span><br>${model || "-"}</div>
    <div class="info-row"><span>Toque no card do modelo para ver os códigos de erro.</span></div>
  `;
}

function selectModelAndOpenCodes(index) {
  modelCurrent = index;
  codeCurrent = 0;

  const modelStep = document.getElementById("modelStep");
  const codeStep = document.getElementById("codeStep");
  const codeSearch = document.getElementById("codeSearch");

  if (modelStep) modelStep.style.display = "none";
  if (codeStep) codeStep.style.display = "block";
  if (codeSearch) codeSearch.value = "";

  renderCodeCarousel();
}

function backToModel() {
  const modelStep = document.getElementById("modelStep");
  const codeStep = document.getElementById("codeStep");

  if (codeStep) codeStep.style.display = "none";
  if (modelStep) modelStep.style.display = "block";
}

/* =========================
   ERROS - CÓDIGOS
========================= */

function renderCodeCarousel() {
  const codes = getCodes();
  const box = document.getElementById("codeCarousel");

  if (!box) return;

  box.innerHTML = codes
    .map(
      (item) => `
        <div class="code-card">
          <div class="code-title">${item.code}</div>
          <div class="code-sub">${item.title}</div>
        </div>
      `
    )
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
  const codes = getCodes();

  if (!input || !codes.length) return;

  const value = input.value.trim().toLowerCase();

  if (value.length < 1) {
    renderCodeInfo();
    return;
  }

  const index = codes.findIndex((item) => {
    const normalized = item.code.toLowerCase();
    return normalized.includes(value) || value.includes(normalized);
  });

  if (index >= 0) {
    codeCurrent = index;
    updateCodeCarousel();
  }
}

function renderCodeInfo() {
  const codeInfo = document.getElementById("codeInfo");
  const codes = getCodes();
  const item = codes[codeCurrent];

  if (!codeInfo || !item) return;

  codeInfo.innerHTML = `
    <h2>${item.code} - ${item.title}</h2>
    <div class="info-row"><span>Tipo:</span><br>${activeCategory() || "-"}</div>
    <div class="info-row"><span>Marca:</span><br>${activeBrand() || "-"}</div>
    <div class="info-row"><span>Modelo/Linha:</span><br>${activeModel() || "-"}</div>
    <div class="info-row"><span>Causa provável:</span><br>${item.cause}</div>
    <div class="info-row"><span>Teste em campo:</span><br>${item.test}</div>
    <div class="info-row"><span>Solução sugerida:</span><br>${item.solution}</div>
  `;
}

/* =========================
   SWIPE
========================= */

function setupSwipe(id, prevFn, nextFn) {
  const el = document.getElementById(id);
  if (!el) return;

  let sx = 0;
  let ex = 0;

  el.addEventListener("touchstart", (event) => {
    sx = event.touches[0].clientX;
  });

  el.addEventListener("touchend", (event) => {
    ex = event.changedTouches[0].clientX;

    const diff = ex - sx;

    if (diff > 45) prevFn();
    if (diff < -45) nextFn();
  });
}

function setupMainCarouselSwipe() {
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

/* =========================
   INICIALIZAÇÃO
========================= */

function initApp() {
  cards = Array.from(document.querySelectorAll(".card"));

  updateCarousel();
  renderGas("R410A");
  renderCategoryCarousel();

  setupMainCarouselSwipe();

  setupSwipe("categoryCarousel", prevCategory, nextCategory);
  setupSwipe("brandCarousel", prevBrand, nextBrand);
  setupSwipe("modelCarousel", prevModel, nextModel);
  setupSwipe("codeCarousel", prevCode, nextCode);
}

document.addEventListener("DOMContentLoaded", initApp);

/* =========================
   EXPORTAÇÃO GLOBAL
   Necessário porque o HTML usa onclick/oninput
========================= */

window.updateCarousel = updateCarousel;
window.next = next;
window.prev = prev;
window.searchHome = searchHome;
window.openScreen = openScreen;

window.renderGas = renderGas;
window.selectGas = selectGas;
window.searchGas = searchGas;

window.renderCategoryCarousel = renderCategoryCarousel;
window.updateCategoryCarousel = updateCategoryCarousel;
window.nextCategory = nextCategory;
window.prevCategory = prevCategory;
window.searchErrorType = searchErrorType;
window.selectTypeAndOpenBrand = selectTypeAndOpenBrand;
window.backToType = backToType;

window.renderBrandCarousel = renderBrandCarousel;
window.updateBrandCarousel = updateBrandCarousel;
window.nextBrand = nextBrand;
window.prevBrand = prevBrand;
window.searchBrand = searchBrand;
window.selectBrandAndOpenModel = selectBrandAndOpenModel;
window.backToBrand = backToBrand;

window.renderModelCarousel = renderModelCarousel;
window.updateModelCarousel = updateModelCarousel;
window.nextModel = nextModel;
window.prevModel = prevModel;
window.searchModel = searchModel;
window.renderModelInfo = renderModelInfo;
window.selectModelAndOpenCodes = selectModelAndOpenCodes;
window.backToModel = backToModel;

window.renderCodeCarousel = renderCodeCarousel;
window.updateCodeCarousel = updateCodeCarousel;
window.nextCode = nextCode;
window.prevCode = prevCode;
window.searchCode = searchCode;
window.renderCodeInfo = renderCodeInfo;
window.backToModel = backToModel;
