/* HVAC PRO - databases/acervo_tecnico.js
   TESTE DE LÓGICA DE CORES DO ACERVO TÉCNICO

   Objetivo:
   - Testar se o app está exibindo corretamente:
     AZUL  = OFICIAL
     VERDE = CONFIAVEL_NAO_OFICIAL
     BRANCO = INFORMACAO_SUGERIDA

   Instrução:
   - Este arquivo mantém a base oficial estável e adiciona 3 registros de teste no início.
   - Depois do teste, a gente remove esses registros de teste e continua enriquecendo o banco real.
*/

window.acervoTecnico = [

  /* =========================
     TESTES DE COR - NÃO SÃO EQUIPAMENTOS REAIS
     ========================= */

  {
    marca: "HVAC PRO",
    modelo: "TESTE OFICIAL AZUL",
    codigoBusca: [
      "TESTE-AZUL",
      "TESTE AZUL",
      "AZUL",
      "OFICIAL"
    ],
    linha: "Teste de lógica de cores",
    tipo: "Registro de teste",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    cargaGas: "500 g",
    correnteNominal: "6 A",
    disjuntor: "10 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    manualInstalacao: "https://example.com/teste-oficial",
    manualManutencao: "https://example.com/teste-oficial",
    fonte: "Teste oficial - simulação de site oficial/fabricante/manual oficial",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "HVAC PRO",
    modelo: "TESTE CONFIÁVEL VERDE",
    codigoBusca: [
      "TESTE-VERDE",
      "TESTE VERDE",
      "VERDE",
      "CONFIAVEL_NAO_OFICIAL",
      "CONFIÁVEL NÃO OFICIAL"
    ],
    linha: "Teste de lógica de cores",
    tipo: "Registro de teste",
    capacidade: "18.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R410A",
    cargaGas: "900 g",
    correnteNominal: "9 A",
    disjuntor: "16 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "1/2 pol.",
    manualInstalacao: "https://example.com/teste-verde",
    manualManutencao: "https://example.com/teste-verde",
    fonte: "Teste confiável não oficial - simulação de distribuidor técnico autorizado/catálogo técnico",
    fonteTipo: "CONFIAVEL_NAO_OFICIAL",
    nivelConfianca: "CONFIAVEL_NAO_OFICIAL",
    status: "CONFIAVEL_NAO_OFICIAL"
  },

  {
    marca: "HVAC PRO",
    modelo: "TESTE SUGERIDO BRANCO",
    codigoBusca: [
      "TESTE-BRANCO",
      "TESTE BRANCO",
      "BRANCO",
      "INFORMACAO_SUGERIDA",
      "INFORMAÇÃO SUGERIDA"
    ],
    linha: "Teste de lógica de cores",
    tipo: "Registro de teste",
    capacidade: "9.000 BTU/h",
    tensao: "127V",
    fluidoRefrigerante: "R22",
    cargaGas: "Informação sugerida: 450 g",
    correnteNominal: "Informação sugerida: 5 A",
    disjuntor: "Informação sugerida: 10 A",
    tubulacaoAlta: "Informação sugerida: 1/4 pol.",
    tubulacaoBaixa: "Informação sugerida: 3/8 pol.",
    manualInstalacao: "https://example.com/teste-branco",
    manualManutencao: "https://example.com/teste-branco",
    fonte: "Informação sugerida por usuário/internet/campo - teste branco",
    fonteTipo: "INFORMACAO_SUGERIDA",
    nivelConfianca: "INFORMACAO_SUGERIDA",
    status: "INFORMACAO_SUGERIDA"
  },

  /* =========================
     BASE OFICIAL ESTÁVEL RESTAURADA
     ========================= */

  {
    marca: "Midea",
    modelo: "Xtreme Save AI Connect R32",
    codigoBusca: [
      "MIDEA",
      "MIDEIA",
      "XTREME SAVE",
      "XTREME SAVE AI CONNECT",
      "AGVCJ",
      "R32",
      "42AGVCJ",
      "38AGVCJ"
    ],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "Validar etiqueta/manual conforme código exato da unidade",
    anoFabricacao: "Validar etiqueta/manual",
    fluidoRefrigerante: "R32",
    correnteNominal: "Não informado no manual oficial para todos os modelos da linha; validar tabela/etiqueta do modelo exato",
    superaquecimento: "Validar procedimento técnico do fabricante",
    subresfriamento: "Validar procedimento técnico do fabricante",
    capacitor: "Não informado no manual oficial",
    placaEletronica: "Não informado no manual oficial",
    tubulacaoAlta: "Validar tabela do modelo/capacidade no manual oficial",
    tubulacaoBaixa: "Validar tabela do modelo/capacidade no manual oficial",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Midea oficial - conteúdo/manual do fabricante",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Midea",
    modelo: "Multi Inverter / FreeMatch",
    codigoBusca: [
      "MIDEA",
      "MIDEIA",
      "MULTI INVERTER",
      "FREEMATCH",
      "FREE MATCH",
      "42AGMSB",
      "42MGMSB",
      "40KVAQ",
      "40KVBQ",
      "42BQ"
    ],
    linha: "Multi Inverter / FreeMatch",
    tipo: "Multi Split Inverter / Hi Wall / Cassette / Built In conforme combinação",
    capacidade: "Validar combinação de unidades no manual oficial",
    anoFabricacao: "Validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    correnteNominal: "Validar tabela elétrica do manual oficial e etiqueta da unidade externa",
    superaquecimento: "Validar procedimento técnico do fabricante",
    subresfriamento: "Validar procedimento técnico do fabricante",
    capacitor: "Não informado no manual oficial para todos os conjuntos",
    placaEletronica: "Não informado no manual oficial",
    tubulacaoAlta: "Validar tabela de tubulação por combinação/capacidade no manual oficial",
    tubulacaoBaixa: "Validar tabela de tubulação por combinação/capacidade no manual oficial",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-multisplit-instalacao.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/ar-condicionado-multisplit-instalacao.pdf",
    fonte: "Midea oficial - Manual de Instalação, Operação e Manutenção",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Gree",
    modelo: "G-Diamond Auto Inverter",
    codigoBusca: [
      "GREE",
      "G DIAMOND",
      "G-DIAMOND",
      "G-DIAMOND AUTO INVERTER",
      "DIAMOND AUTO",
      "AUTO INVERTER",
      "R32"
    ],
    linha: "G-Diamond Auto Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "Validar etiqueta/manual conforme código exato",
    anoFabricacao: "Validar etiqueta/manual",
    fluidoRefrigerante: "R32 quando aplicável ao modelo indicado no manual oficial",
    correnteNominal: "Validar tabela técnica/etiqueta da unidade",
    superaquecimento: "Validar procedimento técnico do fabricante",
    subresfriamento: "Validar procedimento técnico do fabricante",
    capacitor: "Não informado no manual oficial para todos os modelos da linha",
    placaEletronica: "Não informado no manual oficial",
    tubulacaoAlta: "Validar tabela do modelo/capacidade no manual oficial",
    tubulacaoBaixa: "Validar tabela do modelo/capacidade no manual oficial",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    fonte: "Gree oficial - Manual G-Diamond Auto Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Gree",
    modelo: "G-Diamond Top",
    codigoBusca: [
      "GREE",
      "G DIAMOND TOP",
      "G-DIAMOND TOP",
      "DIAMOND TOP"
    ],
    linha: "G-Diamond Top",
    tipo: "Split Hi Wall",
    capacidade: "Validar etiqueta/manual conforme código exato",
    anoFabricacao: "Validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    correnteNominal: "Validar tabela técnica/etiqueta da unidade",
    superaquecimento: "Validar procedimento técnico do fabricante",
    subresfriamento: "Validar procedimento técnico do fabricante",
    capacitor: "Não informado no manual oficial",
    placaEletronica: "Não informado no manual oficial",
    tubulacaoAlta: "Validar tabela do modelo/capacidade no manual oficial",
    tubulacaoBaixa: "Validar tabela do modelo/capacidade no manual oficial",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-DIAMOND-TOP-Rev-000-full.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-DIAMOND-TOP-Rev-000-full.pdf",
    fonte: "Gree oficial - Manual G-Diamond Top",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Gree",
    modelo: "Materiais Técnicos Gree",
    codigoBusca: [
      "GREE",
      "MANUAIS GREE",
      "MATERIAIS TECNICOS GREE",
      "MATERIAIS TÉCNICOS GREE",
      "G TOP",
      "G-DIAMOND",
      "G-PRIME",
      "G-LINEA",
      "G-CLASSIC",
      "PISO TETO GREE",
      "CASSETE GREE"
    ],
    linha: "Portal oficial de materiais técnicos Gree",
    tipo: "Portal oficial de consulta por linha/modelo",
    capacidade: "Validar no manual específico da linha/modelo",
    anoFabricacao: "Validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    correnteNominal: "Validar manual específico e etiqueta da unidade",
    superaquecimento: "Validar procedimento técnico do fabricante",
    subresfriamento: "Validar procedimento técnico do fabricante",
    capacitor: "Validar manual específico da linha/modelo",
    placaEletronica: "Validar manual específico da linha/modelo",
    tubulacaoAlta: "Validar manual específico da linha/modelo",
    tubulacaoBaixa: "Validar manual específico da linha/modelo",
    manualInstalacao: "https://gree.com.br/manuais/",
    manualManutencao: "https://gree.com.br/manuais/",
    fonte: "Gree oficial - página de materiais técnicos",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "LG",
    modelo: "Portal oficial de manuais LG Ar-Condicionado",
    codigoBusca: [
      "LG",
      "DUAL INVERTER",
      "LG DUAL INVERTER",
      "ARTCOOL",
      "LG MANUAL",
      "LG MANUAIS",
      "LG AR CONDICIONADO"
    ],
    linha: "Portal oficial LG de manuais e downloads",
    tipo: "Portal oficial de consulta por modelo",
    capacidade: "Validar pelo código exato no portal LG",
    anoFabricacao: "Validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    correnteNominal: "Validar manual do modelo exato e etiqueta da unidade",
    superaquecimento: "Validar procedimento técnico do fabricante",
    subresfriamento: "Validar procedimento técnico do fabricante",
    capacitor: "Validar manual do modelo exato",
    placaEletronica: "Validar manual do modelo exato",
    tubulacaoAlta: "Validar manual do modelo exato",
    tubulacaoBaixa: "Validar manual do modelo exato",
    manualInstalacao: "https://www.lg.com/br/suporte/manuais-sistema/",
    manualManutencao: "https://www.lg.com/br/business/manual/",
    fonte: "LG oficial - suporte/manuais e LG Business manual download",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Samsung",
    modelo: "WindFree 12000 BTU Frio AR12MVPXAWKNAZ",
    codigoBusca: [
      "SAMSUNG",
      "WINDFREE",
      "WIND FREE",
      "AR12MVPXAWKNAZ",
      "AR12MVPX",
      "12000 BTU SAMSUNG"
    ],
    linha: "WindFree",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    anoFabricacao: "Validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    correnteNominal: "Validar manual/etiqueta do modelo exato",
    superaquecimento: "Validar procedimento técnico do fabricante",
    subresfriamento: "Validar procedimento técnico do fabricante",
    capacitor: "Não informado no manual oficial",
    placaEletronica: "Não informado no manual oficial",
    tubulacaoAlta: "Validar manual/etiqueta do modelo exato",
    tubulacaoBaixa: "Validar manual/etiqueta do modelo exato",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12MVPXAWKNAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12MVPXAWKNAZ/",
    fonte: "Samsung oficial - página de suporte do modelo com baixar manual",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Samsung",
    modelo: "WindFree AI 12000 BTU Frio Wi-Fi AR12DYFABWKNAZ",
    codigoBusca: [
      "SAMSUNG",
      "WINDFREE AI",
      "WIND FREE AI",
      "AR12DYFABWKNAZ",
      "AR12DYFAB",
      "12000 BTU SAMSUNG WIFI"
    ],
    linha: "WindFree AI",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "12.000 BTU/h",
    anoFabricacao: "Validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    correnteNominal: "Validar manual/etiqueta do modelo exato",
    superaquecimento: "Validar procedimento técnico do fabricante",
    subresfriamento: "Validar procedimento técnico do fabricante",
    capacitor: "Não informado no manual oficial",
    placaEletronica: "Não informado no manual oficial",
    tubulacaoAlta: "Validar manual/etiqueta do modelo exato",
    tubulacaoBaixa: "Validar manual/etiqueta do modelo exato",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12DYFABWKNAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12DYFABWKNAZ/",
    fonte: "Samsung oficial - página de suporte do modelo com baixar manual",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  }
];
