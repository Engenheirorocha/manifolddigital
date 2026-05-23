/* HVAC PRO - databases/acervo_tecnico.js
   ACERVO TÉCNICO - BLOCO 1 REAL - 10 MARCAS

   IMPORTANTE:
   - NÃO mexer no app.js.
   - Este arquivo usa objeto simples em window.acervoTecnico.
   - Cada campo pode ter uma confiança própria em confiancaCampos.

   CORES NO APP:
   - OFICIAL = azul
   - CONFIAVEL_NAO_OFICIAL = verde
   - INFORMACAO_SUGERIDA = branco

   MARCAS DESTE BLOCO:
   1. Midea
   2. Gree
   3. LG
   4. Samsung
   5. Elgin
   6. Komeco
   7. Daikin
   8. Consul
   9. Electrolux
   10. Philco
*/

window.acervoTecnico = [
  {
    marca: "Midea",
    modelo: "Midea Xtreme Save AI Connect AGVCJ R32",
    codigoBusca: [
      "MIDEA",
      "XTREME SAVE",
      "XTREME SAVE AI CONNECT",
      "AGVCJ",
      "42AGVCJ",
      "38AGVCJ",
      "42AGVCJ09M5",
      "38AGVCJ09M5",
      "42AGVCJ12M5",
      "38AGVCJ12M5",
      "MIDEA R32"
    ],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter",
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
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
      tensao: "FABRICANTE_OFICIAL",
      fluidoRefrigerante: "FABRICANTE_OFICIAL",
      cargaGas: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
      tensao: "OFICIAL",
      fluidoRefrigerante: "OFICIAL",
      cargaGas: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    }
  },

  {
    marca: "Midea",
    modelo: "Midea Multi Inverter FreeMatch",
    codigoBusca: [
      "MIDEA MULTI",
      "MIDEA FREEMATCH",
      "FREE MATCH",
      "FREEMATCH",
      "42AGMSB",
      "42MGMSB",
      "40KVAQ",
      "40KVBQ",
      "42BQ",
      "MULTI INVERTER"
    ],
    linha: "Multi Inverter / FreeMatch",
    tipo: "Multi Split Inverter / Hi Wall / Cassete / Built-in",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-multisplit-instalacao.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/ar-condicionado-multisplit-instalacao.pdf",
    fonte: "Base tecnica HVAC PRO - Midea Multi Inverter",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL"
    }
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
      "GDIAMOND",
      "GWC09ACA",
      "GWH09ACA",
      "GWC12ACC",
      "GWH12ACC",
      "GWC18ACD",
      "GWH18ACD",
      "GWC24ACE",
      "GWH24ACE"
    ],
    linha: "G-Diamond Auto Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 / 18.000 / 24.000 BTU/h",
    tensao: "220V / 60Hz / monofásico",
    fluidoRefrigerante: "R32",
    cargaGas: "9.000: 550 g | 12.000: 630 g | 18.000: 940 g | 24.000: 1100 g",
    correnteNominal: "9.000: 6 A | 12.000: 10,6 A | 18.000: 13,5 A | 24.000: 13,5 A",
    tubulacaoAlta: "9.000 a 24.000: 1/4 pol.",
    tubulacaoBaixa: "9.000: 3/8 pol. | 12.000/18.000/24.000: 1/2 pol.",
    comprimentoMaximo: "9.000: 15 m | 12.000/18.000/24.000: 20 a 25 m",
    desnivelMaximo: "10 m",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    fonte: "Base tecnica HVAC PRO - Gree G-Diamond Auto",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
      fluidoRefrigerante: "FABRICANTE_OFICIAL",
      tensao: "CONFIAVEL_NAO_OFICIAL",
      cargaGas: "CONFIAVEL_NAO_OFICIAL",
      correnteNominal: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
      fluidoRefrigerante: "OFICIAL",
      tensao: "CONFIAVEL_NAO_OFICIAL",
      cargaGas: "CONFIAVEL_NAO_OFICIAL",
      correnteNominal: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    }
  },

  {
    marca: "Gree",
    modelo: "Gree G-Prime Inverter Compact",
    codigoBusca: [
      "GREE G PRIME",
      "G-PRIME",
      "G-PRIME INVERTER",
      "G-PRIME INVERTER COMPACT",
      "G PRIME INVERTER COMPACT"
    ],
    linha: "G-Prime Inverter Compact",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    fonte: "Base tecnica HVAC PRO - Gree G-Prime",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL"
    }
  },

  {
    marca: "LG",
    modelo: "LG S4-Q12JA315 Dual Inverter Voice 12000 BTU Frio 220V",
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
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    manualInstalacao: "https://www.lg.com/br/ar-condicionado-residencial/ar-condicionado-split/s4-q12ja315/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "Base tecnica HVAC PRO - LG S4-Q12JA315",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
      tensao: "FABRICANTE_OFICIAL",
      fluidoRefrigerante: "INFORMACAO_SUGERIDA",
      tubulacaoAlta: "INFORMACAO_SUGERIDA",
      tubulacaoBaixa: "INFORMACAO_SUGERIDA"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
      tensao: "OFICIAL",
      fluidoRefrigerante: "INFORMACAO_SUGERIDA",
      tubulacaoAlta: "INFORMACAO_SUGERIDA",
      tubulacaoBaixa: "INFORMACAO_SUGERIDA"
    }
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
    fonte: "Base tecnica HVAC PRO - Samsung AR12MVPXAWKNAZ",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL"
    }
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
    fonte: "Base tecnica HVAC PRO - Samsung AR12DYFABWKNAZ",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL"
    }
  },

  {
    marca: "Elgin",
    modelo: "Elgin Eco Inverter II Wi-Fi HJFC12C2WBCB 12000 BTU Frio 220V",
    codigoBusca: [
      "ELGIN",
      "ECO INVERTER II",
      "ECO INVERTER II WIFI",
      "ECO INVERTER II WI-FI",
      "HJFC12C2WBCB",
      "HJFI12C2WB",
      "HJFE12C2CB",
      "ELGIN 12000 R32"
    ],
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
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado/ar-condicionado-split-high-wall",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Base tecnica HVAC PRO - Elgin Eco Inverter II",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "CONFIAVEL_NAO_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "CONFIAVEL_NAO_OFICIAL",
      tensao: "CONFIAVEL_NAO_OFICIAL",
      fluidoRefrigerante: "CONFIAVEL_NAO_OFICIAL",
      correnteNominal: "CONFIAVEL_NAO_OFICIAL",
      disjuntor: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "CONFIAVEL_NAO_OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "CONFIAVEL_NAO_OFICIAL",
      tensao: "CONFIAVEL_NAO_OFICIAL",
      fluidoRefrigerante: "CONFIAVEL_NAO_OFICIAL",
      correnteNominal: "CONFIAVEL_NAO_OFICIAL",
      disjuntor: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    }
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
    fluidoRefrigerante: "A2L conforme manual da linha",
    tubulacaoAlta: "1/4 pol. (6,35 mm)",
    tubulacaoBaixa: "1/2 pol. (12,7 mm)",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/MANUAL%20DE%20SERVICO%20INVERTER.PDF",
    fonte: "Base tecnica HVAC PRO - Komeco KOHI",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
      fluidoRefrigerante: "FABRICANTE_OFICIAL",
      tubulacaoAlta: "FABRICANTE_OFICIAL",
      tubulacaoBaixa: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
      fluidoRefrigerante: "OFICIAL",
      tubulacaoAlta: "OFICIAL",
      tubulacaoBaixa: "OFICIAL"
    }
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
    fluidoRefrigerante: "A2L conforme manual da linha",
    tubulacaoAlta: "3/8 pol. (9,52 mm)",
    tubulacaoBaixa: "1/4 pol. (6,35 mm)",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/MANUAL%20DE%20SERVICO%20INVERTER.PDF",
    fonte: "Base tecnica HVAC PRO - Komeco KOHI",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
      fluidoRefrigerante: "FABRICANTE_OFICIAL",
      tubulacaoAlta: "FABRICANTE_OFICIAL",
      tubulacaoBaixa: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
      fluidoRefrigerante: "OFICIAL",
      tubulacaoAlta: "OFICIAL",
      tubulacaoBaixa: "OFICIAL"
    }
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
      "DAIKIN R32"
    ],
    linha: "EcoSwing R-32",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 / 12.000 / 18.000 / 24.000 BTU/h conforme modelo",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/profissionais/downloads",
    manualManutencao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Base tecnica HVAC PRO - Daikin EcoSwing",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
      fluidoRefrigerante: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
      fluidoRefrigerante: "OFICIAL"
    }
  },

  {
    marca: "Consul",
    modelo: "Consul CBK12EBBCJ Dual Inverter Cobre Frio 12000 BTU",
    codigoBusca: [
      "CONSUL",
      "CBK12EBBCJ",
      "CBK12EB",
      "DUAL INVERTER CONSUL",
      "CONSUL DUAL INVERTER",
      "CONSUL 12000"
    ],
    linha: "Dual Inverter Cobre Frio",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.consul.com.br/ar-condicionado-split-consul-dual-inverter-cobre-frio-12000-btus-cbk12eb/p",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Base tecnica HVAC PRO - Consul CBK12EBBCJ",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL"
    }
  },

  {
    marca: "Electrolux",
    modelo: "Electrolux QI12F/QE12F Inverter Split 12000 BTU Frio",
    codigoBusca: [
      "ELECTROLUX",
      "QI12F",
      "QE12F",
      "QI12F/QE12F",
      "ELECTROLUX 12000",
      "ELECTROLUX INVERTER 12000"
    ],
    linha: "Split Inverter",
    tipo: "Split Hi Wall Inverter Frio",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    manualInstalacao: "https://loja.electrolux.com.br/ar-condicionado-split-electrolux-inverter-12000-btus-frio-qi12f-qe12f/p",
    manualManutencao: "https://cuida.electrolux.com.br/guias-e-manuais",
    fonte: "Base tecnica HVAC PRO - Electrolux QI12F/QE12F",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
      tensao: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
      tensao: "OFICIAL"
    }
  },

  {
    marca: "Electrolux",
    modelo: "Electrolux JI12R/JE12R Color Adapt Inverter 12000 BTU Quente Frio",
    codigoBusca: [
      "ELECTROLUX",
      "JI12R",
      "JE12R",
      "JI12R/JE12R",
      "COLOR ADAPT",
      "ELECTROLUX COLOR ADAPT",
      "ELECTROLUX QUENTE FRIO 12000"
    ],
    linha: "Color Adapt Inverter",
    tipo: "Split Hi Wall Inverter Quente/Frio",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://loja.electrolux.com.br/ar-condicionado-split-electrolux-inverter-12000-btus-color-adapt-quente-frio-ji12r-je12r/p",
    manualManutencao: "https://cuida.electrolux.com.br/guias-e-manuais",
    fonte: "Base tecnica HVAC PRO - Electrolux JI12R/JE12R",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL"
    }
  },

  {
    marca: "Philco",
    modelo: "Philco PAC12QC Split Inverter 12000 BTU",
    codigoBusca: [
      "PHILCO",
      "PAC12QC",
      "PHILCO PAC12QC",
      "PHILCO SPLIT INVERTER 12000",
      "PHILCO 12000"
    ],
    linha: "Split Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.philco.com.br/ar-condicionado-split-12000-pac12qc/p",
    manualManutencao: "https://www.philco.com.br/ar-condicionado-split-12000-pac12qc/p",
    fonte: "Base tecnica HVAC PRO - Philco PAC12QC",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL"
    }
  },

  {
    marca: "Philco",
    modelo: "Philco PAC12QA Inverter Espelhado 12000 BTU Quente Frio",
    codigoBusca: [
      "PHILCO",
      "PAC12QA",
      "PHILCO PAC12QA",
      "PHILCO ESPELHADO",
      "PHILCO R32",
      "PHILCO QUENTE FRIO 12000"
    ],
    linha: "Inverter Espelhado",
    tipo: "Split Hi Wall Inverter Quente/Frio",
    capacidade: "12.000 BTU/h",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.philco.com.br/ar-condicionado-philco-inverter-espelhado-12000btus-quente-frio-pac12qa-1/p",
    manualManutencao: "https://www.philco.com.br/ar-condicionado-philco-inverter-espelhado-12000btus-quente-frio-pac12qa-1/p",
    fonte: "Base tecnica HVAC PRO - Philco PAC12QA",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
      fluidoRefrigerante: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
      fluidoRefrigerante: "OFICIAL"
    }
  }
];
