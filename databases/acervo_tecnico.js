/* HVAC PRO - databases/acervo_tecnico.js
   ACERVO TÉCNICO - BLOCO 1 REAL

   NÃO MEXER NO app.js.

   Estrutura estável:
   - window.acervoTecnico = [ objetos simples ];
   - Sem funções dentro do banco.
   - Sem lógica complexa dentro do banco.

   Cores usadas pelo app:
   - fonteTipo/status OFICIAL = azul
   - fonteTipo/status CONFIAVEL_NAO_OFICIAL = verde
   - fonteTipo/status INFORMACAO_SUGERIDA = branco

   BLOCO 1:
   - Midea
   - Gree
   - LG
   - Samsung
   - Elgin
   - Komeco
   - Daikin
*/

window.acervoTecnico = [
  {
    marca: "Midea",
    modelo: "Midea Xtreme Save AI Connect R32 AGVCJ",
    codigoBusca: [
      "MIDEA",
      "XTREME SAVE",
      "XTREME SAVE AI CONNECT",
      "AGVCJ",
      "42AGVCJ",
      "38AGVCJ",
      "42AGVCJ09M5",
      "42AGVCJ12M5",
      "38AGVCJ09M5",
      "38AGVCJ12M5",
      "R32"
    ],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 BTU/h conforme modelo",
    tensao: "220V conforme modelo",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Midea oficial - Manual Xtreme Save AI Connect R32",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Midea",
    modelo: "Midea Xtreme Save Connect R32 AGVCI",
    codigoBusca: [
      "MIDEA",
      "XTREME SAVE CONNECT",
      "AGVCI",
      "42AGVCI",
      "38AGVCI",
      "42AGVCI09M5",
      "42AGVCI12M5",
      "38AGVCI09M5",
      "38AGVCI12M5",
      "R32"
    ],
    linha: "Xtreme Save Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 BTU/h conforme modelo",
    tensao: "220V conforme modelo",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.midea.com/content/dam/midea-aem/br/climatizacao/hiwall/xtreme-white-novo/Manual%20de%20usu%C3%A1rio_Xtreme%20Save%20Connect.pdf",
    manualManutencao: "https://www.midea.com/content/dam/midea-aem/br/climatizacao/hiwall/xtreme-white-novo/Manual%20de%20usu%C3%A1rio_Xtreme%20Save%20Connect.pdf",
    fonte: "Midea oficial - Manual Xtreme Save Connect",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Midea",
    modelo: "Midea Multi Inverter FreeMatch",
    codigoBusca: [
      "MIDEA",
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
    tipo: "Multi Split Inverter / Hi Wall / Cassete / Built-in conforme combinação",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-multisplit-instalacao.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/ar-condicionado-multisplit-instalacao.pdf",
    fonte: "Midea oficial - Manual de Instalação, Operação e Manutenção Multi Split",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Midea",
    modelo: "Midea Xtreme Save AI Connect - Catálogo técnico distribuidor",
    codigoBusca: [
      "MIDEA CATALOGO TECNICO",
      "MIDEA CATÁLOGO TÉCNICO",
      "XTREME SAVE AI CONNECT CATALOGO",
      "XTREME SAVE AI CONNECT CATÁLOGO",
      "42AGVCJ09M5 TECNICO",
      "42AGVCJ12M5 TECNICO",
      "38AGVCJ09M5 TECNICO",
      "38AGVCJ12M5 TECNICO"
    ],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 BTU/h",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.leverosintegra.com.br/download/manuais/midea/catalogo-comercial-hw-inverter-xtreme-save-ai-connect.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Catálogo técnico/comercial Midea hospedado em distribuidor técnico",
    fonteTipo: "CONFIAVEL_NAO_OFICIAL",
    nivelConfianca: "CONFIAVEL_NAO_OFICIAL",
    status: "CONFIAVEL_NAO_OFICIAL"
  },

  {
    marca: "Gree",
    modelo: "Gree G-Diamond Auto Inverter R32",
    codigoBusca: [
      "GREE",
      "G DIAMOND",
      "G-DIAMOND",
      "G-DIAMOND AUTO",
      "G-DIAMOND AUTO INVERTER",
      "DIAMOND AUTO",
      "AUTO INVERTER",
      "R32"
    ],
    linha: "G-Diamond Auto Inverter",
    tipo: "Split Hi Wall Inverter",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    fonte: "Gree oficial - Manual G-Diamond Auto Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Gree",
    modelo: "Gree G-Diamond Top",
    codigoBusca: [
      "GREE",
      "G DIAMOND TOP",
      "G-DIAMOND TOP",
      "DIAMOND TOP"
    ],
    linha: "G-Diamond Top",
    tipo: "Split Hi Wall",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-DIAMOND-TOP-Rev-000-full.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-DIAMOND-TOP-Rev-000-full.pdf",
    fonte: "Gree oficial - Manual G-Diamond Top",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Gree",
    modelo: "Gree G-Prime Inverter Compact",
    codigoBusca: [
      "GREE",
      "G PRIME",
      "G-PRIME",
      "G-PRIME INVERTER",
      "G-PRIME INVERTER COMPACT",
      "G PRIME INVERTER COMPACT"
    ],
    linha: "G-Prime Inverter Compact",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    fonte: "Gree oficial - Manual G-Prime Inverter Compact",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Gree",
    modelo: "Gree Materiais Técnicos Oficial",
    codigoBusca: [
      "GREE MANUAIS",
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
    linha: "Portal oficial de materiais técnicos",
    tipo: "Consulta oficial por linha/modelo",
    manualInstalacao: "https://gree.com.br/manuais/",
    manualManutencao: "https://gree.com.br/manuais/",
    fonte: "Gree oficial - página de materiais técnicos",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "LG",
    modelo: "LG S4-Q12JA315 Dual Inverter Voice 12000 BTU 220V",
    codigoBusca: [
      "LG",
      "S4-Q12JA315",
      "S4Q12JA315",
      "DUAL INVERTER",
      "DUAL INVERTER VOICE",
      "LG DUAL INVERTER VOICE 12000",
      "12000 BTU LG"
    ],
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R410A",
    manualInstalacao: "https://www.lg.com/br/ar-condicionado-residencial/dual-inverter-split/s4-q12ja315/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "LG oficial - página do produto e suporte de manuais",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "LG",
    modelo: "LG Portal Oficial de Manuais Ar-Condicionado",
    codigoBusca: [
      "LG MANUAL",
      "LG MANUAIS",
      "LG SUPORTE",
      "LG AR CONDICIONADO",
      "ARTCOOL",
      "DUAL INVERTER"
    ],
    linha: "Portal oficial LG de manuais e downloads",
    tipo: "Consulta oficial por modelo",
    manualInstalacao: "https://www.lg.com/br/suporte/manuais-sistema/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "LG oficial - suporte/manuais",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Samsung",
    modelo: "Samsung AR12MVPXAWKNAZ WindFree 12000 BTU Frio",
    codigoBusca: [
      "SAMSUNG",
      "AR12MVPXAWKNAZ",
      "AR12MVPX",
      "AR12MVPXAWK",
      "WINDFREE",
      "WIND FREE",
      "12000 BTU SAMSUNG"
    ],
    linha: "WindFree",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12MVPXAWKNAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12MVPXAWKNAZ/",
    fonte: "Samsung oficial - página de suporte do modelo",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Samsung",
    modelo: "Samsung AR12DYFABWKNAZ WindFree AI 12000 BTU Frio Wi-Fi",
    codigoBusca: [
      "SAMSUNG",
      "AR12DYFABWKNAZ",
      "AR12DYFAB",
      "AR12DYFABWK",
      "WINDFREE AI",
      "WIND FREE AI",
      "12000 BTU SAMSUNG WIFI"
    ],
    linha: "WindFree AI",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12DYFABWKNAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12DYFABWKNAZ/",
    fonte: "Samsung oficial - página de suporte do modelo",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Samsung",
    modelo: "Samsung Central Oficial de Downloads",
    codigoBusca: [
      "SAMSUNG DOWNLOAD",
      "SAMSUNG MANUAL",
      "SAMSUNG MANUAIS",
      "SAMSUNG SUPORTE",
      "WINDFREE MANUAL",
      "WIND FREE MANUAL"
    ],
    linha: "Central de suporte Samsung",
    tipo: "Consulta oficial por modelo",
    manualInstalacao: "https://www.samsung.com/br/support/",
    manualManutencao: "https://www.samsung.com/br/support/",
    fonte: "Samsung oficial - suporte e downloads",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Elgin",
    modelo: "Elgin Eco Inverter II Wi-Fi 9000 BTU Frio 220V",
    codigoBusca: [
      "ELGIN",
      "ECO INVERTER II",
      "ECO INVERTER II WIFI",
      "ECO INVERTER II WI-FI",
      "ELGIN ECO INVERTER II 9000",
      "9000 BTU ELGIN"
    ],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "9.000 BTU/h",
    tensao: "220V",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-inverter-ii-9000-btus-frio-wifi-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Elgin oficial - página do produto e portal oficial de manuais",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Elgin",
    modelo: "Elgin Eco Inverter II Wi-Fi - Catálogo técnico distribuidor",
    codigoBusca: [
      "ELGIN CATALOGO TECNICO",
      "ELGIN CATÁLOGO TÉCNICO",
      "ECO INVERTER II CATALOGO",
      "ECO INVERTER II CATÁLOGO",
      "HJFC09C2WBCB",
      "HJFC12C2WBCB",
      "HJQC12C2WBCB",
      "HJFC18C2WBCB",
      "HJFC24C2WBCB"
    ],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 a 30.000 BTU/h conforme catálogo",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.leverosintegra.com.br/download/manuais/Elgin/catalogo-split-hw-eco-inverter-wifi.pdf",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Catálogo técnico/comercial Elgin hospedado em distribuidor técnico",
    fonteTipo: "CONFIAVEL_NAO_OFICIAL",
    nivelConfianca: "CONFIAVEL_NAO_OFICIAL",
    status: "CONFIAVEL_NAO_OFICIAL"
  },

  {
    marca: "Komeco",
    modelo: "Komeco KOHI 09QC 1HV Inverter 9000 BTU",
    codigoBusca: [
      "KOMECO",
      "KOHI",
      "KOHI09QC1HV",
      "KOHI 09QC 1HV",
      "KOHI 09",
      "KOMECO KOHI 09QC"
    ],
    linha: "KOHI Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    tubulacaoAlta: "1/4 pol. (6,35 mm)",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    fonte: "Komeco oficial - Manual Condicionador de Ar KOHI",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Komeco",
    modelo: "Komeco KOHI 12QC 1HV Inverter 12000 BTU",
    codigoBusca: [
      "KOMECO",
      "KOHI12QC1HV",
      "KOHI 12QC 1HV",
      "KOHI 12",
      "KOMECO KOHI 12QC"
    ],
    linha: "KOHI Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tubulacaoAlta: "3/8 pol. (9,52 mm)",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    fonte: "Komeco oficial - Manual Condicionador de Ar KOHI",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "Daikin",
    modelo: "Daikin EcoSwing R32",
    codigoBusca: [
      "DAIKIN",
      "ECOSWING",
      "ECO SWING",
      "ECOSWING R32",
      "ECO SWING R32",
      "FTKP12Q5VL",
      "RKP12Q5VL",
      "R32"
    ],
    linha: "EcoSwing R-32",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 / 18.000 / 24.000 BTU/h conforme modelo",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/produto/ecoswing-r32",
    manualManutencao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Daikin oficial - página EcoSwing R-32 e área de downloads",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  }
];
