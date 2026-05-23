/* HVAC PRO - databases/erros.js
   Base expandida para todas as marcas/modelos cadastrados em modelos.js.
   Uso: consulta técnica rápida em campo. Sempre confirmar com manual técnico do fabricante.
*/

const defeitosComuns = [
  {
    code: "NAO_GELA",
    title: "Não gela / baixo rendimento",
    cause: "Filtro sujo, evaporadora suja, condensadora obstruída, baixa carga de fluido, restrição, ventilador fraco ou compressor com baixo rendimento.",
    test: "Verificar filtros, evaporadora, condensadora, vazão de ar, pressão de trabalho, superaquecimento, subresfriamento e corrente do compressor.",
    solution: "Limpar filtros e serpentinas, corrigir ventilação, verificar vazamento, fazer vácuo e carga correta quando necessário."
  },
  {
    code: "NAO_LIGA",
    title: "Equipamento não liga",
    cause: "Falta de alimentação, disjuntor desligado, fusível aberto, controle sem bateria, placa sem alimentação ou borne solto.",
    test: "Conferir tensão de entrada, disjuntor, tomada/borneira, fusível da placa, controle remoto e conectores.",
    solution: "Restabelecer alimentação, corrigir conexões, trocar fusível quando aplicável ou avaliar placa eletrônica."
  },
  {
    code: "CONGELA",
    title: "Evaporadora congelando",
    cause: "Baixa vazão de ar, filtro sujo, turbina suja, serpentina obstruída, baixa carga de fluido ou sensor de serpentina com falha.",
    test: "Verificar filtros, turbina, evaporadora, velocidade do ventilador, pressão de sucção, superaquecimento e sensor de serpentina.",
    solution: "Limpar sistema de ar, corrigir ventilação, verificar carga de fluido e substituir sensor defeituoso se necessário."
  },
  {
    code: "VENTILADOR",
    title: "Falha no ventilador",
    cause: "Motor travado, capacitor fraco, turbina/hélice presa, sensor Hall com falha, chicote rompido, conector oxidado ou placa sem comando.",
    test: "Girar hélice/turbina manualmente, medir capacitor, verificar alimentação do motor, conector, chicote e retorno de rotação.",
    solution: "Limpar e destravar conjunto, substituir capacitor, corrigir chicote/conector, trocar motor ou avaliar placa."
  },
  {
    code: "SENSOR",
    title: "Falha de sensor",
    cause: "Sensor NTC aberto, em curto, fora da curva, mal encaixado, oxidado ou com cabo rompido.",
    test: "Desligar o equipamento, desconectar sensor da placa, medir resistência e comparar com tabela do fabricante.",
    solution: "Reconectar, corrigir chicote/conector ou substituir sensor compatível."
  },
  {
    code: "COMUNICACAO",
    title: "Falha de comunicação",
    cause: "Falha entre evaporadora e condensadora por cabo invertido, mau contato, borne frouxo, aterramento ruim, alimentação incorreta ou placa defeituosa.",
    test: "Conferir interligação, sequência dos bornes, cabo de comunicação, tensão, aterramento e conectores das placas.",
    solution: "Corrigir ligação, refazer conexões, reapertar bornes, corrigir alimentação/aterramento ou avaliar placas."
  },
  {
    code: "COMPRESSOR",
    title: "Compressor não parte / proteção",
    cause: "Capacitor defeituoso, compressor travado, bobina aberta, fuga para carcaça, módulo inverter com falha, pressão fora da faixa ou alimentação incorreta.",
    test: "Medir tensão, corrente, resistência das bobinas, fuga para carcaça, capacitor quando aplicável, pressão de trabalho e módulo inverter.",
    solution: "Corrigir alimentação, trocar capacitor, corrigir carga/ventilação, avaliar módulo inverter ou substituir compressor se confirmado defeito."
  },
  {
    code: "ALTA_PRESSAO",
    title: "Alta pressão / condensação elevada",
    cause: "Condensadora suja, ventilador externo fraco, recirculação de ar quente, excesso de fluido, obstrução ou temperatura externa muito alta.",
    test: "Verificar limpeza da condensadora, funcionamento do ventilador externo, pressão de alta, subresfriamento e ambiente de instalação.",
    solution: "Limpar condensadora, corrigir ventilação, remover obstruções, ajustar carga de fluido e corrigir instalação."
  },
  {
    code: "BAIXA_PRESSAO",
    title: "Baixa pressão / baixa carga",
    cause: "Vazamento, baixa carga de fluido, restrição, filtro/capilar obstruído, evaporadora suja ou baixa carga térmica.",
    test: "Verificar vazamentos, pressão de sucção, superaquecimento, temperatura de evaporação, filtros e serpentinas.",
    solution: "Corrigir vazamento, fazer vácuo, carregar fluido na quantidade correta e corrigir restrições/obstruções."
  },
  {
    code: "DRENO",
    title: "Vazamento de água / dreno",
    cause: "Dreno entupido, bandeja suja, mangueira mal posicionada, falta de queda, isolamento ruim ou evaporadora congelando.",
    test: "Verificar saída de água, bandeja, inclinação do dreno, mangueira, isolamento e presença de gelo.",
    solution: "Limpar dreno e bandeja, corrigir queda, reposicionar mangueira, melhorar isolamento e resolver causa de congelamento."
  },
  {
    code: "RUIDO",
    title: "Ruído ou vibração",
    cause: "Turbina suja/desbalanceada, hélice raspando, motor com rolamento ruim, carenagem solta, compressor vibrando ou tubulação encostando.",
    test: "Verificar fixação, hélice, turbina, rolamentos, coxins, carenagem, tubulação e vibração em funcionamento.",
    solution: "Reapertar componentes, limpar turbina, alinhar hélice, corrigir tubulação, trocar motor ou coxins."
  },
  {
    code: "PLACA",
    title: "Suspeita de placa eletrônica",
    cause: "Relé queimado, trilha danificada, varistor/fusível aberto, fonte sem saída, falha de comunicação ou comando ausente.",
    test: "Verificar alimentação de entrada, fusível, fonte da placa, conectores, sinais de queimado, relés e saída para motores.",
    solution: "Corrigir alimentação e conexões. Se confirmado defeito interno, reparar ou substituir placa."
  }
];

const perfisPorMarca = {
  "Midea": [
    {code:"E1",title:"Comunicação / sensor",cause:"Falha de comunicação ou sensor conforme linha/modelo.",test:"Verificar cabo de comunicação, bornes, sensores NTC e placa.",solution:"Corrigir interligação, sensor ou placa conforme medição."},
    {code:"E2",title:"Sensor ambiente",cause:"Sensor ambiente aberto, em curto ou desconectado.",test:"Medir resistência do sensor e verificar conector.",solution:"Reconectar ou substituir sensor."},
    {code:"E3",title:"Sensor serpentina / ventilador",cause:"Falha de sensor de serpentina, motor interno ou retorno de rotação.",test:"Medir sensor, verificar motor, capacitor, chicote e placa.",solution:"Substituir sensor, motor/capacitor ou corrigir placa."},
    {code:"E5",title:"Proteção / comunicação",cause:"Falha de comunicação, sobrecorrente ou proteção do sistema.",test:"Conferir alimentação, interligação, corrente e placas.",solution:"Corrigir alimentação/interligação ou avaliar placa."},
    {code:"P0",title:"Proteção módulo inverter",cause:"Falha no módulo IPM ou acionamento do compressor.",test:"Medir compressor, barramento DC e módulo inverter.",solution:"Corrigir alimentação, compressor ou módulo."},
    {code:"P4",title:"Proteção compressor",cause:"Proteção do compressor ou módulo inverter.",test:"Medir corrente, pressão, tensão DC e bobinas.",solution:"Corrigir causa da proteção ou avaliar módulo/compressor."}
  ],

  "Springer": [
    {code:"E1",title:"Sensor ambiente",cause:"Sensor ambiente com falha ou mau contato.",test:"Medir NTC e verificar conector.",solution:"Reconectar ou substituir sensor."},
    {code:"E2",title:"Sensor evaporadora",cause:"Sensor de serpentina aberto, em curto ou fora da faixa.",test:"Medir resistência do sensor.",solution:"Substituir sensor se necessário."},
    {code:"E3",title:"Ventilador interno",cause:"Motor, capacitor, chicote ou placa com falha.",test:"Verificar motor, capacitor e alimentação.",solution:"Corrigir componente defeituoso."},
    {code:"P4",title:"Proteção compressor",cause:"Proteção por corrente, pressão ou módulo inverter.",test:"Medir corrente, pressões e compressor.",solution:"Corrigir causa da proteção."}
  ],

  "Carrier": [
    {code:"E1",title:"Comunicação",cause:"Falha entre evaporadora e condensadora.",test:"Verificar cabo, bornes, alimentação e aterramento.",solution:"Corrigir interligação ou avaliar placas."},
    {code:"E2",title:"Sensor ambiente",cause:"Sensor ambiente com falha.",test:"Medir sensor NTC.",solution:"Substituir sensor ou corrigir conector."},
    {code:"E3",title:"Ventilador evaporadora",cause:"Falha de rotação do motor interno.",test:"Verificar motor, capacitor, sensor Hall, chicote e placa.",solution:"Corrigir motor, capacitor ou placa."},
    {code:"P4",title:"Proteção compressor",cause:"Proteção do compressor ou módulo inverter.",test:"Medir corrente, pressão, compressor e módulo.",solution:"Corrigir causa da proteção antes de trocar componentes."}
  ],

  "Samsung": [
    {code:"E101",title:"Comunicação",cause:"Falha de comunicação entre unidade interna e externa.",test:"Conferir interligação, bornes, alimentação e comunicação.",solution:"Corrigir cabo, conexão, aterramento ou placa."},
    {code:"E121",title:"Sensor ambiente",cause:"Sensor de temperatura ambiente com falha.",test:"Medir resistência NTC e verificar conector.",solution:"Substituir sensor ou corrigir conexão."},
    {code:"E122",title:"Sensor evaporadora",cause:"Sensor de serpentina com falha.",test:"Medir resistência e comparar com tabela.",solution:"Substituir sensor se fora da faixa."},
    {code:"E202",title:"Comunicação externa",cause:"Falha de comunicação com unidade externa.",test:"Conferir alimentação da condensadora, cabo e placa externa.",solution:"Corrigir alimentação ou avaliar placa."},
    {code:"E464",title:"Proteção compressor",cause:"Sobrecorrente ou falha no compressor inverter.",test:"Medir bobinas, corrente e barramento DC.",solution:"Avaliar compressor, módulo inverter e alimentação."}
  ],

  "LG": [
    {code:"CH05",title:"Comunicação",cause:"Falha de comunicação entre unidade interna e externa.",test:"Verificar cabo de comunicação, tensão, sequência de ligação e aterramento.",solution:"Corrigir cabeamento, borne solto, mau contato ou placa."},
    {code:"CH10",title:"Motor evaporadora",cause:"Falha no motor BLDC da evaporadora ou retorno de rotação.",test:"Verificar conector, alimentação do motor, travamento e placa.",solution:"Corrigir motor, conector ou placa."},
    {code:"CH21",title:"Pico DC / IPM",cause:"Sobrecorrente no módulo inverter, compressor ou placa externa.",test:"Medir bobinas do compressor, corrente, tensão DC e módulo.",solution:"Avaliar compressor, placa inverter e alimentação."},
    {code:"CH38",title:"Baixa carga",cause:"Possível falta de fluido refrigerante ou baixa pressão.",test:"Verificar vazamento, pressão, superaquecimento e subresfriamento.",solution:"Corrigir vazamento, fazer vácuo e carga correta."}
  ],

  "Gree": [
    {code:"E1",title:"Alta pressão",cause:"Proteção por alta pressão ou condensação elevada.",test:"Verificar ventilador externo, serpentina suja, excesso de fluido e obstrução.",solution:"Limpar condensadora, corrigir ventilação e carga."},
    {code:"E2",title:"Congelamento",cause:"Proteção contra congelamento da evaporadora.",test:"Verificar filtros, turbina, serpentina, sensor e baixa carga.",solution:"Limpar evaporadora e corrigir baixa evaporação."},
    {code:"E6",title:"Comunicação",cause:"Falha de comunicação entre unidade interna e externa.",test:"Verificar cabo, bornes, tensão e placas.",solution:"Corrigir ligação ou substituir placa defeituosa."},
    {code:"F0",title:"Falta de refrigerante",cause:"Possível vazamento ou baixa carga.",test:"Verificar pressão, superaquecimento, vazamento e descarga.",solution:"Corrigir vazamento, fazer vácuo e carga correta."}
  ],

  "Elgin": [
    {code:"E1",title:"Sensor ambiente",cause:"Falha no sensor de temperatura ambiente.",test:"Verificar conector e medir resistência NTC.",solution:"Substituir sensor se estiver aberto, em curto ou fora da faixa."},
    {code:"E3",title:"Ventilador",cause:"Falha no motor ventilador interno.",test:"Verificar motor, capacitor, chicote e placa.",solution:"Corrigir componente defeituoso."},
    {code:"E5",title:"Comunicação",cause:"Falha de comunicação entre evaporadora e condensadora.",test:"Conferir cabo de comunicação, borneira, tensão e aterramento.",solution:"Corrigir interligação ou avaliar placas."}
  ],

  "Daikin": [
    {code:"U4",title:"Comunicação",cause:"Falha de comunicação entre unidade interna e externa.",test:"Verificar interligação, alimentação, polaridade e placas.",solution:"Corrigir comunicação ou substituir placa com defeito."},
    {code:"A5",title:"Proteção evaporadora",cause:"Controle de congelamento ou alta temperatura na serpentina.",test:"Verificar filtros, serpentina, carga de fluido e sensor.",solution:"Corrigir fluxo de ar, carga ou sensor."},
    {code:"L5",title:"Sobrecorrente inverter",cause:"Falha no compressor, placa inverter ou alimentação.",test:"Medir compressor, barramento DC e corrente.",solution:"Corrigir alimentação ou substituir componente defeituoso."}
  ],

  "Fujitsu": [
    {code:"COM",title:"Erro de comunicação",cause:"Falha de comunicação entre placas interna e externa.",test:"Verificar cabo, bornes, tensão e aterramento.",solution:"Corrigir interligação ou avaliar placas."},
    {code:"SENSOR",title:"Erro de sensor",cause:"Sensor ambiente ou serpentina fora da faixa.",test:"Medir resistência NTC e verificar conector.",solution:"Substituir sensor defeituoso."},
    {code:"FAN",title:"Erro ventilador",cause:"Motor interno/externo com falha ou retorno ausente.",test:"Verificar motor, chicote, alimentação e placa.",solution:"Corrigir motor/chicote ou avaliar placa."}
  ],

  "Panasonic": [
    {code:"H11",title:"Comunicação",cause:"Falha de comunicação entre unidade interna e externa.",test:"Verificar interligação, bornes, tensão e placas.",solution:"Corrigir cabo/conexão ou avaliar placa."},
    {code:"H14",title:"Sensor ambiente",cause:"Sensor de temperatura ambiente com falha.",test:"Medir NTC e conferir conector.",solution:"Substituir sensor ou corrigir conexão."},
    {code:"H19",title:"Ventilador interno",cause:"Falha no motor ventilador interno.",test:"Verificar motor, retorno de rotação e placa.",solution:"Corrigir motor/chicote ou placa."}
  ],

  "Philco": [
    {code:"E1",title:"Comunicação",cause:"Falha entre evaporadora e condensadora.",test:"Verificar cabo de comunicação, borneira e alimentação.",solution:"Corrigir ligação ou avaliar placas."},
    {code:"E2",title:"Sensor ambiente",cause:"Sensor ambiente com falha.",test:"Medir sensor NTC.",solution:"Substituir sensor se necessário."},
    {code:"E5",title:"Proteção",cause:"Proteção geral por corrente, temperatura ou pressão.",test:"Verificar corrente, serpentinas, ventiladores e carga.",solution:"Corrigir causa da proteção antes de trocar placa."}
  ],

  "Electrolux": [
    {code:"E1",title:"Sensor ambiente",cause:"Sensor ambiente com falha.",test:"Medir sensor NTC e verificar conector.",solution:"Substituir sensor se necessário."},
    {code:"E2",title:"Sensor serpentina",cause:"Sensor de serpentina com falha.",test:"Medir resistência do sensor.",solution:"Substituir sensor ou corrigir conector."},
    {code:"E4",title:"Proteção evaporadora",cause:"Possível congelamento ou falha de ventilação.",test:"Verificar filtro, evaporadora, turbina e sensor.",solution:"Limpar sistema e corrigir sensor/carga de fluido."}
  ],

  "Consul": [
    {code:"E1",title:"Sensor ambiente",cause:"Sensor NTC ambiente aberto, em curto ou desconectado.",test:"Medir resistência do sensor e verificar conector.",solution:"Reconectar ou substituir sensor."},
    {code:"E2",title:"Sensor serpentina",cause:"Sensor de serpentina da evaporadora com falha.",test:"Medir resistência e conferir chicote.",solution:"Substituir sensor se fora da especificação."},
    {code:"E4",title:"Proteção anticongelamento",cause:"Evaporadora muito fria por sujeira, baixa ventilação, filtro obstruído ou baixa carga.",test:"Verificar filtros, turbina, serpentina, gás e sensor.",solution:"Limpar evaporadora, corrigir ventilação e verificar carga."}
  ],

  "TCL": [
    {code:"E1",title:"Comunicação",cause:"Falha de comunicação entre unidades.",test:"Verificar cabo, bornes, alimentação e aterramento.",solution:"Corrigir ligação ou avaliar placas."},
    {code:"E2",title:"Sensor ambiente",cause:"Sensor ambiente com falha.",test:"Medir NTC e verificar conector.",solution:"Substituir sensor ou corrigir conector."},
    {code:"P4",title:"Proteção inverter",cause:"Proteção do compressor ou módulo inverter.",test:"Medir compressor, corrente, pressão e barramento DC.",solution:"Corrigir falha de alimentação, compressor ou placa."}
  ],

  "Agratto": [
    {code:"E1",title:"Sensor ambiente",cause:"Sensor ambiente com falha ou desconectado.",test:"Medir NTC e verificar conector.",solution:"Reconectar ou substituir sensor."},
    {code:"E3",title:"Ventilador",cause:"Falha no motor interno ou capacitor.",test:"Verificar motor, capacitor e alimentação.",solution:"Corrigir motor/capacitor ou placa."},
    {code:"E5",title:"Proteção",cause:"Proteção por corrente, pressão, temperatura ou alimentação.",test:"Medir corrente, tensão, pressões e ventilação.",solution:"Corrigir causa da proteção."}
  ],

  "Komeco": [
    {code:"E1",title:"Sensor ambiente",cause:"Sensor ambiente aberto, em curto ou desconectado.",test:"Medir resistência NTC e verificar conector.",solution:"Substituir sensor ou corrigir conexão."},
    {code:"E3",title:"Ventilador",cause:"Falha de ventilador interno/externo.",test:"Verificar motor, capacitor, chicote e placa.",solution:"Corrigir componente defeituoso."},
    {code:"E6",title:"Comunicação",cause:"Falha de comunicação entre unidades.",test:"Verificar interligação, alimentação e aterramento.",solution:"Corrigir ligação ou avaliar placas."}
  ],

  "Hisense": [
    {code:"E1",title:"Sensor ambiente",cause:"Falha no sensor de temperatura ambiente.",test:"Medir NTC e verificar conector.",solution:"Substituir sensor se necessário."},
    {code:"E5",title:"Proteção",cause:"Proteção por corrente, pressão ou temperatura.",test:"Verificar corrente, pressão, ventiladores e serpentina.",solution:"Corrigir causa da proteção."},
    {code:"E6",title:"Comunicação",cause:"Falha entre evaporadora e condensadora.",test:"Conferir cabo, bornes, alimentação e placas.",solution:"Corrigir interligação ou avaliar placas."}
  ],

  "Hitachi": [
    {code:"01",title:"Comunicação / proteção",cause:"Falha de comunicação ou proteção do sistema.",test:"Verificar alimentação, comunicação, sensores e placas.",solution:"Corrigir comunicação ou avaliar placa."},
    {code:"03",title:"Comunicação",cause:"Falha entre controle/unidades.",test:"Verificar interligação e alimentação.",solution:"Corrigir cabeamento ou placa."},
    {code:"07",title:"Proteção compressor",cause:"Proteção por corrente, pressão ou temperatura.",test:"Medir corrente, pressão, compressor e sensores.",solution:"Corrigir causa da proteção."}
  ],

  "Trane": [
    {code:"E1",title:"Sensor / proteção",cause:"Falha de sensor ou proteção conforme linha.",test:"Medir sensores, alimentação e comunicação.",solution:"Corrigir sensor, chicote ou placa."},
    {code:"E3",title:"Ventilador",cause:"Falha em ventilador ou retorno de rotação.",test:"Verificar motor, capacitor, chicote e placa.",solution:"Corrigir motor/capacitor ou placa."},
    {code:"E6",title:"Comunicação",cause:"Falha de comunicação entre unidades.",test:"Verificar cabos, bornes, alimentação e placas.",solution:"Corrigir interligação ou avaliar placa."}
  ],

  "York": [
    {code:"E1",title:"Sensor / comunicação",cause:"Falha de sensor ou comunicação conforme linha.",test:"Verificar sensores, cabo de comunicação, bornes e alimentação.",solution:"Corrigir sensor/interligação ou avaliar placa."},
    {code:"E3",title:"Ventilador",cause:"Falha no ventilador interno/externo.",test:"Verificar motor, capacitor, retorno e placa.",solution:"Corrigir componente defeituoso."},
    {code:"E6",title:"Comunicação",cause:"Falha entre evaporadora e condensadora.",test:"Verificar cabo, bornes, aterramento e placas.",solution:"Corrigir cabeamento ou substituir placa confirmada."}
  ]
};

function juntarDefeitos(especificos) {
  return [...especificos, ...defeitosComuns];
}

window.errorCodesByModel = {};

Object.entries(window.modelsByBrand || {}).forEach(([brand, models]) => {
  const perfil = perfisPorMarca[brand] || [];
  models.forEach((model) => {
    window.errorCodesByModel[brand + "|" + model] = juntarDefeitos(perfil);
  });
});

/* Códigos específicos que já estavam no HTML original */

window.errorCodesByModel["Midea|Xtreme Save"] = juntarDefeitos([
  {
    code: "E1",
    title: "Comunicação",
    cause: "Falha de comunicação entre evaporadora e condensadora.",
    test: "Verificar cabo S, bornes, alimentação e aterramento.",
    solution: "Corrigir interligação, reapertar bornes e testar placas."
  },
  {
    code: "P4",
    title: "Proteção inverter",
    cause: "Proteção do compressor ou módulo IPM.",
    test: "Medir corrente, pressão, tensão DC e bobinas do compressor.",
    solution: "Corrigir ventilação, alimentação ou avaliar módulo/compressor."
  }
]);

window.errorCodesByModel["LG|Dual Inverter"] = juntarDefeitos([
  {
    code: "CH05",
    title: "Comunicação",
    cause: "Falha de comunicação entre unidades.",
    test: "Verificar cabo de comunicação, tensão e aterramento.",
    solution: "Corrigir cabeamento ou substituir placa com defeito."
  }
]);

window.errorCodesByModel["Samsung|WindFree"] = juntarDefeitos([
  {
    code: "E101",
    title: "Comunicação",
    cause: "Falha entre unidade interna e externa.",
    test: "Conferir interligação, bornes e sinal de comunicação.",
    solution: "Corrigir cabo, conexão ou placa."
  },
  {
    code: "E464",
    title: "Proteção compressor",
    cause: "Sobrecorrente ou falha no compressor inverter.",
    test: "Medir bobinas, corrente e barramento DC.",
    solution: "Avaliar compressor, módulo inverter e alimentação."
  }
]);

window.errorCodesByModel["Consul|Facilite"] = juntarDefeitos([
  {
    code: "E1",
    title: "Sensor ambiente",
    cause: "Sensor NTC aberto, em curto ou desconectado.",
    test: "Medir resistência do sensor e verificar conector.",
    solution: "Reconectar ou substituir sensor."
  }
]);

window.errorCodesByModel["Carrier|XPower"] = juntarDefeitos([
  {
    code: "E3",
    title: "Ventilador evaporadora",
    cause: "Falha de rotação do motor interno.",
    test: "Verificar motor, capacitor, sensor Hall e placa.",
    solution: "Corrigir motor, capacitor ou placa."
  }
]);
