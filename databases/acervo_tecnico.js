/* HVAC PRO - databases/acervo_tecnico.js
   Acervo Técnico Oficial - Lote 3 completo

   Regra do banco:
   - A busca do Acervo Técnico é por modelo/código da etiqueta.
   - Não usar marca genérica como principal termo de busca.
   - Usar somente fonte oficial do fabricante.
   - Não inventar dados técnicos.
   - Quando o manual oficial não informar, usar:
     "Não informado no manual oficial"
     ou
     "Validar etiqueta/manual".
*/

const NAO = "Não informado no manual oficial";
const VALIDAR = "Validar etiqueta/manual";
const VALIDAR_PROC = "Validar procedimento técnico do fabricante";

function acervoItem(dados) {
  return {
    marca: dados.marca || "",
    modelo: dados.modelo || "",
    codigoBusca: dados.codigoBusca || [],
    linha: dados.linha || NAO,
    tipo: dados.tipo || NAO,
    capacidade: dados.capacidade || VALIDAR,
    anoFabricacao: dados.anoFabricacao || VALIDAR,
    fluidoRefrigerante: dados.fluidoRefrigerante || VALIDAR,
    correnteNominal: dados.correnteNominal || "Validar manual/etiqueta do modelo exato",
    superaquecimento: dados.superaquecimento || VALIDAR_PROC,
    subresfriamento: dados.subresfriamento || VALIDAR_PROC,
    capacitor: dados.capacitor || NAO,
    placaEletronica: dados.placaEletronica || NAO,
    tubulacaoAlta: dados.tubulacaoAlta || "Validar tabela do modelo/capacidade no manual oficial",
    tubulacaoBaixa: dados.tubulacaoBaixa || "Validar tabela do modelo/capacidade no manual oficial",
    manualInstalacao: dados.manualInstalacao || "Não cadastrado ainda",
    manualManutencao: dados.manualManutencao || dados.manualInstalacao || "Não cadastrado ainda",
    fonte: dados.fonte || "Fonte oficial do fabricante",
    status: dados.status || "Cadastro inicial oficial. Validar etiqueta/manual antes do serviço."
  };
}

window.acervoTecnico = [
  acervoItem({
    marca: "Samsung",
    modelo: "AR12MVPXAWKNAZ",
    codigoBusca: ["AR12MVPXAWKNAZ", "AR12MVPX", "AR12MVPXAWK", "AR12MVPXAWKNAZ/AZ", "WIND FREE AR12MVPXAWKNAZ", "WINDFREE AR12MVPXAWKNAZ"],
    linha: "WindFree",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12MVPXAWKNAZ/",
    fonte: "Samsung oficial - página de suporte do modelo",
    status: "Cadastro por código exato. Usar a página oficial para baixar o manual mais atual disponível."
  }),
  acervoItem({
    marca: "Samsung",
    modelo: "AR12DYFABWKNAZ",
    codigoBusca: ["AR12DYFABWKNAZ", "AR12DYFAB", "AR12DYFABWK", "AR12DYFABWKNAZ/AZ", "WIND FREE AI AR12DYFABWKNAZ", "WINDFREE AI AR12DYFABWKNAZ"],
    linha: "WindFree AI",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.samsung.com/br/support/model/AR12DYFABWKNAZ/",
    fonte: "Samsung oficial - página de suporte do modelo",
    status: "Cadastro por código exato. Usar a página oficial para baixar o manual mais atual disponível."
  }),
  acervoItem({
    marca: "Midea",
    modelo: "42AGVCJ / 38AGVCJ - Xtreme Save AI Connect R32",
    codigoBusca: ["42AGVCJ", "38AGVCJ", "42AGVCJ12", "38AGVCJ12", "42AGVCJ09", "38AGVCJ09", "42AGVCJ18", "38AGVCJ18", "42AGVCJ22", "38AGVCJ22", "XTREME SAVE AI CONNECT R32", "AGVCJ R32"],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/Ar-Condicionado-Midea-Inverter-Xtreme-Save-AI-Connect.pdf",
    fonte: "Midea oficial - conteúdo/manual do fabricante",
    status: "Cadastro por família de códigos AGVCJ. Validar etiqueta da unidade antes de aplicar dados técnicos."
  }),
  acervoItem({
    marca: "Midea",
    modelo: "42AGMSB / 42MGMSB / 40KVAQ / 40KVBQ / 42BQ - Multi Inverter FreeMatch",
    codigoBusca: ["42AGMSB", "42MGMSB", "40KVAQ", "40KVBQ", "42BQ", "42AGMSB09", "42MGMSB09", "42AGMSB12", "42MGMSB12", "FREEMATCH MULTI INVERTER", "FREE MATCH MULTI INVERTER"],
    linha: "Multi Inverter / FreeMatch",
    tipo: "Multi Split Inverter / Hi Wall / Cassette / Built In conforme combinação",
    capacidade: "Validar combinação de unidades no manual oficial",
    manualInstalacao: "https://conteudo.midea.com.br/manuais/ar-condicionado-multisplit-instalacao.pdf",
    fonte: "Midea oficial - Manual de Instalação, Operação e Manutenção",
    status: "Cadastro por códigos de unidades internas FreeMatch. Validar combinação exata das unidades antes do serviço."
  }),
  acervoItem({
    marca: "Gree",
    modelo: "G-Diamond Auto Inverter",
    codigoBusca: ["G-DIAMOND AUTO INVERTER", "G DIAMOND AUTO INVERTER", "G-DIAMOND AUTO", "G DIAMOND AUTO", "DIAMOND AUTO INVERTER", "CB497N24100", "CB497N", "GWH12"],
    linha: "G-Diamond Auto Inverter",
    tipo: "Split Hi Wall Inverter",
    fluidoRefrigerante: "R32 quando aplicável ao modelo indicado no manual oficial",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/02/Manual-G-DIAMOND-AUTO-INVERTER-Full.pdf",
    fonte: "Gree oficial - Manual G-Diamond Auto Inverter",
    status: "Cadastro por linha/código. Manual reúne operação, instalação e manutenção; validar etiqueta do equipamento."
  }),
  acervoItem({
    marca: "Gree",
    modelo: "G-Diamond Top",
    codigoBusca: ["G-DIAMOND TOP", "G DIAMOND TOP", "DIAMOND TOP"],
    linha: "G-Diamond Top",
    tipo: "Split Hi Wall",
    manualInstalacao: "https://gree.com.br/wp-content/uploads/2025/01/Manual-G-DIAMOND-TOP-Rev-000-full.pdf",
    fonte: "Gree oficial - Manual G-Diamond Top",
    status: "Cadastro por linha/modelo. Validar código exato da máquina antes de usar dados técnicos."
  }),
  acervoItem({
    marca: "LG",
    modelo: "Dual Inverter / Artcool - Consulta por código LG",
    codigoBusca: ["DUAL INVERTER LG", "LG DUAL INVERTER", "ARTCOOL LG", "S4-Q12JA31A", "S4-W12JA31A", "S4NQ12JA31A", "S4UQ12JA31A", "S4NQ18KL31A", "S4UQ18KL31A"],
    linha: "Dual Inverter / Artcool",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://www.lg.com/br/suporte/manuais-sistema/",
    manualManutencao: "https://www.lg.com/br/business/manual/",
    fonte: "LG oficial - suporte/manuais e LG Business manual download",
    status: "Cadastro inicial por códigos/linhas LG. Próxima etapa: detalhar código por código com dados oficiais."
  }),
  acervoItem({
    marca: "Daikin",
    modelo: "FTKP09Q5VL / RKP09Q5VL - EcoSwing Smart R-32",
    codigoBusca: ["FTKP09Q5VL", "RKP09Q5VL", "FTKP09", "RKP09", "FTKP09Q5VL RKP09Q5VL", "ECOSWING SMART R32 FTKP09"],
    linha: "EcoSwing Smart R-32",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Daikin oficial - área de downloads e linha EcoSwing Smart R-32",
    status: "Cadastro por modelo compatível. Validar documentação específica no portal oficial Daikin."
  }),
  acervoItem({
    marca: "Daikin",
    modelo: "FTKP12Q5VL / RKP12Q5VL - EcoSwing Smart R-32",
    codigoBusca: ["FTKP12Q5VL", "RKP12Q5VL", "FTKP12", "RKP12", "FTKP12Q5VL RKP12Q5VL", "ECOSWING SMART R32 FTKP12"],
    linha: "EcoSwing Smart R-32",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Daikin oficial - área de downloads e linha EcoSwing Smart R-32",
    status: "Cadastro por modelo compatível. Validar documentação específica no portal oficial Daikin."
  }),
  acervoItem({
    marca: "Daikin",
    modelo: "FTKP18Q5VL / RKP18Q5VL - EcoSwing Smart R-32",
    codigoBusca: ["FTKP18Q5VL", "RKP18Q5VL", "FTKP18", "RKP18", "FTKP18Q5VL RKP18Q5VL", "ECOSWING SMART R32 FTKP18"],
    linha: "EcoSwing Smart R-32",
    tipo: "Split Hi Wall Inverter",
    capacidade: "18.000 BTU/h",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Daikin oficial - área de downloads e linha EcoSwing Smart R-32",
    status: "Cadastro por modelo compatível. Validar documentação específica no portal oficial Daikin."
  }),
  acervoItem({
    marca: "Daikin",
    modelo: "FTHP09Q5VL / RHP09Q5VL - EcoSwing Smart R-32 Quente/Frio",
    codigoBusca: ["FTHP09Q5VL", "RHP09Q5VL", "FTHP09", "RHP09", "FTHP09Q5VL RHP09Q5VL", "ECOSWING SMART R32 FTHP09"],
    linha: "EcoSwing Smart R-32",
    tipo: "Split Hi Wall Inverter Quente/Frio",
    capacidade: "9.000 BTU/h",
    fluidoRefrigerante: "R32",
    manualInstalacao: "https://www.daikin.com.br/profissionais/downloads",
    fonte: "Daikin oficial - área de downloads e linha EcoSwing Smart R-32",
    status: "Cadastro por modelo compatível. Validar documentação específica no portal oficial Daikin."
  }),
  acervoItem({
    marca: "Fujitsu",
    modelo: "ASKA09CPBA - Linha Essencial",
    codigoBusca: ["ASKA09CPBA", "ASKA09", "FUJITSU ASKA09CPBA"],
    linha: "Split High Wall - Linha Essencial",
    tipo: "Split Hi Wall",
    manualInstalacao: "https://www.fujitsu-general.com/br/support/downloads/split/index.html?imgsize=2",
    fonte: "Fujitsu General Brasil oficial - Suporte e Downloads",
    status: "Cadastro por modelo listado na página oficial de downloads Fujitsu."
  }),
  acervoItem({
    marca: "Fujitsu",
    modelo: "ASKA12CPBA - Linha Essencial",
    codigoBusca: ["ASKA12CPBA", "ASKA12", "FUJITSU ASKA12CPBA"],
    linha: "Split High Wall - Linha Essencial",
    tipo: "Split Hi Wall",
    manualInstalacao: "https://www.fujitsu-general.com/br/support/downloads/split/index.html?imgsize=2",
    fonte: "Fujitsu General Brasil oficial - Suporte e Downloads",
    status: "Cadastro por modelo listado na página oficial de downloads Fujitsu."
  }),
  acervoItem({
    marca: "Fujitsu",
    modelo: "AUBA36LCL / AOBA36LFTL - Cassete",
    codigoBusca: ["AUBA36LCL", "AOBA36LFTL", "AUBA36LCL AOBA36LFTL", "FUJITSU AUBA36LCL", "FUJITSU AOBA36LFTL"],
    linha: "Split Cassete",
    tipo: "Cassete",
    capacidade: "36.000 BTU/h",
    manualInstalacao: "https://www.fujitsu-general.com/br/products/split/cassette/auba36lcl.html?imgsize=0",
    fonte: "Fujitsu General Brasil oficial - página do produto com downloads",
    status: "Cadastro por unidade interna/externa indicadas na página oficial do produto."
  }),
  acervoItem({
    marca: "Trane",
    modelo: "4MWC23 - Multi Split Inverter Hi Wall",
    codigoBusca: ["4MWC23", "4MWC2309", "4MWC2312", "4MWC2318", "4MWC2324", "4MWC23 HI WALL", "TRANE 4MWC23"],
    linha: "Multi Split Inverter",
    tipo: "Unidade interna Hi Wall Inverter",
    capacidade: "9.000 a 24.000 BTU/h conforme modelo",
    fluidoRefrigerante: "R410A conforme documentação da linha",
    manualInstalacao: "https://trane.com.br/content/dam/Trane/Commercial/lar/br/produtos-sistemas/equipamentos/Minisplits/mult-split-inverter/iom-pb-high-wall-inverter-50-60hz-4mwc23-ms-svx067a-pb.pdf",
    fonte: "Trane oficial - Manual de Instalação e Operação 4MWC23",
    status: "Cadastro por família de unidade interna Hi Wall. Validar código completo da etiqueta."
  }),
  acervoItem({
    marca: "Trane",
    modelo: "4MXD2309BF0R0AA / 4MXD2312BF0R0AA - Multi Split Inverter Duto",
    codigoBusca: ["4MXD2309BF0R0AA", "4MXD2312BF0R0AA", "4MXD2318", "4MXD2324", "4MXD23", "TRANE 4MXD23", "MULTI SPLIT DUTO TRANE"],
    linha: "Multi Split Inverter",
    tipo: "Unidade interna Tipo Duto Inverter",
    capacidade: "9.000 a 24.000 BTU/h conforme modelo",
    fluidoRefrigerante: "R410A conforme documentação da linha",
    manualInstalacao: "https://trane.com.br/content/dam/Trane/Commercial/lar/br/produtos-sistemas/equipamentos/Minisplits/mult-split-inverter/iom-pb-multisplit-ducted-inverter-50-60hz-4mxd23-ms-svx066a-pb.pdf",
    fonte: "Trane oficial - Manual de Instalação e Operação Multi Split Duto 4MXD23",
    status: "Cadastro por modelos indicados no manual oficial. Validar código completo da etiqueta."
  }),
  acervoItem({
    marca: "Trane",
    modelo: "4TXM23 - Multi Split Inverter Unidade Externa",
    codigoBusca: ["4TXM23", "4TXM2318", "4TXM2324", "4TXM23 UNIDADE EXTERNA", "TRANE 4TXM23"],
    linha: "Multi Split Inverter",
    tipo: "Unidade externa Multi Split Inverter",
    capacidade: "18.000 BTU/h conforme manual da unidade externa indicada",
    manualInstalacao: "https://trane.com.br/content/dam/Trane/Commercial/lar/br/produtos-sistemas/equipamentos/Minisplits/mult-split-inverter/iom-pb-multisplit-outdoor-unit-18mbh-2p-inverter-50-60hz-4txm23-ms-svx076a-pb.pdf",
    fonte: "Trane oficial - Manual de Instalação unidade externa 4TXM23",
    status: "Cadastro por família de unidade externa. Validar combinação das unidades internas e externas."
  }),

  /* LOTE 3 - KOMECO */
  acervoItem({
    marca: "Komeco",
    modelo: "KOHI 09QC 1HV - Inverter KOHI",
    codigoBusca: ["KOHI09QC1HV", "KOHI 09QC 1HV", "KOHI09QC", "KOHI 09", "KOMECO KOHI 09QC"],
    linha: "KOHI Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "9.000 BTU/h",
    fluidoRefrigerante: "Fluido A2L conforme aviso do manual oficial; validar etiqueta do equipamento",
    tubulacaoAlta: "1/4 pol. (6,35 mm) conforme tabela do manual KOHI, validar modelo exato",
    tubulacaoBaixa: "Validar tabela do modelo/capacidade no manual oficial",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/MANUAL%20DE%20SERVICO%20INVERTER.PDF",
    fonte: "Komeco oficial - Manual KOHI e Manual de Serviço Inverter",
    status: "Cadastro por código KOHI. Validar etiqueta e tabela completa do manual antes do serviço."
  }),
  acervoItem({
    marca: "Komeco",
    modelo: "KOHI 12QC 1HV - Inverter KOHI",
    codigoBusca: ["KOHI12QC1HV", "KOHI 12QC 1HV", "KOHI12QC", "KOHI 12", "KOMECO KOHI 12QC"],
    linha: "KOHI Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    fluidoRefrigerante: "Fluido A2L conforme aviso do manual oficial; validar etiqueta do equipamento",
    tubulacaoAlta: "Validar tabela do modelo/capacidade no manual oficial",
    tubulacaoBaixa: "Validar tabela do modelo/capacidade no manual oficial",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/MANUAL%20DE%20SERVICO%20INVERTER.PDF",
    fonte: "Komeco oficial - Manual KOHI e Manual de Serviço Inverter",
    status: "Cadastro por código KOHI. Validar etiqueta e tabela completa do manual antes do serviço."
  }),
  acervoItem({
    marca: "Komeco",
    modelo: "KOHI 18QC 1HV / KOHI 24QC 1HV - Inverter KOHI",
    codigoBusca: ["KOHI18QC1HV", "KOHI 18QC 1HV", "KOHI18QC", "KOHI24QC1HV", "KOHI 24QC 1HV", "KOHI24QC", "KOMECO KOHI 18QC", "KOMECO KOHI 24QC"],
    linha: "KOHI Inverter",
    tipo: "Split Hi Wall Inverter",
    capacidade: "18.000 / 24.000 BTU/h conforme código",
    fluidoRefrigerante: "Fluido A2L conforme aviso do manual oficial; validar etiqueta do equipamento",
    tubulacaoAlta: "Validar tabela do modelo/capacidade no manual oficial",
    tubulacaoBaixa: "Validar tabela do modelo/capacidade no manual oficial",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-inverter-kohi.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/MANUAL%20DE%20SERVICO%20INVERTER.PDF",
    fonte: "Komeco oficial - Manual KOHI e Manual de Serviço Inverter",
    status: "Cadastro por códigos KOHI 18/24. Validar etiqueta e tabela completa do manual antes do serviço."
  }),
  acervoItem({
    marca: "Komeco",
    modelo: "KOHV - Split Inverter",
    codigoBusca: ["KOHV", "KOMECO KOHV", "KOHV INVERTER", "SPLIT KOHV"],
    linha: "KOHV Inverter",
    tipo: "Split Hi Wall Inverter",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-split-inverter.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/MANUAL%20DE%20SERVICO%20INVERTER.PDF",
    fonte: "Komeco oficial - Manual Split Inverter KOHV e Portal Técnico",
    status: "Cadastro por família KOHV. Validar código completo da etiqueta."
  }),
  acervoItem({
    marca: "Komeco",
    modelo: "KAC-CHSA1 - Split Hi Wall Convencional",
    codigoBusca: ["KAC-CHSA1", "KAC CHSA1", "KACCHSA1", "KOMECO KAC CHSA1"],
    linha: "Split Hi Wall KAC-CHSA1",
    tipo: "Split Hi Wall Convencional",
    manualInstalacao: "https://www.komeco.com.br/arquivos/manuais/ar-condicionado/split-hi-wall/manual-ar-condicionado-split-kac-chsa1.pdf",
    manualManutencao: "https://www.komeco.com.br/portaltecnico/LINHA%20DE%20CONDICIONADORES%20DE%20AR/Manuais%20Tecnicos/",
    fonte: "Komeco oficial - Manual KAC-CHSA1 e Portal Técnico",
    status: "Cadastro por família KAC-CHSA1. Validar código completo da etiqueta."
  }),

  /* LOTE 3 - CARRIER / SPRINGER */
  acervoItem({
    marca: "Carrier",
    modelo: "42BQ - Split Versatile",
    codigoBusca: ["42BQ", "SPLIT VERSATILE 42BQ", "CARRIER 42BQ", "25908103"],
    linha: "Split Versatile",
    tipo: "Split Hi Wall / Versatile conforme combinação",
    manualInstalacao: "https://carrierdobrasil.com.br/wp-content/uploads/2020/03/25908103_IOM-Split-Versatile-42BQ-A-07-23-view.pdf",
    manualManutencao: "https://carrierdobrasil.com.br/wp-content/uploads/2020/03/25908103_IOM-Split-Versatile-42BQ-A-07-23-view.pdf",
    fonte: "Carrier oficial - IOM Split Versatile 42BQ",
    status: "Manual destinado a técnicos qualificados. Validar combinação evaporadora/condensadora."
  }),
  acervoItem({
    marca: "Carrier",
    modelo: "42ZQ - Split Teto Viper XPerience",
    codigoBusca: ["42ZQ", "42ZQV", "VIPER XPERIENCE", "XPOWER", "CARRIER 42ZQ", "CARRIER 42ZQV"],
    linha: "Viper XPerience / XPower",
    tipo: "Split Teto / Piso Teto conforme modelo",
    manualInstalacao: "https://carrierdobrasil.com.br/wp-content/uploads/2020/03/259.08.090_IOM-Split-Teto-Viper-XPerience-42ZQ-A-07-21-view.pdf",
    manualManutencao: "https://carrierdobrasil.com.br/wp-content/uploads/2020/03/Manual-de-Instala%C3%A7%C3%A3o-Opera%C3%A7%C3%A3o-e-Manuten%C3%A7%C3%A3o-XPOWER.pdf",
    fonte: "Carrier oficial - IOM Split Teto Viper XPerience 42ZQ / XPower",
    status: "Cadastro por família 42ZQ/42ZQV. Validar código completo e condensadora correspondente."
  }),
  acervoItem({
    marca: "Carrier",
    modelo: "40KWQX18 / 40KWQX60 - Split Cassette",
    codigoBusca: ["40KWQX18", "40KWQX60", "40KWQX", "SPLIT CASSETTE 40KWQX", "CARRIER CASSETTE 40KWQX"],
    linha: "Split Cassette",
    tipo: "Cassete",
    capacidade: "18.000 a 60.000 BTU/h conforme modelo",
    manualInstalacao: "https://carrierdobrasil.com.br/wp-content/uploads/2023/02/Manual-de-usuario-e-Instalacao-18K-e-60K.pdf",
    manualManutencao: "https://carrierdobrasil.com.br/wp-content/uploads/2023/02/Manual-de-usuario-e-Instalacao-18K-e-60K.pdf",
    fonte: "Carrier oficial - Manual de usuário e instalação Split Cassette 40KWQX",
    status: "Cadastro por família 40KWQX. Validar capacidade/código completo."
  }),
  acervoItem({
    marca: "Carrier",
    modelo: "40KVQOD - Split Cassete Inverter 1 Via Carrier R32",
    codigoBusca: ["40KVQOD", "40KVQOD LC", "K7 1W", "CASSETE 1 VIA CARRIER R32", "CARRIER 40KVQOD"],
    linha: "Cassete Inverter 1 Via Carrier R32",
    tipo: "Cassete Inverter 1 Via",
    fluidoRefrigerante: "R32 conforme linha indicada no material oficial",
    manualInstalacao: "https://carrierdobrasil.com.br/wp-content/uploads/2024/07/Manual-do-Usua%CC%81rio.pdf",
    manualManutencao: "https://carrierdobrasil.com.br/materiais-de-apoio/",
    fonte: "Carrier oficial - material de apoio / manual do usuário 40KVQOD",
    status: "Cadastro por família 40KVQOD. Validar manual específico e código completo."
  }),
  acervoItem({
    marca: "Carrier",
    modelo: "40MX / 38E - Ecosplit Inverter",
    codigoBusca: ["40MX", "38E", "ECOSPLIT INVERTER", "CARRIER 40MX", "CARRIER 38E"],
    linha: "Ecosplit Inverter",
    tipo: "Sistema Split Inverter com condensadora 38E conforme manual",
    manualInstalacao: "https://img.carrierdobrasil.com.br/downloads_docs/7f65c-256.01.106_IOM-Ecosplit-Inverter-40MX_STD-B-03-19--view-.pdf",
    manualManutencao: "https://img.carrierdobrasil.com.br/downloads_docs/7f65c-256.01.106_IOM-Ecosplit-Inverter-40MX_STD-B-03-19--view-.pdf",
    fonte: "Carrier oficial - IOM Ecosplit Inverter 40MX / 38E",
    status: "Cadastro por família. Validar unidade interna/externa e capacidade."
  }),
  acervoItem({
    marca: "Carrier",
    modelo: "42XQS - Split Space",
    codigoBusca: ["42XQS", "SPLIT SPACE 42XQS", "CARRIER 42XQS"],
    linha: "Split Space",
    tipo: "Split conforme combinação",
    manualInstalacao: "https://cdn.carrierdobrasil.com.br/downloads_docs/efaa1-IOM-Split-Space-42XQS_256.08.751-B-07-16--print-.pdf",
    manualManutencao: "https://cdn.carrierdobrasil.com.br/downloads_docs/efaa1-IOM-Split-Space-42XQS_256.08.751-B-07-16--print-.pdf",
    fonte: "Carrier oficial - IOM Split Space 42XQS",
    status: "Cadastro por família 42XQS. Validar código completo da etiqueta."
  }),
  acervoItem({
    marca: "Springer",
    modelo: "SHW Springer 12F",
    codigoBusca: ["SHW SPRINGER 12F", "SHW12F", "SPRINGER 12F", "IOM SHW SPRINGER"],
    linha: "SHW Springer",
    tipo: "Split Hi Wall",
    manualInstalacao: "https://www.cdn.springer.com.br/downloads_docs/e787c-IOM-SHW-Springer12F_256.09.061-D-12-14--view-1.pdf",
    manualManutencao: "https://www.cdn.springer.com.br/downloads_docs/e787c-IOM-SHW-Springer12F_256.09.061-D-12-14--view-1.pdf",
    fonte: "Springer oficial - IOM SHW Springer 12F",
    status: "Manual destinado a técnicos treinados e qualificados. Validar código completo da etiqueta."
  }),

  /* LOTE 3 - CONSUL */
  acervoItem({
    marca: "Consul",
    modelo: "CBK12EBBCJ - Dual Inverter Cobre Frio 12000 BTU",
    codigoBusca: ["CBK12EBBCJ", "CBK12EB", "CONSUL CBK12EBBCJ", "DUAL INVERTER CONSUL CBK12EBBCJ"],
    linha: "Dual Inverter Cobre Frio",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.consul.com.br/ar-condicionado-split-consul-dual-inverter-cobre-frio-12000-btus-cbk12eb/p",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Consul oficial - página do produto e orientação oficial de manuais por código",
    status: "Cadastro por código comercial. Para manual, usar código do produto no portal oficial Consul."
  }),
  acervoItem({
    marca: "Consul",
    modelo: "CBN12CBBCJ - Split 12000 Frio Maxi Refrigeração / Maxi Economia",
    codigoBusca: ["CBN12CBBCJ", "CBN12CB", "CONSUL CBN12CBBCJ", "MAXI REFRIGERACAO CBN12CBBCJ", "MAXI REFRIGERAÇÃO CBN12CBBCJ"],
    linha: "Maxi Refrigeração / Maxi Economia",
    tipo: "Split Hi Wall",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.consul.com.br/ar-condicionado-split-12000-btus-consul-frio-maxi-refrigeracao-e-maxi-economia/p",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Consul oficial - página do produto e orientação oficial de manuais por código",
    status: "Cadastro por código comercial. Para manual, usar código do produto no portal oficial Consul."
  }),
  acervoItem({
    marca: "Consul",
    modelo: "CBN12DBBCJ - Split Convencional Cobre Frio 12000 BTU",
    codigoBusca: ["CBN12DBBCJ", "CBN12DB", "CONSUL CBN12DBBCJ", "CONVENCIONAL COBRE CBN12DBBCJ"],
    linha: "Convencional Cobre Frio",
    tipo: "Split Hi Wall Convencional",
    capacidade: "12.000 BTU/h",
    manualInstalacao: "https://www.consul.com.br/ar-condicionado-split-consul-convencional-cobre-frio-12000-btus---cbn12dbbcj/p",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Consul oficial - página do produto e orientação oficial de manuais por código",
    status: "Cadastro por código comercial. Para manual, usar código do produto no portal oficial Consul."
  }),
  acervoItem({
    marca: "Consul",
    modelo: "CCK07BB - Janela Inverter Frio 7000 BTU",
    codigoBusca: ["CCK07BB", "CONSUL CCK07BB", "JANELA INVERTER CCK07BB", "CCK07"],
    linha: "Janela Inverter",
    tipo: "Ar-condicionado Janela Inverter",
    capacidade: "7.000 BTU/h",
    manualInstalacao: "https://www.consul.com.br/ar-condicionado-janela-7000-btus-consul-inverter-frio-cck07bb/p",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Consul oficial - página do produto e orientação oficial de manuais por código",
    status: "Cadastro por código comercial. Para manual, usar código do produto no portal oficial Consul."
  }),
  acervoItem({
    marca: "Consul",
    modelo: "CCK10CB - Janela Inverter Frio 10000 BTU",
    codigoBusca: ["CCK10CB", "CONSUL CCK10CB", "JANELA INVERTER CCK10CB", "CCK10"],
    linha: "Janela Inverter",
    tipo: "Ar-condicionado Janela Inverter",
    capacidade: "10.000 BTU/h",
    manualInstalacao: "https://www.consul.com.br/ar-condicionado-janela-10000btus-consul-inverter-frio-com-design-moderno-cck10cb/p",
    manualManutencao: "https://www.consul.com.br/atendimento/perguntas-frequentes/problemas-com-o-produto/manual-de-instrucoes-como-encontrar",
    fonte: "Consul oficial - página do produto e orientação oficial de manuais por código",
    status: "Cadastro por código comercial. Para manual, usar código do produto no portal oficial Consul."
  }),

  /* LOTE 3 - ELGIN */
  acervoItem({
    marca: "Elgin",
    modelo: "Eco Inverter II Wi-Fi 9000 BTU Frio 220V",
    codigoBusca: ["ECO INVERTER II 9000", "ECO INVERTER II WIFI 9000", "ELGIN ECO INVERTER II 9000 FRIO", "ECO INVERTER II 9000 BTU FRIO 220V"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "9.000 BTU/h",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-inverter-ii-9000-btus-frio-wifi-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Elgin oficial - página do produto e portal oficial de manuais",
    status: "Cadastro por nome comercial oficial. Próxima etapa: detalhar código exato da etiqueta quando disponível no manual."
  }),
  acervoItem({
    marca: "Elgin",
    modelo: "Eco Inverter II Wi-Fi 18000 BTU Quente/Frio 220V",
    codigoBusca: ["ECO INVERTER II 18000", "ECO INVERTER II WIFI 18000", "ELGIN ECO INVERTER II 18000 QUENTE FRIO", "ECO INVERTER II 18000 BTU QUENTE FRIO 220V"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Wi-Fi Quente/Frio",
    capacidade: "18.000 BTU/h",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-inverter-ii-18000-btus-quente-e-frio-wifi-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Elgin oficial - página do produto e portal oficial de manuais",
    status: "Cadastro por nome comercial oficial. Próxima etapa: detalhar código exato da etiqueta quando disponível no manual."
  }),
  acervoItem({
    marca: "Elgin",
    modelo: "Eco Inverter II Wi-Fi 24000 BTU Frio 220V",
    codigoBusca: ["ECO INVERTER II 24000", "ECO INVERTER II WIFI 24000", "ELGIN ECO INVERTER II 24000 FRIO", "ECO INVERTER II 24000 BTU FRIO 220V"],
    linha: "Eco Inverter II Wi-Fi",
    tipo: "Split Hi Wall Inverter Wi-Fi",
    capacidade: "24.000 BTU/h",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-high-wall-eco-inverter-ii-24000-btus-frio-wifi-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Elgin oficial - página do produto e portal oficial de manuais",
    status: "Cadastro por nome comercial oficial. Próxima etapa: detalhar código exato da etiqueta quando disponível no manual."
  }),
  acervoItem({
    marca: "Elgin",
    modelo: "Cassete Eco Inverter 18000 BTU Quente/Frio 220V",
    codigoBusca: ["CASSETE ECO INVERTER 18000", "ELGIN CASSETE ECO INVERTER 18000", "CASSETE ELGIN 18000 QUENTE FRIO", "CASSETE PLUS INVERTER KD"],
    linha: "Cassete Eco Inverter / Cassete Plus Inverter",
    tipo: "Cassete Inverter Quente/Frio",
    capacidade: "18.000 BTU/h",
    manualInstalacao: "https://www.elgin.com.br/ar-condicionado-split-cassete-eco-inverter-18000-btus-quente-e-frio-220v/p",
    manualManutencao: "https://www.elgin.com.br/manuals",
    fonte: "Elgin oficial - página do produto e portal oficial de manuais",
    status: "Cadastro por nome comercial oficial. Próxima etapa: detalhar código exato da etiqueta quando disponível no manual."
  })
];
