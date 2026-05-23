/* HODPRO PORTAL - app.js */

const gasesData = {
  r22: {
    name: "R22",
    category: "HCFC",
    lowPsi: "58 - 75",
    highPsi: "220 - 260",
    superheat: "8 - 12",
    subcooling: "8 - 12",
    status:
      "Muito usado em equipamentos antigos. Atenção: fluido controlado e com restrições ambientais.",
  },
  r410a: {
    name: "R410A",
    category: "HFC",
    lowPsi: "115 - 135",
    highPsi: "360 - 420",
    superheat: "8 - 12",
    subcooling: "8 - 14",
    status:
      "Muito comum em splits modernos. Trabalha com pressões mais altas que o R22.",
  },
  r32: {
    name: "R32",
    category: "HFC",
    lowPsi: "110 - 135",
    highPsi: "340 - 410",
    superheat: "8 - 12",
    subcooling: "8 - 14",
    status:
      "Fluido moderno, mais eficiente e com menor impacto ambiental que o R410A.",
  },
  r134a: {
    name: "R134a",
    category: "HFC",
    lowPsi: "22 - 35",
    highPsi: "140 - 180",
    superheat: "6 - 12",
    subcooling: "6 - 12",
    status:
      "Muito usado em refrigeração, bebedouros, freezers e sistemas automotivos.",
  },
  r404a: {
    name: "R404A",
    category: "HFC",
    lowPsi: "30 - 45",
    highPsi: "220 - 280",
    superheat: "6 - 12",
    subcooling: "8 - 14",
    status:
      "Comum em refrigeração comercial de baixa e média temperatura.",
  },
  r600a: {
    name: "R600a",
    category: "HC",
    lowPsi: "0 - 8",
    highPsi: "70 - 110",
    superheat: "5 - 10",
    subcooling: "5 - 10",
    status:
      "Isobutano. Muito usado em refrigeradores domésticos. Inflamável, exige cuidado técnico.",
  },
  r290: {
    name: "R290",
    category: "HC",
    lowPsi: "20 - 40",
    highPsi: "120 - 180",
    superheat: "5 - 10",
    subcooling: "5 - 10",
    status:
      "Propano refrigerante. Alta eficiência, porém inflamável. Uso exige treinamento adequado.",
  },
};

const categories = ["Todos", "HCFC", "HFC", "HC"];

const brandsData = {
  lg: {
    name: "LG",
    models: [
      "Dual Inverter 9.000 BTU",
      "Dual Inverter 12.000 BTU",
      "Dual Inverter 18.000 BTU",
      "Dual Inverter 24.000 BTU",
    ],
  },
  samsung: {
    name: "Samsung",
    models: [
      "WindFree 9.000 BTU",
      "WindFree 12.000 BTU",
      "Digital Inverter 18.000 BTU",
      "Digital Inverter 24.000 BTU",
    ],
  },
  midea: {
    name: "Midea",
    models: [
      "Springer Midea 9.000 BTU",
      "Springer Midea 12.000 BTU",
      "Xtreme Save 18.000 BTU",
      "Xtreme Save 24.000 BTU",
    ],
  },
  consul: {
    name: "Consul",
    models: [
      "Consul 9.000 BTU",
      "Consul 12.000 BTU",
      "Consul 18.000 BTU",
      "Consul 24.000 BTU",
    ],
  },
};

let currentCategoryIndex = 0;
let currentGasIndex = 0;
let currentBrandIndex = 0;
let currentModelIndex = 0;
let selectedCategory = "Todos";

function getGasData() {
  const values = Object.values(gasesData);

  if (selectedCategory === "Todos") {
    return values;
  }

  return values.filter((gas) => gas.category === selectedCategory);
}

function getBrandData() {
  return Object.values(brandsData);
}

function qs(selector) {
  return document.querySelector(selector);
}

function byId(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const el = byId(id);
  if (el) el.textContent = value;
}

function renderCategoryCarousel() {
  const container = byId("categoryCarousel");
  if (!container) return;

  const category = categories[currentCategoryIndex];
  selectedCategory = category;
  currentGasIndex = 0;

  container.innerHTML = `
    <div class="carousel-card category-card">
      <button class="nav-btn" onclick="prevCategory()">‹</button>

      <div class="carousel-content">
        <span class="label">Categoria</span>
        <h2>${category}</h2>
        <p>Filtre os fluidos refrigerantes por tipo.</p>
      </div>

      <button class="nav-btn" onclick="nextCategory()">›</button>
    </div>
  `;

  renderGasList();
  updateCarousel();
}

function prevCategory() {
  currentCategoryIndex =
    (currentCategoryIndex - 1 + categories.length) % categories.length;
  renderCategoryCarousel();
}

function nextCategory() {
  currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
  renderCategoryCarousel();
}

function renderGasList() {
  const container = byId("gasList");
  if (!container) return;

  const gases = getGasData();

  if (!gases.length) {
    container.innerHTML = `<p>Nenhum fluido encontrado nesta categoria.</p>`;
    return;
  }

  container.innerHTML = gases
    .map(
      (gas, index) => `
      <button 
        class="gas-chip ${index === currentGasIndex ? "active" : ""}" 
        onclick="selectGas(${index})"
      >
        ${gas.name}
      </button>
    `
    )
    .join("");
}

function selectGas(index) {
  currentGasIndex = index;
  updateCarousel();
  renderGasList();
}

function updateCarousel() {
  const gases = getGasData();
  const gas = gases[currentGasIndex];

  const container = byId("gasCarousel");
  if (!container || !gas) return;

  container.innerHTML = `
    <div class="carousel-card gas-card">
      <button class="nav-btn" onclick="prevGas()">‹</button>

      <div class="carousel-content">
        <span class="label">${gas.category}</span>
        <h2>${gas.name}</h2>

        <div class="info-grid">
          <div class="info-row">
            <span>Pressão baixa:</span>
            <strong>${gas.lowPsi !== null ? gas.lowPsi + " PSI" : "-"}</strong>
          </div>

          <div class="info-row">
            <span>Pressão alta:</span>
            <strong>${gas.highPsi !== null ? gas.highPsi + " PSI" : "-"}</strong>
          </div>

          <div class="info-row">
            <span>Superaquecimento:</span>
            <strong>${gas.superheat !== null ? gas.superheat + " °C" : "-"}</strong>
          </div>

          <div class="info-row">
            <span>Subresfriamento:</span>
            <strong>${gas.subcooling !== null ? gas.subcooling + " °C" : "-"}</strong>
          </div>
        </div>

        <div class="note">
          ${gas.status}
        </div>

        <div class="note warning">
          Interpretação aproximada. A faixa correta muda conforme equipamento, carga térmica, tecnologia, ambiente e manual do fabricante.
        </div>
      </div>

      <button class="nav-btn" onclick="nextGas()">›</button>
    </div>
  `;
}

function prevGas() {
  const gases = getGasData();
  currentGasIndex = (currentGasIndex - 1 + gases.length) % gases.length;
  updateCarousel();
  renderGasList();
}

function nextGas() {
  const gases = getGasData();
  currentGasIndex = (currentGasIndex + 1) % gases.length;
  updateCarousel();
  renderGasList();
}

function renderBrandCarousel() {
  const brands = getBrandData();
  const brand = brands[currentBrandIndex];

  const container = byId("brandCarousel");
  if (!container || !brand) return;

  container.innerHTML = `
    <div class="carousel-card brand-card">
      <button class="nav-btn" onclick="prevBrand()">‹</button>

      <div class="carousel-content">
        <span class="label">Marca</span>
        <h2>${brand.name}</h2>
        <p>Modelos populares para consulta rápida.</p>
      </div>

      <button class="nav-btn" onclick="nextBrand()">›</button>
    </div>
  `;

  currentModelIndex = 0;
  renderModelCarousel();
}

function prevBrand() {
  const brands = getBrandData();
  currentBrandIndex = (currentBrandIndex - 1 + brands.length) % brands.length;
  renderBrandCarousel();
}

function nextBrand() {
  const brands = getBrandData();
  currentBrandIndex = (currentBrandIndex + 1) % brands.length;
  renderBrandCarousel();
}

function renderModelCarousel() {
  const brands = getBrandData();
  const brand = brands[currentBrandIndex];

  const container = byId("modelCarousel");
  if (!container || !brand) return;

  const model = brand.models[currentModelIndex];

  container.innerHTML = `
    <div class="carousel-card model-card">
      <button class="nav-btn" onclick="prevModel()">‹</button>

      <div class="carousel-content">
        <span class="label">${brand.name}</span>
        <h2>${model}</h2>
        <p>Consulte sempre etiqueta técnica, manual e placa do equipamento.</p>
      </div>

      <button class="nav-btn" onclick="nextModel()">›</button>
    </div>
  `;
}

function prevModel() {
  const brands = getBrandData();
  const brand = brands[currentBrandIndex];

  currentModelIndex =
    (currentModelIndex - 1 + brand.models.length) % brand.models.length;

  renderModelCarousel();
}

function nextModel() {
  const brands = getBrandData();
  const brand = brands[currentBrandIndex];

  currentModelIndex = (currentModelIndex + 1) % brand.models.length;

  renderModelCarousel();
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

/* BUSCA DE GASES */
function setupSearch() {
  const input = byId("gasSearch");
  const container = byId("gasSearchResults");

  if (!input || !container) return;

  input.addEventListener("input", () => {
    const term = input.value.toLowerCase().trim();

    if (!term) {
      container.innerHTML = "";
      return;
    }

    const results = Object.values(gasesData).filter((gas) =>
      gas.name.toLowerCase().includes(term)
    );

    if (!results.length) {
      container.innerHTML = `<p class="empty">Nenhum fluido encontrado.</p>`;
      return;
    }

    container.innerHTML = results
      .map(
        (gas) => `
        <button class="search-result" onclick="openGasFromSearch('${gas.name}')">
          <strong>${gas.name}</strong>
          <span>${gas.category}</span>
        </button>
      `
      )
      .join("");
  });
}

function openGasFromSearch(gasName) {
  selectedCategory = "Todos";
  currentCategoryIndex = 0;

  const gases = getGasData();
  const index = gases.findIndex((gas) => gas.name === gasName);

  if (index >= 0) {
    currentGasIndex = index;
    renderCategoryCarousel();
    updateCarousel();
    renderGasList();
  }

  const input = byId("gasSearch");
  const container = byId("gasSearchResults");

  if (input) input.value = "";
  if (container) container.innerHTML = "";
}

/* CÁLCULO SIMPLES DE DIAGNÓSTICO */
function diagnoseSystem() {
  const lowPressure = parseFloat(byId("lowPressure")?.value || "");
  const highPressure = parseFloat(byId("highPressure")?.value || "");
  const superheat = parseFloat(byId("superheat")?.value || "");
  const subcooling = parseFloat(byId("subcooling")?.value || "");

  const result = byId("diagnosisResult");
  if (!result) return;

  let messages = [];

  if (!isNaN(lowPressure) && lowPressure < 50) {
    messages.push("Pressão baixa muito reduzida: pode indicar falta de fluido, restrição ou baixa carga térmica.");
  }

  if (!isNaN(highPressure) && highPressure > 420) {
    messages.push("Pressão alta elevada: pode indicar condensador sujo, excesso de fluido ou ventilação ruim.");
  }

  if (!isNaN(superheat) && superheat > 15) {
    messages.push("Superaquecimento alto: pode indicar pouco fluido ou alimentação insuficiente no evaporador.");
  }

  if (!isNaN(superheat) && superheat < 4) {
    messages.push("Superaquecimento baixo: pode indicar excesso de fluido ou retorno de líquido.");
  }

  if (!isNaN(subcooling) && subcooling > 18) {
    messages.push("Subresfriamento alto: pode indicar excesso de fluido ou restrição na linha de líquido.");
  }

  if (!isNaN(subcooling) && subcooling < 4) {
    messages.push("Subresfriamento baixo: pode indicar falta de fluido ou baixa eficiência de condensação.");
  }

  if (!messages.length) {
    messages.push("Os valores informados parecem dentro de uma faixa comum, mas confirme sempre com o manual do fabricante.");
  }

  result.innerHTML = `
    <div class="diagnosis-box">
      <h3>Diagnóstico aproximado</h3>
      ${messages.map((msg) => `<p>${msg}</p>`).join("")}
      <small>
        Esta análise é apenas orientativa. Não substitui medições completas, tabela pressão/temperatura, superaquecimento, subresfriamento e manual técnico.
      </small>
    </div>
  `;
}

/* INICIALIZAÇÃO */
function initApp() {
  renderCategoryCarousel();
  renderGasList();
  updateCarousel();

  renderBrandCarousel();
  renderModelCarousel();

  setupSearch();

  setupSwipe("categoryCarousel", prevCategory, nextCategory);
  setupSwipe("gasCarousel", prevGas, nextGas);
  setupSwipe("brandCarousel", prevBrand, nextBrand);
  setupSwipe("modelCarousel", prevModel, nextModel);

  const diagnosisButton = byId("diagnosisButton");
  if (diagnosisButton) {
    diagnosisButton.addEventListener("click", diagnoseSystem);
  }
}

document.addEventListener("DOMContentLoaded", initApp);
