/* HVAC PRO - databases/gases.js */

window.HVAC_GASES = {
  "R410A": {
    nome: "R410A",
    usoCurto: "Split",
    tipo: "HFC / mistura quase azeotrópica",
    composicao: "50% R32 + 50% R125",
    aplicacao: "Split, inverter, VRF/VRV e sistemas residenciais/comerciais de alta pressão.",
    oleo: "POE",
    seguranca: "ASHRAE A1",
    gwp: "2088",
    odp: "0",
    ebulicao: "aprox. -51 °C",
    critica: "aprox. 72 °C",
    pressaoCritica: "aprox. 49 bar",
    glide: "Baixo",
    transferencia: "Alta pressão e boa troca térmica.",
    faixaEvaporacao: "-5 °C a +10 °C",
    faixaCondensacao: "35 °C a 55 °C",
    campo: "Não usar em equipamento projetado para R22. Trabalha com pressões mais altas.",
    pt: [
      ["0 °C", "~100 psi"],
      ["10 °C", "~138 psi"],
      ["30 °C", "~275 psi"],
      ["40 °C", "~360 psi"]
    ]
  },

  "R22": {
    nome: "R22",
    usoCurto: "Antigo",
    tipo: "HCFC",
    composicao: "CHClF₂",
    aplicacao: "Equipamentos antigos de ar-condicionado e refrigeração.",
    oleo: "Mineral / AB",
    seguranca: "ASHRAE A1",
    gwp: "1810",
    odp: "0,055",
    ebulicao: "-40,8 °C",
    critica: "96,1 °C",
    pressaoCritica: "49 bar",
    glide: "Sem glide",
    transferencia: "Boa troca térmica.",
    faixaEvaporacao: "-10 °C a +10 °C",
    faixaCondensacao: "35 °C a 55 °C",
    campo: "Fluido antigo com restrições ambientais. Evitar reposição sem análise técnica.",
    pt: [
      ["0 °C", "~57 psi"],
      ["10 °C", "~84 psi"],
      ["30 °C", "~158 psi"],
      ["40 °C", "~203 psi"]
    ]
  },

  "R32": {
    nome: "R32",
    usoCurto: "A2L",
    tipo: "HFC puro / A2L",
    composicao: "CH₂F₂",
    aplicacao: "Splits modernos e equipamentos inverter.",
    oleo: "POE",
    seguranca: "A2L levemente inflamável",
    gwp: "675",
    odp: "0",
    ebulicao: "-51,7 °C",
    critica: "78,1 °C",
    pressaoCritica: "57,8 bar",
    glide: "Sem glide",
    transferencia: "Alta eficiência.",
    faixaEvaporacao: "-5 °C a +10 °C",
    faixaCondensacao: "35 °C a 55 °C",
    campo: "Atenção com ventilação, fonte de ignição e procedimento específico para fluido A2L.",
    pt: [
      ["0 °C", "~92 psi"],
      ["10 °C", "~132 psi"],
      ["30 °C", "~269 psi"],
      ["40 °C", "~353 psi"]
    ]
  },

  "R407C": {
    nome: "R407C",
    usoCurto: "Retrofit",
    tipo: "HFC zeotrópico",
    composicao: "R32 / R125 / R134a",
    aplicacao: "Split, chiller e retrofit de sistemas antigos com R22.",
    oleo: "POE",
    seguranca: "ASHRAE A1",
    gwp: "1774",
    odp: "0",
    ebulicao: "aprox. -43 °C",
    critica: "aprox. 86 °C",
    pressaoCritica: "aprox. 46 bar",
    glide: "Alto, 5 a 7 °C",
    transferencia: "Boa troca térmica, exige atenção ao glide.",
    faixaEvaporacao: "-10 °C a +10 °C",
    faixaCondensacao: "35 °C a 55 °C",
    campo: "Carregar em fase líquida. Conferir superaquecimento e subresfriamento após retrofit.",
    pt: [
      ["0 °C", "~61 psi"],
      ["10 °C", "~89 psi"],
      ["30 °C", "~173 psi"],
      ["40 °C", "~226 psi"]
    ]
  },

  "R134A": {
    nome: "R134a",
    usoCurto: "Leve",
    tipo: "HFC",
    composicao: "C₂H₂F₄",
    aplicacao: "Refrigeração leve, automotivo e média temperatura.",
    oleo: "POE / PAG",
    seguranca: "ASHRAE A1",
    gwp: "1430",
    odp: "0",
    ebulicao: "-26,1 °C",
    critica: "101,1 °C",
    pressaoCritica: "40,6 bar",
    glide: "Sem glide",
    transferencia: "Indicado para média temperatura.",
    faixaEvaporacao: "-10 °C a +10 °C",
    faixaCondensacao: "35 °C a 55 °C",
    campo: "Conferir compatibilidade de óleo e aplicação antes da carga.",
    pt: [
      ["0 °C", "~31 psi"],
      ["10 °C", "~45 psi"],
      ["30 °C", "~93 psi"],
      ["40 °C", "~123 psi"]
    ]
  },

  "R404A": {
    nome: "R404A",
    usoCurto: "Comercial",
    tipo: "HFC mistura",
    composicao: "R125 / R143a / R134a",
    aplicacao: "Câmaras frias, balcões, freezers e supermercados.",
    oleo: "POE",
    seguranca: "ASHRAE A1",
    gwp: "3922",
    odp: "0",
    ebulicao: "-46,5 °C",
    critica: "72 °C",
    pressaoCritica: "37 bar",
    glide: "Baixo",
    transferencia: "Baixa e média temperatura.",
    faixaEvaporacao: "-35 °C a -5 °C",
    faixaCondensacao: "35 °C a 50 °C",
    campo: "Carregar em fase líquida. Fluido com GWP alto.",
    pt: [
      ["-30 °C", "~19 psi"],
      ["-10 °C", "~67 psi"],
      ["0 °C", "~101 psi"],
      ["40 °C", "~374 psi"]
    ]
  },

  "R507A": {
    nome: "R507A",
    usoCurto: "Freezer",
    tipo: "HFC azeotrópico",
    composicao: "R125 / R143a",
    aplicacao: "Freezers e refrigeração comercial de baixa temperatura.",
    oleo: "POE",
    seguranca: "ASHRAE A1",
    gwp: "3985",
    odp: "0",
    ebulicao: "-46,7 °C",
    critica: "70,9 °C",
    pressaoCritica: "37 bar",
    glide: "Quase zero",
    transferencia: "Comportamento similar ao R404A.",
    faixaEvaporacao: "-35 °C a -5 °C",
    faixaCondensacao: "35 °C a 50 °C",
    campo: "GWP alto. Conferir restrições e alternativas antes de novos projetos.",
    pt: [
      ["-30 °C", "~20 psi"],
      ["-10 °C", "~70 psi"],
      ["0 °C", "~105 psi"],
      ["40 °C", "~386 psi"]
    ]
  },

  "R448A": {
    nome: "R448A",
    usoCurto: "Baixo GWP",
    tipo: "HFO / HFC",
    composicao: "Mistura HFO / HFC",
    aplicacao: "Retrofit de R404A/R507A em refrigeração comercial.",
    oleo: "POE",
    seguranca: "ASHRAE A1",
    gwp: "1273",
    odp: "0",
    ebulicao: "Variável",
    critica: "Variável",
    pressaoCritica: "Consultar fabricante",
    glide: "Médio / alto",
    transferencia: "Alternativa com menor GWP.",
    faixaEvaporacao: "Média e baixa temperatura comercial",
    faixaCondensacao: "35 °C a 50 °C",
    campo: "Carregar líquido, ajustar TXV e conferir SH/SC após retrofit.",
    pt: [
      ["-30 °C", "~15 psi"],
      ["-10 °C", "~60 psi"],
      ["0 °C", "~92 psi"],
      ["40 °C", "~336 psi"]
    ]
  },

  "R449A": {
    nome: "R449A",
    usoCurto: "Retrofit",
    tipo: "HFO / HFC",
    composicao: "Mistura HFO / HFC",
    aplicacao: "Retrofit de R404A/R507A.",
    oleo: "POE",
    seguranca: "ASHRAE A1",
    gwp: "1397",
    odp: "0",
    ebulicao: "Variável",
    critica: "Variável",
    pressaoCritica: "Consultar fabricante",
    glide: "Médio / alto",
    transferencia: "Alternativa comercial.",
    faixaEvaporacao: "Média e baixa temperatura comercial",
    faixaCondensacao: "35 °C a 50 °C",
    campo: "Conferir superaquecimento e subresfriamento após retrofit.",
    pt: [
      ["-30 °C", "~16 psi"],
      ["-10 °C", "~61 psi"],
      ["0 °C", "~94 psi"],
      ["40 °C", "~342 psi"]
    ]
  },

  "R600A": {
    nome: "R600a",
    usoCurto: "Geladeira",
    tipo: "HC / hidrocarboneto",
    composicao: "Isobutano",
    aplicacao: "Geladeiras domésticas e frigobares.",
    oleo: "Mineral",
    seguranca: "A3 inflamável",
    gwp: "~3",
    odp: "0",
    ebulicao: "-11,7 °C",
    critica: "134,7 °C",
    pressaoCritica: "36,5 bar",
    glide: "Sem glide",
    transferencia: "Alta eficiência em pequenas cargas.",
    faixaEvaporacao: "-30 °C a -5 °C",
    faixaCondensacao: "30 °C a 50 °C",
    campo: "Evitar faísca/chama. Carga em gramas. Exige atenção total por ser inflamável.",
    pt: [
      ["-20 °C", "~4 psi"],
      ["0 °C", "~17 psi"],
      ["30 °C", "~58 psi"],
      ["40 °C", "~78 psi"]
    ]
  },

  "R290": {
    nome: "R290",
    usoCurto: "Propano",
    tipo: "HC / hidrocarboneto",
    composicao: "Propano",
    aplicacao: "Freezers, cervejeiras e refrigeração comercial leve.",
    oleo: "Mineral / POE",
    seguranca: "A3 inflamável",
    gwp: "~3",
    odp: "0",
    ebulicao: "-42,1 °C",
    critica: "96,7 °C",
    pressaoCritica: "42,5 bar",
    glide: "Sem glide",
    transferencia: "Boa eficiência.",
    faixaEvaporacao: "Baixa e média temperatura",
    faixaCondensacao: "30 °C a 50 °C",
    campo: "Exige ventilação, controle de ignição e procedimento seguro para fluido inflamável.",
    pt: [
      ["-30 °C", "~8 psi"],
      ["0 °C", "~59 psi"],
      ["30 °C", "~158 psi"],
      ["40 °C", "~203 psi"]
    ]
  }
};
