/* =========================================================
   HVAC PRO - CONSULTA DE EQUIPAMENTO SEM FALLBACK GENÉRICO
========================================================= */

window.validarFabricanteAcervo = function() {
  const fabricante = document.getElementById("acervoFabricante")?.value || "";
  const status = document.getElementById("fabricanteStatus");

  if (!status) return;

  if (!fabricante) {
    status.innerHTML = "Selecione um fabricante para aplicar a máscara correta.";
    status.className = "fabricante-status";
    return;
  }

  status.innerHTML = "Fabricante selecionado: <strong>" + nomeFabricante(fabricante) + "</strong>. A consulta usará somente a máscara deste fabricante.";
  status.className = "fabricante-status ok";
};

window.searchAcervoTecnico = function() {
  const fabricante = document.getElementById("acervoFabricante")?.value || "";
  const input = document.getElementById("acervoSearch");
  const box = document.getElementById("acervoInfo");

  if (!box || !input) return;

  const codigoDigitado = input.value.trim();

  if (!fabricante) {
    box.innerHTML = cardAviso(
      "Selecione o fabricante",
      "Antes de digitar o código, escolha o fabricante. Isso evita leitura errada entre marcas diferentes."
    );
    return;
  }

  if (!codigoDigitado) {
    box.innerHTML = cardAviso(
      "Digite o código do condensador",
      "Use o código exato da etiqueta da unidade externa."
    );
    return;
  }

  const codigoNormalizado = normalizarBuscaAcervo(codigoDigitado);

  const resultadoExato = buscarNoAcervoExato(fabricante, codigoNormalizado);

  if (resultadoExato) {
    box.innerHTML = renderFichaOficial(resultadoExato);
    return;
  }

  const mascara = window.MASCARAS_FABRICANTES?.[fabricante];

  if (!mascara || typeof mascara.interpretar !== "function") {
    box.innerHTML = cardSemResultado(
      "Sem máscara para este fabricante",
      "Ainda não existe máscara ativa para " + nomeFabricante(fabricante) + ". Nenhuma leitura provável foi feita."
    );
    return;
  }

  const leituraMascara = mascara.interpretar(codigoDigitado);

  if (leituraMascara) {
    box.innerHTML = renderFichaMascara(leituraMascara);
    return;
  }

  box.innerHTML = cardSemResultado(
    "Código não reconhecido",
    "O código <strong>" + escaparHTML(codigoDigitado) + "</strong> não foi encontrado no acervo e também não bateu com a máscara de " + nomeFabricante(fabricante) + ". Nenhum fallback genérico foi aplicado."
  );
};

/* ==========================
   Busca exata no acervo
========================== */

function buscarNoAcervoExato(fabricante, codigoNormalizado) {
  const base = window.ACERVO_TECNICO || window.acervoTecnico || [];

  if (!Array.isArray(base)) return null;

  return base.find(item => {
    const itemFabricante = normalizarBuscaAcervo(item.fabricante || item.marca || "");
    const itemCodigo = normalizarBuscaAcervo(item.modelo || item.codigo || item.condensadora || "");

    return itemFabricante.includes(normalizarBuscaAcervo(fabricante)) &&
           itemCodigo === codigoNormalizado;
  });
}

/* ==========================
   Render oficial
========================== */

function renderFichaOficial(item) {
  const campos = [];

  adicionarCampo(campos, "MARCA", item.marca || item.fabricante);
  adicionarCampo(campos, "MODELO", item.modelo || item.codigo);
  adicionarCampo(campos, "LINHA", item.linha);
  adicionarCampo(campos, "TIPO", item.tipo);
  adicionarCampo(campos, "CAPACIDADE", item.capacidade);
  adicionarCampo(campos, "TENSÃO", item.tensao);
  adicionarCampo(campos, "CORRENTE", item.corrente);
  adicionarCampo(campos, "GÁS", item.gas);
  adicionarCampo(campos, "CARGA DE GÁS", item.cargaGas || item.carga_gas);
  adicionarCampo(campos, "TUBULAÇÃO", item.tubulacao);
  adicionarCampo(campos, "COMPRESSOR", item.compressor);
  adicionarCampo(campos, "SENSOR EVAPORADORA", item.sensorEvaporadora || item.sensor_evaporadora);
  adicionarCampo(campos, "SENSOR CONDENSADORA", item.sensorCondensadora || item.sensor_condensadora);
  adicionarCampo(campos, "CAPACITOR", item.capacitor);
  adicionarCampo(campos, "FONTE", item.fonte);
  adicionarCampo(campos, "CONFIANÇA", "🟢 Informação oficial / cadastrada");

  return `
    <h2>Etiqueta Técnica</h2>
    <div class="confidence official">🟢 Dados encontrados no acervo técnico</div>
    ${campos.join("")}
    ${renderLinkFonte(item)}
  `;
}

/* ==========================
   Render máscara provável
========================== */

function renderFichaMascara(info) {
  const campos = [];

  adicionarCampo(campos, "FABRICANTE", info.fabricante);
  adicionarCampo(campos, "CÓDIGO DIGITADO", info.codigoDigitado);
  adicionarCampo(campos, "CÓDIGO NORMALIZADO", info.codigoNormalizado);
  adicionarCampo(campos, "LINHA PROVÁVEL", info.linhaProvavel);
  adicionarCampo(campos, "TIPO PROVÁVEL", info.tipoProvavel);
  adicionarCampo(campos, "CAPACIDADE PROVÁVEL", info.capacidadeProvavel);
  adicionarCampo(campos, "TENSÃO PROVÁVEL", info.tensaoProvavel);
  adicionarCampo(campos, "OBSERVAÇÃO", info.observacao);
  adicionarCampo(campos, "CONFIANÇA", "🟠 Leitura provável por máscara");

  return `
    <h2>Leitura por Máscara</h2>
    <div class="confidence probable">🟠 Resultado provável — validar na etiqueta/manual</div>
    ${campos.join("")}
  `;
}

/* ==========================
   Cards auxiliares
========================== */

function cardAviso(titulo, texto) {
  return `
    <h2>${titulo}</h2>
    <div class="info-row">
      ${texto}
    </div>
  `;
}

function cardSemResultado(titulo, texto) {
  return `
    <h2>${titulo}</h2>
    <div class="confidence danger">⚠️ Sem resultado seguro</div>
    <div class="info-row">
      ${texto}
    </div>
  `;
}

/* ==========================
   Utilitários
========================== */

function adicionarCampo(lista, nome, valor) {
  if (valor === undefined || valor === null || String(valor).trim() === "") return;

  lista.push(`
    <div class="info-row">
      <span>${nome}:</span><br>
      ${escaparHTML(valor)}
    </div>
  `);
}

function renderLinkFonte(item) {
  const link = item.linkFonte || item.link || item.manual || item.url;

  if (!link) return "";

  return `
    <div class="info-row source-link">
      <span>FONTE OFICIAL:</span><br>
      <a href="${escaparHTML(link)}" target="_blank" rel="noopener noreferrer">
        Abrir manual ou fonte técnica
      </a>
    </div>
  `;
}

function normalizarBuscaAcervo(valor) {
  return String(valor || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/[–—]/g, "-");
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

function escaparHTML(valor) {
  return String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
