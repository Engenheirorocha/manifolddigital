/* HVAC PRO - databases/acervo_tecnico.js
   ACERVO TÉCNICO - ETAPA 2 DE 4 - FINAL LIMPO

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

   ETAPA 2/4:
   20 marcas no acervo.

   MARCAS:
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
   11. Britânia
   12. TCL
   13. Agratto
   14. Hisense
   15. EOS
   16. Fujitsu / General
   17. Springer Midea / Carrier
   18. Trane
   19. Hitachi
   20. Olimpia Splendid
*/

window.acervoTecnico = [

  /* =========================================================
     1. MIDEA
     ========================================================= */

  {
    marca: "Midea",
    modelo: "Midea Xtreme Save AI Connect AGVCJ R32 9000 12000 BTU",
    codigoBusca: [
      "MIDEA",
      "MIDEIA",
      "XTREME SAVE",
      "XTREME SAVE AI",
      "XTREME SAVE AI CONNECT",
      "AGVCJ",
      "42AGVCJ",
      "38AGVCJ",
      "42AGVCJ09M5",
      "38AGVCJ09M5",
      "42AGVCJ12M5",
      "38AGVCJ12M5",
      "42AGVCJ09",
      "38AGVCJ09",
      "42AGVCJ12",
      "38AGVCJ12",
      "MIDEA R32",
      "MIDEA 9000 R32",
      "MIDEA 12000 R32"
    ],
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
    modelo: "Midea Xtreme Save Connect AGVCI R32 9000 12000 18000 24000 BTU",
    codigoBusca: [
      "MIDEA AGVCI",
      "XTREME SAVE CONNECT",
      "42AGVCI",
      "38AGVCI",
      "42AGVCI09M5",
      "38AGVCI09M5",
      "42AGVCI12M5",
      "38AGVCI12M5",
      "42AGVCI18M5",
      "38AGVCI18M5",
      "42AGVCI24M5",
      "38AGVCI24M5",
      "MIDEA XTREME SAVE 9000",
      "MIDEA XTREME SAVE 12000",
      "MIDEA XTREME SAVE 18000",
      "MIDEA XTREME SAVE 24000"
    ],
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
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
      tensao: "FABRICANTE_OFICIAL",
      fluidoRefrigerante: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
      tensao: "OFICIAL",
      fluidoRefrigerante: "OFICIAL"
    }
  },

  {
    marca: "Midea",
    modelo: "Midea Multi Inverter FreeMatch",
    codigoBusca: [
      "MIDEA MULTI",
      "MULTI INVERTER",
      "FREEMATCH",
      "FREE MATCH",
      "42AGMSB",
      "42MGMSB",
      "40KVAQ",
      "40KVBQ",
      "42BQ",
      "MIDEA MULTISPLIT"
    ],
    linha: "Multi Inverter / FreeMatch",
    tipo: "Multi Split Inverter / Hi Wall / Cassete / Built-in conforme combinação",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-multisplit-instalacao.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/ar-condicionado-multisplit-instalacao.pdf",
    fonte: "Base tecnica HVAC PRO - Midea Multi Inverter FreeMatch",
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

  /* =========================================================
     2. GREE
     ========================================================= */

  {
    marca: "Gree",
    modelo: "Gree G-Diamond Auto Inverter R32 9000 12000 18000 24000 BTU",
    codigoBusca: [
      "GREE",
      "G DIAMOND",
      "G-DIAMOND",
      "G-DIAMOND AUTO",
      "G-DIAMOND AUTO INVERTER",
      "GWC09ACA-D6DNA1A",
      "GWH09ACA-D6DNA1A",
      "GWC12ACC-D6DNA1A",
      "GWH12ACC-D6DNA1A",
      "GWC18ACD-D6DNA1C",
      "GWH18ACD-D6DNA1C",
      "GWC24ACE-D6DNA1B",
      "GWH24ACE-D6DNA1B",
      "GREE R32",
      "GREE 9000",
      "GREE 12000",
      "GREE 18000",
      "GREE 24000"
    ],
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
      "G PRIME INVERTER COMPACT",
      "GREE G-PRIME COMPACT"
    ],
    linha: "G-Prime Inverter Compact",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    manualManutencao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-Prime-Inverter-Compact-full-Rev.000-2.pdf",
    fonte: "Base tecnica HVAC PRO - Gree G-Prime Inverter Compact",
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
    modelo: "Gree Portal Oficial Materiais Tecnicos",
    codigoBusca: [
      "GREE MANUAIS",
      "MANUAIS GREE",
      "MATERIAIS TECNICOS GREE",
      "MATERIAIS TÉCNICOS GREE",
      "GREE G TOP",
      "GREE G-DIAMOND",
      "GREE G-PRIME",
      "GREE G-LINEA",
      "GREE G-CLASSIC",
      "PISO TETO GREE",
      "CASSETE GREE",
      "GREE PORTATIL",
      "GREE JANELA"
    ],
    linha: "Portal oficial de materiais técnicos",
    tipo: "Consulta oficial por linha/modelo",
    manualInstalacao: "https://gree.com.br/manuais/",
    manualManutencao: "https://gree.com.br/manuais/",
    fonte: "Base tecnica HVAC PRO - Portal Gree",
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

  /* =========================================================
     3. LG
     ========================================================= */

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
      "LG 12000 FRIO",
      "12000 BTU LG 220V"
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
    marca: "LG",
    modelo: "LG S4-W12JA31A Dual Inverter Voice 12000 BTU Quente Frio 220V",
    codigoBusca: [
      "LG S4-W12JA31A",
      "S4-W12JA31A",
      "S4W12JA31A",
      "LG DUAL INVERTER VOICE QUENTE FRIO",
      "LG 12000 QUENTE FRIO"
    ],
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

  /* =========================================================
     4. SAMSUNG
     ========================================================= */

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
      "SAMSUNG WINDFREE 12000",
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
      "SAMSUNG AR12DYFABWKNAZ",
      "AR12DYFABWKNAZ",
      "AR12DYFAB",
      "AR12DYFABWK",
      "WINDFREE AI",
      "WIND FREE AI",
      "SAMSUNG WINDFREE AI 12000",
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
    marca: "Samsung",
    modelo: "Samsung AR12DXFAAWKXAZ WindFree 12000 BTU",
    codigoBusca: [
      "SAMSUNG AR12DXFAAWKXAZ",
      "AR12DXFAAWKXAZ",
      "AR12DXFAA",
      "WINDFREE DXFA",
      "SAMSUNG DXFA"
    ],
    linha: "WindFree",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12DXFAAWKXAZ/",
    manualManutencao: "https://www.samsung.com/br/support/model/AR12DXFAAWKXAZ/",
    fonte: "Base tecnica HVAC PRO - Samsung AR12DXFAAWKXAZ",
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

  /* =========================================================
     5. ELGIN
     ========================================================= */

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
      "ELGIN HJFC12",
      "ELGIN 12000 R32",
      "ELGIN 12000 FRIO"
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
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-inverter-ii-12000-btus-frio-wifi-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Base tecnica HVAC PRO - Elgin Eco Inverter II",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
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
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
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
    marca: "Elgin",
    modelo: "Elgin Eco Inverter II Wi-Fi HJFC09C2WBCB 9000 BTU Frio 220V",
    codigoBusca: [
      "ELGIN HJFC09C2WBCB",
      "HJFC09C2WBCB",
      "HJFI09C2WB",
      "HJFE09C2CB",
      "ELGIN HJFC09",
      "ELGIN 9000 R32",
      "ELGIN 9000 FRIO"
    ],
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
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
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
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
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

  /* =========================================================
     6. KOMECO
     ========================================================= */

  {
    marca: "Komeco",
    modelo: "Komeco KOHI 09QC 1HV Inverter 9000 BTU",
    codigoBusca: [
      "KOMECO",
      "KOHI",
      "KOHI09QC1HV",
      "KOHI 09QC 1HV",
      "KOHI 09",
      "KOMECO KOHI 09QC",
      "KOMECO 9000"
    ],
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
      "KOMECO KOHI12QC1HV",
      "KOHI12QC1HV",
      "KOHI 12QC 1HV",
      "KOHI 12",
      "KOMECO KOHI 12QC",
      "KOMECO 12000"
    ],
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

  /* =========================================================
     7. DAIKIN
     ========================================================= */

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
      "DAIKIN R32",
      "DAIKIN 9000",
      "DAIKIN 12000",
      "DAIKIN 18000",
      "DAIKIN 24000"
    ],
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
    marca: "Daikin",
    modelo: "Daikin EcoSwing Smart Gold R32",
    codigoBusca: [
      "DAIKIN SMART GOLD",
      "ECOSWING SMART GOLD",
      "ECO SWING SMART GOLD",
      "SPLIT ECOSWING SMART GOLD",
      "DAIKIN GOLD R32"
    ],
    linha: "EcoSwing Smart Gold R-32",
    tipo: "Split Hi Wall Inverter Premium",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/produto/split-ecoswing-smart-gold-r-32",
    manualManutencao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Base tecnica HVAC PRO - Daikin EcoSwing Smart Gold",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      fluidoRefrigerante: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      fluidoRefrigerante: "OFICIAL"
    }
  },

  /* =========================================================
     8. CONSUL
     ========================================================= */

  {
    marca: "Consul",
    modelo: "Consul CBK12EBBCJ Dual Inverter Cobre Frio 12000 BTU",
    codigoBusca: [
      "CONSUL",
      "CBK12EBBCJ",
      "CBK12EB",
      "DUAL INVERTER CONSUL",
      "CONSUL DUAL INVERTER",
      "CONSUL 12000",
      "CONSUL COBRE FRIO"
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
    marca: "Consul",
    modelo: "Consul CBK12DBXCJ Triple Inverter Cobre Frio 12000 BTU",
    codigoBusca: [
      "CONSUL CBK12DBXCJ",
      "CBK12DBXCJ",
      "CONSUL TRIPLE INVERTER",
      "TRIPLE INVERTER CONSUL",
      "CONSUL 12000 TRIPLE"
    ],
    linha: "Triple Inverter Cobre Frio",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.consul.com.br/ar-condicionado-split-consul-triple-inverter-cobre-frio-12000-btus-cbk12dbxcj/p",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Base tecnica HVAC PRO - Consul CBK12DBXCJ",
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

  /* =========================================================
     9. ELECTROLUX
     ========================================================= */

  {
    marca: "Electrolux",
    modelo: "Electrolux QI12F QE12F Inverter Split 12000 BTU Frio 220V",
    codigoBusca: [
      "ELECTROLUX",
      "QI12F",
      "QE12F",
      "QI12F/QE12F",
      "ELECTROLUX QI12F",
      "ELECTROLUX QE12F",
      "ELECTROLUX INVERTER 12000",
      "ELECTROLUX 12000 FRIO"
    ],
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
    modelo: "Electrolux JI12R JE12R Color Adapt Inverter 12000 BTU Quente Frio",
    codigoBusca: [
      "ELECTROLUX JI12R",
      "ELECTROLUX JE12R",
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
    fonte: "Base tecnica HVAC PRO - Electrolux JI12R JE12R",
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

  /* =========================================================
     10. PHILCO
     ========================================================= */

  {
    marca: "Philco",
    modelo: "Philco PAC12QC Split Inverter 12000 BTU",
    codigoBusca: [
      "PHILCO",
      "PAC12QC",
      "PHILCO PAC12QC",
      "PHILCO SPLIT INVERTER 12000",
      "PHILCO 12000",
      "PAC12QC SPLIT"
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
    modelo: "Philco PAC12QA Inverter Espelhado 12000 BTU Quente Frio R32",
    codigoBusca: [
      "PHILCO PAC12QA",
      "PAC12QA",
      "PHILCO ESPELHADO",
      "PHILCO R32",
      "PHILCO QUENTE FRIO 12000",
      "PAC12QA R32"
    ],
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

  /* =========================================================
     11. BRITÂNIA
     ========================================================= */

  {
    marca: "Britânia",
    modelo: "Britânia Prime Air Inverter 12000BTUs Quente Frio 12QC",
    codigoBusca: [
      "BRITANIA",
      "BRITÂNIA",
      "PRIME AIR",
      "PRIME AIR INVERTER",
      "12QC",
      "BRITANIA 12QC",
      "BRITÂNIA 12QC",
      "BRITANIA 12000",
      "BRITÂNIA 12000"
    ],
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

  /* =========================================================
     12. TCL
     ========================================================= */

  {
    marca: "TCL",
    modelo: "TCL Série A2 Inverter TAC-09CSA2-INV",
    codigoBusca: [
      "TCL",
      "TCL A2",
      "SERIE A2",
      "SÉRIE A2",
      "TAC-09CSA2-INV",
      "TAC09CSA2INV",
      "TCL 9000",
      "TCL SPLIT A2",
      "TCL INVERTER"
    ],
    linha: "Série A2 Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    manualInstalacao: "https://www.tcl.com/br/pt/air-conditioners/series-a2-inverter",
    manualManutencao: "https://www.tcl.com/br/pt/air-conditioners/series-a2-inverter",
    fonte: "Base tecnica HVAC PRO - TCL Serie A2",
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

  /* =========================================================
     13. AGRATTO
     ========================================================= */

  {
    marca: "Agratto",
    modelo: "Agratto LIV Inverter TOP LCST12F-02I 12000 BTU Frio",
    codigoBusca: [
      "AGRATTO",
      "LIV INVERTER",
      "LIV INVERTER TOP",
      "LCST12F-02I",
      "LCST12F02I",
      "AGRATTO 12000",
      "AGRATTO LIV 12000",
      "AGRATTO SPLIT INVERTER"
    ],
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

  /* =========================================================
     14. HISENSE
     ========================================================= */

  {
    marca: "Hisense",
    modelo: "Hisense Split Hi-Smart Inverter",
    codigoBusca: [
      "HISENSE",
      "HISENSE SPLIT",
      "HISENSE INVERTER",
      "HISENSE AR CONDICIONADO",
      "HI SMART",
      "HI-SMART",
      "HISENSE HI SMART"
    ],
    linha: "Hi-Smart Inverter",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://www.hisense.com.br/ar-condicionado/split-hi-smart/",
    manualManutencao: "https://www.hisense.com.br/ar-condicionado/split-hi-smart/",
    fonte: "Base tecnica HVAC PRO - Hisense Hi-Smart",
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

  /* =========================================================
     15. EOS
     ========================================================= */

  {
    marca: "EOS",
    modelo: "EOS Master Inverter R32 9000 12000 18000 24000 30000 BTU",
    codigoBusca: [
      "EOS",
      "EOS MASTER INVERTER",
      "MASTER INVERTER EOS",
      "EOS R32",
      "EOS 9000",
      "EOS 12000",
      "EOS 18000",
      "EOS 24000",
      "EOS 30000"
    ],
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

  /* =========================================================
     16. FUJITSU / GENERAL
     ========================================================= */

  {
    marca: "Fujitsu / General",
    modelo: "Fujitsu General Split High Wall Linha Premium 9000 12000 BTU",
    codigoBusca: [
      "FUJITSU",
      "GENERAL",
      "FUJITSU GENERAL",
      "SPLIT HIGH WALL FUJITSU",
      "HIGH WALL GENERAL",
      "FUJITSU PREMIUM",
      "GENERAL PREMIUM",
      "FUJITSU 9000",
      "FUJITSU 12000"
    ],
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

  /* =========================================================
     17. SPRINGER MIDEA / CARRIER
     ========================================================= */

  {
    marca: "Springer Midea / Carrier",
    modelo: "Springer Midea AirVolution Connect Split Hi Wall",
    codigoBusca: [
      "SPRINGER",
      "SPRINGER MIDEA",
      "CARRIER",
      "AIRVOLUTION",
      "AIR VOLUTION",
      "AIRVOLUTION CONNECT",
      "42AF",
      "38AF",
      "MIDEA AIRVOLUTION"
    ],
    linha: "AirVolution Connect",
    tipo: "Split Hi Wall",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-12000-btu-springer-midea-airvolution-connect-quente-e-frio.pdf",
    manualManutencao: "https://conteudo.midea.com.br/manuais/ar-condicionado-12000-btu-springer-midea-airvolution-connect-quente-e-frio.pdf",
    fonte: "Base tecnica HVAC PRO - Springer Midea AirVolution",
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

  /* =========================================================
     18. TRANE
     ========================================================= */

  {
    marca: "Trane",
    modelo: "Trane Multi Split Inverter R410A",
    codigoBusca: [
      "TRANE",
      "TRANE MULTI SPLIT",
      "MULTI SPLIT INVERTER TRANE",
      "4MDC",
      "4MWC",
      "TRANE R410A"
    ],
    linha: "Multi Split Inverter",
    tipo: "Multi Split Inverter",
    fluidoRefrigerante: "R-410A",
    manualInstalacao: "https://trane.com.br/commercial/latin-america/br/pt/products-systems/vrff-e-mini-split/comercial-Leve/multi-split-inverter.html",
    manualManutencao: "https://trane.com.br/content/dam/Trane/Commercial/lar/br/produtos-sistemas/equipamentos/Minisplits/mult-split-inverter/iom-pb-high-wall-inverter-50-60hz-4mwc23-ms-svx067a-pb.pdf",
    fonte: "Base tecnica HVAC PRO - Trane Multi Split",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      fluidoRefrigerante: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      fluidoRefrigerante: "OFICIAL"
    }
  },

  /* =========================================================
     19. HITACHI
     ========================================================= */

  {
    marca: "Hitachi",
    modelo: "Hitachi airHome 600 Split Hi Wall Inverter R32",
    codigoBusca: [
      "HITACHI",
      "AIRHOME 600",
      "AIR HOME 600",
      "SPK09C3IVF",
      "SPK12C3IVF",
      "SPK18C3IVF",
      "SPK24C3IVF",
      "RPK09C3IVF",
      "RPK12C3IVF",
      "RPK18C3IVF",
      "RPK24C3IVF",
      "RAA09C3IVF",
      "RAA12C3IVF",
      "RAA18C3IVF",
      "RAA24C3IVF"
    ],
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

  /* =========================================================
     20. OLIMPIA SPLENDID
     ========================================================= */

  {
    marca: "Olimpia Splendid",
    modelo: "Olimpia Splendid Ar Condicionado Portatil Dolceclima",
    codigoBusca: [
      "OLIMPIA",
      "OLIMPIA SPLENDID",
      "OLIMPIA PORTATIL",
      "OLIMPIA PORTÁTIL",
      "PORTATIL OLIMPIA",
      "PORTÁTIL OLIMPIA",
      "DOLCECLIMA"
    ],
    linha: "Portátil / Dolceclima",
    tipo: "Ar-condicionado portátil",
    manualInstalacao: "https://www.olimpiasplendid.com.br/area_download",
    manualManutencao: "https://www.olimpiasplendid.com.br/area_download",
    fonte: "Base tecnica HVAC PRO - Olimpia Splendid Portatil",
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
  }
];
