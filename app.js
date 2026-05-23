/* HVAC PRO - app.js */

const cards = document.querySelectorAll(".card");

let current = 0;
let startX = 0;
let endX = 0;

let catCurrent = 0;
let brandCurrent = 0;
let modelCurrent = 0;
let codeCurrent = 0;

const moduleKeywords = [
  {
    id: "manifold",
    keys: ["manifold", "pressao", "pressão", "superaquecimento", "subresfriamento"]
  },
  {
    id: "erros",
    keys: ["erros", "erro", "defeito", "defeitos", "codigo", "código", "falha"]
  },
  {
    id: "testes",
    keys: ["testes", "teste", "multimetro", "multímetro", "compressor", "capacitor", "sensor"]
  },
  {
    id: "gases",
    keys: ["gases", "gas", "gás", "refrigerante", "r410", "r22", "r32", "r404", "r290"]
  },
  {
    id: "modelos",
    keys: ["modelos", "modelo", "equipamento", "marca", "split"]
  }
];

function getGasData() {
  return window.HVAC_GASES || {};
}

function getModelData() {
  return window.HVAC_MODELOS || {
    errorCategories: [],
    brandsByCategory: {},
    modelsByBrand: {}
  };
}

function getErrorData() {
  return window.HVAC_ERROS || {
    errorCodesByModel: {}
  };
}

function getDiagnosticosData() {
  return window.HVAC_DIAGNOSTICOS || {
    testes: {}
  };
}

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/* HOME / CARROSSEL PRINCIPAL */

function updateCarousel() {
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
  current = (current + 1) % cards.length;
  updateCarousel();
}

function prev() {
  current = (current - 1 + cards.length) % cards.length;
  updateCarousel();
}

function cardTap(index) {
  if (index === current) {
    openCurrentModule();
    return;
  }

  current = index;
  updateCarousel();
}

function openCurrentModule() {
  const selectedCard = cards[current];

  if (!selectedCard) return;

  const moduleId = selectedCard.dataset.module;

  if (!moduleId) return;

  openScreen(moduleId);
}

function searchHome() {
  const input = document.getElementById("homeSearch");

  if (!input) return;

  const value = normalizeText(input.value);

  if (value.length < 2) return;

  const found = moduleKeywords.find((item) => {
    return item.keys.some((key) => {
      const cleanKey = normalizeText(key);
      return cleanKey.includes(value) || value.includes(cleanKey);
    });
  });

  if (!found) return;

  const index = moduleKeywords.findIndex((item) => item.id === found.id);

  if (index >= 0) {
    current = index;
    updateCarousel();
  }
}

function homeKey(event) {
  if (event.key === "Enter") {
    openCurrentModule();
  }
}

const mainCarousel = document.getElementById("carousel");

if (mainCarousel) {
  mainCarousel.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
  });

  mainCarousel.addEventListener("touchend", (event) => {
    endX = event.changedTouches[0].clientX;

    const diff = endX - startX;

    if (diff > 45) prev();
    if (diff < -45) next();
  });
}

/* TROCA DE TELAS */

function openScreen(id) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });

  const screen = document.getElementById(id);

  if (!screen) {
    alert("Módulo ainda não encontrado: " + id);
    return;
  }

  screen.classList.add("active");
  screen.scrollTop = 0;

  if (id === "home") {
    updateCarousel();
  }

  if (id === "gases") {
    renderGasList();

    const firstGas = Object.keys(getGasData())[0];

    if (firstGas) {
      renderGas(firstGas);
    }
  }

  if (id === "erros") {
    resetErrorFlow();
    renderCategoryCarousel();
  }

  if (id === "modelos") {
    renderModelosHome();
  }
}

/* GASES */

function renderGasList() {
  const gasList = document.getElementById("gasList");
  const gasData = getGasData();

  if (!gasList) return;

  const keys = Object.keys(gasData);

  if (!keys.length) {
    gasList.innerHTML = `
      <div class="gas-chip active-gas">
        <strong>Base</strong>
        <small>não carregada</small>
      </div>
    `;
    return;
  }

  gasList.innerHTML = keys
    .map((key, index) => {
      const gas = gasData[key];
      const active = index === 0 ? "active-gas" : "";
      const label = gas.nome || key;
      const uso = gas.usoCurto || gas.aplicacaoCurta || "Refrigerante";

      return `
        <button type="button" class="gas-chip ${active}" onclick="selectGas('${key}', this)">
          <strong>${label}</strong>
          <small>${uso}</small>
        </button>
      `;
    })
    .join("");
}

function renderGas(name) {
  const gasData = getGasData();
  const key = String(name || "").toUpperCase();
  const gas = gasData[key];

  const gasInfo = document.getElementById("gasInfo");

  if (!gasInfo) return;

  if (!gas) {
    gasInfo.innerHTML = `
      <h2>Não encontrado</h2>
      <div class="info-row">Digite um gás válido ou aguarde a base ser cadastrada.</div>
    `;
    return;
  }

  const ptRows = Array.isArray(gas.pt)
    ? gas.pt
        .map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`)
        .join("")
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
    <div class="info-row"><span>Ebulição:</span><br>${gas.ebulicao || gas.ebulição || "-"}</div>
    <div class="info-row"><span>Temperatura crítica:</span><br>${gas.critica || "-"}</div>
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
          ? `<table class="pt-table">
              <thead>
                <tr>
                  <th>Temp.</th>
                  <th>Pressão</th>
                </tr>
              </thead>
              <tbody>${ptRows}</tbody>
            </table>`
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

/* ÍCONES DOS TIPOS DE EQUIPAMENTO */

function svgSplit() {
  return `
    <svg viewBox="0 0 100 100" fill="none">
      <rect x="15" y="25" width="70" height="32" rx="8" stroke="#ff3636" stroke-width="6"/>
      <path d="M24 44H76" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/>
      <path d="M34 62C42 68 58 68 66 62" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/>
    </svg>
  `;
}

function svgCassete() {
  return `
    <svg viewBox="0 0 100 100" fill="none">
      <rect x="22" y="18" width="56" height="56" rx="8" stroke="#ff3636" stroke-width="6"/>
      <rect x="36" y="32" width="28" height="28" rx="5" stroke="#ff3636" stroke-width="5"/>
      <path d="M50 20V32M50 60V72M24 46H36M64 46H76" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/>
    </svg>
  `;
}

function svgJanela() {
  return `
    <svg viewBox="0 0 100 100" fill="none">
      <rect x="22" y="20" width="56" height="60" rx="8" stroke="#ff3636" stroke-width="6"/>
      <path d="M30 38H70" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/>
      <path d="M34 52H66M34 63H66" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/>
      <circle cx="67" cy="70" r="4" fill="#ff3636"/>
    </svg>
  `;
}

function svgPisoTeto() {
  return `
    <svg viewBox="0 0 100 100" fill="none">
      <rect x="18" y="24" width="64" height="28" rx="7" stroke="#ff3636" stroke-width="6"/>
      <path d="M28 42H72" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/>
      <path d="M30 58V76M50 58V76M70 58V76" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/>
    </svg>
  `;
}

function getCategoryIcon(iconKey) {
  const icons = {
    split: svgSplit(),
    cassete: svgCassete(),
    janela: svgJanela(),
    pisoTeto: svgPisoTeto()
  };

  return icons[iconKey] || svgSplit();
}

/* ERROS */

function getCategories() {
  return getModelData().errorCategories || [];
}

function getBrandsByCategory() {
  return getModelData().brandsByCategory || {};
}

function getModelsByBrand() {
  return getModelData().modelsByBrand || {};
}

function getErrorCodesByModel() {
  return getErrorData().errorCodesByModel || {};
}

function resetErrorFlow() {
  const typeStep = document.getElementById("typeStep");
  const brandStep = document.getElementById("brandStep");
  const modelStep = document.getElementById("modelStep");
  const codeStep = document.getElementById("codeStep");

  if (typeStep) typeStep.style.display = "block";
  if (brandStep) brandStep.style.display = "none";
  if (modelStep) modelStep.style.display = "none";
  if (codeStep) codeStep.style.display = "none";
}

function activeCategory() {
  const categories = getCategories();
  return categories[catCurrent]?.name || "";
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
  const key = activeBrand() + "|" + activeModel();
  const codes = getErrorCodesByModel()[key];

  if (Array.isArray(codes) && codes.length) {
    return codes;
  }

  return [
    {
      code: "E1",
      title: "Falha genérica",
      cause: "Código ainda não refinado para este modelo.",
      test: "Verificar alimentação, sensores, comunicação, ventilação e placas.",
      solution: "Cadastrar diagnóstico específico na próxima etapa."
    },
    {
      code: "E3",
      title: "Ventilador / sensor",
      cause: "Possível falha no motor, sensor, rotação, capacitor ou placa.",
      test: "Verificar motor, capacitor, sensor Hall, conectores e placa.",
      solution: "Corrigir componente defeituoso conforme medição."
    }
  ];
}

function renderCategoryCarousel() {
  const box = document.getElementById("categoryCarousel");
  const categories = getCategories();

  if (!box) return;

  if (!categories.length) {
    box.innerHTML = `
      <div class="category-card cat-center">
        <div class="cat-title">Base não carregada</div>
      </div>
    `;
    return;
  }

  box.innerHTML = categories
    .map((cat, index) => {
      return `
        <button type="button" class="category-card" onclick="selectTypeAndOpenBrand(${index})">
          <div class="cat-icon">${getCategoryIcon(cat.icon)}</div>
          <div class="cat-title">${cat.name}</div>
        </button>
      `;
    })
    .join("");

  updateCategoryCarousel();
}

function updateCategoryCarousel() {
  const categoryCards = document.querySelectorAll(".category-card");

  if (!categoryCards.length) return;

  categoryCards.forEach((card, index) => {
    card.className = "category-card";

    const left = (catCurrent - 1 + categoryCards.length) % categoryCards.length;
    const right = (catCurrent + 1) % categoryCards.length;

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
  const categories = getCategories();

  if (!categories.length) return;

  catCurrent = (catCurrent + 1) % categories.length;
  updateCategoryCarousel();
}

function prevCategory() {
  const categories = getCategories();

  if (!categories.length) return;

  catCurrent = (catCurrent - 1 + categories.length) % categories.length;
  updateCategoryCarousel();
}

function searchErrorType() {
  const input = document.getElementById("errorTypeSearch");

  if (!input) return;

  const value = normalizeText(input.value);

  if (value.length < 2) return;

  const categories = getCategories();

  const index = categories.findIndex((cat) => {
    const terms = cat.search || [cat.name];

    return terms.some((term) => {
      const cleanTerm = normalizeText(term);
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
  document.getElementById("brandStep").style.display = "none";
  document.getElementById("modelStep").style.display = "none";
  document.getElementById("codeStep").style.display = "none";
  document.getElementById("typeStep").style.display = "block";
}

function renderBrandCarousel() {
  const brands = getBrandsByCategory()[activeCategory()] || [];
  const box = document.getElementById("brandCarousel");

  if (!box) return;

  if (!brands.length) {
    box.innerHTML = `
      <div class="brand-card brand-center">
        <div class="brand-title">Sem marcas</div>
        <div class="brand-sub">Cadastre em modelos.js</div>
      </div>
    `;
    return;
  }

  box.innerHTML = brands
    .map((brand, index) => {
      return `
        <button type="button" class="brand-card" onclick="selectBrandAndOpenModel(${index})">
          <div class="brand-title">${brand}</div>
          <div class="brand-sub">${activeCategory()}</div>
        </button>
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

  if (!input) return;

  const value = normalizeText(input.value);

  if (value.length < 1) return;

  const brands = getBrandsByCategory()[activeCategory()] || [];

  const index = brands.findIndex((brand) => {
    const cleanBrand = normalizeText(brand);
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
  const models = getModelsByBrand()[brand] || [];
  const box = document.getElementById("modelCarousel");

  if (!box) return;

  if (!models.length) {
    box.innerHTML = `
      <div class="model-card model-center">
        <div class="model-title">Sem modelos</div>
        <div class="model-sub">Cadastre em modelos.js</div>
      </div>
    `;

    renderModelInfo();
    return;
  }

  box.innerHTML = models
    .map((model, index) => {
      return `
        <button type="button" class="model-card" onclick="selectModelAndOpenCodes(${index})">
          <div class="model-title">${model}</div>
          <div class="model-sub">${brand}</div>
        </button>
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

  if (!input) return;

  const value = normalizeText(input.value);
  const models = getModelsByBrand()[activeBrand()] || [];

  if (value.length < 1) {
    renderModelInfo();
    return;
  }

  const index = models.findIndex((model) => {
    const cleanModel = normalizeText(model);
    return cleanModel.includes(value) || value.includes(cleanModel);
  });

  if (index >= 0) {
    modelCurrent = index;
    updateModelCarousel();
    return;
  }

  document.getElementById("modelInfo").innerHTML = `
    <h2>Modelo informado</h2>
    <div class="info-row"><span>Marca:</span><br>${activeBrand()}</div>
    <div class="info-row"><span>Modelo/Série digitado:</span><br>${input.value}</div>
    <div class="info-row">Esse modelo ainda não possui códigos específicos cadastrados.</div>
  `;
}

function renderModelInfo() {
  const modelInfo = document.getElementById("modelInfo");

  if (!modelInfo) return;

  modelInfo.innerHTML = `
    <h2>${activeBrand() || "Marca"}</h2>
    <div class="info-row"><span>Tipo:</span><br>${activeCategory() || "-"}</div>
    <div class="info-row"><span>Modelo/Linha selecionado:</span><br>${activeModel() || "-"}</div>
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

  if (!input) return;

  const value = normalizeText(input.value);
  const codes = getCodes();

  if (value.length < 1) {
    renderCodeInfo();
    return;
  }

  const index = codes.findIndex((item) => {
    const cleanCode = normalizeText(item.code);
    return cleanCode.includes(value) || value.includes(cleanCode);
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
    <div class="info-row"><span>Causa provável:</span><br>${item.cause || "-"}</div>
    <div class="info-row"><span>Teste em campo:</span><br>${item.test || "-"}</div>
    <div class="info-row"><span>Solução sugerida:</span><br>${item.solution || "-"}</div>
    ${
      item.alerta
        ? `<div class="info-row"><span>Alerta:</span><br><strong class="status-alert">${item.alerta}</strong></div>`
        : ""
    }
  `;
}

/* TESTES */

function renderTest(testKey, element) {
  document.querySelectorAll(".action-card").forEach((card) => {
    card.classList.remove("active");
  });

  if (element) {
    element.classList.add("active");
  }

  const testResult = document.getElementById("testResult");
  const testes = getDiagnosticosData().testes || {};
  const teste = testes[testKey];

  if (!testResult) return;

  if (!teste) {
    testResult.innerHTML = `
      <h2>Teste não cadastrado</h2>
      <div class="info-row">Esse teste será preenchido na base diagnosticos.js.</div>
    `;
    return;
  }

  const passos = Array.isArray(teste.passos)
    ? teste.passos.map((passo) => `<div class="info-row">${passo}</div>`).join("")
    : "";

  const alertas = Array.isArray(teste.alertas)
    ? teste.alertas.map((alerta) => `<span class="pill">${alerta}</span>`).join("")
    : "";

  testResult.innerHTML = `
    <h2>${teste.titulo}</h2>
    <div class="info-row"><span>Objetivo:</span><br>${teste.objetivo}</div>
    ${passos}
    ${
      alertas
        ? `<div class="pill-list">${alertas}</div>`
        : ""
    }
  `;
}

/* MODELOS */

function renderModelosHome() {
  const modelosResult = document.getElementById("modelosResult");

  if (!modelosResult) return;

  const brandsByCategory = getBrandsByCategory();
  const totalCategorias = Object.keys(brandsByCategory).length;
  const allBrands = new Set();

  Object.values(brandsByCategory).forEach((brands) => {
    brands.forEach((brand) => allBrands.add(brand));
  });

  modelosResult.innerHTML = `
    <h2>Base de modelos</h2>
    <div class="info-row"><span>Categorias cadastradas:</span><br>${totalCategorias}</div>
    <div class="info-row"><span>Marcas cadastradas:</span><br>${allBrands.size}</div>
    <div class="info-row">Digite uma marca ou linha para localizar rapidamente.</div>
  `;
}

function searchModelos() {
  const input = document.getElementById("modelosSearch");
  const modelosResult = document.getElementById("modelosResult");

  if (!input || !modelosResult) return;

  const value = normalizeText(input.value);

  if (value.length < 1) {
    renderModelosHome();
    return;
  }

  const modelsByBrand = getModelsByBrand();
  const foundBrands = [];

  Object.entries(modelsByBrand).forEach(([brand, models]) => {
    const brandMatch = normalizeText(brand).includes(value);
    const modelMatches = models.filter((model) => normalizeText(model).includes(value));

    if (brandMatch || modelMatches.length) {
      foundBrands.push({
        brand,
        models: brandMatch ? models : modelMatches
      });
    }
  });

  if (!foundBrands.length) {
    modelosResult.innerHTML = `
      <h2>Nada encontrado</h2>
      <div class="info-row">Tente buscar por outra marca ou modelo.</div>
    `;
    return;
  }

  modelosResult.innerHTML = `
    <h2>Resultado</h2>
    ${foundBrands
      .map((item) => {
        return `
          <div class="info-row">
            <span>Marca:</span><br>
            <strong>${item.brand}</strong>
            <div class="pill-list">
              ${item.models.map((model) => `<span class="pill">${model}</span>`).join("")}
            </div>
          </div>
        `;
      })
      .join("")}
  `;
}

/* MANIFOLD */

function readNumber(id) {
  const element = document.getElementById(id);
  const value = Number(element?.value);

  return Number.isFinite(value) ? value : null;
}

function calcManifold() {
  const gas = document.getElementById("manifoldGas")?.value || "-";

  const lowPsi = readNumber("lowPsi");
  const highPsi = readNumber("highPsi");
  const suctionTemp = readNumber("suctionTemp");
  const evapSat = readNumber("evapSat");
  const liquidTemp = readNumber("liquidTemp");
  const condSat = readNumber("condSat");

  const manifoldResult = document.getElementById("manifoldResult");

  if (!manifoldResult) return;

  const hasSuperheat = suctionTemp !== null && evapSat !== null;
  const hasSubcooling = liquidTemp !== null && condSat !== null;

  if (!hasSuperheat && !hasSubcooling) {
    manifoldResult.innerHTML = `
      <h2>Dados insuficientes</h2>
      <div class="info-row">Preencha pelo menos temperatura de sucção e temperatura evaporada saturada, ou temperatura de líquido e temperatura condensada saturada.</div>
    `;
    return;
  }

  const superheat = hasSuperheat ? suctionTemp - evapSat : null;
  const subcooling = hasSubcooling ? condSat - liquidTemp : null;

  const superheatStatus =
    superheat === null
      ? "-"
      : superheat < 4
        ? `<span class="status-danger">baixo / risco de retorno de líquido</span>`
        : superheat > 15
          ? `<span class="status-alert">alto / possível falta de fluido, restrição ou baixa carga térmica</span>`
          : `<span class="status-ok">faixa comum de referência</span>`;

  const subcoolingStatus =
    subcooling === null
      ? "-"
      : subcooling < 3
        ? `<span class="status-alert">baixo / possível baixa carga ou flash gas</span>`
        : subcooling > 15
          ? `<span class="status-alert">alto / possível excesso de fluido ou restrição</span>`
          : `<span class="status-ok">faixa comum de referência</span>`;

  manifoldResult.innerHTML = `
    <h2>Resultado rápido</h2>
    <div class="info-row"><span>Gás selecionado:</span><br>${gas}</div>
    <div class="info-row"><span>Pressão baixa:</span><br>${lowPsi !== null ? lowPsi + " psi" : "-"}</div>
    <div class="info-row"><span>Pressão alta:</span><br>${highPsi !== null ? highPsi + " psi" : "-"}</div>
    <div class="info-row"><span>Superaquecimento:</span><br>${superheat !== null ? superheat.toFixed(1) + " °C" : "-"}<br>${superheatStatus}</div>
    <div class="info-row"><span>Subresfriamento:</span><br>${subcooling !== null ? subcooling.toFixed(1) + " °C" : "-"}<br>${subcoolingStatus}</div>
    <div class="note">Interpretação aproximada. A faixa correta muda conforme equipamento, carga térmica, tecnologia, ambiente e manual do fabricante.</div>
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

/* INICIALIZAÇÃO */

function initApp() {
  updateCarousel();
  renderGasList();

  const firstGas = Object.keys(getGasData())[0];

  if (firstGas) {
    renderGas(firstGas);
  }

  renderCategoryCarousel();

  setupSwipe("categoryCarousel", prevCategory, nextCategory);
  setupSwipe("brandCarousel", prevBrand, nextBrand);
  setupSwipe("modelCarousel", prevModel, nextModel);
  setupSwipe("codeCarousel", prevCode, nextCode);
}

document.addEventListener("DOMContentLoaded", initApp);
