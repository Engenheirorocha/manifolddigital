/* =========================================================
   HVAC PRO - APP.JS COMPLETO
   Versão estável sem fallback genérico
   Pode apagar o app.js atual e colar este inteiro
========================================================= */

/* =========================================================
   ESTADO GLOBAL
========================================================= */

let homeIndex = 0;

let selectedErrorType = null;
let selectedBrand = null;
let selectedModel = null;

let categoryIndex = 0;
let brandIndex = 0;
let modelIndex = 0;
let codeIndex = 0;

let filteredTypes = [];
let filteredBrands = [];
let filteredModels = [];
let filteredCodes = [];

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  corrigirCardsHome();
  updateHomeCarousel();
  initGases();
  initErros();
  validarFabricanteAcervo();

  setTimeout(function () {
    updateHomeCarousel();
  }, 200);
}

/* =========================================================
   TELAS
========================================================= */

window.openScreen = function (screenId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach(function (screen) {
    screen.classList.remove("active");
  });

  const target = document.getElementById(screenId);

  if (target) {
    target.classList.add("active");
    window.scrollTo(0, 0);
  }

  if (screenId === "home") {
    setTimeout(updateHomeCarousel, 100);
  }

  if (screenId === "gases") {
    initGases();
  }

  if (screenId === "erros") {
    initErros();
  }

  if (screenId === "acervo") {
    validarFabricanteAcervo();
  }
};

/* =========================================================
   HOME / CARROSSEL PRINCIPAL
========================================================= */

function corrigirCardsHome() {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  const cards = carousel.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.style.display = "flex";
    card.style.visibility = "visible";
    card.style.opacity = "1";
  });

  const titles = carousel.querySelectorAll(".title");

  titles.forEach(function (title) {
    const texto = normalizarTexto(title.innerText);

    if (texto.includes("MANIFOLD")) {
      const card = title.closest(".card");
      if (card) {
        card.onclick = function () {
          abrirModuloEmDesenvolvimento("MANIFOLD");
        };
      }
    }

    if (texto.includes("TESTES")) {
      const card = title.closest(".card");
      if (card) {
        card.onclick = function () {
          abrirModuloEmDesenvolvimento("TESTES");
        };
      }
    }

    if (texto.includes("MODELOS")) {
      const card = title.closest(".card");
      if (card) {
        card.onclick = function () {
          abrirModuloEmDesenvolvimento("MODELOS");
        };
      }
    }
  });
}

function abrirModuloEmDesenvolvimento(nome) {
  const box = criarAvisoTemporario(
    nome,
    "Este módulo ainda está em preparação. A estrutura já existe, mas vamos ativar essa tela depois sem mexer na base aprovada."
  );

  document.body.appendChild(box);

  setTimeout(function () {
    box.remove();
  }, 2600);
}

function criarAvisoTemporario(titulo, texto) {
  const div = document.createElement("div");

  div.style.position = "fixed";
  div.style.left = "50%";
  div.style.top = "30px";
  div.style.transform = "translateX(-50%)";
  div.style.zIndex = "9999";
  div.style.background = "#08111f";
  div.style.color = "#fff";
  div.style.border = "1px solid rgba(0,157,255,.55)";
  div.style.borderRadius = "16px";
  div.style.boxShadow = "0 0 25px rgba(0,157,255,.35)";
  div.style.padding = "18px 22px";
  div.style.maxWidth = "420px";
  div.style.width = "calc(100% - 40px)";
  div.style.textAlign = "center";
  div.style.fontFamily = "Arial, sans-serif";

  div.innerHTML = `
    <strong style="color:#28bfff;font-size:18px;">${escaparHTML(titulo)}</strong>
    <div style="margin-top:8px;font-size:14px;line-height:1.4;">${escaparHTML(texto)}</div>
  `;

  return div;
}

window.updateHomeCarousel = function () {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll(".card")).filter(function (card) {
    return card.style.display !== "none";
  });

  if (!cards.length) {
    carousel.style.transform = "translateX(0)";
    return;
  }

  if (homeIndex < 0) homeIndex = 0;
  if (homeIndex >= cards.length) homeIndex = cards.length - 1;

  const card = cards[0];
  const cardWidth = card.offsetWidth || 260;
  const gap = obterGap(carousel, 24);
  const move = homeIndex * (cardWidth + gap);

  carousel.style.transition = "transform .35s ease";
  carousel.style.transform = "translateX(-" + move + "px)";
};

window.next = function () {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll(".card")).filter(function (card) {
    return card.style.display !== "none";
  });

  if (!cards.length) return;

  homeIndex++;

  if (homeIndex >= cards.length) {
    homeIndex = 0;
  }

  updateHomeCarousel();
};

window.prev = function () {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll(".card")).filter(function (card) {
    return card.style.display !== "none";
  });

  if (!cards.length) return;

  homeIndex--;

  if (homeIndex < 0) {
    homeIndex = cards.length - 1;
  }

  updateHomeCarousel();
};

window.searchHome = function () {
  const input = document.getElementById("homeSearch");
  const carousel = document.getElementById("carousel");

  if (!input || !carousel) return;

  const termo = normalizarTexto(input.value);
  const cards = carousel.querySelectorAll(".card");

  if (!termo) {
    cards.forEach(function (card) {
      card.style.display = "flex";
      card.style.visibility = "visible";
      card.style.opacity = "1";
    });

    homeIndex = 0;
    updateHomeCarousel();
    return;
  }

  let encontrou = false;

  cards.forEach(function (card) {
    const texto = normalizarTexto(card.innerText);

    if (texto.includes(termo)) {
      card.style.display = "flex";
      card.style.visibility = "visible";
      card.style.opacity = "1";
      encontrou = true;
    } else {
      card.style.display = "none";
    }
  });

  homeIndex = 0;
  updateHomeCarousel();

  if (!encontrou) {
    carousel.style.transform = "translateX(0)";
  }
};

/* =========================================================
   GASES
========================================================= */

function initGases() {
  const info = document.getElementById("gasInfo");
  if (!info) return;

  if (!info.innerHTML.trim()) {
    mostrarGas("R410A");
  }
}

window.selectGas = function (gas, elemento) {
  const chips = document.querySelectorAll(".gas-chip");

  chips.forEach(function (chip) {
    chip.classList.remove("active-gas");
  });

  if (elemento) {
    elemento.classList.add("active-gas");
  }

  mostrarGas(gas);
};

window.searchGas = function () {
  const input = document.getElementById("gasSearch");
  if (!input) return;

  const termo = normalizarTexto(input.value);

  if (!termo) {
    mostrarGas("R410A");
    return;
  }

  const gases = obterBaseGases();
  const gasEncontrado = gases.find(function (item) {
    const nome = normalizarTexto(item.nome || item.gas || item.codigo || "");
    return nome.includes(termo);
  });

  if (gasEncontrado) {
    renderGasInfo(gasEncontrado);
    return;
  }

  const gasPadrao = criarGasPadrao(input.value);

  renderGasInfo(gasPadrao, true);
};

function mostrarGas(gas) {
  const gases = obterBaseGases();

  const encontrado = gases.find(function (item) {
    const nome = normalizarTexto(item.nome || item.gas || item.codigo || "");
    return nome === normalizarTexto(gas);
  });

  if (encontrado) {
    renderGasInfo(encontrado);
    return;
  }

  renderGasInfo(criarGasPadrao(gas), true);
}

function obterBaseGases() {
  const base =
    window.GASES ||
    window.gases ||
    window.gasesData ||
    window.BASE_GASES ||
    [];

  if (Array.isArray(base) && base.length) {
    return base;
  }

  return [
    {
      nome: "R410A",
      tipo: "HFC",
      uso: "Split residencial e comercial leve",
      inflamabilidade: "A1",
      observacao: "Muito comum em splits inverter e convencionais mais recentes."
    },
    {
      nome: "R22",
      tipo: "HCFC",
      uso: "Equipamentos antigos",
      inflamabilidade: "A1",
      observacao: "Fluido antigo, com restrições ambientais. Muito encontrado em máquinas mais velhas."
    },
    {
      nome: "R32",
      tipo: "HFC",
      uso: "Splits modernos",
      inflamabilidade: "A2L",
      observacao: "Levemente inflamável. Exige atenção técnica e boas práticas."
    },
    {
      nome: "R134A",
      tipo: "HFC",
      uso: "Refrigeração leve e automotiva",
      inflamabilidade: "A1",
      observacao: "Muito usado em aplicações de média temperatura."
    },
    {
      nome: "R404A",
      tipo: "HFC",
      uso: "Refrigeração comercial",
      inflamabilidade: "A1",
      observacao: "Comum em freezer, balcões e câmaras antigas."
    },
    {
      nome: "R600A",
      tipo: "HC",
      uso: "Refrigeradores domésticos",
      inflamabilidade: "A3",
      observacao: "Isobutano. Inflamável. Usar carga correta e cuidado em solda/manutenção."
    },
    {
      nome: "R290",
      tipo: "HC",
      uso: "Refrigeração comercial moderna",
      inflamabilidade: "A3",
      observacao: "Propano. Inflamável. Exige procedimento técnico seguro."
    }
  ];
}

function criarGasPadrao(nome) {
  return {
    nome: nome,
    tipo: "",
    uso: "",
    inflamabilidade: "",
    observacao: "Gás ainda não cadastrado na base local."
  };
}

function renderGasInfo(gas, naoEncontrado) {
  const box = document.getElementById("gasInfo");
  if (!box) return;

  const campos = [];

  addCampo(campos, "GÁS", gas.nome || gas.gas || gas.codigo);
  addCampo(campos, "TIPO", gas.tipo);
  addCampo(campos, "USO", gas.uso || gas.aplicacao);
  addCampo(campos, "INFLAMABILIDADE", gas.inflamabilidade || gas.classe);
  addCampo(campos, "PRESSÃO BAIXA", gas.baixa || gas.pressaoBaixa);
  addCampo(campos, "PRESSÃO ALTA", gas.alta || gas.pressaoAlta);
  addCampo(campos, "OBSERVAÇÃO", gas.observacao || gas.obs);

  box.innerHTML = `
    <h2>${naoEncontrado ? "Gás não encontrado" : "Informações do Gás"}</h2>
    ${naoEncontrado ? '<div class="confidence danger">⚠️ Sem cadastro completo</div>' : '<div class="confidence official">🟢 Informação local disponível</div>'}
    ${campos.join("")}
  `;
}

/* =========================================================
   ERROS - BASE E FLUXO
========================================================= */

function initErros() {
  filteredTypes = obterTiposErro();
  renderTiposErro();
}

function obterBaseErros() {
  const base =
    window.ERROS ||
    window.erros ||
    window.errosData ||
    window.BASE_ERROS ||
    [];

  if (Array.isArray(base) && base.length) {
    return base;
  }

  return [
    {
      tipo: "Split",
      marca: "Midea / Carrier / Springer",
      modelo: "Split Inverter",
      codigo: "E1",
      defeito: "Erro de comunicação entre unidade interna e externa.",
      causa: "Fiação, bornes, placa interna, placa externa ou falha de comunicação.",
      solucao: "Verificar alimentação, cabo de comunicação, bornes, aterramento e placas."
    },
    {
      tipo: "Split",
      marca: "LG",
      modelo: "Dual Inverter",
      codigo: "CH05",
      defeito: "Falha de comunicação entre evaporadora e condensadora.",
      causa: "Cabo de comunicação, alimentação, placa ou mau contato.",
      solucao: "Verificar interligação, tensão, aterramento e conectores."
    },
    {
      tipo: "Split",
      marca: "Samsung",
      modelo: "WindFree / Digital Inverter",
      codigo: "E101",
      defeito: "Erro de comunicação.",
      causa: "Falha de comunicação entre placas.",
      solucao: "Conferir cabo de comunicação e alimentação das unidades."
    }
  ];
}

function obterTiposErro() {
  const base = obterBaseErros();
  const mapa = {};

  base.forEach(function (item) {
    const tipo = item.tipo || item.equipamento || "Outros";
    mapa[tipo] = true;
  });

  return Object.keys(mapa);
}

function obterMarcasPorTipo(tipo) {
  const base = obterBaseErros();
  const mapa = {};

  base.forEach(function (item) {
    if (normalizarTexto(item.tipo || item.equipamento || "Outros") === normalizarTexto(tipo)) {
      const marca = item.marca || item.fabricante || "Outros";
      mapa[marca] = true;
    }
  });

  return Object.keys(mapa);
}

function obterModelosPorMarca(tipo, marca) {
  const base = obterBaseErros();
  const mapa = {};

  base.forEach(function (item) {
    const itemTipo = normalizarTexto(item.tipo || item.equipamento || "Outros");
    const itemMarca = normalizarTexto(item.marca || item.fabricante || "Outros");

    if (itemTipo === normalizarTexto(tipo) && itemMarca === normalizarTexto(marca)) {
      const modelo = item.modelo || item.linha || "Linha geral";
      mapa[modelo] = true;
    }
  });

  return Object.keys(mapa);
}

function obterCodigosPorModelo(tipo, marca, modelo) {
  const base = obterBaseErros();

  return base.filter(function (item) {
    const itemTipo = normalizarTexto(item.tipo || item.equipamento || "Outros");
    const itemMarca = normalizarTexto(item.marca || item.fabricante || "Outros");
    const itemModelo = normalizarTexto(item.modelo || item.linha || "Linha geral");

    return (
      itemTipo === normalizarTexto(tipo) &&
      itemMarca === normalizarTexto(marca) &&
      itemModelo === normalizarTexto(modelo)
    );
  });
}

/* =========================================================
   ERROS - TIPO
========================================================= */

window.searchErrorType = function () {
  const input = document.getElementById("errorTypeSearch");
  const termo = input ? normalizarTexto(input.value) : "";

  const tipos = obterTiposErro();

  if (!termo) {
    filteredTypes = tipos;
  } else {
    filteredTypes = tipos.filter(function (tipo) {
      return normalizarTexto(tipo).includes(termo);
    });
  }

  categoryIndex = 0;
  renderTiposErro();
};

function renderTiposErro() {
  const carousel = document.getElementById("categoryCarousel");
  if (!carousel) return;

  if (!filteredTypes.length) {
    carousel.innerHTML = cardMiniVazio("Nenhum tipo encontrado");
    return;
  }

  carousel.innerHTML = filteredTypes.map(function (tipo) {
    return `
      <div class="error-category-card" onclick="selecionarTipoErro('${encodeJS(tipo)}')">
        <div class="icon orange">❄️</div>
        <div class="title blue">${escaparHTML(tipo)}</div>
      </div>
    `;
  }).join("");

  updateCategoryCarousel();
}

window.selecionarTipoErro = function (tipo) {
  selectedErrorType = tipo;
  selectedBrand = null;
  selectedModel = null;

  filteredBrands = obterMarcasPorTipo(tipo);

  document.getElementById("typeStep").style.display = "none";
  document.getElementById("brandStep").style.display = "block";
  document.getElementById("modelStep").style.display = "none";
  document.getElementById("codeStep").style.display = "none";

  brandIndex = 0;
  renderMarcas();
};

window.prevCategory = function () {
  if (!filteredTypes.length) return;

  categoryIndex--;

  if (categoryIndex < 0) {
    categoryIndex = filteredTypes.length - 1;
  }

  updateCategoryCarousel();
};

window.nextCategory = function () {
  if (!filteredTypes.length) return;

  categoryIndex++;

  if (categoryIndex >= filteredTypes.length) {
    categoryIndex = 0;
  }

  updateCategoryCarousel();
};

function updateCategoryCarousel() {
  const carousel = document.getElementById("categoryCarousel");
  if (!carousel) return;

  moverCarouselGenerico(carousel, categoryIndex);
}

/* =========================================================
   ERROS - MARCAS
========================================================= */

window.searchBrand = function () {
  const input = document.getElementById("brandSearch");
  const termo = input ? normalizarTexto(input.value) : "";

  const marcas = obterMarcasPorTipo(selectedErrorType);

  if (!termo) {
    filteredBrands = marcas;
  } else {
    filteredBrands = marcas.filter(function (marca) {
      return normalizarTexto(marca).includes(termo);
    });
  }

  brandIndex = 0;
  renderMarcas();
};

function renderMarcas() {
  const carousel = document.getElementById("brandCarousel");
  if (!carousel) return;

  if (!filteredBrands.length) {
    carousel.innerHTML = cardMiniVazio("Nenhuma marca encontrada");
    return;
  }

  carousel.innerHTML = filteredBrands.map(function (marca) {
    return `
      <div class="brand-category-card" onclick="selecionarMarcaErro('${encodeJS(marca)}')">
        <div class="icon red">⚠️</div>
        <div class="title blue">${escaparHTML(marca)}</div>
      </div>
    `;
  }).join("");

  updateBrandCarousel();
}

window.selecionarMarcaErro = function (marca) {
  selectedBrand = marca;
  selectedModel = null;

  filteredModels = obterModelosPorMarca(selectedErrorType, selectedBrand);

  document.getElementById("typeStep").style.display = "none";
  document.getElementById("brandStep").style.display = "none";
  document.getElementById("modelStep").style.display = "block";
  document.getElementById("codeStep").style.display = "none";

  modelIndex = 0;
  renderModelos();
};

window.prevBrand = function () {
  if (!filteredBrands.length) return;

  brandIndex--;

  if (brandIndex < 0) {
    brandIndex = filteredBrands.length - 1;
  }

  updateBrandCarousel();
};

window.nextBrand = function () {
  if (!filteredBrands.length) return;

  brandIndex++;

  if (brandIndex >= filteredBrands.length) {
    brandIndex = 0;
  }

  updateBrandCarousel();
};

function updateBrandCarousel() {
  const carousel = document.getElementById("brandCarousel");
  if (!carousel) return;

  moverCarouselGenerico(carousel, brandIndex);
}

window.backToType = function () {
  document.getElementById("typeStep").style.display = "block";
  document.getElementById("brandStep").style.display = "none";
  document.getElementById("modelStep").style.display = "none";
  document.getElementById("codeStep").style.display = "none";
};

/* =========================================================
   ERROS - MODELOS
========================================================= */

window.searchModel = function () {
  const input = document.getElementById("modelSearch");
  const termo = input ? normalizarTexto(input.value) : "";

  const modelos = obterModelosPorMarca(selectedErrorType, selectedBrand);

  if (!termo) {
    filteredModels = modelos;
  } else {
    filteredModels = modelos.filter(function (modelo) {
      return normalizarTexto(modelo).includes(termo);
    });
  }

  modelIndex = 0;
  renderModelos();
};

function renderModelos() {
  const carousel = document.getElementById("modelCarousel");
  const info = document.getElementById("modelInfo");

  if (!carousel) return;

  if (!filteredModels.length) {
    carousel.innerHTML = cardMiniVazio("Nenhum modelo encontrado");
    if (info) info.innerHTML = "";
    return;
  }

  carousel.innerHTML = filteredModels.map(function (modelo) {
    return `
      <div class="model-category-card" onclick="selecionarModeloErro('${encodeJS(modelo)}')">
        <div class="icon blue">📟</div>
        <div class="title blue">${escaparHTML(modelo)}</div>
      </div>
    `;
  }).join("");

  if (info) {
    info.innerHTML = `
      <h2>${escaparHTML(selectedBrand || "")}</h2>
      <div class="info-row">
        <span>Tipo selecionado:</span><br>${escaparHTML(selectedErrorType || "")}
      </div>
      <div class="info-row">
        <span>Escolha uma linha/modelo:</span><br>Depois selecione o código de erro.
      </div>
    `;
  }

  updateModelCarousel();
}

window.selecionarModeloErro = function (modelo) {
  selectedModel = modelo;

  filteredCodes = obterCodigosPorModelo(selectedErrorType, selectedBrand, selectedModel);

  document.getElementById("typeStep").style.display = "none";
  document.getElementById("brandStep").style.display = "none";
  document.getElementById("modelStep").style.display = "none";
  document.getElementById("codeStep").style.display = "block";

  codeIndex = 0;
  renderCodigos();
};

window.prevModel = function () {
  if (!filteredModels.length) return;

  modelIndex--;

  if (modelIndex < 0) {
    modelIndex = filteredModels.length - 1;
  }

  updateModelCarousel();
};

window.nextModel = function () {
  if (!filteredModels.length) return;

  modelIndex++;

  if (modelIndex >= filteredModels.length) {
    modelIndex = 0;
  }

  updateModelCarousel();
};

function updateModelCarousel() {
  const carousel = document.getElementById("modelCarousel");
  if (!carousel) return;

  moverCarouselGenerico(carousel, modelIndex);
}

window.backToBrand = function () {
  document.getElementById("typeStep").style.display = "none";
  document.getElementById("brandStep").style.display = "block";
  document.getElementById("modelStep").style.display = "none";
  document.getElementById("codeStep").style.display = "none";
};

/* =========================================================
   ERROS - CÓDIGOS
========================================================= */

window.searchCode = function () {
  const input = document.getElementById("codeSearch");
  const termo = input ? normalizarTexto(input.value) : "";

  const codigos = obterCodigosPorModelo(selectedErrorType, selectedBrand, selectedModel);

  if (!termo) {
    filteredCodes = codigos;
  } else {
    filteredCodes = codigos.filter(function (item) {
      return normalizarTexto(item.codigo || item.code || "").includes(termo);
    });
  }

  codeIndex = 0;
  renderCodigos();
};

function renderCodigos() {
  const carousel = document.getElementById("codeCarousel");
  const info = document.getElementById("codeInfo");

  if (!carousel) return;

  if (!filteredCodes.length) {
    carousel.innerHTML = cardMiniVazio("Nenhum código encontrado");
    if (info) {
      info.innerHTML = `
        <h2>Sem código cadastrado</h2>
        <div class="confidence danger">⚠️ Sem resultado seguro</div>
        <div class="info-row">Não há código cadastrado para esta combinação.</div>
      `;
    }
    return;
  }

  carousel.innerHTML = filteredCodes.map(function (item, index) {
    return `
      <div class="code-category-card" onclick="selecionarCodigoErro(${index})">
        <div class="icon red">⚠️</div>
        <div class="title red">${escaparHTML(item.codigo || item.code || "")}</div>
      </div>
    `;
  }).join("");

  if (info) {
    renderCodigoInfo(filteredCodes[0]);
  }

  updateCodeCarousel();
}

window.selecionarCodigoErro = function (index) {
  const item = filteredCodes[index];

  if (item) {
    renderCodigoInfo(item);
  }
};

function renderCodigoInfo(item) {
  const info = document.getElementById("codeInfo");
  if (!info) return;

  const campos = [];

  addCampo(campos, "TIPO", item.tipo || item.equipamento);
  addCampo(campos, "MARCA", item.marca || item.fabricante);
  addCampo(campos, "MODELO / LINHA", item.modelo || item.linha);
  addCampo(campos, "CÓDIGO", item.codigo || item.code);
  addCampo(campos, "DEFEITO", item.defeito || item.descricao);
  addCampo(campos, "CAUSA PROVÁVEL", item.causa || item.causaProvavel);
  addCampo(campos, "SOLUÇÃO", item.solucao || item.procedimento);
  addCampo(campos, "OBSERVAÇÃO", item.observacao || item.obs);
  addCampo(campos, "FONTE", item.fonte);

  info.innerHTML = `
    <h2>Diagnóstico do Código</h2>
    <div class="confidence official">🟢 Informação cadastrada na base local</div>
    ${campos.join("")}
  `;
}

window.prevCode = function () {
  if (!filteredCodes.length) return;

  codeIndex--;

  if (codeIndex < 0) {
    codeIndex = filteredCodes.length - 1;
  }

  updateCodeCarousel();
};

window.nextCode = function () {
  if (!filteredCodes.length) return;

  codeIndex++;

  if (codeIndex >= filteredCodes.length) {
    codeIndex = 0;
  }

  updateCodeCarousel();
};

function updateCodeCarousel() {
  const carousel = document.getElementById("codeCarousel");
  if (!carousel) return;

  moverCarouselGenerico(carousel, codeIndex);
}

window.backToModel = function () {
  document.getElementById("typeStep").style.display = "none";
  document.getElementById("brandStep").style.display = "none";
  document.getElementById("modelStep").style.display = "block";
  document.getElementById("codeStep").style.display = "none";
};

/* =========================================================
   CONSULTAR EQUIPAMENTO / ACERVO
   SEM FALLBACK GENÉRICO
========================================================= */

window.validarFabricanteAcervo = function () {
  const select = document.getElementById("acervoFabricante");
  const status = document.getElementById("fabricanteStatus");

  if (!select || !status) return;

  const fabricante = select.value;

  if (!fabricante) {
    status.innerHTML = "Selecione um fabricante para aplicar a máscara correta.";
    status.className = "fabricante-status";
    return;
  }

  status.innerHTML = "Fabricante selecionado: <strong>" + nomeFabricante(fabricante) + "</strong>. A consulta usará somente a máscara deste fabricante.";
  status.className = "fabricante-status ok";

  const input = document.getElementById("acervoSearch");

  if (input && input.value.trim()) {
    searchAcervoTecnico();
  }
};

window.searchAcervoTecnico = function () {
  const fabricante = document.getElementById("acervoFabricante")?.value || "";
  const input = document.getElementById("acervoSearch");
  const box = document.getElementById("acervoInfo");

  if (!box || !input) return;

  const codigoDigitado = input.value.trim();

  if (!fabricante) {
    box.innerHTML = `
      <h2>Selecione o fabricante</h2>
      <div class="info-row">
        Antes de digitar o código, escolha o fabricante. Isso evita leitura errada entre marcas diferentes.
      </div>
    `;
    return;
  }

  if (!codigoDigitado) {
    box.innerHTML = `
      <h2>Consultar Equipamento</h2>
      <div class="info-row">
        <span>Como usar:</span><br>
        Digite o código exato do condensador conforme a etiqueta da unidade externa.
      </div>
      <div class="info-row">
        <span>Fabricante selecionado:</span><br>
        ${escaparHTML(nomeFabricante(fabricante))}
      </div>
      <div class="info-row">
        <span>Regra aplicada:</span><br>
        Sem fallback genérico. O app só consulta acervo exato e máscara do fabricante escolhido.
      </div>
    `;
    return;
  }

  const codigoNormalizado = normalizarCodigo(codigoDigitado);

  const resultadoExato = buscarNoAcervoExato(fabricante, codigoNormalizado);

  if (resultadoExato) {
    box.innerHTML = renderFichaOficial(resultadoExato);
    return;
  }

  const mascara = obterMascaraFabricante(fabricante);

  if (mascara && typeof mascara.interpretar === "function") {
    const leitura = mascara.interpretar(codigoDigitado);

    if (leitura) {
      box.innerHTML = renderFichaMascara(leitura);
      return;
    }
  }

  box.innerHTML = `
    <h2>Código não reconhecido</h2>
    <div class="confidence danger">⚠️ Sem resultado seguro</div>
    <div class="info-row">
      O código <strong>${escaparHTML(codigoDigitado)}</strong> não foi encontrado no acervo técnico e não bateu com a máscara de <strong>${escaparHTML(nomeFabricante(fabricante))}</strong>.
    </div>
    <div class="info-row">
      <span>Decisão técnica:</span><br>
      Nenhum fallback genérico foi aplicado. O app não vai misturar padrão de outro fabricante nem inventar ficha técnica.
    </div>
    <div class="info-row">
      <span>Próximo passo:</span><br>
      Conferir a etiqueta do equipamento, manual oficial ou cadastrar esse modelo no acervo técnico.
    </div>
  `;
};

function obterBaseAcervo() {
  const base =
    window.ACERVO_TECNICO ||
    window.acervoTecnico ||
    window.ACERVO ||
    window.acervo ||
    [];

  if (Array.isArray(base)) return base;

  return [];
}

function buscarNoAcervoExato(fabricante, codigoNormalizado) {
  const base = obterBaseAcervo();

  if (!base.length) return null;

  return base.find(function (item) {
    const fabItem = normalizarCodigo(item.fabricante || item.marca || item.brand || "");
    const codigosPossiveis = [
      item.modelo,
      item.codigo,
      item.condensadora,
      item.codigoCondensadora,
      item.modeloCondensadora,
      item.model
    ].filter(Boolean).map(normalizarCodigo);

    const fabSelecionado = normalizarCodigo(fabricante);

    const fabricanteBate =
      fabItem === fabSelecionado ||
      fabItem.includes(fabSelecionado) ||
      fabSelecionado.includes(fabItem);

    const codigoBate = codigosPossiveis.includes(codigoNormalizado);

    return fabricanteBate && codigoBate;
  }) || null;
}

function obterMascaraFabricante(fabricante) {
  if (!window.MASCARAS_FABRICANTES) return null;

  return window.MASCARAS_FABRICANTES[fabricante] || null;
}

function renderFichaOficial(item) {
  const campos = [];

  addCampo(campos, "MARCA", item.marca || item.fabricante);
  addCampo(campos, "MODELO", item.modelo || item.codigo);
  addCampo(campos, "LINHA", item.linha);
  addCampo(campos, "TIPO", item.tipo);
  addCampo(campos, "CAPACIDADE", item.capacidade);
  addCampo(campos, "TENSÃO", item.tensao);
  addCampo(campos, "CORRENTE", item.corrente);
  addCampo(campos, "GÁS", item.gas);
  addCampo(campos, "CARGA DE GÁS", item.cargaGas || item.carga_gas || item.carga);
  addCampo(campos, "TUBULAÇÃO", item.tubulacao);
  addCampo(campos, "COMPRESSOR", item.compressor);
  addCampo(campos, "SENSOR EVAPORADORA", item.sensorEvaporadora || item.sensor_evaporadora);
  addCampo(campos, "SENSOR CONDENSADORA", item.sensorCondensadora || item.sensor_condensadora);
  addCampo(campos, "CAPACITOR", item.capacitor);
  addCampo(campos, "FONTE", item.fonte);
  addCampo(campos, "CONFIANÇA", "🟢 Informação oficial / cadastrada");

  return `
    <h2>Etiqueta Técnica</h2>
    <div class="confidence official">🟢 Dados encontrados no acervo técnico</div>
    ${campos.join("")}
    ${renderFonteLink(item)}
  `;
}

function renderFichaMascara(info) {
  const campos = [];

  addCampo(campos, "FABRICANTE", info.fabricante);
  addCampo(campos, "CÓDIGO DIGITADO", info.codigoDigitado);
  addCampo(campos, "CÓDIGO NORMALIZADO", info.codigoNormalizado);
  addCampo(campos, "LINHA PROVÁVEL", info.linhaProvavel);
  addCampo(campos, "TIPO PROVÁVEL", info.tipoProvavel);
  addCampo(campos, "CAPACIDADE PROVÁVEL", info.capacidadeProvavel);
  addCampo(campos, "TENSÃO PROVÁVEL", info.tensaoProvavel);
  addCampo(campos, "GÁS PROVÁVEL", info.gasProvavel);
  addCampo(campos, "OBSERVAÇÃO", info.observacao);
  addCampo(campos, "CONFIANÇA", "🟠 Leitura provável por máscara");

  return `
    <h2>Leitura por Máscara</h2>
    <div class="confidence probable">🟠 Resultado provável — validar na etiqueta/manual</div>
    ${campos.join("")}
    <div class="info-row">
      <span>Importante:</span><br>
      Esta leitura não substitui manual oficial, etiqueta da máquina ou documentação do fabricante.
    </div>
  `;
}

/* =========================================================
   FUNÇÕES AUXILIARES DE INTERFACE
========================================================= */

function moverCarouselGenerico(carousel, index) {
  const children = carousel.children;
  if (!children.length) return;

  const card = children[0];
  const largura = card.offsetWidth || 220;
  const gap = obterGap(carousel, 18);
  const move = index * (largura + gap);

  carousel.style.transition = "transform .35s ease";
  carousel.style.transform = "translateX(-" + move + "px)";
}

function obterGap(elemento, padrao) {
  if (!elemento) return padrao;

  const style = window.getComputedStyle(elemento);
  const gap = parseInt(style.gap || style.columnGap || "0", 10);

  if (Number.isFinite(gap) && gap > 0) return gap;

  return padrao;
}

function cardMiniVazio(texto) {
  return `
    <div class="model-info" style="min-width:260px;">
      <h2>Sem resultado</h2>
      <div class="info-row">${escaparHTML(texto)}</div>
    </div>
  `;
}

function addCampo(lista, nome, valor) {
  if (valor === undefined || valor === null) return;

  const texto = String(valor).trim();

  if (!texto) return;
  if (normalizarTexto(texto) === "NAO CONFIRMADO") return;
  if (normalizarTexto(texto) === "NÃO CONFIRMADO") return;
  if (normalizarTexto(texto) === "NAO ENCONTRADO") return;
  if (normalizarTexto(texto) === "NÃO ENCONTRADO") return;
  if (normalizarTexto(texto) === "INDISPONIVEL") return;
  if (normalizarTexto(texto) === "INDISPONÍVEL") return;

  lista.push(`
    <div class="info-row">
      <span>${escaparHTML(nome)}:</span><br>
      ${escaparHTML(texto)}
    </div>
  `);
}

function renderFonteLink(item) {
  const link = item.linkFonte || item.link || item.manual || item.url || item.fonteUrl;

  if (!link) return "";

  return `
    <div class="info-row source-link">
      <span>FONTE / MANUAL:</span><br>
      <a href="${escaparHTML(link)}" target="_blank" rel="noopener noreferrer">
        Abrir fonte técnica
      </a>
    </div>
  `;
}

function nomeFabricante(valor) {
  const nomes = {
    LG: "LG",
    MIDEA: "Midea / Springer / Carrier",
    GREE: "Gree",
    ELGIN: "Elgin",
    SAMSUNG: "Samsung",
    CONSUL: "Consul",
    ELECTROLUX: "Electrolux",
    DAIKIN: "Daikin",
    FUJITSU: "Fujitsu",
    KOMECO: "Komeco",
    PHILCO: "Philco",
    AGRATTO: "Agratto",
    TCL: "TCL"
  };

  return nomes[valor] || valor;
}

function normalizarCodigo(valor) {
  return String(valor || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/[–—]/g, "-");
}

function normalizarTexto(valor) {
  return String(valor || "")
    .trim()
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escaparHTML(valor) {
  return String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function encodeJS(valor) {
  return String(valor)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/"/g, "&quot;");
}

/* =========================================================
   SEGURANÇA EXTRA CONTRA ERROS DE ARQUIVOS EXTERNOS
========================================================= */

window.addEventListener("error", function (event) {
  console.warn("HVAC PRO capturou um erro:", event.message);
});

/* =========================================================
   REAJUSTE RESPONSIVO
========================================================= */

window.addEventListener("resize", function () {
  updateHomeCarousel();
  updateCategoryCarousel();
  updateBrandCarousel();
  updateModelCarousel();
  updateCodeCarousel();
});
