/* HVAC PRO - databases/acervo_tecnico.js
   Acervo Técnico Oficial - Busca por MODELO/CÓDIGO

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

window.acervoTecnico = [
  {
    marca: "Samsung",
    modelo: "AR12MVPXAWKNAZ",
    codigoBusca: [
      "AR12MVPXAWKNAZ",
      "AR12MVPX",
      "AR12MVPXAWK",
      "AR12MVPXAWKNAZ/AZ",
      "WIND FREE AR12MVPXAWKNAZ",
      "WINDFREE AR12MVPXAWKNAZ"
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
    fonte: "Samsung oficial - página de suporte do modelo",
    status: "Cadastro por código exato. Usar a página oficial para baixar o manual mais atual disponível."
  },
  {
    marca: "Samsung",
    modelo: "AR12DYFABWKNAZ",
    codigoBusca: [
      "AR12DYFABWKNAZ",
      "AR12DYFAB",
      "AR12DYFABWK",
      "AR12DYFABWKNAZ/AZ",
      "WIND FREE AI AR12DYFABWKNAZ",
      "WINDFREE AI AR12DYFABWKNAZ"
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
    fonte: "Samsung oficial - página de suporte do modelo",
    status: "Cadastro por código exato. Usar a página oficial para baixar o manual mais atual disponível."
  },
  {
    marca: "Midea",
    modelo: "42AGVCJ / 38AGVCJ - Xtreme Save AI Connect R32",
    codigoBusca: [
      "42AGVCJ",
      "38AGVCJ",
      "42AGVCJ12",
      "38AGVCJ12",
      "42AGVCJ09",
      "38AGVCJ09",
      "42AGVCJ18",
      "38AGVCJ18",
      "42AGVCJ22",
      "38AGVCJ22",
      "XTREME SAVE AI CONNECT R32",
      "AGVCJ R32"
    ],
    linha: "Xtreme Save AI Connect",
    tipo: "Split Hi Wall Inverter",
    capacidade: "Validar etiqueta/manual conforme código exato da evaporadora e condensadora",
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
    status: "Cadastro por família de códigos AGVCJ. Validar etiqueta da unidade antes de aplicar dados técnicos."
  },
  {
    marca: "Midea",
    modelo: "42AGMSB / 42MGMSB / 40KVAQ / 40KVBQ / 42BQ - Multi Inverter FreeMatch",
    codigoBusca: [
      "42AGMSB",
      "42MGMSB",
      "40KVAQ",
      "40KVBQ",
      "42BQ",
      "42AGMSB09",
      "42MGMSB09",
      "42AGMSB12",
      "42MGMSB12",
      "FREEMATCH MULTI INVERTER",
      "FREE MATCH MULTI INVERTER"
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
    status: "Cadastro por códigos de unidades internas FreeMatch. Validar combinação exata das unidades antes do serviço."
  },
  {
    marca: "Gree",
    modelo: "G-Diamond Auto Inverter",
    codigoBusca: [
      "G-DIAMOND AUTO INVERTER",
      "G DIAMOND AUTO INVERTER",
      "G-DIAMOND AUTO",
      "G DIAMOND AUTO",
      "DIAMOND AUTO INVERTER",
      "CB497N24100",
      "CB497N",
      "GWH12"
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
    status: "Cadastro por linha/código. Manual reúne operação, instalação e manutenção; validar etiqueta do equipamento."
  },
  {
    marca: "Gree",
    modelo: "G-Diamond Top",
    codigoBusca: [
      "G-DIAMOND TOP",
      "G DIAMOND TOP",
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
    status: "Cadastro por linha/modelo. Validar código exato da máquina antes de usar dados técnicos."
  },
  {
    marca: "LG",
    modelo: "Dual Inverter / Artcool - Consulta por código LG",
    codigoBusca: [
      "DUAL INVERTER LG",
      "LG DUAL INVERTER",
      "ARTCOOL LG",
      "S4-Q12JA31A",
      "S4-W12JA31A",
      "S4NQ12JA31A",
      "S4UQ12JA31A",
      "S4NQ18KL31A",
      "S4UQ18KL31A"
    ],
    linha: "Dual Inverter / Artcool",
    tipo: "Split Hi Wall Inverter",
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
    status: "Cadastro inicial por códigos/linhas LG. Próxima etapa: detalhar código por código com dados oficiais."
  }
];
