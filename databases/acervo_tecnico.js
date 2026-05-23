/* HVAC PRO - databases/acervo_tecnico.js
   ACERVO TÉCNICO - ETAPA 3 DE 4 - REFEITO E ENRIQUECIDO

   NÃO MEXER NO app.js.
   NÃO MEXER NO index.html.
   NÃO MEXER NO style.css.

   CORES NO APP:
   - OFICIAL = azul
   - CONFIAVEL_NAO_OFICIAL = verde
   - INFORMACAO_SUGERIDA = branco

   REGRA:
   - Cada dado técnico recebe sua própria confiança em confiancaCampos.
   - Fonte geral deve ficar neutra para não contaminar as cores.
   - Campo sem dado útil deve ficar vazio ou não existir.

   ETAPA 3:
   Mantém as 20 marcas anteriores e adiciona complementos importantes:
   - York / Johnson Controls
   - Mitsubishi Electric
   - Rheem
   - Comfee
   - Fontaine
   - Carrier/Springer legado
   - Complementos: janela, portátil, cassete, piso-teto, multi split, VRF e comercial leve.
*/

window.acervoTecnico = [

  /* =========================================================
     ETAPA 1 - 10 MARCAS BASE
     ========================================================= */

  {
    marca: "Midea",
    modelo: "Midea Xtreme Save AI Connect AGVCJ R32 9000 12000 BTU",
    codigoBusca: ["MIDEA", "MIDEIA", "XTREME SAVE", "XTREME SAVE AI CONNECT", "AGVCJ", "42AGVCJ", "38AGVCJ", "42AGVCJ09M5", "38AGVCJ09M5", "42AGVCJ12M5", "38AGVCJ12M5", "MIDEA R32"],
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
      marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", tensao: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL",
      cargaGas: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", tensao: "OFICIAL", fluidoRefrigerante: "OFICIAL",
      cargaGas: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    }
  },

  {
    marca: "Gree",
    modelo: "Gree G-Diamond Auto Inverter R32 9000 12000 18000 24000 BTU",
    codigoBusca: ["GREE", "G DIAMOND", "G-DIAMOND", "G-DIAMOND AUTO", "G-DIAMOND AUTO INVERTER", "GWC09ACA-D6DNA1A", "GWH09ACA-D6DNA1A", "GWC12ACC-D6DNA1A", "GWH12ACC-D6DNA1A", "GWC18ACD-D6DNA1C", "GWH18ACD-D6DNA1C", "GWC24ACE-D6DNA1B", "GWH24ACE-D6DNA1B"],
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
    fonte: "Base tecnica HVAC PRO - Gree G-Diamond Auto",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL",
      tensao: "CONFIAVEL_NAO_OFICIAL", cargaGas: "CONFIAVEL_NAO_OFICIAL", correnteNominal: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", fluidoRefrigerante: "OFICIAL",
      tensao: "CONFIAVEL_NAO_OFICIAL", cargaGas: "CONFIAVEL_NAO_OFICIAL", correnteNominal: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    }
  },

  {
    marca: "LG",
    modelo: "LG S4-Q12JA315 Dual Inverter Voice 12000 BTU Frio 220V",
    codigoBusca: ["LG", "S4-Q12JA315", "S4Q12JA315", "DUAL INVERTER", "DUAL INVERTER VOICE", "LG DUAL INVERTER VOICE 12000"],
    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R410A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    manualInstalacao: "https://www.lg.com/br/suporte/manuais-sistema/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "Base tecnica HVAC PRO - LG S4-Q12JA315",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", tensao: "FABRICANTE_OFICIAL",
      fluidoRefrigerante: "INFORMACAO_SUGERIDA", tubulacaoAlta: "INFORMACAO_SUGERIDA", tubulacaoBaixa: "INFORMACAO_SUGERIDA"
    },
    confiancaCampos: {
      marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", tensao: "OFICIAL",
      fluidoRefrigerante: "INFORMACAO_SUGERIDA", tubulacaoAlta: "INFORMACAO_SUGERIDA", tubulacaoBaixa: "INFORMACAO_SUGERIDA"
    }
  },

  {
    marca: "Samsung",
    modelo: "Samsung AR12MVPXAWKNAZ WindFree 12000 BTU Frio",
    codigoBusca: ["SAMSUNG", "AR12MVPXAWKNAZ", "AR12MVPX", "AR12MVPXAWK", "WINDFREE", "WIND FREE", "SAMSUNG WINDFREE 12000"],
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
    marca: "Elgin",
    modelo: "Elgin Eco Inverter II Wi-Fi HJFC12C2WBCB 12000 BTU Frio 220V",
    codigoBusca: ["ELGIN", "ECO INVERTER II", "ECO INVERTER II WIFI", "HJFC12C2WBCB", "HJFI12C2WB", "HJFE12C2CB", "ELGIN 12000 R32"],
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
    manualInstalacao: "https://www.elgin.com.br/manuals",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Base tecnica HVAC PRO - Elgin Eco Inverter II",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL",
      tensao: "CONFIAVEL_NAO_OFICIAL", fluidoRefrigerante: "CONFIAVEL_NAO_OFICIAL", correnteNominal: "CONFIAVEL_NAO_OFICIAL", disjuntor: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL",
      tensao: "CONFIAVEL_NAO_OFICIAL", fluidoRefrigerante: "CONFIAVEL_NAO_OFICIAL", correnteNominal: "CONFIAVEL_NAO_OFICIAL", disjuntor: "CONFIAVEL_NAO_OFICIAL", tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL", tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL", comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL", desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    }
  },

  {
    marca: "Komeco",
    modelo: "Komeco KOHI 09QC 1HV Inverter 9000 BTU",
    codigoBusca: ["KOMECO", "KOHI", "KOHI09QC1HV", "KOHI 09QC 1HV", "KOHI 09", "KOMECO KOHI 09QC"],
    linha: "KOHI Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    fluidoRefrigerante: "A2L baixa inflamabilidade conforme manual da linha",
    tubulacaoAlta: "Descarga: 1/4 pol. (6,35 mm)",
    tubulacaoBaixa: "Sucção: 1/2 pol. (12,7 mm)",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/",
    fonte: "Base tecnica HVAC PRO - Komeco KOHI 09",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",
    fontesCampos: { marca: "FABRICANTE_OFICIAL", modelo: "FABRICANTE_OFICIAL", linha: "FABRICANTE_OFICIAL", tipo: "FABRICANTE_OFICIAL", capacidade: "FABRICANTE_OFICIAL", fluidoRefrigerante: "FABRICANTE_OFICIAL", tubulacaoAlta: "FABRICANTE_OFICIAL", tubulacaoBaixa: "FABRICANTE_OFICIAL" },
    confiancaCampos: { marca: "OFICIAL", modelo: "OFICIAL", linha: "OFICIAL", tipo: "OFICIAL", capacidade: "OFICIAL", fluidoRefrigerante: "OFICIAL", tubulacaoAlta: "OFICIAL", tubulacaoBaixa: "OFICIAL" }
  },

  {
    marca: "Daikin",
    modelo: "Daikin EcoSwing R32",
    codigoBusca: ["DAIKIN", "ECOSWING", "ECO SWING", "ECOSWING R32", "ECO SWING R32", "FTKP12Q5VL", "RKP12Q5VL", "DAIKIN R32"],
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
    marca: "Electrolux",
    modelo: "Electrolux QI12F QE12F Inverter Split 12000 BTU Frio 220V",
    codigoBusca: ["ELECTROLUX", "QI12F", "QE12F", "QI12F/QE12F", "ELECTROLUX QI12F", "ELECTROLUX QE12F", "ELECTROLUX INVERTER 12000"],
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
    marca: "Philco",
    modelo: "Philco PAC12QA Inverter Espelhado 12000 BTU Quente Frio R32",
    codigoBusca: ["PHILCO", "PAC12QA", "PHILCO PAC12QA", "PHILCO ESPELHADO", "PHILCO R32", "PHILCO QUENTE FRIO 12000"],
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

  /* =========================================================
     ETAPA 2 - MAIS 10 MARCAS
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
    marca: "Fujitsu / General",
    modelo: "Fujitsu General Split High Wall Linha Premium 9 12",
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
    marca: "Olimpia Splendid",
    modelo: "Olimpia Splendid Ar Condicionado Portatil",
    codigoBusca: ["OLIMPIA", "OLIMPIA SPLENDID", "OLIMPIA PORTATIL", "OLIMPIA PORTÁTIL", "PORTATIL OLIMPIA", "PORTÁTIL OLIMPIA", "DOLCECLIMA"],
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
     ETAPA 3 - MARCAS COMPLEMENTARES E CATEGORIAS IMPORTANTES
     ========================================================= */

  {
    marca: "York / Johnson Controls",
    modelo: "York Split Hi Wall Everest RAEA RADA RAKA RAJA",
    codigoBusca: ["YORK", "YORK EVEREST", "EVEREST", "RAEA", "RADA", "RAKA", "RAJA", "YORK HI WALL", "YORK SPLIT", "YORK 9000", "YORK 12000", "YORK 18000", "YORK 24000"],
    linha: "Everest / Split Hi Wall legado",
    tipo: "Split Hi Wall",
    manualInstalacao: "https://pdf.webarcondicionado.com.br/york/manual/usuario/mdu-split-hi-wall-raea-rada-raka-raja-everest.pdf",
    manualManutencao: "https://digital.johnsoncontrols.com/yorkbr",
    fonte: "Base tecnica HVAC PRO - York Everest",
    fonteTipo: "CONFIAVEL_NAO_OFICIAL",
    nivelConfianca: "CONFIAVEL_NAO_OFICIAL",
    status: "CONFIAVEL_NAO_OFICIAL",
    fontesCampos: {
      marca: "CONFIAVEL_NAO_OFICIAL",
      modelo: "CONFIAVEL_NAO_OFICIAL",
      linha: "CONFIAVEL_NAO_OFICIAL",
      tipo: "CONFIAVEL_NAO_OFICIAL"
    },
    confiancaCampos: {
      marca: "CONFIAVEL_NAO_OFICIAL",
      modelo: "CONFIAVEL_NAO_OFICIAL",
      linha: "CONFIAVEL_NAO_OFICIAL",
      tipo: "CONFIAVEL_NAO_OFICIAL"
    }
  },

  {
    marca: "York / Johnson Controls",
    modelo: "York Split Cassete Supreme YKE YKKA 18000 48000 BTU",
    codigoBusca: ["YORK CASSETE", "YORK CASSETTE", "YORK SUPREME", "YKE", "YKKA", "YKE18", "YKE24", "YKE36", "YKE48", "YORK 18000 CASSETE", "YORK 48000 CASSETE"],
    linha: "Supreme Cassete",
    tipo: "Split Cassete",
    capacidade: "18.000 / 24.000 / 36.000 / 48.000 BTU/h conforme modelo",
    manualInstalacao: "https://pdf.webarcondicionado.com.br/york/manual/usuario/mdu-split-cassete-yke%28k%29a18-48fs-ad-supreme.pdf",
    manualManutencao: "https://digital.johnsoncontrols.com/yorkbr",
    fonte: "Base tecnica HVAC PRO - York Cassete Supreme",
    fonteTipo: "CONFIAVEL_NAO_OFICIAL",
    nivelConfianca: "CONFIAVEL_NAO_OFICIAL",
    status: "CONFIAVEL_NAO_OFICIAL",
    fontesCampos: {
      marca: "CONFIAVEL_NAO_OFICIAL",
      modelo: "CONFIAVEL_NAO_OFICIAL",
      linha: "CONFIAVEL_NAO_OFICIAL",
      tipo: "CONFIAVEL_NAO_OFICIAL",
      capacidade: "CONFIAVEL_NAO_OFICIAL"
    },
    confiancaCampos: {
      marca: "CONFIAVEL_NAO_OFICIAL",
      modelo: "CONFIAVEL_NAO_OFICIAL",
      linha: "CONFIAVEL_NAO_OFICIAL",
      tipo: "CONFIAVEL_NAO_OFICIAL",
      capacidade: "CONFIAVEL_NAO_OFICIAL"
    }
  },

  {
    marca: "Mitsubishi Electric",
    modelo: "Mitsubishi Electric Ar Condicionado e Sistemas de Climatizacao",
    codigoBusca: ["MITSUBISHI", "MITSUBISHI ELECTRIC", "MITSUBISHI AR CONDICIONADO", "MITSUBISHI SPLIT", "MITSUBISHI VRF", "MITSUBISHI CITY MULTI", "MITSUBISHI MR SLIM"],
    linha: "Climatização Mitsubishi Electric",
    tipo: "Split / Multi Split / VRF conforme linha",
    manualInstalacao: "https://mitsubishielectric.com.br/",
    manualManutencao: "https://mitsubishielectric.com.br/",
    fonte: "Base tecnica HVAC PRO - Mitsubishi Electric",
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
    marca: "Rheem",
    modelo: "Rheem Multi Split Inverter e Split Hi Wall",
    codigoBusca: ["RHEEM", "RHEEM SPLIT", "RHEEM MULTI SPLIT", "RHEEM INVERTER", "RHEEM HI WALL", "RHEEM 9000", "RHEEM 12000", "RHEEM 18000", "RHEEM 24000"],
    linha: "Split / Multi Split",
    tipo: "Split Hi Wall / Multi Split conforme modelo",
    manualInstalacao: "https://www.rheem.com.br/manuais/",
    manualManutencao: "https://www.rheem.com.br/manuais/",
    fonte: "Base tecnica HVAC PRO - Rheem Manuais",
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
    marca: "Comfee",
    modelo: "Comfee Split Hi Wall 12000 BTU Frio",
    codigoBusca: ["COMFEE", "COMFEE SPLIT", "COMFEE HI WALL", "COMFEE 12000", "COMFEE FRIO", "COMFEE MIDEA", "42AFVC", "38AFVC"],
    linha: "Split Hi Wall Comfee",
    tipo: "Split Hi Wall",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.midea.com/content/dam/midea-aem/br/climatizacao/hiwall/split-high-wall-comfee-12000-btu-h-frio/Manual-do-Propriet-rio-Split-Hi-Wall-Comfee.pdf",
    manualManutencao: "https://www.midea.com/content/dam/midea-aem/br/climatizacao/hiwall/split-high-wall-comfee-12000-btu-h-frio/Manual-do-Propriet-rio-Split-Hi-Wall-Comfee.pdf",
    fonte: "Base tecnica HVAC PRO - Comfee Split Hi Wall",
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
    fontesCampos: {
      marca: "FABRICANTE_OFICIAL",
      modelo: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      tensao: "FABRICANTE_OFICIAL"
    },
    confiancaCampos: {
      marca: "OFICIAL",
      modelo: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      tensao: "OFICIAL"
    }
  },

  {
    marca: "Carrier / Springer Carrier",
    modelo: "Carrier Springer Split Hi Wall e Piso Teto Legado",
    codigoBusca: ["CARRIER", "SPRINGER CARRIER", "SPRINGER", "CARRIER SPLIT", "CARRIER HI WALL", "CARRIER PISO TETO", "CARRIER CASSETE", "CARRIER 42", "CARRIER 38"],
    linha: "Split / Piso Teto / Cassete legado",
    tipo: "Split Hi Wall / Piso Teto / Cassete conforme modelo",
    manualInstalacao: "https://www.carrierdobrasil.com.br/",
    manualManutencao: "https://www.carrierdobrasil.com.br/",
    fonte: "Base tecnica HVAC PRO - Carrier Springer legado",
    fonteTipo: "CONFIAVEL_NAO_OFICIAL",
    nivelConfianca: "CONFIAVEL_NAO_OFICIAL",
    status: "CONFIAVEL_NAO_OFICIAL",
    fontesCampos: {
      marca: "CONFIAVEL_NAO_OFICIAL",
      modelo: "CONFIAVEL_NAO_OFICIAL",
      linha: "CONFIAVEL_NAO_OFICIAL",
      tipo: "CONFIAVEL_NAO_OFICIAL"
    },
    confiancaCampos: {
      marca: "CONFIAVEL_NAO_OFICIAL",
      modelo: "CONFIAVEL_NAO_OFICIAL",
      linha: "CONFIAVEL_NAO_OFICIAL",
      tipo: "CONFIAVEL_NAO_OFICIAL"
    }
  },

  {
    marca: "Midea",
    modelo: "Midea Piso Teto Inverter 36000 48000 60000 BTU",
    codigoBusca: ["MIDEA PISO TETO", "PISO TETO MIDEA", "MIDEA PISO TETO INVERTER", "MIDEA 36000", "MIDEA 48000", "MIDEA 60000", "42ZQ", "38ZQ", "42Q"],
    linha: "Piso Teto Inverter",
    tipo: "Split Piso Teto",
    capacidade: "36.000 / 48.000 / 60.000 BTU/h conforme modelo",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/",
    manualManutencao: "https://conteudo.midea.com.br/manuais/",
    fonte: "Base tecnica HVAC PRO - Midea Piso Teto",
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
    marca: "Gree",
    modelo: "Gree Piso Teto Cassete e MultiSplit G-Max",
    codigoBusca: ["GREE PISO TETO", "GREE CASSETE", "GREE CASSETTE", "GREE MULTISPLIT", "GREE G-MAX", "G-MAX MULTISPLIT", "PISO TETO GREE", "CASSETE GREE", "MULTI SPLIT GREE"],
    linha: "Piso Teto / Cassete / G-Max Multisplit",
    tipo: "Comercial leve / Multi Split conforme linha",
    manualInstalacao: "https://gree.com.br/manuais/",
    manualManutencao: "https://gree.com.br/manuais/",
    fonte: "Base tecnica HVAC PRO - Gree Comercial Leve",
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
    marca: "Consul",
    modelo: "Consul Janela Inverter e Janela Convencional",
    codigoBusca: ["CONSUL JANELA", "JANELA CONSUL", "CONSUL JANELA INVERTER", "CONSUL JANELA 7500", "CONSUL JANELA 10000", "CONSUL JANELA 12000", "CCB07", "CCK07", "CCN10"],
    linha: "Janela / Janela Inverter",
    tipo: "Ar-condicionado de janela",
    manualInstalacao: "https://www.consul.com.br/eletrodomesticos/ar-condicionado/ar-condicionado-janela",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Base tecnica HVAC PRO - Consul Janela",
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
