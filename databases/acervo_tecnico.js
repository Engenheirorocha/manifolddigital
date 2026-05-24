/* HVAC PRO - databases/acervo_tecnico.js
   ETAPA 1/2 - BANCO PRINCIPAL DE CÓDIGOS DE CONDENSADORAS

   USO:
   1. Abra databases/acervo_tecnico.js no GitHub.
   2. Apague tudo.
   3. Cole este arquivo inteiro.
   4. Commit changes.
   5. Abra o app com cache novo.

   REGRA:
   - Busca somente por código do condensador / unidade externa / código principal de etiqueta.
   - Não buscar por marca, fabricante, evaporadora, linha ou família.
   - Campos sem dado confirmado foram omitidos.
   - A confiança aparece abaixo do dado no app.
   - O link final é manual de instalação quando disponível.

   ETAPA 1:
   - Principais marcas em campo: LG, Midea, Gree, Samsung, Consul, Electrolux e Elgin.
   - Dados baseados em páginas oficiais, suporte oficial, manuais ou lâminas oficiais encontradas.
   - Este lote é a primeira carga grande; a etapa 2 amplia para mais códigos/modelos.

   TOTAL DE REGISTROS NESTE LOTE: 38
*/

window.acervoTecnico = [

  {
    modelo: "S4-Q12JA3WC",
    codigoBusca: [
      "S4-Q12JA3WC",
      "S4Q12JA3WC"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter",
    tipo: "Split Hi Wall Frio",
    capacidade: "12.000 BTU/h",
    tensao: "220V / 60Hz / 1F",
    corrente: "6 A",
    gas: "R-410A",
    tubulacao: "1/4\" - 3/8\"",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-Q12JA3WC",
      marca: "LG Brasil - página oficial do produto S4-Q12JA3WC",
      linha: "LG Brasil - página oficial do produto S4-Q12JA3WC",
      tipo: "LG Brasil - página oficial do produto S4-Q12JA3WC",
      capacidade: "LG Brasil - página oficial do produto S4-Q12JA3WC",
      tensao: "LG Brasil - página oficial do produto S4-Q12JA3WC",
      corrente: "LG Brasil - página oficial do produto S4-Q12JA3WC",
      gas: "LG Brasil - página oficial do produto S4-Q12JA3WC",
      tubulacao: "LG Brasil - página oficial do produto S4-Q12JA3WC"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial",
      corrente: "oficial",
      gas: "oficial",
      tubulacao: "oficial"
    },

    manualInstalacao: "https://www.lg.com/br/business/manual/",
    fonte: "LG Brasil - página oficial do produto S4-Q12JA3WC"
  },

  {
    modelo: "S4-Q15JL31A",
    codigoBusca: [
      "S4-Q15JL31A",
      "S4Q15JL31A"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Frio",
    capacidade: "15.000 BTU/h",
    tubulacao: "1/4\" - 1/2\"",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-Q15JL31A",
      marca: "LG Brasil - página oficial do produto S4-Q15JL31A",
      linha: "LG Brasil - página oficial do produto S4-Q15JL31A",
      tipo: "LG Brasil - página oficial do produto S4-Q15JL31A",
      capacidade: "LG Brasil - página oficial do produto S4-Q15JL31A",
      tubulacao: "LG Brasil - página oficial do produto S4-Q15JL31A"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tubulacao: "oficial"
    },

    fonte: "LG Brasil - página oficial do produto S4-Q15JL31A"
  },

  {
    modelo: "S4-Q18KL3WB",
    codigoBusca: [
      "S4-Q18KL3WB",
      "S4Q18KL3WB"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter",
    tipo: "Split Hi Wall Frio",
    capacidade: "18.000 BTU/h",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-Q18KL3WB",
      marca: "LG Brasil - página oficial do produto S4-Q18KL3WB",
      linha: "LG Brasil - página oficial do produto S4-Q18KL3WB",
      tipo: "LG Brasil - página oficial do produto S4-Q18KL3WB",
      capacidade: "LG Brasil - página oficial do produto S4-Q18KL3WB"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "LG Brasil - página oficial do produto S4-Q18KL3WB"
  },

  {
    modelo: "S4-Q18KL3AA",
    codigoBusca: [
      "S4-Q18KL3AA",
      "S4Q18KL3AA"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter Compact",
    tipo: "Split Hi Wall Frio",
    capacidade: "18.000 BTU/h",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-Q18KL3AA",
      marca: "LG Brasil - página oficial do produto S4-Q18KL3AA",
      linha: "LG Brasil - página oficial do produto S4-Q18KL3AA",
      tipo: "LG Brasil - página oficial do produto S4-Q18KL3AA",
      capacidade: "LG Brasil - página oficial do produto S4-Q18KL3AA"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "LG Brasil - página oficial do produto S4-Q18KL3AA"
  },

  {
    modelo: "S4-Q24K23WD",
    codigoBusca: [
      "S4-Q24K23WD",
      "S4Q24K23WD"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter",
    tipo: "Split Hi Wall Frio",
    capacidade: "24.000 BTU/h",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-Q24K23WD",
      marca: "LG Brasil - página oficial do produto S4-Q24K23WD",
      linha: "LG Brasil - página oficial do produto S4-Q24K23WD",
      tipo: "LG Brasil - página oficial do produto S4-Q24K23WD",
      capacidade: "LG Brasil - página oficial do produto S4-Q24K23WD"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "LG Brasil - página oficial do produto S4-Q24K23WD"
  },

  {
    modelo: "S4-W09WA5WA",
    codigoBusca: [
      "S4-W09WA5WA",
      "S4W09WA5WA"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Quente/Frio",
    capacidade: "9.000 BTU/h",
    gas: "R-410A",
    tubulacao: "1/4\" - 3/8\"",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-W09WA5WA",
      marca: "LG Brasil - página oficial do produto S4-W09WA5WA",
      linha: "LG Brasil - página oficial do produto S4-W09WA5WA",
      tipo: "LG Brasil - página oficial do produto S4-W09WA5WA",
      capacidade: "LG Brasil - página oficial do produto S4-W09WA5WA",
      gas: "LG Brasil - página oficial do produto S4-W09WA5WA",
      tubulacao: "LG Brasil - página oficial do produto S4-W09WA5WA"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      gas: "oficial",
      tubulacao: "oficial"
    },

    manualInstalacao: "https://www.lg.com/content/dam/subsidiary/latam/brazil/suporte/shared/manuais/9K%20Btus_Dual%20Inverter_R32_Installation%20Manual.pdf",
    fonte: "LG Brasil - página oficial do produto S4-W09WA5WA"
  },

  {
    modelo: "S4-W12JARXB",
    codigoBusca: [
      "S4-W12JARXB",
      "S4W12JARXB"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter Voice Artcool UV Nano",
    tipo: "Split Hi Wall Quente/Frio",
    capacidade: "12.000 BTU/h",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-W12JARXB",
      marca: "LG Brasil - página oficial do produto S4-W12JARXB",
      linha: "LG Brasil - página oficial do produto S4-W12JARXB",
      tipo: "LG Brasil - página oficial do produto S4-W12JARXB",
      capacidade: "LG Brasil - página oficial do produto S4-W12JARXB"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "LG Brasil - página oficial do produto S4-W12JARXB"
  },

  {
    modelo: "S4-W18KL31C",
    codigoBusca: [
      "S4-W18KL31C",
      "S4W18KL31C"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Quente/Frio",
    capacidade: "18.000 BTU/h",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-W18KL31C",
      marca: "LG Brasil - página oficial do produto S4-W18KL31C",
      linha: "LG Brasil - página oficial do produto S4-W18KL31C",
      tipo: "LG Brasil - página oficial do produto S4-W18KL31C",
      capacidade: "LG Brasil - página oficial do produto S4-W18KL31C"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "LG Brasil - página oficial do produto S4-W18KL31C"
  },

  {
    modelo: "S4-W18KL3WA",
    codigoBusca: [
      "S4-W18KL3WA",
      "S4W18KL3WA"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter",
    tipo: "Split Hi Wall Quente/Frio",
    capacidade: "18.000 BTU/h",
    corrente: "7,4 A",
    gas: "R-410A",
    tubulacao: "1/4\" - 1/2\"",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-W18KL3WA",
      marca: "LG Brasil - página oficial do produto S4-W18KL3WA",
      linha: "LG Brasil - página oficial do produto S4-W18KL3WA",
      tipo: "LG Brasil - página oficial do produto S4-W18KL3WA",
      capacidade: "LG Brasil - página oficial do produto S4-W18KL3WA",
      corrente: "LG Brasil - página oficial do produto S4-W18KL3WA",
      gas: "LG Brasil - página oficial do produto S4-W18KL3WA",
      tubulacao: "LG Brasil - página oficial do produto S4-W18KL3WA"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      corrente: "oficial",
      gas: "oficial",
      tubulacao: "oficial"
    },

    manualInstalacao: "https://www.lg.com/content/dam/subsidiary/latam/brazil/suporte/shared/manuais/18-24K%20Btus_Dual%20Inverter_R32_Installation%20Manual.pdf",
    fonte: "LG Brasil - página oficial do produto S4-W18KL3WA"
  },

  {
    modelo: "S4-W24K2RXD",
    codigoBusca: [
      "S4-W24K2RXD",
      "S4W24K2RXD"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter Voice Artcool UV Nano",
    tipo: "Split Hi Wall Quente/Frio",
    capacidade: "24.000 BTU/h",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-W24K2RXD",
      marca: "LG Brasil - página oficial do produto S4-W24K2RXD",
      linha: "LG Brasil - página oficial do produto S4-W24K2RXD",
      tipo: "LG Brasil - página oficial do produto S4-W24K2RXD",
      capacidade: "LG Brasil - página oficial do produto S4-W24K2RXD"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "LG Brasil - página oficial do produto S4-W24K2RXD"
  },

  {
    modelo: "S4-W30L43FA",
    codigoBusca: [
      "S4-W30L43FA",
      "S4W30L43FA"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Quente/Frio",
    capacidade: "30.000 BTU/h",
    tensao: "220V / 60Hz / 1F",
    corrente: "11,7 A refrigeração / 10,0 A aquecimento",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-W30L43FA",
      marca: "LG Brasil - página oficial do produto S4-W30L43FA",
      linha: "LG Brasil - página oficial do produto S4-W30L43FA",
      tipo: "LG Brasil - página oficial do produto S4-W30L43FA",
      capacidade: "LG Brasil - página oficial do produto S4-W30L43FA",
      tensao: "LG Brasil - página oficial do produto S4-W30L43FA",
      corrente: "LG Brasil - página oficial do produto S4-W30L43FA"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial",
      corrente: "oficial"
    },

    fonte: "LG Brasil - página oficial do produto S4-W30L43FA"
  },

  {
    modelo: "S4-W36R43FB",
    codigoBusca: [
      "S4-W36R43FB",
      "S4W36R43FB"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Quente/Frio",
    capacidade: "36.000 BTU/h",

    fontesCampos: {
      modelo: "LG Brasil - página oficial do produto S4-W36R43FB",
      marca: "LG Brasil - página oficial do produto S4-W36R43FB",
      linha: "LG Brasil - página oficial do produto S4-W36R43FB",
      tipo: "LG Brasil - página oficial do produto S4-W36R43FB",
      capacidade: "LG Brasil - página oficial do produto S4-W36R43FB"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "LG Brasil - página oficial do produto S4-W36R43FB"
  },

  {
    modelo: "A3UW21GFA0",
    codigoBusca: [
      "A3UW21GFA0"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Multi Split Inverter",
    tipo: "Unidade externa Multi Split Quente/Frio",
    capacidade: "21.000 BTU/h",
    tensao: "220V",

    fontesCampos: {
      modelo: "LG Brasil Business - página oficial A3UW21GFA0",
      marca: "LG Brasil Business - página oficial A3UW21GFA0",
      linha: "LG Brasil Business - página oficial A3UW21GFA0",
      tipo: "LG Brasil Business - página oficial A3UW21GFA0",
      capacidade: "LG Brasil Business - página oficial A3UW21GFA0",
      tensao: "LG Brasil Business - página oficial A3UW21GFA0"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial"
    },

    fonte: "LG Brasil Business - página oficial A3UW21GFA0"
  },

  {
    modelo: "A3UW24GFA2",
    codigoBusca: [
      "A3UW24GFA2"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Multi Split Inverter",
    tipo: "Unidade externa Multi Split Quente/Frio",
    capacidade: "até 36.000 BTU/h",
    tensao: "220V",

    fontesCampos: {
      modelo: "LG Brasil Business - página oficial A3UW24GFA2",
      marca: "LG Brasil Business - página oficial A3UW24GFA2",
      linha: "LG Brasil Business - página oficial A3UW24GFA2",
      tipo: "LG Brasil Business - página oficial A3UW24GFA2",
      capacidade: "LG Brasil Business - página oficial A3UW24GFA2",
      tensao: "LG Brasil Business - página oficial A3UW24GFA2"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial"
    },

    fonte: "LG Brasil Business - página oficial A3UW24GFA2"
  },

  {
    modelo: "38AFVCI12M8",
    codigoBusca: [
      "38AFVCI12M8"
    ],

    tipoCodigo: "condensadora",

    marca: "Midea",
    linha: "Inverter Connect",
    tipo: "Condensadora Split Hi Wall Frio",
    capacidade: "12.000 BTU/h",
    tensao: "127V",
    corrente: "Corrente máxima 22,3 A",
    gas: "R-32",

    fontesCampos: {
      modelo: "Midea Brasil - página oficial e manual oficial do conjunto 42AFVCI12M8 x 38AFVCI12M8",
      marca: "Midea Brasil - página oficial e manual oficial do conjunto 42AFVCI12M8 x 38AFVCI12M8",
      linha: "Midea Brasil - página oficial e manual oficial do conjunto 42AFVCI12M8 x 38AFVCI12M8",
      tipo: "Midea Brasil - página oficial e manual oficial do conjunto 42AFVCI12M8 x 38AFVCI12M8",
      capacidade: "Midea Brasil - página oficial e manual oficial do conjunto 42AFVCI12M8 x 38AFVCI12M8",
      tensao: "Midea Brasil - página oficial e manual oficial do conjunto 42AFVCI12M8 x 38AFVCI12M8",
      corrente: "Midea Brasil - página oficial e manual oficial do conjunto 42AFVCI12M8 x 38AFVCI12M8",
      gas: "Midea Brasil - página oficial e manual oficial do conjunto 42AFVCI12M8 x 38AFVCI12M8"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial",
      corrente: "oficial",
      gas: "oficial"
    },

    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-12000-btus-inverter-connect-frio-midea.pdf",
    fonte: "Midea Brasil - página oficial e manual oficial do conjunto 42AFVCI12M8 x 38AFVCI12M8"
  },

  {
    modelo: "38MGVQI12M5",
    codigoBusca: [
      "38MGVQI12M5"
    ],

    tipoCodigo: "condensadora",

    marca: "Midea",
    linha: "Xtreme Save Connect Black Edition",
    tipo: "Condensadora Split Hi Wall Quente/Frio",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    gas: "R-32",

    fontesCampos: {
      modelo: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      marca: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      linha: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      tipo: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      capacidade: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      tensao: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      gas: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial",
      gas: "oficial"
    },

    manualInstalacao: "https://www.midea.com/content/dam/midea-aem/br/climatizacao/hiwall/ar-condicionado-springer-midea-inverter-xtreme-save-connect/Manual-de-Instala%C3%A7%C3%A3o.pdf",
    fonte: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition"
  },

  {
    modelo: "38MGVQI18M5",
    codigoBusca: [
      "38MGVQI18M5"
    ],

    tipoCodigo: "condensadora",

    marca: "Midea",
    linha: "Xtreme Save Connect Black Edition",
    tipo: "Condensadora Split Hi Wall Quente/Frio",
    capacidade: "18.000 BTU/h",
    tensao: "220V",
    gas: "R-32",

    fontesCampos: {
      modelo: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      marca: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      linha: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      tipo: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      capacidade: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      tensao: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      gas: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial",
      gas: "oficial"
    },

    manualInstalacao: "https://www.midea.com/content/dam/midea-aem/br/climatizacao/hiwall/ar-condicionado-springer-midea-inverter-xtreme-save-connect/Manual-de-Instala%C3%A7%C3%A3o.pdf",
    fonte: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition"
  },

  {
    modelo: "38MGVQI24M5",
    codigoBusca: [
      "38MGVQI24M5"
    ],

    tipoCodigo: "condensadora",

    marca: "Midea",
    linha: "Xtreme Save Connect Black Edition",
    tipo: "Condensadora Split Hi Wall Quente/Frio",
    capacidade: "24.000 BTU/h",
    tensao: "220V",
    gas: "R-32",

    fontesCampos: {
      modelo: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      marca: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      linha: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      tipo: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      capacidade: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      tensao: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition",
      gas: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial",
      gas: "oficial"
    },

    manualInstalacao: "https://www.midea.com/content/dam/midea-aem/br/climatizacao/hiwall/ar-condicionado-springer-midea-inverter-xtreme-save-connect/Manual-de-Instala%C3%A7%C3%A3o.pdf",
    fonte: "Midea Brasil - lâmina técnica oficial Xtreme Save Connect Black Edition"
  },

  {
    modelo: "GKC36EDXF-S6DNF6B/O",
    codigoBusca: [
      "GKC36EDXF-S6DNF6B/O",
      "GKC36EDXFS6DNF6BO"
    ],

    tipoCodigo: "condensadora",

    marca: "Gree",
    linha: "G-Prime Inverter Compact",
    tipo: "Condensadora comercial leve",
    gas: "R-32",

    fontesCampos: {
      modelo: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      marca: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      linha: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      tipo: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      gas: "Gree Brasil - manual oficial G-Prime Inverter Compact"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      gas: "oficial"
    },

    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    fonte: "Gree Brasil - manual oficial G-Prime Inverter Compact"
  },

  {
    modelo: "GKC54EEXK-S6DNF6A/O",
    codigoBusca: [
      "GKC54EEXK-S6DNF6A/O",
      "GKC54EEXKS6DNF6AO"
    ],

    tipoCodigo: "condensadora",

    marca: "Gree",
    linha: "G-Prime Inverter Compact",
    tipo: "Condensadora comercial leve",
    gas: "R-32",

    fontesCampos: {
      modelo: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      marca: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      linha: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      tipo: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      gas: "Gree Brasil - manual oficial G-Prime Inverter Compact"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      gas: "oficial"
    },

    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    fonte: "Gree Brasil - manual oficial G-Prime Inverter Compact"
  },

  {
    modelo: "GTC36EDXF-S6DNF6B/O",
    codigoBusca: [
      "GTC36EDXF-S6DNF6B/O",
      "GTC36EDXFS6DNF6BO"
    ],

    tipoCodigo: "condensadora",

    marca: "Gree",
    linha: "G-Prime Inverter Compact",
    tipo: "Condensadora comercial leve",
    gas: "R-32",

    fontesCampos: {
      modelo: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      marca: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      linha: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      tipo: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      gas: "Gree Brasil - manual oficial G-Prime Inverter Compact"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      gas: "oficial"
    },

    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    fonte: "Gree Brasil - manual oficial G-Prime Inverter Compact"
  },

  {
    modelo: "GTC56EEXK-S6DNF6A/O",
    codigoBusca: [
      "GTC56EEXK-S6DNF6A/O",
      "GTC56EEXKS6DNF6AO"
    ],

    tipoCodigo: "condensadora",

    marca: "Gree",
    linha: "G-Prime Inverter Compact",
    tipo: "Condensadora comercial leve",
    gas: "R-32",

    fontesCampos: {
      modelo: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      marca: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      linha: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      tipo: "Gree Brasil - manual oficial G-Prime Inverter Compact",
      gas: "Gree Brasil - manual oficial G-Prime Inverter Compact"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      gas: "oficial"
    },

    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    fonte: "Gree Brasil - manual oficial G-Prime Inverter Compact"
  },

  {
    modelo: "AR12MVPXAWKNAZ",
    codigoBusca: [
      "AR12MVPXAWKNAZ"
    ],

    tipoCodigo: "condensadora",

    marca: "Samsung",
    linha: "Wind-Free",
    tipo: "Split Inverter Wind-Free Frio",
    capacidade: "12.000 BTU/h",

    fontesCampos: {
      modelo: "Samsung Brasil - suporte oficial do modelo AR12MVPXAWKNAZ",
      marca: "Samsung Brasil - suporte oficial do modelo AR12MVPXAWKNAZ",
      linha: "Samsung Brasil - suporte oficial do modelo AR12MVPXAWKNAZ",
      tipo: "Samsung Brasil - suporte oficial do modelo AR12MVPXAWKNAZ",
      capacidade: "Samsung Brasil - suporte oficial do modelo AR12MVPXAWKNAZ"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "Samsung Brasil - suporte oficial do modelo AR12MVPXAWKNAZ"
  },

  {
    modelo: "AR12DXFAAWK",
    codigoBusca: [
      "AR12DXFAAWK"
    ],

    tipoCodigo: "condensadora",

    marca: "Samsung",
    linha: "WindFree AI Wi-Fi",
    tipo: "Split Inverter WindFree Quente/Frio",
    capacidade: "12.000 BTU/h",

    fontesCampos: {
      modelo: "Samsung Brasil - página oficial do produto AR12DXFAAWK",
      marca: "Samsung Brasil - página oficial do produto AR12DXFAAWK",
      linha: "Samsung Brasil - página oficial do produto AR12DXFAAWK",
      tipo: "Samsung Brasil - página oficial do produto AR12DXFAAWK",
      capacidade: "Samsung Brasil - página oficial do produto AR12DXFAAWK"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "Samsung Brasil - página oficial do produto AR12DXFAAWK"
  },

  {
    modelo: "AR12DYFABWK",
    codigoBusca: [
      "AR12DYFABWK"
    ],

    tipoCodigo: "condensadora",

    marca: "Samsung",
    linha: "WindFree AI Wi-Fi",
    tipo: "Split Inverter WindFree Frio",
    capacidade: "12.000 BTU/h",

    fontesCampos: {
      modelo: "Samsung Brasil - página oficial do produto AR12DYFABWK",
      marca: "Samsung Brasil - página oficial do produto AR12DYFABWK",
      linha: "Samsung Brasil - página oficial do produto AR12DYFABWK",
      tipo: "Samsung Brasil - página oficial do produto AR12DYFABWK",
      capacidade: "Samsung Brasil - página oficial do produto AR12DYFABWK"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "Samsung Brasil - página oficial do produto AR12DYFABWK"
  },

  {
    modelo: "AR12DYFAAWK",
    codigoBusca: [
      "AR12DYFAAWK"
    ],

    tipoCodigo: "condensadora",

    marca: "Samsung",
    linha: "WindFree AI Wi-Fi",
    tipo: "Split Inverter WindFree Frio",
    capacidade: "12.000 BTU/h",

    fontesCampos: {
      modelo: "Samsung Brasil - página oficial do produto AR12DYFAAWK",
      marca: "Samsung Brasil - página oficial do produto AR12DYFAAWK",
      linha: "Samsung Brasil - página oficial do produto AR12DYFAAWK",
      tipo: "Samsung Brasil - página oficial do produto AR12DYFAAWK",
      capacidade: "Samsung Brasil - página oficial do produto AR12DYFAAWK"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "Samsung Brasil - página oficial do produto AR12DYFAAWK"
  },

  {
    modelo: "CBK12EBBCJ",
    codigoBusca: [
      "CBK12EBBCJ"
    ],

    tipoCodigo: "condensadora",

    marca: "Consul",
    linha: "Dual Inverter Cobre",
    tipo: "Split Frio",
    capacidade: "12.000 BTU/h",

    fontesCampos: {
      modelo: "Consul Brasil - página oficial do produto CBK12EBBCJ",
      marca: "Consul Brasil - página oficial do produto CBK12EBBCJ",
      linha: "Consul Brasil - página oficial do produto CBK12EBBCJ",
      tipo: "Consul Brasil - página oficial do produto CBK12EBBCJ",
      capacidade: "Consul Brasil - página oficial do produto CBK12EBBCJ"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "Consul Brasil - página oficial do produto CBK12EBBCJ"
  },

  {
    modelo: "CBK12CBXCJ",
    codigoBusca: [
      "CBK12CBXCJ"
    ],

    tipoCodigo: "condensadora",

    marca: "Consul",
    linha: "Triple Inverter EconoMaxi",
    tipo: "Split Frio",
    capacidade: "12.000 BTU/h",

    fontesCampos: {
      modelo: "Consul Brasil - página oficial do produto CBK12CBXCJ",
      marca: "Consul Brasil - página oficial do produto CBK12CBXCJ",
      linha: "Consul Brasil - página oficial do produto CBK12CBXCJ",
      tipo: "Consul Brasil - página oficial do produto CBK12CBXCJ",
      capacidade: "Consul Brasil - página oficial do produto CBK12CBXCJ"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "Consul Brasil - página oficial do produto CBK12CBXCJ"
  },

  {
    modelo: "CBN12DBBCJ",
    codigoBusca: [
      "CBN12DBBCJ"
    ],

    tipoCodigo: "condensadora",

    marca: "Consul",
    linha: "Convencional Cobre",
    tipo: "Split Frio",
    capacidade: "12.000 BTU/h",

    fontesCampos: {
      modelo: "Consul Brasil - página oficial do produto CBN12DBBCJ",
      marca: "Consul Brasil - página oficial do produto CBN12DBBCJ",
      linha: "Consul Brasil - página oficial do produto CBN12DBBCJ",
      tipo: "Consul Brasil - página oficial do produto CBN12DBBCJ",
      capacidade: "Consul Brasil - página oficial do produto CBN12DBBCJ"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "Consul Brasil - página oficial do produto CBN12DBBCJ"
  },

  {
    modelo: "CBK09DBXCJ",
    codigoBusca: [
      "CBK09DBXCJ"
    ],

    tipoCodigo: "condensadora",

    marca: "Consul",
    linha: "Triple Inverter Cobre",
    tipo: "Split Frio",
    capacidade: "9.000 BTU/h",

    fontesCampos: {
      modelo: "Consul Brasil - página oficial do produto CBK09DBXCJ",
      marca: "Consul Brasil - página oficial do produto CBK09DBXCJ",
      linha: "Consul Brasil - página oficial do produto CBK09DBXCJ",
      tipo: "Consul Brasil - página oficial do produto CBK09DBXCJ",
      capacidade: "Consul Brasil - página oficial do produto CBK09DBXCJ"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "Consul Brasil - página oficial do produto CBK09DBXCJ"
  },

  {
    modelo: "JE12R",
    codigoBusca: [
      "JE12R"
    ],

    tipoCodigo: "condensadora",

    marca: "Electrolux",
    linha: "Color Adapt",
    tipo: "Unidade externa / condensadora Inverter Quente/Frio",
    capacidade: "12.000 BTU/h",
    gas: "R-32",

    fontesCampos: {
      modelo: "Electrolux Brasil - página oficial do conjunto JI12R / JE12R",
      marca: "Electrolux Brasil - página oficial do conjunto JI12R / JE12R",
      linha: "Electrolux Brasil - página oficial do conjunto JI12R / JE12R",
      tipo: "Electrolux Brasil - página oficial do conjunto JI12R / JE12R",
      capacidade: "Electrolux Brasil - página oficial do conjunto JI12R / JE12R",
      gas: "Electrolux Brasil - página oficial do conjunto JI12R / JE12R"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      gas: "oficial"
    },

    fonte: "Electrolux Brasil - página oficial do conjunto JI12R / JE12R"
  },

  {
    modelo: "JE18R",
    codigoBusca: [
      "JE18R"
    ],

    tipoCodigo: "condensadora",

    marca: "Electrolux",
    linha: "Color Adapt",
    tipo: "Unidade externa / condensadora Inverter Quente/Frio",
    capacidade: "18.000 BTU/h",

    fontesCampos: {
      modelo: "Electrolux Brasil - página oficial do conjunto JI18R / JE18R",
      marca: "Electrolux Brasil - página oficial do conjunto JI18R / JE18R",
      linha: "Electrolux Brasil - página oficial do conjunto JI18R / JE18R",
      tipo: "Electrolux Brasil - página oficial do conjunto JI18R / JE18R",
      capacidade: "Electrolux Brasil - página oficial do conjunto JI18R / JE18R"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "Electrolux Brasil - página oficial do conjunto JI18R / JE18R"
  },

  {
    modelo: "YE24F",
    codigoBusca: [
      "YE24F"
    ],

    tipoCodigo: "condensadora",

    marca: "Electrolux",
    linha: "Color Adapt Wi-Fi",
    tipo: "Unidade externa / condensadora Inverter Frio",
    capacidade: "24.000 BTU/h",

    fontesCampos: {
      modelo: "Electrolux Brasil - página oficial do conjunto YI24F / YE24F",
      marca: "Electrolux Brasil - página oficial do conjunto YI24F / YE24F",
      linha: "Electrolux Brasil - página oficial do conjunto YI24F / YE24F",
      tipo: "Electrolux Brasil - página oficial do conjunto YI24F / YE24F",
      capacidade: "Electrolux Brasil - página oficial do conjunto YI24F / YE24F"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "Electrolux Brasil - página oficial do conjunto YI24F / YE24F"
  },

  {
    modelo: "UE18F",
    codigoBusca: [
      "UE18F"
    ],

    tipoCodigo: "condensadora",

    marca: "Electrolux",
    linha: "Color Adapt",
    tipo: "Unidade externa / condensadora Inverter Frio",
    capacidade: "18.000 BTU/h",

    fontesCampos: {
      modelo: "Electrolux Brasil - página oficial do conjunto UI18F / UE18F",
      marca: "Electrolux Brasil - página oficial do conjunto UI18F / UE18F",
      linha: "Electrolux Brasil - página oficial do conjunto UI18F / UE18F",
      tipo: "Electrolux Brasil - página oficial do conjunto UI18F / UE18F",
      capacidade: "Electrolux Brasil - página oficial do conjunto UI18F / UE18F"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial"
    },

    fonte: "Electrolux Brasil - página oficial do conjunto UI18F / UE18F"
  },

  {
    modelo: "45HJFC09C2WCCC",
    codigoBusca: [
      "45HJFC09C2WCCC"
    ],

    tipoCodigo: "condensadora",

    marca: "Elgin",
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split High Wall Frio",
    capacidade: "9.000 BTU/h",
    tensao: "220V",
    gas: "R-32",

    fontesCampos: {
      modelo: "Elgin Brasil - página oficial Eco Inverter II 9.000 BTU/h Frio 220V",
      marca: "Elgin Brasil - página oficial Eco Inverter II 9.000 BTU/h Frio 220V",
      linha: "Elgin Brasil - página oficial Eco Inverter II 9.000 BTU/h Frio 220V",
      tipo: "Elgin Brasil - página oficial Eco Inverter II 9.000 BTU/h Frio 220V",
      capacidade: "Elgin Brasil - página oficial Eco Inverter II 9.000 BTU/h Frio 220V",
      tensao: "Elgin Brasil - página oficial Eco Inverter II 9.000 BTU/h Frio 220V",
      gas: "Elgin Brasil - página oficial Eco Inverter II 9.000 BTU/h Frio 220V"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial",
      gas: "oficial"
    },

    fonte: "Elgin Brasil - página oficial Eco Inverter II 9.000 BTU/h Frio 220V"
  },

  {
    modelo: "PIF36",
    codigoBusca: [
      "PIF36"
    ],

    tipoCodigo: "condensadora",

    marca: "Elgin",
    linha: "Piso Teto Eco Inverter",
    tipo: "Piso Teto Frio",
    capacidade: "36.000 BTU/h",
    tensao: "220V",

    fontesCampos: {
      modelo: "Elgin Brasil - página oficial Piso Teto Eco Inverter 36.000 BTU/h",
      marca: "Elgin Brasil - página oficial Piso Teto Eco Inverter 36.000 BTU/h",
      linha: "Elgin Brasil - página oficial Piso Teto Eco Inverter 36.000 BTU/h",
      tipo: "Elgin Brasil - página oficial Piso Teto Eco Inverter 36.000 BTU/h",
      capacidade: "Elgin Brasil - página oficial Piso Teto Eco Inverter 36.000 BTU/h",
      tensao: "Elgin Brasil - página oficial Piso Teto Eco Inverter 36.000 BTU/h"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial"
    },

    fonte: "Elgin Brasil - página oficial Piso Teto Eco Inverter 36.000 BTU/h"
  },

  {
    modelo: "PTE80",
    codigoBusca: [
      "PTE80"
    ],

    tipoCodigo: "condensadora",

    marca: "Elgin",
    linha: "Piso Teto Eco",
    tipo: "Piso Teto Frio",
    capacidade: "80.000 BTU/h",
    tensao: "380V trifásico",

    fontesCampos: {
      modelo: "Elgin Brasil - página oficial Piso Teto Eco 80.000 BTU/h",
      marca: "Elgin Brasil - página oficial Piso Teto Eco 80.000 BTU/h",
      linha: "Elgin Brasil - página oficial Piso Teto Eco 80.000 BTU/h",
      tipo: "Elgin Brasil - página oficial Piso Teto Eco 80.000 BTU/h",
      capacidade: "Elgin Brasil - página oficial Piso Teto Eco 80.000 BTU/h",
      tensao: "Elgin Brasil - página oficial Piso Teto Eco 80.000 BTU/h"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial"
    },

    fonte: "Elgin Brasil - página oficial Piso Teto Eco 80.000 BTU/h"
  },

  {
    modelo: "K7E24",
    codigoBusca: [
      "K7E24"
    ],

    tipoCodigo: "condensadora",

    marca: "Elgin",
    linha: "Cassete Eco Inverter",
    tipo: "Cassete Quente/Frio",
    capacidade: "24.000 BTU/h",
    tensao: "220V",

    fontesCampos: {
      modelo: "Elgin Brasil - página oficial Cassete Eco Inverter 24.000 BTU/h",
      marca: "Elgin Brasil - página oficial Cassete Eco Inverter 24.000 BTU/h",
      linha: "Elgin Brasil - página oficial Cassete Eco Inverter 24.000 BTU/h",
      tipo: "Elgin Brasil - página oficial Cassete Eco Inverter 24.000 BTU/h",
      capacidade: "Elgin Brasil - página oficial Cassete Eco Inverter 24.000 BTU/h",
      tensao: "Elgin Brasil - página oficial Cassete Eco Inverter 24.000 BTU/h"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial"
    },

    fonte: "Elgin Brasil - página oficial Cassete Eco Inverter 24.000 BTU/h"
  }

];
