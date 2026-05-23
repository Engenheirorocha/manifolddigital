/* HVAC PRO - databases/acervo_tecnico.js
   ACERVO TÉCNICO V4 - 3 NÍVEIS DE CONFIANÇA

   Compatível com: COPIAR_APP_JS_ACERVO_3_CORES

   CORES NO APP:
   - AZUL  = informação oficial
   - VERDE = informação confiável não oficial direta
   - BRANCO = informação sugerida

   REGRAS:
   - Campo sem informação útil fica vazio e o app oculta.
   - Não preencher campo técnico como confirmado sem fonte.
   - Informação sugerida deve ser usada apenas como apoio, não como verdade técnica final.
*/

function normalizarTextoAcervo(valor) {
  return String(valor || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function limparDadoTecnico(valor) {
  let bruto = String(valor || "").trim();
  let texto = normalizarTextoAcervo(bruto);

  if (!texto) return "";
  if (texto === "-" || texto === "nao aplicavel" || texto === "nao se aplica") return "";
  if (texto.includes("nao informado") || texto.includes("não informado")) return "";
  if (texto.includes("validar etiqueta") || texto.includes("validar manual")) return "";
  if (texto.includes("confirmar no manual") || texto.includes("confirmar no fabricante")) return "";

  bruto = bruto
    .replace(/\s*-\s*validar.*$/i, "")
    .replace(/;\s*validar.*$/i, "")
    .replace(/,\s*validar.*$/i, "")
    .replace(/\s+validar\s+.*$/i, "")
    .replace(/\s*-\s*confirmar.*$/i, "")
    .replace(/;\s*confirmar.*$/i, "")
    .replace(/,\s*confirmar.*$/i, "")
    .replace(/\s+confirmar\s+.*$/i, "")
    .trim();

  texto = normalizarTextoAcervo(bruto);
  if (!texto) return "";
  if (texto.includes("validar") || texto.includes("confirmar")) return "";

  return bruto;
}

function fonteCampos(campos, tipo) {
  const obj = {};
  campos.forEach((campo) => obj[campo] = tipo);
  return obj;
}

function confiancaCampos(campos, nivel) {
  const obj = {};
  campos.forEach((campo) => obj[campo] = nivel);
  return obj;
}

function acervoItem(dados) {
  return {
    marca: limparDadoTecnico(dados.marca),
    modelo: limparDadoTecnico(dados.modelo),
    codigoBusca: dados.codigoBusca || [],
    linha: limparDadoTecnico(dados.linha),
    tipo: limparDadoTecnico(dados.tipo),
    capacidade: limparDadoTecnico(dados.capacidade),

    tensao: limparDadoTecnico(dados.tensao),
    fluidoRefrigerante: limparDadoTecnico(dados.fluidoRefrigerante),
    cargaGas: limparDadoTecnico(dados.cargaGas),
    correnteNominal: limparDadoTecnico(dados.correnteNominal),
    disjuntor: limparDadoTecnico(dados.disjuntor),

    tubulacaoAlta: limparDadoTecnico(dados.tubulacaoAlta),
    tubulacaoBaixa: limparDadoTecnico(dados.tubulacaoBaixa),
    comprimentoMaximo: limparDadoTecnico(dados.comprimentoMaximo),
    desnivelMaximo: limparDadoTecnico(dados.desnivelMaximo),
    cargaAdicional: limparDadoTecnico(dados.cargaAdicional),

    superaquecimento: limparDadoTecnico(dados.superaquecimento),
    subresfriamento: limparDadoTecnico(dados.subresfriamento),

    manualInstalacao: dados.manualInstalacao || "",
    manualManutencao: dados.manualManutencao || dados.manualInstalacao || "",

    fonte: limparDadoTecnico(dados.fonte),
    fonteTipo: dados.fonteTipo || "FABRICANTE_OFICIAL",
    nivelConfianca: dados.nivelConfianca || "CONFIRMADO_FONTE_OFICIAL",
    observacaoFonte: dados.observacaoFonte || "",

    fontesCampos: dados.fontesCampos || {},
    confiancaCampos: dados.confiancaCampos || {}
  };
}

const OFICIAL = "FABRICANTE_OFICIAL";
const VERDE = "DISTRIBUIDOR_TECNICO_AUTORIZADO";
const SUGERIDA = "INFORMACAO_SUGERIDA";

const C_OFICIAL = "CONFIRMADO_FONTE_OFICIAL";
const C_VERDE = "FONTE_TECNICA_CONFIAVEL_NAO_OFICIAL";
const C_SUGERIDA = "INFORMACAO_SUGERIDA_NAO_CONFIRMADA";

const camposPrincipais = [
  "modelo", "marca", "linha", "tipo", "capacidade", "tensao", "fluidoRefrigerante",
  "manualInstalacao", "manualManutencao", "fonte"
];

const camposTecnicos = [
  "modelo", "marca", "linha", "tipo", "capacidade", "tensao", "fluidoRefrigerante",
  "cargaGas", "correnteNominal", "disjuntor", "tubulacaoAlta", "tubulacaoBaixa",
  "comprimentoMaximo", "desnivelMaximo", "cargaAdicional",
  "manualInstalacao", "manualManutencao", "fonte"
];

window.acervoTecnico = [

  /* =========================
     MIDEA / SPRINGER - AZUL OFICIAL
     ========================= */

  acervoItem({
    marca: "Midea",
    modelo: "42AGVCI09M5 / 38AGVCI09M5 - Xtreme Save Connect 9.000 BTU Frio",
    codigoBusca: ["42AGVCI09M5", "38AGVCI09M5", "42AGVCI09", "38AGVCI09", "AGVCI09", "XTREME SAVE 9000", "XTREME SAVE 9K"],
    linha: "Xtreme Save Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Midea oficial - página do produto e manual oficial Xtreme Save AI Connect",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(camposPrincipais, OFICIAL),
    confiancaCampos: confiancaCampos(camposPrincipais, C_OFICIAL)
  }),

  acervoItem({
    marca: "Midea",
    modelo: "42AGVCI12M5 / 38AGVCI12M5 - Xtreme Save Connect 12.000 BTU Frio",
    codigoBusca: ["42AGVCI12M5", "38AGVCI12M5", "42AGVCI12", "38AGVCI12", "AGVCI12", "XTREME SAVE 12000", "XTREME SAVE 12K"],
    linha: "Xtreme Save Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Midea oficial - página do produto e manual oficial Xtreme Save AI Connect",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(camposPrincipais, OFICIAL),
    confiancaCampos: confiancaCampos(camposPrincipais, C_OFICIAL)
  }),

  acervoItem({
    marca: "Midea",
    modelo: "42AGVCJ12M5 / 38AGVCJ12M5 - Xtreme Save AI Connect 12.000 BTU",
    codigoBusca: ["42AGVCJ12M5", "38AGVCJ12M5", "42AGVCJ12", "38AGVCJ12", "AGVCJ12", "XTREME SAVE AI CONNECT 12000"],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Midea oficial - manual oficial Xtreme Save AI Connect",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(camposPrincipais, OFICIAL),
    confiancaCampos: confiancaCampos(camposPrincipais, C_OFICIAL)
  }),

  acervoItem({
    marca: "Midea",
    modelo: "42EFV / 38TAV - AI AirVolution",
    codigoBusca: ["42EFV", "38TAV", "42EFV 38TAV", "AI AIRVOLUTION", "MIDEA AIRVOLUTION"],
    linha: "AI AirVolution",
    tipo: "Split Hi Wall",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Manual%20do%20usu%C3%A1rio%20-%20Ar-Condicionado%20Split%20AI%20AirVolution%20Midea.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Manual%20do%20usu%C3%A1rio%20-%20Ar-Condicionado%20Split%20AI%20AirVolution%20Midea.pdf",
    fonte: "Midea oficial - manual oficial AI AirVolution",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "manualInstalacao", "manualManutencao", "fonte"], OFICIAL),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "manualInstalacao", "manualManutencao", "fonte"], C_OFICIAL)
  }),

  /* =========================
     LG - AZUL OFICIAL
     ========================= */

  acervoItem({
    marca: "LG",
    modelo: "S4-Q12JA315 - Dual Inverter Voice 12.000 BTU Frio 220V",
    codigoBusca: ["S4-Q12JA315", "S4Q12JA315", "LG S4-Q12JA315", "DUAL INVERTER VOICE 12000 220V"],
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V / 60Hz",
    fluidoRefrigerante: "R410A",
    manualInstalacao: "https://www.lg.com/br/ar-condicionado-residencial/dual-inverter-split/s4-q12ja315/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "LG oficial - página do produto S4-Q12JA315 e central de manuais LG",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(camposPrincipais, OFICIAL),
    confiancaCampos: confiancaCampos(camposPrincipais, C_OFICIAL)
  }),

  acervoItem({
    marca: "LG",
    modelo: "S4-Q12JA31G - Dual Inverter Voice 12.000 BTU Frio 127V",
    codigoBusca: ["S4-Q12JA31G", "S4Q12JA31G", "LG S4-Q12JA31G", "DUAL INVERTER VOICE 12000 127V"],
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "127V",
    manualInstalacao: "https://www.lg.com/br/ar-condicionado-residencial/dual-inverter-split/s4-q12ja31g-1/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "LG oficial - página do produto S4-Q12JA31G e central de manuais LG",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "capacidade", "tensao", "manualInstalacao", "manualManutencao", "fonte"], OFICIAL),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "capacidade", "tensao", "manualInstalacao", "manualManutencao", "fonte"], C_OFICIAL)
  }),

  acervoItem({
    marca: "LG",
    modelo: "S3-Q12JA33K - Dual Inverter Voice +AI 12.000 BTU",
    codigoBusca: ["S3-Q12JA33K", "S3Q12JA33K", "LG S3-Q12JA33K", "DUAL INVERTER VOICE AI 12000"],
    linha: "Dual Inverter Voice +AI",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.lg.com/br/ar-condicionado-residencial/dual-inverter-split/s3-q12ja33k/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "LG oficial - página do produto S3-Q12JA33K e central de manuais LG",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "capacidade", "manualInstalacao", "manualManutencao", "fonte"], OFICIAL),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "capacidade", "manualInstalacao", "manualManutencao", "fonte"], C_OFICIAL)
  }),

  /* =========================
     SAMSUNG - AZUL OFICIAL
     ========================= */

  acervoItem({
    marca: "Samsung",
    modelo: "AR12MVPXAWKNAZ - WindFree 12.000 BTU Frio",
    codigoBusca: ["AR12MVPXAWKNAZ", "AR12MVPX", "AR12MVPXAWK", "AR12MVPXAWKNAZ/AZ", "WINDFREE AR12MVPXAWKNAZ"],
    linha: "WindFree",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12MVPXAWKNAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12MVPXAWKNAZ/",
    fonte: "Samsung oficial - página de suporte do modelo",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "capacidade", "manualInstalacao", "manualManutencao", "fonte"], OFICIAL),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "capacidade", "manualInstalacao", "manualManutencao", "fonte"], C_OFICIAL)
  }),

  acervoItem({
    marca: "Samsung",
    modelo: "AR12DYFABWKNAZ - WindFree AI 12.000 BTU Frio Wi-Fi",
    codigoBusca: ["AR12DYFABWKNAZ", "AR12DYFAB", "AR12DYFABWK", "AR12DYFABWKNAZ/AZ", "WINDFREE AI AR12DYFABWKNAZ"],
    linha: "WindFree AI",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12DYFABWKNAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12DYFABWKNAZ/",
    fonte: "Samsung oficial - página de suporte do modelo",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "capacidade", "manualInstalacao", "manualManutencao", "fonte"], OFICIAL),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "capacidade", "manualInstalacao", "manualManutencao", "fonte"], C_OFICIAL)
  }),

  /* =========================
     GREE - AZUL OFICIAL
     ========================= */

  acervoItem({
    marca: "Gree",
    modelo: "G-Diamond Auto Inverter",
    codigoBusca: ["G-DIAMOND AUTO INVERTER", "G DIAMOND AUTO INVERTER", "G-DIAMOND AUTO", "G DIAMOND AUTO", "CB497N24100", "CB497N", "GWH12"],
    linha: "G-Diamond Auto Inverter",
    tipo: "Split Hi Wall Inverter",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    fonte: "Gree oficial - Manual G-Diamond Auto Inverter",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "fluidoRefrigerante", "manualInstalacao", "manualManutencao", "fonte"], OFICIAL),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "fluidoRefrigerante", "manualInstalacao", "manualManutencao", "fonte"], C_OFICIAL)
  }),

  acervoItem({
    marca: "Gree",
    modelo: "G-Prime Inverter Compact",
    codigoBusca: ["G-PRIME INVERTER COMPACT", "G PRIME INVERTER COMPACT", "GREE G-PRIME COMPACT"],
    linha: "G-Prime Inverter Compact",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    fonte: "Gree oficial - Manual G-Prime Inverter Compact",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "manualInstalacao", "manualManutencao", "fonte"], OFICIAL),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "manualInstalacao", "manualManutencao", "fonte"], C_OFICIAL)
  }),

  /* =========================
     ELGIN - AZUL OFICIAL
     ========================= */

  acervoItem({
    marca: "Elgin",
    modelo: "Eco Inverter II Wi-Fi 9.000 BTU Frio 220V",
    codigoBusca: ["ECO INVERTER II 9000", "ECO INVERTER II WIFI 9000", "ELGIN ECO INVERTER II 9000", "ECO INVERTER II 9K"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "9.000 BTU/h",
    tensao: "220V",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-inverter-ii-9000-btus-frio-wifi-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Elgin oficial - página do produto Eco Inverter II 9.000 e portal oficial de manuais",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "capacidade", "tensao", "manualInstalacao", "manualManutencao", "fonte"], OFICIAL),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "capacidade", "tensao", "manualInstalacao", "manualManutencao", "fonte"], C_OFICIAL)
  }),

  acervoItem({
    marca: "Elgin",
    modelo: "Eco Inverter II Wi-Fi 12.000 BTU Frio 220V",
    codigoBusca: ["ECO INVERTER II 12000", "ECO INVERTER II WIFI 12000", "ELGIN ECO INVERTER II 12000", "ECO INVERTER II 12K"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    manualInstalacao: "https://www.elgin.com.br/manuals",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Elgin oficial - portal oficial de manuais",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "capacidade", "tensao", "manualInstalacao", "manualManutencao", "fonte"], OFICIAL),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "capacidade", "tensao", "manualInstalacao", "manualManutencao", "fonte"], C_OFICIAL)
  }),

  /* =========================
     ELGIN - VERDE CONFIÁVEL NÃO OFICIAL
     Fonte: catálogo/ficha técnica de distribuidor técnico
     ========================= */

  acervoItem({
    marca: "Elgin",
    modelo: "HJFC09C2WBCB - Eco Inverter II Wi-Fi 9.000 BTU Frio",
    codigoBusca: ["HJFC09C2WBCB", "HJFI09C2WB", "HJFE09C2CB", "ELGIN HJFC09", "ECO INVERTER II 9000 FRIO", "ECO INVERTER II 9K FRIO"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "9.000 BTU/h",
    tensao: "220V / 1F / 60Hz",
    fluidoRefrigerante: "R32",
    correnteNominal: "7,3 A corrente máxima",
    disjuntor: "10 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    comprimentoMaximo: "15 m",
    desnivelMaximo: "7 m",
    manualInstalacao: "https://www.leverosintegra.com.br/download/manuais/Elgin/catalogo-split-hw-eco-inverter-wifi.pdf",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Leveros Integra - ficha cadastral técnica Elgin Eco Inverter II Wi-Fi",
    fonteTipo: VERDE,
    nivelConfianca: C_VERDE,
    fontesCampos: fonteCampos(camposTecnicos, VERDE),
    confiancaCampos: confiancaCampos(camposTecnicos, C_VERDE)
  }),

  acervoItem({
    marca: "Elgin",
    modelo: "HJFC12C2WBCB - Eco Inverter II Wi-Fi 12.000 BTU Frio",
    codigoBusca: ["HJFC12C2WBCB", "HJFI12C2WB", "HJFE12C2CB", "ELGIN HJFC12", "ECO INVERTER II 12000 FRIO", "ECO INVERTER II 12K FRIO"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "12.000 BTU/h",
    tensao: "220V / 1F / 60Hz",
    fluidoRefrigerante: "R32",
    correnteNominal: "6,7 A corrente máxima",
    disjuntor: "10 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    comprimentoMaximo: "15 m",
    desnivelMaximo: "7 m",
    manualInstalacao: "https://www.leverosintegra.com.br/download/manuais/Elgin/catalogo-split-hw-eco-inverter-wifi.pdf",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Leveros Integra - ficha cadastral técnica Elgin Eco Inverter II Wi-Fi",
    fonteTipo: VERDE,
    nivelConfianca: C_VERDE,
    fontesCampos: fonteCampos(camposTecnicos, VERDE),
    confiancaCampos: confiancaCampos(camposTecnicos, C_VERDE)
  }),

  acervoItem({
    marca: "Elgin",
    modelo: "HJQC12C2WBCB - Eco Inverter II Wi-Fi 12.000 BTU Quente/Frio",
    codigoBusca: ["HJQC12C2WBCB", "HJQI12C2WB", "HJQE12C2CB", "ELGIN HJQC12", "ECO INVERTER II 12000 QUENTE FRIO", "ECO INVERTER II 12K QF"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Quente/Frio",
    capacidade: "12.000 BTU/h",
    tensao: "220V / 1F / 60Hz",
    fluidoRefrigerante: "R32",
    correnteNominal: "10,6 A corrente máxima",
    disjuntor: "16 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    comprimentoMaximo: "15 m",
    desnivelMaximo: "7 m",
    manualInstalacao: "https://www.leverosintegra.com.br/download/manuais/Elgin/catalogo-split-hw-eco-inverter-wifi.pdf",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Leveros Integra - ficha cadastral técnica Elgin Eco Inverter II Wi-Fi",
    fonteTipo: VERDE,
    nivelConfianca: C_VERDE,
    fontesCampos: fonteCampos(camposTecnicos, VERDE),
    confiancaCampos: confiancaCampos(camposTecnicos, C_VERDE)
  }),

  acervoItem({
    marca: "Elgin",
    modelo: "HJFC18C2WBCB - Eco Inverter II Wi-Fi 18.000 BTU Frio",
    codigoBusca: ["HJFC18C2WBCB", "HJFI18C2WB", "HJFE18C2CB", "ELGIN HJFC18", "ECO INVERTER II 18000 FRIO", "ECO INVERTER II 18K FRIO"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "18.000 BTU/h",
    tensao: "220V / 1F / 60Hz",
    fluidoRefrigerante: "R32",
    correnteNominal: "15,7 A corrente máxima",
    disjuntor: "20 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    comprimentoMaximo: "20 m",
    desnivelMaximo: "8 m",
    manualInstalacao: "https://www.leverosintegra.com.br/download/manuais/Elgin/catalogo-split-hw-eco-inverter-wifi.pdf",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Leveros Integra - ficha cadastral técnica Elgin Eco Inverter II Wi-Fi",
    fonteTipo: VERDE,
    nivelConfianca: C_VERDE,
    fontesCampos: fonteCampos(camposTecnicos, VERDE),
    confiancaCampos: confiancaCampos(camposTecnicos, C_VERDE)
  }),

  acervoItem({
    marca: "Elgin",
    modelo: "HJFC24C2WBCB - Eco Inverter II Wi-Fi 24.000 BTU Frio",
    codigoBusca: ["HJFC24C2WBCB", "HJFI24C2WB", "HJFE24C2CB", "ELGIN HJFC24", "ECO INVERTER II 24000 FRIO", "ECO INVERTER II 24K FRIO"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "24.000 BTU/h",
    tensao: "220V / 1F / 60Hz",
    fluidoRefrigerante: "R32",
    correnteNominal: "13,4 A corrente máxima",
    disjuntor: "20 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "5/8 pol.",
    comprimentoMaximo: "20 m",
    desnivelMaximo: "10 m",
    manualInstalacao: "https://www.leverosintegra.com.br/download/manuais/Elgin/catalogo-split-hw-eco-inverter-wifi.pdf",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Leveros Integra - ficha cadastral técnica Elgin Eco Inverter II Wi-Fi",
    fonteTipo: VERDE,
    nivelConfianca: C_VERDE,
    fontesCampos: fonteCampos(camposTecnicos, VERDE),
    confiancaCampos: confiancaCampos(camposTecnicos, C_VERDE)
  }),

  /* =========================
     ELGIN - BRANCO INFORMAÇÃO SUGERIDA
     Fonte: internet/loja/usuário/campo. Usar apenas como apoio.
     ========================= */

  acervoItem({
    marca: "Elgin",
    modelo: "LE HW12FRELECOIW - Eco Inverter II 12.000 BTU Frio 220V - Informação sugerida",
    codigoBusca: ["LE HW12FRELECOIW", "ELGIN LE HW12FRELECOIW", "HJFI12C2WB HJFE12C2CB", "INFORMACAO SUGERIDA ELGIN 12000"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "12.000 BTU/h",
    tensao: "220V monofásico",
    fluidoRefrigerante: "R32",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    comprimentoMaximo: "15 m",
    desnivelMaximo: "7 m",
    manualInstalacao: "https://www.elgin.com.br/manuals",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Informação sugerida de internet/campo - conferir antes de aplicar",
    fonteTipo: SUGERIDA,
    nivelConfianca: C_SUGERIDA,
    observacaoFonte: "Informação branca/sugerida. Não tratar como dado oficial nem como catálogo técnico autorizado.",
    fontesCampos: fonteCampos(camposTecnicos, SUGERIDA),
    confiancaCampos: confiancaCampos(camposTecnicos, C_SUGERIDA)
  }),

  /* =========================
     KOMECO / OUTRAS OFICIAIS
     ========================= */

  acervoItem({
    marca: "Komeco",
    modelo: "KOHI 09QC 1HV - Inverter KOHI 9.000 BTU",
    codigoBusca: ["KOHI09QC1HV", "KOHI 09QC 1HV", "KOHI09QC", "KOHI 09", "KOMECO KOHI 09QC"],
    linha: "KOHI Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/MANUAL%20DE%20SERVICO%20INVERTER.PDF",
    fonte: "Komeco oficial - Manual KOHI e Manual de Serviço Inverter",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "capacidade", "manualInstalacao", "manualManutencao", "fonte"], OFICIAL),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "capacidade", "manualInstalacao", "manualManutencao", "fonte"], C_OFICIAL)
  }),

  acervoItem({
    marca: "Consul",
    modelo: "CBK12EBBCJ - Dual Inverter Cobre Frio 12.000 BTU",
    codigoBusca: ["CBK12EBBCJ", "CBK12EB", "CONSUL CBK12EBBCJ", "DUAL INVERTER CONSUL CBK12EBBCJ"],
    linha: "Dual Inverter Cobre Frio",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.consul.com.br/ar-condicionado-split-consul-dual-inverter-cobre-frio-12000-btus-cbk12eb/p",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Consul oficial - página do produto e orientação oficial de manuais por código",
    fonteTipo: OFICIAL,
    nivelConfianca: C_OFICIAL,
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "capacidade", "manualInstalacao", "manualManutencao", "fonte"], OFICIAL),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "capacidade", "manualInstalacao", "manualManutencao", "fonte"], C_OFICIAL)
  }),

  acervoItem({
    marca: "HVAC PRO",
    modelo: "STATUS-ACERVO-V4-3-NIVEIS",
    codigoBusca: ["STATUS-ACERVO-V4", "ACERVO V4", "VERSAO 4 ACERVO", "VERSÃO 4 ACERVO", "3 NIVEIS", "3 NÍVEIS"],
    linha: "Controle interno do Acervo Técnico",
    tipo: "Status do banco",
    fonte: "Controle interno HVAC PRO",
    fonteTipo: SUGERIDA,
    nivelConfianca: C_SUGERIDA,
    observacaoFonte: "V4 com azul oficial, verde confiável não oficial e branco sugerido.",
    fontesCampos: fonteCampos(["modelo", "marca", "linha", "tipo", "fonte"], SUGERIDA),
    confiancaCampos: confiancaCampos(["modelo", "marca", "linha", "tipo", "fonte"], C_SUGERIDA)
  })
];
