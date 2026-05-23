/* HVAC PRO - databases/acervo_tecnico.js
   ACERVO TÉCNICO V2 - FICHA LIMPA

   NOVO PADRÃO:
   - Busca por modelo/código da etiqueta.
   - A ficha mostra somente dados úteis e confiáveis.
   - Campos vagos ficam ocultos pelo app.js.
   - Dados confirmados aparecem em verde no app.

   FONTES ACEITAS:
   - FABRICANTE_OFICIAL
   - ETIQUETA_MAQUINA
   - INMETRO_ENCE
   - DISTRIBUIDOR_TECNICO_AUTORIZADO

   NÃO USAR COMO DADO CONFIRMADO:
   - loja comum
   - fórum
   - YouTube
   - Manualzz / Scribd / PDFCoffee
   - comentário técnico sem fonte
*/

const NAO = "";
const VALIDAR = "";
const VALIDAR_PROC = "";

function textoAcervo(valor) {
  return String(valor || "").trim().toLowerCase();
}

function limparDadoTecnico(valor) {
  let bruto = String(valor || "").trim();
  let texto = textoAcervo(bruto);

  if (!texto) return "";
  if (texto === "-" || texto === "nao aplicavel" || texto === "não aplicável" || texto === "nao se aplica" || texto === "não se aplica") return "";
  if (texto.includes("nao informado") || texto.includes("não informado")) return "";

  const cortes = [
    " - validar", "; validar", ", validar", " validar ",
    " - confirmar", "; confirmar", ", confirmar", " confirmar ",
    " quando aplicável", " quando aplicavel",
    " conforme aviso", " conforme tabela", " conforme manual", " conforme código", " conforme codigo"
  ];

  for (const corte of cortes) {
    const pos = texto.indexOf(corte);
    if (pos >= 0) {
      bruto = bruto.slice(0, pos).trim();
      texto = textoAcervo(bruto);
    }
  }

  if (!texto) return "";
  if (texto.includes("validar") || texto.includes("confirmar")) return "";
  if (texto.includes("depende")) return "";
  if (texto.includes("portal oficial")) return "";
  if (texto.includes("baixar manual")) return "";
  if (texto.includes("separar códigos") || texto.includes("separar codigos")) return "";
  if (texto.includes("extrair código") || texto.includes("extrair codigo")) return "";

  return bruto;
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
    fonteTipo: "",
    nivelConfianca: "",
    observacaoFonte: "",
    status: ""
  };
}

window.acervoTecnico = [

  /* =========================
     MIDEA / SPRINGER - BASE TÉCNICA
     ========================= */

  acervoItem({
    marca: "Midea",
    modelo: "42AGVCJ09 / 38AGVCJ09 - Xtreme Save AI Connect R32",
    codigoBusca: [
      "42AGVCJ09", "38AGVCJ09", "42AGVCJ09M5", "38AGVCJ09M5",
      "XTREME SAVE 9000", "XTREME SAVE 09", "AGVCJ09"
    ],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    tubulacaoAlta: "1/4 pol. - validar tabela do manual conforme código completo",
    tubulacaoBaixa: "3/8 pol. - validar tabela do manual conforme código completo",
    superaquecimento: VALIDAR_PROC,
    subresfriamento: VALIDAR_PROC,
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Midea oficial - Manual Xtreme Save AI Connect",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Dados refinados pelo manual oficial. Carga de gás, corrente e disjuntor devem ser confirmados pela etiqueta/tabela do modelo exato."
  }),

  acervoItem({
    marca: "Midea",
    modelo: "42AGVCJ12 / 38AGVCJ12 - Xtreme Save AI Connect R32",
    codigoBusca: [
      "42AGVCJ12", "38AGVCJ12", "42AGVCJ12M5", "38AGVCJ12M5",
      "XTREME SAVE 12000", "XTREME SAVE 12", "AGVCJ12"
    ],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    tubulacaoAlta: "1/4 pol. - validar tabela do manual conforme código completo",
    tubulacaoBaixa: "3/8 pol. ou 1/2 pol. conforme versão/capacidade indicada no manual",
    superaquecimento: VALIDAR_PROC,
    subresfriamento: VALIDAR_PROC,
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Midea oficial - Manual Xtreme Save AI Connect",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Dados refinados pelo manual oficial. Carga de gás, corrente e disjuntor devem ser confirmados pela etiqueta/tabela do modelo exato."
  }),

  acervoItem({
    marca: "Midea",
    modelo: "42AGVCJ18 / 38AGVCJ18 - Xtreme Save AI Connect R32",
    codigoBusca: [
      "42AGVCJ18", "38AGVCJ18", "42AGVCJ18M5", "38AGVCJ18M5",
      "XTREME SAVE 18000", "XTREME SAVE 18", "AGVCJ18"
    ],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "18.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    tubulacaoAlta: "1/4 pol. - validar tabela do manual conforme código completo",
    tubulacaoBaixa: "1/2 pol. - validar tabela do manual conforme código completo",
    superaquecimento: VALIDAR_PROC,
    subresfriamento: VALIDAR_PROC,
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Midea oficial - Manual Xtreme Save AI Connect",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Dados refinados pelo manual oficial. Carga de gás, corrente e disjuntor devem ser confirmados pela etiqueta/tabela do modelo exato."
  }),

  acervoItem({
    marca: "Midea",
    modelo: "42AGVCJ22 / 38AGVCJ22 - Xtreme Save AI Connect R32",
    codigoBusca: [
      "42AGVCJ22", "38AGVCJ22", "42AGVCJ22M5", "38AGVCJ22M5",
      "XTREME SAVE 22000", "XTREME SAVE 22", "AGVCJ22"
    ],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "22.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    tubulacaoAlta: "3/8 pol. - validar tabela do manual conforme código completo",
    tubulacaoBaixa: "5/8 pol. - validar tabela do manual conforme código completo",
    superaquecimento: VALIDAR_PROC,
    subresfriamento: VALIDAR_PROC,
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Midea oficial - Manual Xtreme Save AI Connect",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Dados refinados pelo manual oficial. Carga de gás, corrente e disjuntor devem ser confirmados pela etiqueta/tabela do modelo exato."
  }),

  acervoItem({
    marca: "Midea",
    modelo: "42EFV / 38TAV - AI AirVolution",
    codigoBusca: ["42EFV", "38TAV", "42EFV 38TAV", "AI AIRVOLUTION", "MIDEA AIRVOLUTION"],
    linha: "AI AirVolution",
    tipo: "Split Hi Wall",
    capacidade: "Validar capacidade pelo código completo",
    tensao: "220V - validar etiqueta do equipamento",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Manual%20do%20usu%C3%A1rio%20-%20Ar-Condicionado%20Split%20AI%20AirVolution%20Midea.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Manual%20do%20usu%C3%A1rio%20-%20Ar-Condicionado%20Split%20AI%20AirVolution%20Midea.pdf",
    fonte: "Midea oficial - Manual AI AirVolution",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Cadastro por família/código. Usar etiqueta e tabela do manual para dados elétricos e frigorígenos específicos."
  }),

  acervoItem({
    marca: "Midea",
    modelo: "40KVQD - Cassete 58.000 BTU 4 Vias Frio",
    codigoBusca: ["40KVQD", "MIDEA 40KVQD", "CASSETE 58000 MIDEA", "CASSETE 4 VIAS MIDEA"],
    linha: "Cassete 4 Vias",
    tipo: "Cassete 4 Vias Frio",
    capacidade: "58.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    tubulacaoAlta: "Validar tabela do manual oficial",
    tubulacaoBaixa: "Validar tabela do manual oficial",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-cassete-58000-btus-4-vias-frio-midea.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/ar-condicionado-cassete-58000-btus-4-vias-frio-midea.pdf",
    fonte: "Midea oficial - Manual Cassete 58.000 BTU 40KVQD",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Cadastro por código/família 40KVQD. Confirmar dados elétricos e carga pela etiqueta/tabela do equipamento."
  }),

  acervoItem({
    marca: "Midea",
    modelo: "Piso Teto 36.000 BTU Inverter Frio",
    codigoBusca: ["PISO TETO 36000 MIDEA", "MIDEA PISO TETO 36000", "MIDEA 36000 INVERTER PISO TETO"],
    linha: "Piso Teto Inverter",
    tipo: "Piso Teto Inverter Frio",
    capacidade: "36.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    tubulacaoAlta: "Validar tabela do manual oficial",
    tubulacaoBaixa: "Validar tabela do manual oficial",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-split-piso-teto-36000-btu-inverter-frio-midea.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/ar-condicionado-split-piso-teto-36000-btu-inverter-frio-midea.pdf",
    fonte: "Midea oficial - Manual Piso Teto 36.000 BTU",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Cadastro por família/capacidade. Confirmar código exato na etiqueta."
  }),

  /* =========================
     GREE - BASE TÉCNICA
     ========================= */

  acervoItem({
    marca: "Gree",
    modelo: "G-Diamond Auto Inverter",
    codigoBusca: [
      "G-DIAMOND AUTO INVERTER", "G DIAMOND AUTO INVERTER", "G-DIAMOND AUTO",
      "G DIAMOND AUTO", "CB497N24100", "CB497N", "GWH12"
    ],
    linha: "G-Diamond Auto Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "Validar capacidade pelo código completo da etiqueta",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "R32 quando aplicável ao modelo indicado no manual oficial",
    tubulacaoAlta: "Validar tabela do modelo/capacidade no manual oficial",
    tubulacaoBaixa: "Validar tabela do modelo/capacidade no manual oficial",
    superaquecimento: VALIDAR_PROC,
    subresfriamento: VALIDAR_PROC,
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    fonte: "Gree oficial - Manual G-Diamond Auto Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Manual oficial de instalação/manutenção. Dados específicos dependem do código completo da etiqueta."
  }),

  acervoItem({
    marca: "Gree",
    modelo: "G-Prime Inverter Compact",
    codigoBusca: ["G-PRIME INVERTER COMPACT", "G PRIME INVERTER COMPACT", "GREE G-PRIME COMPACT"],
    linha: "G-Prime Inverter Compact",
    tipo: "Split Hi Wall Inverter",
    capacidade: "Validar modelo/capacidade no manual oficial e etiqueta",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    tubulacaoAlta: "Validar tabela do manual oficial",
    tubulacaoBaixa: "Validar tabela do manual oficial",
    superaquecimento: VALIDAR_PROC,
    subresfriamento: VALIDAR_PROC,
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    fonte: "Gree oficial - Manual G-Prime Inverter Compact",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Manual oficial direto. Separar códigos exatos da etiqueta na próxima validação fina."
  }),

  acervoItem({
    marca: "Gree",
    modelo: "G-Top Inverter",
    codigoBusca: ["G-TOP INVERTER", "G TOP INVERTER", "GREE G-TOP INVERTER", "GREE G TOP INVERTER"],
    linha: "G-Top Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "Validar modelo/capacidade no manual oficial",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-TOP-INVERTER-Rev-005-full.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-TOP-INVERTER-Rev-005-full.pdf",
    fonte: "Gree oficial - Manual G-Top Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Cadastro por linha oficial. Confirmar código e capacidade na etiqueta do equipamento."
  }),

  acervoItem({
    marca: "Gree",
    modelo: "G-Max Inverter",
    codigoBusca: ["G-MAX INVERTER", "G MAX INVERTER", "GREE G-MAX", "GREE G MAX"],
    linha: "G-Max Inverter",
    tipo: "Split Hi Wall Inverter / linha G-Max conforme manual",
    capacidade: "Validar modelo/capacidade no manual oficial e etiqueta",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-Max-Rev.001-full.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-Max-Rev.001-full.pdf",
    fonte: "Gree oficial - Manual G-Max Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Manual oficial direto. Confirmar código completo na etiqueta."
  }),

  acervoItem({
    marca: "Gree",
    modelo: "Piso Teto Inverter Gree",
    codigoBusca: ["PISO TETO GREE", "PISO-TETO GREE", "PISO TETO INVERTER GREE"],
    linha: "Piso-Teto Inverter",
    tipo: "Piso Teto Inverter",
    capacidade: "Validar modelo/capacidade no manual oficial",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://gree.com.br/manuais/",
    manualManutencao: "https://gree.com.br/manuais/",
    fonte: "Gree oficial - página de materiais técnicos",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "PORTAL_OFICIAL_VALIDAR_CODIGO",
    observacaoFonte: "Portal oficial para baixar manual específico da revisão correta."
  }),

  /* =========================
     LG - BASE TÉCNICA
     ========================= */

  acervoItem({
    marca: "LG",
    modelo: "S4-Q12JA31G - Dual Inverter Voice 12.000 BTU Frio 127V",
    codigoBusca: ["S4-Q12JA31G", "S4Q12JA31G", "LG S4-Q12JA31G", "DUAL INVERTER VOICE 12000 127V"],
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "127V",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://www.lg.com/br/ar-condicionado-residencial/dual-inverter-split/s4-q12ja31g-1/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "LG oficial - página do produto S4-Q12JA31G e central de manuais LG",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_FICHA_TECNICA_OFICIAL",
    observacaoFonte: "Código real em página oficial LG. Dados elétricos/frigorígenos devem ser confirmados pelo manual/etiqueta."
  }),

  acervoItem({
    marca: "LG",
    modelo: "S4-Q12JA315 - Dual Inverter 12.000 BTU 220V",
    codigoBusca: ["S4-Q12JA315", "S4Q12JA315", "LG S4-Q12JA315", "DUAL INVERTER 12000 220V"],
    linha: "Dual Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://www.lg.com/br/ar-condicionado-residencial/dual-inverter-split/s4-q12ja315/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "LG oficial - página do produto S4-Q12JA315 e central de manuais LG",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_FICHA_TECNICA_OFICIAL",
    observacaoFonte: "Código real em página oficial LG. Dados elétricos/frigorígenos devem ser confirmados pelo manual/etiqueta."
  }),

  acervoItem({
    marca: "LG",
    modelo: "S4-Q12JA3WC - Dual Inverter 12.000 BTU Frio",
    codigoBusca: ["S4-Q12JA3WC", "S4Q12JA3WC", "LG S4-Q12JA3WC", "DUAL INVERTER 12000 FRIO"],
    linha: "Dual Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://www.lg.com/br/ar-condicionado-residencial/ar-condicionado-residencial-inverter/s4-q12ja3wc1/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "LG oficial - página do produto S4-Q12JA3WC e central de manuais LG",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_FICHA_TECNICA_OFICIAL",
    observacaoFonte: "Código real em página oficial LG. Dados elétricos/frigorígenos devem ser confirmados pelo manual/etiqueta."
  }),

  acervoItem({
    marca: "LG",
    modelo: "S3-Q12JA33K - Dual Inverter Voice +AI 12.000 BTU",
    codigoBusca: ["S3-Q12JA33K", "S3Q12JA33K", "LG S3-Q12JA33K", "DUAL INVERTER VOICE AI 12000"],
    linha: "Dual Inverter Voice +AI",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://www.lg.com/br/ar-condicionado-residencial/dual-inverter-split/s3-q12ja33k/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "LG oficial - página do produto S3-Q12JA33K e central de manuais LG",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_FICHA_TECNICA_OFICIAL",
    observacaoFonte: "Código real em página oficial LG. Dados elétricos/frigorígenos devem ser confirmados pelo manual/etiqueta."
  }),

  /* =========================
     SAMSUNG - BASE TÉCNICA
     ========================= */

  acervoItem({
    marca: "Samsung",
    modelo: "AR12MVPXAWKNAZ - WindFree 12.000 BTU Frio",
    codigoBusca: ["AR12MVPXAWKNAZ", "AR12MVPX", "AR12MVPXAWK", "AR12MVPXAWKNAZ/AZ", "WINDFREE AR12MVPXAWKNAZ"],
    linha: "WindFree",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12MVPXAWKNAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12MVPXAWKNAZ/",
    fonte: "Samsung oficial - página de suporte do modelo",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_SUPORTE_OFICIAL",
    observacaoFonte: "Código real em página oficial Samsung. Baixar manual mais atual na página do modelo."
  }),

  acervoItem({
    marca: "Samsung",
    modelo: "AR12DYFABWKNAZ - WindFree AI 12.000 BTU Frio Wi-Fi",
    codigoBusca: ["AR12DYFABWKNAZ", "AR12DYFAB", "AR12DYFABWK", "AR12DYFABWKNAZ/AZ", "WINDFREE AI AR12DYFABWKNAZ"],
    linha: "WindFree AI",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "12.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12DYFABWKNAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12DYFABWKNAZ/",
    fonte: "Samsung oficial - página de suporte do modelo",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_SUPORTE_OFICIAL",
    observacaoFonte: "Código real em página oficial Samsung. Baixar manual mais atual na página do modelo."
  }),

  /* =========================
     ELGIN - BASE TÉCNICA
     ========================= */

  acervoItem({
    marca: "Elgin",
    modelo: "Eco Star Inverter 12.000 BTU Frio 127V",
    codigoBusca: ["ECO STAR INVERTER 12000", "ECO STAR 12000 127V", "ELGIN ECO STAR 12000", "ECO STAR INVERTER 12K"],
    linha: "Eco Star Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "127V",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-star-inverter-12000-btus-frio-127v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Elgin oficial - página do produto Eco Star Inverter 12.000 e portal oficial de manuais",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_FICHA_TECNICA_OFICIAL",
    observacaoFonte: "Página oficial do produto. Extrair código exato da etiqueta/manual quando disponível."
  }),

  acervoItem({
    marca: "Elgin",
    modelo: "Eco Inverter II Wi-Fi 9.000 BTU Frio 220V",
    codigoBusca: ["ECO INVERTER II 9000", "ECO INVERTER II WIFI 9000", "ELGIN ECO INVERTER II 9000", "ECO INVERTER II 9K"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "9.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-inverter-ii-9000-btus-frio-wifi-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Elgin oficial - página do produto Eco Inverter II 9.000 e portal oficial de manuais",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_FICHA_TECNICA_OFICIAL",
    observacaoFonte: "Página oficial do produto. Extrair código exato da etiqueta/manual quando disponível."
  }),

  acervoItem({
    marca: "Elgin",
    modelo: "Eco Inverter II Wi-Fi 18.000 BTU Quente/Frio 220V",
    codigoBusca: ["ECO INVERTER II 18000", "ECO INVERTER II WIFI 18000", "ELGIN ECO INVERTER II 18000", "ECO INVERTER II 18K"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Quente/Frio",
    capacidade: "18.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-inverter-ii-18000-btus-quente-e-frio-wifi-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Elgin oficial - página do produto Eco Inverter II 18.000 e portal oficial de manuais",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_FICHA_TECNICA_OFICIAL",
    observacaoFonte: "Página oficial do produto. Extrair código exato da etiqueta/manual quando disponível."
  }),

  acervoItem({
    marca: "Elgin",
    modelo: "Eco Inverter II Wi-Fi 24.000 BTU Frio 220V",
    codigoBusca: ["ECO INVERTER II 24000", "ECO INVERTER II WIFI 24000", "ELGIN ECO INVERTER II 24000", "ECO INVERTER II 24K"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "24.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "Validar etiqueta/manual",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-inverter-ii-24000-btus-frio-wifi-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Elgin oficial - página do produto Eco Inverter II 24.000 e portal oficial de manuais",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_FICHA_TECNICA_OFICIAL",
    observacaoFonte: "Página oficial do produto. Extrair código exato da etiqueta/manual quando disponível."
  }),

  /* =========================
     KOMECO - BASE TÉCNICA
     ========================= */

  acervoItem({
    marca: "Komeco",
    modelo: "KOHI 09QC 1HV - Inverter KOHI 9.000 BTU",
    codigoBusca: ["KOHI09QC1HV", "KOHI 09QC 1HV", "KOHI09QC", "KOHI 09", "KOMECO KOHI 09QC"],
    linha: "KOHI Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "A2L conforme aviso do manual oficial; validar etiqueta do equipamento",
    tubulacaoAlta: "1/4 pol. - conforme tabela do manual KOHI, validar código completo",
    tubulacaoBaixa: "Validar tabela do modelo/capacidade no manual oficial",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/MANUAL%20DE%20SERVICO%20INVERTER.PDF",
    fonte: "Komeco oficial - Manual KOHI e Manual de Serviço Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Manual oficial KOHI e manual técnico Komeco. Validar etiqueta e tabela completa antes do serviço."
  }),

  acervoItem({
    marca: "Komeco",
    modelo: "KOHI 12QC 1HV - Inverter KOHI 12.000 BTU",
    codigoBusca: ["KOHI12QC1HV", "KOHI 12QC 1HV", "KOHI12QC", "KOHI 12", "KOMECO KOHI 12QC"],
    linha: "KOHI Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "A2L conforme aviso do manual oficial; validar etiqueta do equipamento",
    tubulacaoAlta: "Validar tabela do modelo/capacidade no manual oficial",
    tubulacaoBaixa: "Validar tabela do modelo/capacidade no manual oficial",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/MANUAL%20DE%20SERVICO%20INVERTER.PDF",
    fonte: "Komeco oficial - Manual KOHI e Manual de Serviço Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Manual oficial KOHI e manual técnico Komeco. Validar etiqueta e tabela completa antes do serviço."
  }),

  /* =========================
     DAIKIN - BASE TÉCNICA
     ========================= */

  acervoItem({
    marca: "Daikin",
    modelo: "FTKP09Q5VL / RKP09Q5VL - EcoSwing Smart R-32 9.000 BTU",
    codigoBusca: ["FTKP09Q5VL", "RKP09Q5VL", "FTKP09", "RKP09", "ECOSWING SMART R32 FTKP09"],
    linha: "EcoSwing Smart R-32",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/profissionais/downloads",
    manualManutencao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Daikin oficial - área de downloads e linha EcoSwing Smart R-32",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "PORTAL_OFICIAL_VALIDAR_CODIGO",
    observacaoFonte: "Validar documentação específica no portal oficial Daikin."
  }),

  acervoItem({
    marca: "Daikin",
    modelo: "FTKP12Q5VL / RKP12Q5VL - EcoSwing Smart R-32 12.000 BTU",
    codigoBusca: ["FTKP12Q5VL", "RKP12Q5VL", "FTKP12", "RKP12", "ECOSWING SMART R32 FTKP12"],
    linha: "EcoSwing Smart R-32",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/profissionais/downloads",
    manualManutencao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Daikin oficial - área de downloads e linha EcoSwing Smart R-32",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "PORTAL_OFICIAL_VALIDAR_CODIGO",
    observacaoFonte: "Validar documentação específica no portal oficial Daikin."
  }),

  acervoItem({
    marca: "Daikin",
    modelo: "FTKP18Q5VL / RKP18Q5VL - EcoSwing Smart R-32 18.000 BTU",
    codigoBusca: ["FTKP18Q5VL", "RKP18Q5VL", "FTKP18", "RKP18", "ECOSWING SMART R32 FTKP18"],
    linha: "EcoSwing Smart R-32",
    tipo: "Split Hi Wall Inverter",
    capacidade: "18.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/profissionais/downloads",
    manualManutencao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Daikin oficial - área de downloads e linha EcoSwing Smart R-32",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "PORTAL_OFICIAL_VALIDAR_CODIGO",
    observacaoFonte: "Validar documentação específica no portal oficial Daikin."
  }),

  /* =========================
     CONSUL / ELECTROLUX / PHILCO / BRITÂNIA - ENTRADAS COM FICHA OFICIAL
     ========================= */

  acervoItem({
    marca: "Consul",
    modelo: "CBK12EBBCJ - Dual Inverter Cobre Frio 12.000 BTU",
    codigoBusca: ["CBK12EBBCJ", "CBK12EB", "CONSUL CBK12EBBCJ", "DUAL INVERTER CONSUL CBK12EBBCJ"],
    linha: "Dual Inverter Cobre Frio",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V - validar etiqueta/página oficial",
    manualInstalacao: "https://www.consul.com.br/ar-condicionado-split-consul-dual-inverter-cobre-frio-12000-btus-cbk12eb/p",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Consul oficial - página do produto e orientação oficial de manuais por código",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_FICHA_TECNICA_OFICIAL",
    observacaoFonte: "Página oficial do produto. Usar código do produto no portal Consul para manual mais atual."
  }),

  acervoItem({
    marca: "Electrolux",
    modelo: "YI18F / YE18F - Inverter 18.000 BTU Frio",
    codigoBusca: ["YI18F", "YE18F", "YI18F YE18F", "ELECTROLUX YI18F", "ELECTROLUX YE18F"],
    linha: "Split Inverter Electrolux",
    tipo: "Split Hi Wall Inverter",
    capacidade: "18.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    manualInstalacao: "https://content.electrolux.com.br/brasil/electrolux/emanuelle_21_10_24/yi_ye18f/index.html",
    manualManutencao: "https://cuida.electrolux.com.br/guias-e-manuais",
    fonte: "Electrolux oficial - página do produto/manual e central oficial de guias e manuais",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_FICHA_TECNICA_OFICIAL",
    observacaoFonte: "Página oficial/manual online. Confirmar dados elétricos e frigorígenos por etiqueta/manual completo."
  }),

  acervoItem({
    marca: "Philco",
    modelo: "PH9000IFM / PH12000IFM - Inverter",
    codigoBusca: ["PH9000IFM", "PH12000IFM", "PH9000", "PH12000", "PHILCO PH9000IFM", "PHILCO PH12000IFM"],
    linha: "Condicionadores de Ar Inverter Philco",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 BTU/h conforme código",
    tensao: "220V - validar etiqueta/manual",
    manualInstalacao: "https://suporte.philco.com.br/sfc/servlet.shepherd/document/download/0692T00000EbDP3QAN",
    manualManutencao: "https://suporte.philco.com.br/",
    fonte: "Philco oficial - Manual de Operação e Instalação Unificado",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Manual oficial unificado. Confirmar código exato da etiqueta."
  }),

  acervoItem({
    marca: "Britânia",
    modelo: "BAC24000IQFM15 - Inverter Quente/Frio 24.000 BTU",
    codigoBusca: ["BAC24000IQFM15", "BAC24000", "BAC24000IQFM", "BRITANIA BAC24000IQFM15", "BRITÂNIA BAC24000IQFM15"],
    linha: "BAC Inverter Britânia",
    tipo: "Split Hi Wall Inverter Quente/Frio",
    capacidade: "24.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    manualInstalacao: "https://suporte.britania.com.br/hc/pt-br/articles/45657835553940-Documentos-para-o-Ar-Condicionado-BAC24000IQFM15",
    manualManutencao: "https://suporte.britania.com.br/",
    fonte: "Britânia oficial - documentos do produto BAC24000IQFM15",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_SUPORTE_OFICIAL",
    observacaoFonte: "Documentos oficiais do produto. Confirmar dados por etiqueta/ficha técnica."
  }),

  /* =========================
     AGRATTO / EOS / TCL / HISENSE / HITACHI - BASE OFICIAL
     ========================= */

  acervoItem({
    marca: "Agratto",
    modelo: "ZICST12F-02 / ZICST12QF-02 - ZEN Inverter 12.000 BTU",
    codigoBusca: ["ZICST12F-02", "ZICST12QF-02", "ZICST12F", "ZICST12QF", "ZEN INVERTER 12000 AGRATTO"],
    linha: "ZEN Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V - validar etiqueta/manual",
    manualInstalacao: "https://www.agratto.com.br/ar-condicionado/residencial/zen-inverter",
    manualManutencao: "https://www.agratto.com.br/ar-condicionado/residencial/zen-inverter",
    fonte: "Agratto oficial - página residencial ZEN Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_FICHA_TECNICA_OFICIAL",
    observacaoFonte: "Página oficial do produto. Validar documentos técnicos específicos do código."
  }),

  acervoItem({
    marca: "EOS",
    modelo: "Master Inverter EOS",
    codigoBusca: ["MASTER INVERTER EOS", "EOS MASTER INVERTER", "MASTER INVERTER", "EOS INVERTER"],
    linha: "Master Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "Validar código/capacidade no produto oficial",
    manualInstalacao: "https://eos.com.br/wp-content/uploads/2025/02/Master-Inverter-EOS_Manual.pdf",
    manualManutencao: "https://eos.com.br/wp-content/uploads/2025/02/Master-Inverter-EOS_Manual.pdf",
    fonte: "EOS oficial - Manual Master Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Manual oficial por família. Separar por código/capacidade quando disponível no manual ou etiqueta."
  }),

  acervoItem({
    marca: "TCL",
    modelo: "TAC-12CSA2-INV - Série A2 Inverter",
    codigoBusca: ["TAC-12CSA2-INV", "TAC12CSA2INV", "TAC 12CSA2 INV", "TCL TAC-12CSA2-INV"],
    linha: "Série A2 Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.tcl.com/br/pt/support-airconditioner/model-tv/tac-12csa2-inv",
    manualManutencao: "https://www.tcl.com/br/pt/support",
    fonte: "TCL oficial - suporte do modelo TAC-12CSA2-INV",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_SUPORTE_OFICIAL",
    observacaoFonte: "Página oficial do modelo. Usar página oficial para baixar documentos disponíveis."
  }),

  acervoItem({
    marca: "Hitachi",
    modelo: "SCI24B3IV / RCI24B3IV / RAA24B3IV - airCore 600 Cassette 24.000 BTU",
    codigoBusca: ["SCI24B3IV", "RCI24B3IV", "RAA24B3IV", "AIRCORE 600 24", "HITACHI SCI24B3IV", "HITACHI RCI24B3IV"],
    linha: "airCore 600",
    tipo: "Cassette 4 Vias / Comercial Split DC Inverter",
    capacidade: "24.000 BTU/h",
    manualInstalacao: "https://documentation.hitachiaircon.com/br/pt/pac/sci-spc-rci-rpc-b3iv-raa-b3iv/download/R0000015361_JCH",
    manualManutencao: "https://www.hitachiaircon.com/br/downloads/aircore-600",
    fonte: "Hitachi oficial - documentação técnica airCore 600",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "CONFIRMADO_MANUAL_OFICIAL",
    observacaoFonte: "Documentação oficial Hitachi. Validar combinação interna/externa."
  }),

  /* =========================
     STATUS INTERNO
     ========================= */

  acervoItem({
    marca: "HVAC PRO",
    modelo: "STATUS-ACERVO-V2",
    codigoBusca: ["STATUS-ACERVO-V2", "ACERVO V2", "VERSAO 2 ACERVO", "VERSÃO 2 ACERVO"],
    linha: "Controle interno do Acervo Técnico",
    tipo: "Status do banco",
    capacidade: "Ficha limpa ativa",
    fonte: "Controle interno HVAC PRO",
    fonteTipo: "CONTROLE_INTERNO",
    nivelConfianca: "STATUS_INTERNO",
    observacaoFonte: "Acervo V2 com ficha limpa: campos sem dados confiáveis ficam ocultos; dados úteis aparecem em verde com fonte/status."
  })
];
