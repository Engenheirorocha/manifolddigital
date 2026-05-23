/* HVAC PRO - databases/acervo_tecnico.js
   ACERVO TÉCNICO - ETAPA 3 DE 4 - FINAL LIMPO

   INSTRUÇÃO:
   - Apagar tudo do arquivo databases/acervo_tecnico.js
   - Colar este arquivo inteiro
   - Commit changes

   NÃO MEXER:
   - app.js
   - index.html
   - style.css

   LÓGICA VALIDADA:
   - Cada campo técnico tem sua própria confiança em confiancaCampos.
   - O mesmo equipamento pode ter campos azuis, verdes e brancos.

   CORES NO APP:
   - OFICIAL = azul
   - CONFIAVEL_NAO_OFICIAL = verde
   - INFORMACAO_SUGERIDA = branco

   ETAPA 3/4:
   Mantém a Etapa 2 e adiciona reforços de mercado:
   - York / Johnson Controls
   - Mitsubishi Electric
   - Rheem
   - Comfee
   - Fontaine
   - Carrier / Springer Carrier legado
   - Midea Piso Teto / Cassete / Comercial leve
   - Gree Piso Teto / Cassete / G-Max MultiSplit
   - Consul Janela
   - Philco Portátil
*/

window.acervoTecnico = [

  /* =========================================================
     1. MIDEA
     ========================================================= */

  {
    marca: "Midea",
    modelo: "Midea Xtreme Save AI Connect AGVCJ R32 9000 12000 BTU",
    codigoBusca: ["MIDEA", "MIDEIA", "XTREME SAVE", "XTREME SAVE AI", "XTREME SAVE AI CONNECT", "AGVCJ", "42AGVCJ", "38AGVCJ", "42AGVCJ09M5", "38AGVCJ09M5", "42AGVCJ12M5", "38AGVCJ12M5", "42AGVCJ09", "38AGVCJ09", "42AGVCJ12", "38AGVCJ12", "MIDEA R32", "MIDEA 9000 R32", "MIDEA 12000 R32"],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "9.000 / 12.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    cargaGas: "9.000: 320 g até 5 m | 12.000: 440 g até 5 m",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    comprimentoMaximo: "25 m",
    desnivelMaximo: "10 m",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Base tecnica HVAC PRO - Midea Xtreme Save AI Connect",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", tensao: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL", cargaGas: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", tensao: "OFICIAL", fluidoRefrigerante: "OFICIAL", cargaGas: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL" }
  },

  {
    marca: "Midea",
    modelo: "Midea Xtreme Save Connect AGVCI R32 9000 12000 18000 24000 BTU",
    codigoBusca: ["MIDEA AGVCI", "XTREME SAVE CONNECT", "42AGVCI", "38AGVCI", "42AGVCI09M5", "38AGVCI09M5", "42AGVCI12M5", "38AGVCI12M5", "42AGVCI18M5", "38AGVCI18M5", "42AGVCI24M5", "38AGVCI24M5", "MIDEA XTREME SAVE 9000", "MIDEA XTREME SAVE 12000", "MIDEA XTREME SAVE 18000", "MIDEA XTREME SAVE 24000"],
    linha: "Xtreme Save Connect",
    tipo: "Split Hi Wall Inverter Frio / Quente-Frio conforme modelo",
    capacidade: "9.000 / 12.000 / 18.000 / 24.000 BTU/h conforme modelo",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-split-inverter-24000-btus-xtremesave-quente-e-frio-midea.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/ar-condicionado-split-inverter-24000-btus-xtremesave-quente-e-frio-midea.pdf",
    fonte: "Base tecnica HVAC PRO - Midea Xtreme Save Connect",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", tensao: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", tensao: "OFICIAL", fluidoRefrigerante: "OFICIAL" }
  },

  {
    marca: "Midea",
    modelo: "Midea Multi Inverter FreeMatch",
    codigoBusca: ["MIDEA MULTI", "MULTI INVERTER", "FREEMATCH", "FREE MATCH", "42AGMSB", "42MGMSB", "40KVAQ", "40KVBQ", "42BQ", "MIDEA MULTISPLIT"],
    linha: "Multi Inverter / FreeMatch",
    tipo: "Multi Split Inverter / Hi Wall / Cassete / Built-in conforme combinação",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-multisplit-instalacao.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/ar-condicionado-multisplit-instalacao.pdf",
    fonte: "Base tecnica HVAC PRO - Midea Multi Inverter FreeMatch",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  {
    marca: "Midea",
    modelo: "Midea Piso Teto Inverter 36000 48000 60000 BTU",
    codigoBusca: ["MIDEA PISO TETO", "PISO TETO MIDEA", "MIDEA PISO TETO INVERTER", "MIDEA 36000", "MIDEA 48000", "MIDEA 60000", "42ZQ", "38ZQ", "42Q", "38Q"],
    linha: "Piso Teto Inverter",
    tipo: "Split Piso Teto",
    capacidade: "36.000 / 48.000 / 60.000 BTU/h conforme modelo",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/",
    manualManutencao: "https://conteudo.midea.com.br/manuais/",
    fonte: "Base tecnica HVAC PRO - Midea Piso Teto",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL" }
  },

  {
    marca: "Midea",
    modelo: "Midea Cassete Inverter 24000 36000 48000 60000 BTU",
    codigoBusca: ["MIDEA CASSETE", "MIDEA CASSETTE", "CASSETE MIDEA", "CASSETTE MIDEA", "MIDEA 24000 CASSETE", "MIDEA 36000 CASSETE", "MIDEA 48000 CASSETE", "MIDEA 60000 CASSETE", "42BQ", "38CQ"],
    linha: "Cassete Inverter",
    tipo: "Split Cassete",
    capacidade: "24.000 / 36.000 / 48.000 / 60.000 BTU/h conforme modelo",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/",
    manualManutencao: "https://conteudo.midea.com.br/manuais/",
    fonte: "Base tecnica HVAC PRO - Midea Cassete",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL" }
  },

  /* =========================================================
     2. GREE
     ========================================================= */

  {
    marca: "Gree",
    modelo: "Gree G-Diamond Auto Inverter R32 9000 12000 18000 24000 BTU",
    codigoBusca: ["GREE", "G DIAMOND", "G-DIAMOND", "G-DIAMOND AUTO", "G-DIAMOND AUTO INVERTER", "GWC09ACA-D6DNA1A", "GWH09ACA-D6DNA1A", "GWC12ACC-D6DNA1A", "GWH12ACC-D6DNA1A", "GWC18ACD-D6DNA1C", "GWH18ACD-D6DNA1C", "GWC24ACE-D6DNA1B", "GWH24ACE-D6DNA1B", "GREE R32", "GREE 9000", "GREE 12000", "GREE 18000", "GREE 24000"],
    linha: "G-Diamond Auto Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 / 18.000 / 24.000 BTU/h",
    tensao: "220V / 60Hz / monofásico",
    fluidoRefrigerante: "R32",
    cargaGas: "9.000: 550 g | 12.000: 630 g | 18.000: 940 g | 24.000: 1100 g",
    correnteNominal: "9.000: 6 A | 12.000: 10,6 A | 18.000: 13,5 A | 24.000: 13,5 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "9.000: 3/8 pol. | 12.000/18.000/24.000: 1/2 pol.",
    comprimentoMaximo: "9.000: 15 m | 12.000: 20 m | 18.000/24.000: 25 m",
    desnivelMaximo: "10 m",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    fonte: "Base tecnica HVAC PRO - Gree G-Diamond Auto Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL", tensao: "CONFIAVEL_NAO_OFICIAL", cargaGas: "CONFIAVEL_NAO_OFICIAL", correnteNominal: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", fluidoRefrigerante: "OFICIAL", tensao: "CONFIAVEL_NAO_OFICIAL", cargaGas: "CONFIAVEL_NAO_OFICIAL", correnteNominal: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL" }
  },

  {
    marca: "Gree",
    modelo: "Gree G-Prime Inverter Compact",
    codigoBusca: ["GREE G PRIME", "G-PRIME", "G-PRIME INVERTER", "G-PRIME INVERTER COMPACT", "G PRIME INVERTER COMPACT", "GREE G-PRIME COMPACT"],
    linha: "G-Prime Inverter Compact",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    fonte: "Base tecnica HVAC PRO - Gree G-Prime Inverter Compact",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  {
    marca: "Gree",
    modelo: "Gree Piso Teto Cassete e MultiSplit G-Max",
    codigoBusca: ["GREE PISO TETO", "GREE CASSETE", "GREE CASSETTE", "GREE MULTISPLIT", "GREE MULTI SPLIT", "GREE G-MAX", "G-MAX MULTISPLIT", "PISO TETO GREE", "CASSETE GREE", "CASSETTE GREE", "MULTI SPLIT GREE"],
    linha: "Piso Teto / Cassete / G-Max Multisplit",
    tipo: "Comercial leve / Multi Split conforme linha",
    manualInstalacao: "https://gree.com.br/manuais/",
    manualManutencao: "https://gree.com.br/manuais/",
    fonte: "Base tecnica HVAC PRO - Gree Comercial Leve",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  {
    marca: "Gree",
    modelo: "Gree Janela Portatil G-Top G-Classic G-Linea",
    codigoBusca: ["GREE JANELA", "JANELA GREE", "GREE PORTATIL", "GREE PORTÁTIL", "PORTATIL GREE", "PORTÁTIL GREE", "G-TOP", "G CLASSIC", "G-CLASSIC", "G-LINEA", "G LINEA"],
    linha: "Janela / Portátil / G-Top / G-Classic / G-Línea",
    tipo: "Janela / Portátil / Split Hi Wall conforme linha",
    manualInstalacao: "https://gree.com.br/manuais/",
    manualManutencao: "https://gree.com.br/manuais/",
    fonte: "Base tecnica HVAC PRO - Gree linhas complementares",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     3. LG
     ========================================================= */

  {
    marca: "LG",
    modelo: "LG S4-Q12JA315 Dual Inverter Voice 12000 BTU Frio 220V",
    codigoBusca: ["LG", "S4-Q12JA315", "S4Q12JA315", "DUAL INVERTER", "DUAL INVERTER VOICE", "LG DUAL INVERTER VOICE 12000", "LG 12000 FRIO", "12000 BTU LG 220V"],
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R410A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    manualInstalacao: "https://www.lg.com/br/ar-condicionado-residencial/ar-condicionado-split/s4-q12ja315/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "Base tecnica HVAC PRO - LG S4-Q12JA315",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", tensao: "FABRICANTE_OFICIAL", fluidoRefrigerante: "INFORMACAO_SUGERIDA", tubulacaoAlta: "INFORMACAO_SUGERIDA", tubulacaoBaixa: "INFORMACAO_SUGERIDA" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", tensao: "OFICIAL", fluidoRefrigerante: "INFORMACAO_SUGERIDA", tubulacaoAlta: "INFORMACAO_SUGERIDA", tubulacaoBaixa: "INFORMACAO_SUGERIDA" }
  },

  {
    marca: "LG",
    modelo: "LG S4-W12JA31A Dual Inverter Voice 12000 BTU Quente Frio 220V",
    codigoBusca: ["LG S4-W12JA31A", "S4-W12JA31A", "S4W12JA31A", "LG DUAL INVERTER VOICE QUENTE FRIO", "LG 12000 QUENTE FRIO"],
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Inverter Quente/Frio",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    manualInstalacao: "https://www.lg.com/br/ar-condicionado-residencial/ar-condicionado-residencial-inverter/s4-w12ja31a/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "Base tecnica HVAC PRO - LG S4-W12JA31A",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", tensao: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", tensao: "OFICIAL" }
  },

  {
    marca: "LG",
    modelo: "LG Dual Inverter AI Voice Artcool Multi Split Portatil",
    codigoBusca: ["LG DUAL INVERTER AI", "LG DUAL INVERTER VOICE", "LG ARTCOOL", "ARTCOOL", "LG MULTI SPLIT", "LG MULTISPLIT", "LG PORTATIL", "LG PORTÁTIL", "LG 9000", "LG 18000", "LG 24000", "LG 30000"],
    linha: "Dual Inverter / Artcool / Multi Split / Portátil",
    tipo: "Split Hi Wall / Multi Split / Portátil conforme modelo",
    manualInstalacao: "https://www.lg.com/br/suporte/manuais-sistema/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "Base tecnica HVAC PRO - LG linhas complementares",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     4. SAMSUNG
     ========================================================= */

  {
    marca: "Samsung",
    modelo: "Samsung AR12MVPXAWKNAZ WindFree 12000 BTU Frio",
    codigoBusca: ["SAMSUNG", "AR12MVPXAWKNAZ", "AR12MVPX", "AR12MVPXAWK", "WINDFREE", "WIND FREE", "SAMSUNG WINDFREE 12000", "12000 BTU SAMSUNG"],
    linha: "WindFree",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12MVPXAWKNAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12MVPXAWKNAZ/",
    fonte: "Base tecnica HVAC PRO - Samsung AR12MVPXAWKNAZ",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL" }
  },

  {
    marca: "Samsung",
    modelo: "Samsung AR12DYFABWKNAZ WindFree AI 12000 BTU Frio Wi-Fi",
    codigoBusca: ["SAMSUNG AR12DYFABWKNAZ", "AR12DYFABWKNAZ", "AR12DYFAB", "AR12DYFABWK", "WINDFREE AI", "WIND FREE AI", "SAMSUNG WINDFREE AI 12000", "12000 BTU SAMSUNG WIFI"],
    linha: "WindFree AI",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12DYFABWKNAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12DYFABWKNAZ/",
    fonte: "Base tecnica HVAC PRO - Samsung AR12DYFABWKNAZ",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL" }
  },

  {
    marca: "Samsung",
    modelo: "Samsung AR12DXFAAWKXAZ WindFree 12000 BTU",
    codigoBusca: ["SAMSUNG AR12DXFAAWKXAZ", "AR12DXFAAWKXAZ", "AR12DXFAA", "WINDFREE DXFA", "SAMSUNG DXFA"],
    linha: "WindFree",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12DXFAAWKXAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12DXFAAWKXAZ/",
    fonte: "Base tecnica HVAC PRO - Samsung AR12DXFAAWKXAZ",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL" }
  },

  {
    marca: "Samsung",
    modelo: "Samsung WindFree PowerVolt Digital Inverter e WindFree Connect",
    codigoBusca: ["SAMSUNG WINDFREE", "WINDFREE POWER VOLT", "WINDFREE POWERVOLT", "SAMSUNG DIGITAL INVERTER", "SAMSUNG WIND FREE", "SAMSUNG CONNECT", "AR09", "AR12", "AR18", "AR24", "SAMSUNG 9000", "SAMSUNG 18000", "SAMSUNG 24000"],
    linha: "WindFree / Digital Inverter / PowerVolt",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://www.samsung.com/br/support/",
    manualManutencao: "https://www.samsung.com/br/support/",
    fonte: "Base tecnica HVAC PRO - Samsung linhas complementares",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     5. ELGIN
     ========================================================= */

  {
    marca: "Elgin",
    modelo: "Elgin Eco Inverter II Wi-Fi HJFC12C2WBCB 12000 BTU Frio 220V",
    codigoBusca: ["ELGIN", "ECO INVERTER II", "ECO INVERTER II WIFI", "ECO INVERTER II WI-FI", "HJFC12C2WBCB", "HJFI12C2WB", "HJFE12C2CB", "ELGIN HJFC12", "ELGIN 12000 R32", "ELGIN 12000 FRIO"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "12.000 BTU/h",
    tensao: "220V / monofásico",
    fluidoRefrigerante: "R32",
    correnteNominal: "6,7 A corrente máxima",
    disjuntor: "10 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    comprimentoMaximo: "15 m",
    desnivelMaximo: "7 m",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-inverter-ii-12000-btus-frio-wifi-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Base tecnica HVAC PRO - Elgin Eco Inverter II",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", tensao: "CONFIAVEL_NAO_OFICIAL", fluidoRefrigerante: "CONFIAVEL_NAO_OFICIAL", correnteNominal: "CONFIAVEL_NAO_OFICIAL", disjuntor: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", tensao: "CONFIAVEL_NAO_OFICIAL", fluidoRefrigerante: "CONFIAVEL_NAO_OFICIAL", correnteNominal: "CONFIAVEL_NAO_OFICIAL", disjuntor: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL" }
  },

  {
    marca: "Elgin",
    modelo: "Elgin Eco Inverter II Wi-Fi HJFC09C2WBCB 9000 BTU Frio 220V",
    codigoBusca: ["ELGIN HJFC09C2WBCB", "HJFC09C2WBCB", "HJFI09C2WB", "HJFE09C2CB", "ELGIN HJFC09", "ELGIN 9000 R32", "ELGIN 9000 FRIO"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "9.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    correnteNominal: "7,3 A corrente máxima",
    disjuntor: "10 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    comprimentoMaximo: "15 m",
    desnivelMaximo: "7 m",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-inverter-ii-9000-btus-frio-wifi-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Base tecnica HVAC PRO - Elgin Eco Inverter II 9000",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", tensao: "CONFIAVEL_NAO_OFICIAL", fluidoRefrigerante: "CONFIAVEL_NAO_OFICIAL", correnteNominal: "CONFIAVEL_NAO_OFICIAL", disjuntor: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", tensao: "CONFIAVEL_NAO_OFICIAL", fluidoRefrigerante: "CONFIAVEL_NAO_OFICIAL", correnteNominal: "CONFIAVEL_NAO_OFICIAL", disjuntor: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL" }
  },

  {
    marca: "Elgin",
    modelo: "Elgin Cassete Piso Teto Eco Inverter",
    codigoBusca: ["ELGIN CASSETE", "ELGIN CASSETTE", "CASSETE ELGIN", "CASSETTE ELGIN", "ELGIN PISO TETO", "PISO TETO ELGIN", "ELGIN 36000", "ELGIN 48000", "ELGIN 60000"],
    linha: "Cassete / Piso Teto Eco Inverter",
    tipo: "Comercial leve",
    manualInstalacao: "https://www.elgin.com.br/manuals",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Base tecnica HVAC PRO - Elgin comercial leve",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     6. KOMECO
     ========================================================= */

  {
    marca: "Komeco",
    modelo: "Komeco KOHI 09QC 1HV Inverter 9000 BTU",
    codigoBusca: ["KOMECO", "KOHI", "KOHI09QC1HV", "KOHI 09QC 1HV", "KOHI 09", "KOMECO KOHI 09QC", "KOMECO 9000"],
    linha: "KOHI Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    fluidoRefrigerante: "A2L baixa inflamabilidade conforme manual da linha",
    tubulacaoAlta: "Descarga: 1/4 pol. (6,35 mm)",
    tubulacaoBaixa: "Sucção: 1/2 pol. (12,7 mm)",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/MANUAL%20DE%20SERVICO%20INVERTER.PDF",
    fonte: "Base tecnica HVAC PRO - Komeco KOHI 09",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL", tubulacaoAlta: "FABRICANTE_OFICIAL", tubulacaoBaixa: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", fluidoRefrigerante: "OFICIAL", tubulacaoAlta: "OFICIAL", tubulacaoBaixa: "OFICIAL" }
  },

  {
    marca: "Komeco",
    modelo: "Komeco KOHI 12QC 1HV Inverter 12000 BTU",
    codigoBusca: ["KOMECO KOHI12QC1HV", "KOHI12QC1HV", "KOHI 12QC 1HV", "KOHI 12", "KOMECO KOHI 12QC", "KOMECO 12000"],
    linha: "KOHI Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    fluidoRefrigerante: "A2L baixa inflamabilidade conforme manual da linha",
    tubulacaoAlta: "Descarga: 3/8 pol. (9,52 mm)",
    tubulacaoBaixa: "Sucção: 1/4 pol. (6,35 mm)",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/MANUAL%20DE%20SERVICO%20INVERTER.PDF",
    fonte: "Base tecnica HVAC PRO - Komeco KOHI 12",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL", tubulacaoAlta: "FABRICANTE_OFICIAL", tubulacaoBaixa: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", fluidoRefrigerante: "OFICIAL", tubulacaoAlta: "OFICIAL", tubulacaoBaixa: "OFICIAL" }
  },

  {
    marca: "Komeco",
    modelo: "Komeco KOP Piso Teto KOC Cassete KOHV Hi Wall",
    codigoBusca: ["KOMECO PISO TETO", "KOMECO CASSETE", "KOMECO CASSETTE", "KOMECO KOP", "KOMECO KOC", "KOMECO KOHV", "KOP", "KOC", "KOHV", "KOMECO COMERCIAL"],
    linha: "Piso Teto / Cassete / Hi Wall",
    tipo: "Comercial leve / Split Hi Wall conforme modelo",
    manualInstalacao: "https://www.komeco.com.br/portaltecnico/",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/",
    fonte: "Base tecnica HVAC PRO - Komeco linhas complementares",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     7. DAIKIN
     ========================================================= */

  {
    marca: "Daikin",
    modelo: "Daikin EcoSwing R32",
    codigoBusca: ["DAIKIN", "ECOSWING", "ECO SWING", "ECOSWING R32", "ECO SWING R32", "FTKP12Q5VL", "RKP12Q5VL", "DAIKIN R32", "DAIKIN 9000", "DAIKIN 12000", "DAIKIN 18000", "DAIKIN 24000"],
    linha: "EcoSwing R-32",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 / 18.000 / 24.000 BTU/h conforme modelo",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/profissionais/downloads",
    manualManutencao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Base tecnica HVAC PRO - Daikin EcoSwing R32",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", fluidoRefrigerante: "OFICIAL" }
  },

  {
    marca: "Daikin",
    modelo: "Daikin EcoSwing Smart Gold R32",
    codigoBusca: ["DAIKIN SMART GOLD", "ECOSWING SMART GOLD", "ECO SWING SMART GOLD", "SPLIT ECOSWING SMART GOLD", "DAIKIN GOLD R32"],
    linha: "EcoSwing Smart Gold R-32",
    tipo: "Split Hi Wall Inverter Premium",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/produto/split-ecoswing-smart-gold-r-32",
    manualManutencao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Base tecnica HVAC PRO - Daikin EcoSwing Smart Gold",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", fluidoRefrigerante: "OFICIAL" }
  },

  {
    marca: "Daikin",
    modelo: "Daikin SkyAir Cassete Multi Split VRV VRF",
    codigoBusca: ["DAIKIN SKYAIR", "SKYAIR", "DAIKIN CASSETE", "DAIKIN CASSETTE", "DAIKIN MULTI SPLIT", "DAIKIN MULTISPLIT", "DAIKIN VRV", "DAIKIN VRF", "DAIKIN COMERCIAL"],
    linha: "SkyAir / Multi Split / VRV",
    tipo: "Cassete / Multi Split / VRV conforme sistema",
    manualInstalacao: "https://www.daikin.com.br/profissionais/downloads",
    manualManutencao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Base tecnica HVAC PRO - Daikin comercial",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     8. CONSUL
     ========================================================= */

  {
    marca: "Consul",
    modelo: "Consul CBK12EBBCJ Dual Inverter Cobre Frio 12000 BTU",
    codigoBusca: ["CONSUL", "CBK12EBBCJ", "CBK12EB", "DUAL INVERTER CONSUL", "CONSUL DUAL INVERTER", "CONSUL 12000", "CONSUL COBRE FRIO"],
    linha: "Dual Inverter Cobre Frio",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.consul.com.br/ar-condicionado-split-consul-dual-inverter-cobre-frio-12000-btus-cbk12eb/p",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Base tecnica HVAC PRO - Consul CBK12EBBCJ",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL" }
  },

  {
    marca: "Consul",
    modelo: "Consul CBK12DBXCJ Triple Inverter Cobre Frio 12000 BTU",
    codigoBusca: ["CONSUL CBK12DBXCJ", "CBK12DBXCJ", "CONSUL TRIPLE INVERTER", "TRIPLE INVERTER CONSUL", "CONSUL 12000 TRIPLE"],
    linha: "Triple Inverter Cobre Frio",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.consul.com.br/ar-condicionado-split-consul-triple-inverter-cobre-frio-12000-btus-cbk12dbxcj/p",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Base tecnica HVAC PRO - Consul CBK12DBXCJ",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL" }
  },

  {
    marca: "Consul",
    modelo: "Consul Janela Inverter e Janela Convencional",
    codigoBusca: ["CONSUL JANELA", "JANELA CONSUL", "CONSUL JANELA INVERTER", "CONSUL JANELA 7500", "CONSUL JANELA 10000", "CONSUL JANELA 12000", "CCB07", "CCK07", "CCN10", "CCN12"],
    linha: "Janela / Janela Inverter",
    tipo: "Ar-condicionado de janela",
    manualInstalacao: "https://www.consul.com.br/eletrodomesticos/ar-condicionado/ar-condicionado-janela",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Base tecnica HVAC PRO - Consul Janela",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     9. ELECTROLUX
     ========================================================= */

  {
    marca: "Electrolux",
    modelo: "Electrolux QI12F QE12F Inverter Split 12000 BTU Frio 220V",
    codigoBusca: ["ELECTROLUX", "QI12F", "QE12F", "QI12F/QE12F", "ELECTROLUX QI12F", "ELECTROLUX QE12F", "ELECTROLUX INVERTER 12000", "ELECTROLUX 12000 FRIO"],
    linha: "Split Inverter",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    manualInstalacao: "https://loja.electrolux.com.br/ar-condicionado-split-electrolux-inverter-12000-btus-frio-qi12f-qe12f/p",
    manualManutencao: "https://cuida.electrolux.com.br/guias-e-manuais",
    fonte: "Base tecnica HVAC PRO - Electrolux QI12F QE12F",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", tensao: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", tensao: "OFICIAL" }
  },

  {
    marca: "Electrolux",
    modelo: "Electrolux JI12R JE12R Color Adapt Inverter 12000 BTU Quente Frio",
    codigoBusca: ["ELECTROLUX JI12R", "ELECTROLUX JE12R", "JI12R", "JE12R", "JI12R/JE12R", "COLOR ADAPT", "ELECTROLUX COLOR ADAPT", "ELECTROLUX QUENTE FRIO 12000"],
    linha: "Color Adapt Inverter",
    tipo: "Split Hi Wall Inverter Quente/Frio",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://loja.electrolux.com.br/ar-condicionado-split-electrolux-inverter-12000-btus-color-adapt-quente-frio-ji12r-je12r/p",
    manualManutencao: "https://cuida.electrolux.com.br/guias-e-manuais",
    fonte: "Base tecnica HVAC PRO - Electrolux JI12R JE12R",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL" }
  },

  {
    marca: "Electrolux",
    modelo: "Electrolux Piso Teto Cassete Comercial Leve",
    codigoBusca: ["ELECTROLUX PISO TETO", "PISO TETO ELECTROLUX", "ELECTROLUX CASSETE", "ELECTROLUX CASSETTE", "ELECTROLUX COMERCIAL", "ELECTROLUX 36000", "ELECTROLUX 48000", "ELECTROLUX 60000"],
    linha: "Piso Teto / Cassete / Comercial leve",
    tipo: "Comercial leve",
    manualInstalacao: "https://cuida.electrolux.com.br/guias-e-manuais",
    manualManutencao: "https://cuida.electrolux.com.br/guias-e-manuais",
    fonte: "Base tecnica HVAC PRO - Electrolux comercial leve",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     10. PHILCO
     ========================================================= */

  {
    marca: "Philco",
    modelo: "Philco PAC12QC Split Inverter 12000 BTU",
    codigoBusca: ["PHILCO", "PAC12QC", "PHILCO PAC12QC", "PHILCO SPLIT INVERTER 12000", "PHILCO 12000", "PAC12QC SPLIT"],
    linha: "Split Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.philco.com.br/ar-condicionado-split-12000-pac12qc/p",
    manualManutencao: "https://www.philco.com.br/ar-condicionado-split-12000-pac12qc/p",
    fonte: "Base tecnica HVAC PRO - Philco PAC12QC",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL" }
  },

  {
    marca: "Philco",
    modelo: "Philco PAC12QA Inverter Espelhado 12000 BTU Quente Frio R32",
    codigoBusca: ["PHILCO PAC12QA", "PAC12QA", "PHILCO ESPELHADO", "PHILCO R32", "PHILCO QUENTE FRIO 12000", "PAC12QA R32"],
    linha: "Inverter Espelhado",
    tipo: "Split Hi Wall Inverter Quente/Frio",
    capacidade: "12.000 BTU/h",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.philco.com.br/climatizacao/ar-condicionado/Inverter?PS=20&map=c%2Cc%2CspecificationFilter_191",
    manualManutencao: "https://www.philco.com.br/climatizacao/ar-condicionado/Inverter?PS=20&map=c%2Cc%2CspecificationFilter_191",
    fonte: "Base tecnica HVAC PRO - Philco PAC12QA",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", fluidoRefrigerante: "OFICIAL" }
  },

  {
    marca: "Philco",
    modelo: "Philco Portatil PAC12000F5 e Linha Portatil",
    codigoBusca: ["PHILCO PORTATIL", "PHILCO PORTÁTIL", "PORTATIL PHILCO", "PORTÁTIL PHILCO", "PAC12000F5", "PAC11000F5", "PHILCO 12000 PORTATIL", "PHILCO 11000 PORTATIL"],
    linha: "Portátil",
    tipo: "Ar-condicionado portátil",
    manualInstalacao: "https://www.philco.com.br/climatizacao/ar-condicionado/portatil",
    manualManutencao: "https://www.philco.com.br/climatizacao/ar-condicionado/portatil",
    fonte: "Base tecnica HVAC PRO - Philco Portatil",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     11. BRITÂNIA
     ========================================================= */

  {
    marca: "Britânia",
    modelo: "Britânia Prime Air Inverter 12000BTUs Quente Frio 12QC",
    codigoBusca: ["BRITANIA", "BRITÂNIA", "PRIME AIR", "PRIME AIR INVERTER", "12QC", "BRITANIA 12QC", "BRITÂNIA 12QC", "BRITANIA 12000", "BRITÂNIA 12000"],
    linha: "Prime Air Split Inverter",
    tipo: "Split Hi Wall Inverter Quente/Frio",
    capacidade: "12.000 BTU/h",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.britania.com.br/ar-condicionado-prime-air-inverter-12000btus-quente-frio-12qc/p",
    manualManutencao: "https://www.britania.com.br/ar-condicionado-prime-air-inverter-12000btus-quente-frio-12qc/p",
    fonte: "Base tecnica HVAC PRO - Britania Prime Air 12QC",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", fluidoRefrigerante: "OFICIAL" }
  },

  {
    marca: "Britânia",
    modelo: "Britânia Prime Air Espelhado Split Inverter",
    codigoBusca: ["BRITANIA PRIME AIR ESPELHADO", "BRITÂNIA PRIME AIR ESPELHADO", "BRITANIA ESPELHADO", "BRITÂNIA ESPELHADO", "BRITANIA INVERTER", "BRITÂNIA INVERTER", "BRITANIA 9000", "BRITANIA 18000", "BRITANIA 24000"],
    linha: "Prime Air Espelhado / Prime Air Inverter",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://www.britania.com.br/climatizacao/ar-condicionado",
    manualManutencao: "https://www.britania.com.br/climatizacao/ar-condicionado",
    fonte: "Base tecnica HVAC PRO - Britania linhas complementares",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     12. TCL
     ========================================================= */

  {
    marca: "TCL",
    modelo: "TCL Série A2 Inverter TAC-09CSA2-INV",
    codigoBusca: ["TCL", "TCL A2", "SERIE A2", "SÉRIE A2", "TAC-09CSA2-INV", "TAC09CSA2INV", "TCL 9000", "TCL SPLIT A2", "TCL INVERTER"],
    linha: "Série A2 Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    manualInstalacao: "https://www.tcl.com/br/pt/air-conditioners/series-a2-inverter",
    manualManutencao: "https://www.tcl.com/br/pt/air-conditioners/series-a2-inverter",
    fonte: "Base tecnica HVAC PRO - TCL Serie A2",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL" }
  },

  {
    marca: "TCL",
    modelo: "TCL Elite Series e Série A3 Inverter",
    codigoBusca: ["TCL ELITE", "TCL ELITE SERIES", "TCL A3", "SERIE A3", "SÉRIE A3", "TAC-12", "TAC-18", "TAC-24", "TCL 12000", "TCL 18000", "TCL 24000"],
    linha: "Elite Series / Série A3",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://www.tcl.com/br/pt/air-conditioners",
    manualManutencao: "https://www.tcl.com/br/pt/air-conditioners",
    fonte: "Base tecnica HVAC PRO - TCL linhas complementares",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     13. AGRATTO
     ========================================================= */

  {
    marca: "Agratto",
    modelo: "Agratto LIV Inverter TOP LCST12F-02I 12000 BTU Frio",
    codigoBusca: ["AGRATTO", "LIV INVERTER", "LIV INVERTER TOP", "LCST12F-02I", "LCST12F02I", "AGRATTO 12000", "AGRATTO LIV 12000", "AGRATTO SPLIT INVERTER"],
    linha: "LIV Inverter TOP",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    manualInstalacao: "https://www.agratto.com.br/ar-condicionado/residencial/liv",
    manualManutencao: "https://www.agratto.com.br/ar-condicionado/residencial/liv",
    fonte: "Base tecnica HVAC PRO - Agratto LIV",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", tensao: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", tensao: "OFICIAL" }
  },

  {
    marca: "Agratto",
    modelo: "Agratto ZEN Split Inverter Piso Teto Cassete Cortina de Ar",
    codigoBusca: ["AGRATTO ZEN", "ZEN AGRATTO", "AGRATTO PISO TETO", "AGRATTO CASSETE", "AGRATTO CASSETTE", "AGRATTO CORTINA DE AR", "CORTINA DE AR AGRATTO", "AGRATTO 18000", "AGRATTO 24000", "AGRATTO 36000", "AGRATTO 55000"],
    linha: "ZEN / Piso Teto / Cassete / Cortina de Ar",
    tipo: "Split Hi Wall / Comercial leve / Cortina de ar",
    manualInstalacao: "https://www.agratto.com.br/ar-condicionado",
    manualManutencao: "https://www.agratto.com.br/ar-condicionado",
    fonte: "Base tecnica HVAC PRO - Agratto linhas complementares",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     14. HISENSE
     ========================================================= */

  {
    marca: "Hisense",
    modelo: "Hisense Split Hi-Smart Inverter",
    codigoBusca: ["HISENSE", "HISENSE SPLIT", "HISENSE INVERTER", "HISENSE AR CONDICIONADO", "HI SMART", "HI-SMART", "HISENSE HI SMART"],
    linha: "Hi-Smart Inverter",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://www.hisense.com.br/ar-condicionado/split-hi-smart/",
    manualManutencao: "https://www.hisense.com.br/ar-condicionado/split-hi-smart/",
    fonte: "Base tecnica HVAC PRO - Hisense Hi-Smart",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  {
    marca: "Hisense",
    modelo: "Hisense Hi-Efficiency Janela Portatil Corporativo",
    codigoBusca: ["HISENSE HI EFFICIENCY", "HI-EFFICIENCY", "HISENSE JANELA", "HISENSE PORTATIL", "HISENSE PORTÁTIL", "HISENSE CORPORATIVO", "HISENSE COMERCIAL"],
    linha: "Hi-Efficiency / Janela / Portátil / Corporativo",
    tipo: "Split Hi Wall / Janela / Portátil / Comercial conforme linha",
    manualInstalacao: "https://www.hisense.com.br/ar-condicionado",
    manualManutencao: "https://www.hisense.com.br/ar-condicionado",
    fonte: "Base tecnica HVAC PRO - Hisense linhas complementares",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     15. EOS
     ========================================================= */

  {
    marca: "EOS",
    modelo: "EOS Master Inverter R32 9000 12000 18000 24000 30000 BTU",
    codigoBusca: ["EOS", "EOS MASTER INVERTER", "MASTER INVERTER EOS", "EOS R32", "EOS 9000", "EOS 12000", "EOS 18000", "EOS 24000", "EOS 30000"],
    linha: "Master Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 / 18.000 / 24.000 / 30.000 BTU/h conforme modelo",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://eos.com.br/ar-condicionado-eos-master-inverter/",
    manualManutencao: "https://eos.com.br/downloads/",
    fonte: "Base tecnica HVAC PRO - EOS Master Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", fluidoRefrigerante: "OFICIAL" }
  },

  {
    marca: "EOS",
    modelo: "EOS Smart Connect Cassete Janela Portatil",
    codigoBusca: ["EOS SMART CONNECT", "SMART CONNECT EOS", "EOS CASSETE", "EOS CASSETTE", "EOS JANELA", "EOS PORTATIL", "EOS PORTÁTIL", "EOS PORTATIL INVERTER", "EOS 14000 PORTATIL", "EOS 12000 PORTATIL"],
    linha: "Smart Connect / Cassete / Janela / Portátil",
    tipo: "Split Hi Wall / Cassete / Janela / Portátil conforme linha",
    manualInstalacao: "https://eos.com.br/downloads/",
    manualManutencao: "https://eos.com.br/downloads/",
    fonte: "Base tecnica HVAC PRO - EOS linhas complementares",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     16. FUJITSU / GENERAL
     ========================================================= */

  {
    marca: "Fujitsu / General",
    modelo: "Fujitsu General Split High Wall Linha Premium 9000 12000 BTU",
    codigoBusca: ["FUJITSU", "GENERAL", "FUJITSU GENERAL", "SPLIT HIGH WALL FUJITSU", "HIGH WALL GENERAL", "FUJITSU PREMIUM", "GENERAL PREMIUM", "FUJITSU 9000", "FUJITSU 12000"],
    linha: "Split High Wall - Linha Premium",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 BTU/h",
    fluidoRefrigerante: "R410A conforme linha Premium 9-12",
    manualInstalacao: "https://www.fujitsu-general.com/br/products/split/wall/index.html?page=1&pagemax=30",
    manualManutencao: "https://www.fujitsu-general.com/br/products/split/",
    fonte: "Base tecnica HVAC PRO - Fujitsu General High Wall",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", fluidoRefrigerante: "OFICIAL" }
  },

  {
    marca: "Fujitsu / General",
    modelo: "Fujitsu General Multi Split Airstage Cassete Piso Teto",
    codigoBusca: ["FUJITSU MULTI SPLIT", "GENERAL MULTI SPLIT", "FUJITSU AIRSTAGE", "AIRSTAGE", "FUJITSU CASSETE", "FUJITSU CASSETTE", "FUJITSU PISO TETO", "FUJITSU TETO", "GENERAL AIRSTAGE"],
    linha: "Multi Split / Airstage / Cassete / Piso Teto",
    tipo: "Multi Split / VRF / Comercial leve conforme linha",
    manualInstalacao: "https://www.fujitsu-general.com/br/products/",
    manualManutencao: "https://www.fujitsu-general.com/br/products/",
    fonte: "Base tecnica HVAC PRO - Fujitsu General comercial",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     17. SPRINGER MIDEA / CARRIER
     ========================================================= */

  {
    marca: "Springer Midea / Carrier",
    modelo: "Springer Midea AirVolution Connect Split Hi Wall",
    codigoBusca: ["SPRINGER", "SPRINGER MIDEA", "CARRIER", "AIRVOLUTION", "AIR VOLUTION", "AIRVOLUTION CONNECT", "42AF", "38AF", "MIDEA AIRVOLUTION"],
    linha: "AirVolution Connect",
    tipo: "Split Hi Wall",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-12000-btu-springer-midea-airvolution-connect-quente-e-frio.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/ar-condicionado-12000-btu-springer-midea-airvolution-connect-quente-e-frio.pdf",
    fonte: "Base tecnica HVAC PRO - Springer Midea AirVolution",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  {
    marca: "Carrier / Springer Carrier",
    modelo: "Carrier Springer Split Hi Wall Piso Teto Cassete Legado",
    codigoBusca: ["CARRIER", "SPRINGER CARRIER", "SPRINGER", "CARRIER SPLIT", "CARRIER HI WALL", "CARRIER PISO TETO", "CARRIER CASSETE", "CARRIER CASSETTE", "CARRIER 42", "CARRIER 38", "SPRINGER 42", "SPRINGER 38"],
    linha: "Split / Piso Teto / Cassete legado",
    tipo: "Split Hi Wall / Piso Teto / Cassete conforme modelo",
    manualInstalacao: "https://www.carrierdobrasil.com.br/",
    manualManutencao: "https://www.carrierdobrasil.com.br/",
    fonte: "Base tecnica HVAC PRO - Carrier Springer legado",
    fonteTipo: "CONFIAVEL_NAO_OFICIAL",
    nivelConfianca: "CONFIAVEL_NAO_OFICIAL",
    status: "CONFIAVEL_NAO_OFICIAL",
    fontesCampos: { marca: "CONFIAVEL_NAO_OFICIAL", modelo: "CONFIAVEL_NAO_OFICIAL", linha: "CONFIAVEL_NAO_OFICIAL", tipo: "CONFIAVEL_NAO_OFICIAL" },
    confiancaCampos: { marca: "CONFIAVEL_NAO_OFICIAL", modelo: "CONFIAVEL_NAO_OFICIAL", linha: "CONFIAVEL_NAO_OFICIAL", tipo: "CONFIAVEL_NAO_OFICIAL" }
  },

  /* =========================================================
     18. TRANE
     ========================================================= */

  {
    marca: "Trane",
    modelo: "Trane Multi Split Inverter R410A",
    codigoBusca: ["TRANE", "TRANE MULTI SPLIT", "MULTI SPLIT INVERTER TRANE", "4MDC", "4MWC", "TRANE R410A"],
    linha: "Multi Split Inverter",
    tipo: "Multi Split Inverter",
    fluidoRefrigerante: "R-410A",
    manualInstalacao: "https://trane.com.br/commercial/latin-america/br/pt/products-systems/vrff-e-mini-split/comercial-Leve/multi-split-inverter.html",
    manualManutencao: "https://trane.com.br/content/dam/Trane/Commercial/lar/br/produtos-sistemas/equipamentos/Minisplits/mult-split-inverter/iom-pb-high-wall-inverter-50-60hz-4mwc23-ms-svx067a-pb.pdf",
    fonte: "Base tecnica HVAC PRO - Trane Multi Split",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", fluidoRefrigerante: "OFICIAL" }
  },

  {
    marca: "Trane",
    modelo: "Trane Hi Wall Duto Rooftop Chiller VRF Comercial",
    codigoBusca: ["TRANE HI WALL", "TRANE DUTO", "TRANE ROOFTOP", "TRANE CHILLER", "TRANE VRF", "TRANE VRV", "TRANE SPLIT SYSTEM", "TRANE PACKAGE", "TRANE COMERCIAL", "TRANE U MATCH"],
    linha: "Comercial leve / VRF / Rooftop / Chiller",
    tipo: "Sistema comercial conforme linha",
    manualInstalacao: "https://trane.com.br/commercial/latin-america/br/pt/produtos-trane.html",
    manualManutencao: "https://trane.com.br/commercial/latin-america/br/pt/produtos-trane.html",
    fonte: "Base tecnica HVAC PRO - Trane comercial",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     19. HITACHI
     ========================================================= */

  {
    marca: "Hitachi",
    modelo: "Hitachi airHome 600 Split Hi Wall Inverter R32",
    codigoBusca: ["HITACHI", "AIRHOME 600", "AIR HOME 600", "SPK09C3IVF", "SPK12C3IVF", "SPK18C3IVF", "SPK24C3IVF", "RPK09C3IVF", "RPK12C3IVF", "RPK18C3IVF", "RPK24C3IVF", "RAA09C3IVF", "RAA12C3IVF", "RAA18C3IVF", "RAA24C3IVF"],
    linha: "airHome 600",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 / 18.000 / 24.000 BTU/h conforme conjunto",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://documentation.hitachiaircon.com/br/pt/rac/spk-c3iv-f-q",
    manualManutencao: "https://documentation.hitachiaircon.com/br/pt/rac/spk-c3iv-f-q",
    fonte: "Base tecnica HVAC PRO - Hitachi airHome 600",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", fluidoRefrigerante: "OFICIAL" }
  },

  {
    marca: "Hitachi",
    modelo: "Hitachi Mini VRF Set Free Sigma Utopia airCore Splitao Rooftop Chiller",
    codigoBusca: ["HITACHI MINI VRF", "HITACHI VRF", "HITACHI SET FREE", "SET FREE SIGMA", "HITACHI UTOPIA", "HITACHI AIRCORE", "HITACHI SPLITAO", "HITACHI SPLITÃO", "HITACHI ROOFTOP", "HITACHI CHILLER", "HITACHI AIR365"],
    linha: "Mini VRF / Set Free / Utopia / airCore / Splitão / Chiller",
    tipo: "Sistema comercial conforme linha",
    manualInstalacao: "https://www.hitachiaircon.com/br/produtos",
    manualManutencao: "https://documentation.hitachiaircon.com/br/pt",
    fonte: "Base tecnica HVAC PRO - Hitachi comercial",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     20. OLIMPIA SPLENDID
     ========================================================= */

  {
    marca: "Olimpia Splendid",
    modelo: "Olimpia Splendid Ar Condicionado Portatil Dolceclima",
    codigoBusca: ["OLIMPIA", "OLIMPIA SPLENDID", "OLIMPIA PORTATIL", "OLIMPIA PORTÁTIL", "PORTATIL OLIMPIA", "PORTÁTIL OLIMPIA", "DOLCECLIMA", "DOLCE CLIMA"],
    linha: "Portátil / Dolceclima",
    tipo: "Ar-condicionado portátil",
    manualInstalacao: "https://www.olimpiasplendid.com.br/area_download",
    manualManutencao: "https://www.olimpiasplendid.com.br/area_download",
    fonte: "Base tecnica HVAC PRO - Olimpia Splendid Portatil",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     21. YORK / JOHNSON CONTROLS
     ========================================================= */

  {
    marca: "York / Johnson Controls",
    modelo: "York Split Hi Wall Everest RAEA RADA RAKA RAJA",
    codigoBusca: ["YORK", "YORK EVEREST", "EVEREST", "RAEA", "RADA", "RAKA", "RAJA", "YORK HI WALL", "YORK SPLIT", "YORK 9000", "YORK 12000", "YORK 18000", "YORK 24000"],
    linha: "Everest / Split Hi Wall legado",
    tipo: "Split Hi Wall",
    manualInstalacao: "https://pdf.webarcondicionado.com.br/york/manual/usuario/mdu-split-hi-wall-raea-rada-raka-raja-everest.pdf",
    manualManutencao: "https://digital.johnsoncontrols.com/brasilhvac",
    fonte: "Base tecnica HVAC PRO - York Everest",
    fonteTipo: "CONFIAVEL_NAO_OFICIAL",
    nivelConfianca: "CONFIAVEL_NAO_OFICIAL",
    status: "CONFIAVEL_NAO_OFICIAL",
    fontesCampos: { marca: "CONFIAVEL_NAO_OFICIAL", modelo: "CONFIAVEL_NAO_OFICIAL", linha: "CONFIAVEL_NAO_OFICIAL", tipo: "CONFIAVEL_NAO_OFICIAL" },
    confiancaCampos: { marca: "CONFIAVEL_NAO_OFICIAL", modelo: "CONFIAVEL_NAO_OFICIAL", linha: "CONFIAVEL_NAO_OFICIAL", tipo: "CONFIAVEL_NAO_OFICIAL" }
  },

  {
    marca: "York / Johnson Controls",
    modelo: "York Split Cassete Supreme YKE YKKA 18000 48000 BTU",
    codigoBusca: ["YORK CASSETE", "YORK CASSETTE", "YORK SUPREME", "YKE", "YKKA", "YKE18", "YKE24", "YKE36", "YKE48", "YORK 18000 CASSETE", "YORK 48000 CASSETE"],
    linha: "Supreme Cassete",
    tipo: "Split Cassete",
    capacidade: "18.000 / 24.000 / 36.000 / 48.000 BTU/h conforme modelo",
    manualInstalacao: "https://pdf.webarcondicionado.com.br/york/manual/usuario/mdu-split-cassete-yke%28k%29a18-48fs-ad-supreme.pdf",
    manualManutencao: "https://digital.johnsoncontrols.com/brasilhvac",
    fonte: "Base tecnica HVAC PRO - York Cassete Supreme",
    fonteTipo: "CONFIAVEL_NAO_OFICIAL",
    nivelConfianca: "CONFIAVEL_NAO_OFICIAL",
    status: "CONFIAVEL_NAO_OFICIAL",
    fontesCampos: { marca: "CONFIAVEL_NAO_OFICIAL", modelo: "CONFIAVEL_NAO_OFICIAL", linha: "CONFIAVEL_NAO_OFICIAL", tipo: "CONFIAVEL_NAO_OFICIAL", capacidade: "CONFIAVEL_NAO_OFICIAL" },
    confiancaCampos: { marca: "CONFIAVEL_NAO_OFICIAL", modelo: "CONFIAVEL_NAO_OFICIAL", linha: "CONFIAVEL_NAO_OFICIAL", tipo: "CONFIAVEL_NAO_OFICIAL", capacidade: "CONFIAVEL_NAO_OFICIAL" }
  },

  /* =========================================================
     22. MITSUBISHI ELECTRIC
     ========================================================= */

  {
    marca: "Mitsubishi Electric",
    modelo: "Mitsubishi Electric MSZ MUZ Mr Slim City Multi",
    codigoBusca: ["MITSUBISHI", "MITSUBISHI ELECTRIC", "MITSUBISHI AR CONDICIONADO", "MITSUBISHI SPLIT", "MITSUBISHI VRF", "MITSUBISHI CITY MULTI", "CITY MULTI", "MR SLIM", "MITSUBISHI MR SLIM", "MSZ", "MUZ", "MSY", "MUY"],
    linha: "Mr Slim / City Multi / Split / VRF",
    tipo: "Split / Multi Split / VRF conforme linha",
    manualInstalacao: "https://mitsubishielectric.com.br/",
    manualManutencao: "https://mitsubishielectric.com.br/",
    fonte: "Base tecnica HVAC PRO - Mitsubishi Electric",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     23. RHEEM
     ========================================================= */

  {
    marca: "Rheem",
    modelo: "Rheem Multi Split Inverter e Split Hi Wall",
    codigoBusca: ["RHEEM", "RHEEM SPLIT", "RHEEM MULTI SPLIT", "RHEEM MULTISPLIT", "RHEEM INVERTER", "RHEEM HI WALL", "RHEEM 9000", "RHEEM 12000", "RHEEM 18000", "RHEEM 24000"],
    linha: "Split / Multi Split",
    tipo: "Split Hi Wall / Multi Split conforme modelo",
    manualInstalacao: "https://www.rheem.com.br/manuais/",
    manualManutencao: "https://www.rheem.com.br/manuais/",
    fonte: "Base tecnica HVAC PRO - Rheem Manuais",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  {
    marca: "Rheem",
    modelo: "Rheem Mini Split Piso Teto Cassete Comercial Leve",
    codigoBusca: ["RHEEM PISO TETO", "PISO TETO RHEEM", "RHEEM CASSETE", "RHEEM CASSETTE", "RHEEM MINI SPLIT", "RHEEM COMERCIAL", "RHEEM 36000", "RHEEM 48000", "RHEEM 60000"],
    linha: "Mini Split Piso Teto / Cassete",
    tipo: "Comercial leve",
    manualInstalacao: "https://www.rheem.com.br/manuais/",
    manualManutencao: "https://www.rheem.com.br/manuais/",
    fonte: "Base tecnica HVAC PRO - Rheem comercial leve",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL" }
  },

  /* =========================================================
     24. COMFEE
     ========================================================= */

  {
    marca: "Comfee",
    modelo: "Comfee Split Hi Wall 12000 BTU Frio",
    codigoBusca: ["COMFEE", "COMFEE SPLIT", "COMFEE HI WALL", "COMFEE 12000", "COMFEE FRIO", "COMFEE MIDEA", "42AFVC", "38AFVC", "42AFCB", "42AFCD", "38KCW"],
    linha: "Split Hi Wall Comfee",
    tipo: "Split Hi Wall",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.midea.com/content/dam/midea-aem/br/climatizacao/hiwall/split-high-wall-comfee-12000-btu-h-frio/Manual-do-Propriet-rio-Split-Hi-Wall-Comfee.pdf",
    manualManutencao: "https://www.midea.com/content/dam/midea-aem/br/climatizacao/hiwall/split-high-wall-comfee-12000-btu-h-frio/Manual-do-Propriet-rio-Split-Hi-Wall-Comfee.pdf",
    fonte: "Base tecnica HVAC PRO - Comfee Split Hi Wall",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL" }
  },

  /* =========================================================
     25. FONTAINE
     ========================================================= */

  {
    marca: "Fontaine",
    modelo: "Fontaine Split Hi Wall 127V 220V",
    codigoBusca: ["FONTAINE", "FONTAINE BRASIL", "FONTAINE SPLIT", "FONTAINE HI WALL", "FONTAINE 127V", "FONTAINE 220V", "FONTAINE 9000", "FONTAINE 12000", "FONTAINE 18000", "FONTAINE 24000"],
    linha: "Split Hi Wall Fontaine",
    tipo: "Split Hi Wall",
    tensao: "127V / 220V conforme modelo",
    manualInstalacao: "https://fontainebrasil.com.br/",
    manualManutencao: "https://fontainebrasil.com.br/",
    fonte: "Base tecnica HVAC PRO - Fontaine Brasil",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", tensao: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", tensao: "O
