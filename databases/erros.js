/* HVAC PRO - databases/erros.js */

window.HVAC_ERROS = {
  errorCodesByModel: {
    "Midea|Xtreme Save": [
      {
        code: "E1",
        title: "Comunicação",
        cause: "Falha de comunicação entre evaporadora e condensadora.",
        test: "Verificar cabo S, bornes, alimentação, aterramento e continuidade do cabo de comunicação.",
        solution: "Corrigir interligação, reapertar bornes, refazer emendas ruins e testar placas eletrônicas."
      },
      {
        code: "P4",
        title: "Proteção inverter",
        cause: "Proteção do compressor, módulo IPM ou falha de acionamento inverter.",
        test: "Medir corrente, pressão de trabalho, tensão DC no barramento e resistência das bobinas do compressor.",
        solution: "Corrigir ventilação, alimentação elétrica, excesso/falta de fluido ou avaliar módulo inverter/compressor."
      },
      {
        code: "E2",
        title: "Sensor ambiente",
        cause: "Sensor de temperatura ambiente aberto, em curto ou desconectado.",
        test: "Medir resistência do sensor NTC e conferir conector na placa da evaporadora.",
        solution: "Reconectar ou substituir o sensor ambiente."
      },
      {
        code: "E3",
        title: "Sensor serpentina",
        cause: "Sensor de serpentina da evaporadora com falha, aberto ou em curto.",
        test: "Medir resistência do sensor e comparar com tabela NTC.",
        solution: "Substituir sensor ou corrigir mau contato no conector."
      }
    ],

    "Midea|AirVolution": [
      {
        code: "E1",
        title: "Sensor ambiente",
        cause: "Falha no sensor de temperatura ambiente da evaporadora.",
        test: "Verificar conector do sensor e medir resistência NTC.",
        solution: "Reconectar ou substituir sensor."
      },
      {
        code: "E2",
        title: "Sensor evaporadora",
        cause: "Falha no sensor de serpentina da evaporadora.",
        test: "Medir resistência do sensor e verificar chicote.",
        solution: "Substituir sensor se estiver fora da faixa."
      },
      {
        code: "E3",
        title: "Ventilador interno",
        cause: "Falha no motor da evaporadora, capacitor ou placa.",
        test: "Verificar alimentação do motor, capacitor, eixo travado e placa.",
        solution: "Corrigir motor/capacitor ou substituir placa conforme teste."
      }
    ],

    "Midea|Springer Midea": [
      {
        code: "E1",
        title: "Comunicação",
        cause: "Falha de comunicação entre unidade interna e externa.",
        test: "Conferir ligação elétrica, cabo de comunicação, bornes e aterramento.",
        solution: "Corrigir interligação ou avaliar placas."
      },
      {
        code: "P0",
        title: "Proteção módulo inverter",
        cause: "Proteção no módulo IPM ou falha no acionamento do compressor.",
        test: "Verificar compressor, tensão de entrada, barramento DC e módulo.",
        solution: "Corrigir alimentação ou substituir componente defeituoso."
      }
    ],

    "LG|Dual Inverter": [
      {
        code: "CH05",
        title: "Comunicação",
        cause: "Falha de comunicação entre unidade interna e externa.",
        test: "Verificar cabo de comunicação, tensão, sequência de ligação e aterramento.",
        solution: "Corrigir cabeamento, borne solto, mau contato ou substituir placa com defeito."
      },
      {
        code: "CH10",
        title: "Motor evaporadora",
        cause: "Falha no motor BLDC da evaporadora ou retorno de rotação.",
        test: "Verificar conector, alimentação do motor, travamento mecânico e placa.",
        solution: "Corrigir motor, conector ou placa evaporadora."
      },
      {
        code: "CH21",
        title: "Pico DC / IPM",
        cause: "Sobrecorrente no módulo inverter, compressor ou placa externa.",
        test: "Medir bobinas do compressor, corrente, tensão DC e verificar curto no módulo.",
        solution: "Avaliar compressor, placa inverter e alimentação elétrica."
      },
      {
        code: "CH38",
        title: "Baixa carga",
        cause: "Possível falta de fluido refrigerante ou baixa pressão.",
        test: "Verificar vazamento, pressão de trabalho, superaquecimento e subresfriamento.",
        solution: "Corrigir vazamento, fazer vácuo e carga correta conforme etiqueta."
      }
    ],

    "LG|ArtCool": [
      {
        code: "CH05",
        title: "Comunicação",
        cause: "Falha na comunicação entre evaporadora e condensadora.",
        test: "Verificar cabo de comunicação, bornes e placas.",
        solution: "Corrigir ligação ou substituir placa com defeito."
      },
      {
        code: "CH10",
        title: "Motor interno",
        cause: "Falha no motor da evaporadora.",
        test: "Verificar motor, conector, travamento e placa.",
        solution: "Corrigir ou substituir motor/placa."
      }
    ],

    "Samsung|WindFree": [
      {
        code: "E101",
        title: "Comunicação",
        cause: "Falha de comunicação entre unidade interna e externa.",
        test: "Conferir interligação, bornes, sinal de comunicação e tensão de alimentação.",
        solution: "Corrigir cabo, conexão, aterramento ou placa."
      },
      {
        code: "E121",
        title: "Sensor ambiente",
        cause: "Sensor de temperatura ambiente da evaporadora com falha.",
        test: "Medir resistência do sensor NTC e verificar conector.",
        solution: "Substituir sensor ou corrigir conexão."
      },
      {
        code: "E122",
        title: "Sensor evaporadora",
        cause: "Sensor de serpentina da evaporadora com falha.",
        test: "Medir resistência e comparar com tabela técnica.",
        solution: "Substituir sensor se estiver fora da faixa."
      },
      {
        code: "E464",
        title: "Proteção compressor",
        cause: "Sobrecorrente ou falha no compressor inverter.",
        test: "Medir bobinas do compressor, corrente de trabalho e barramento DC.",
        solution: "Avaliar compressor, módulo inverter e alimentação elétrica."
      }
    ],

    "Samsung|Digital Inverter": [
      {
        code: "E101",
        title: "Comunicação",
        cause: "Falha entre unidade interna e externa.",
        test: "Verificar cabo de comunicação, tensão e borneira.",
        solution: "Corrigir interligação ou avaliar placas."
      },
      {
        code: "E202",
        title: "Comunicação externa",
        cause: "Falha de comunicação com a unidade externa.",
        test: "Conferir alimentação da condensadora, cabo e placa externa.",
        solution: "Corrigir alimentação ou substituir placa se necessário."
      }
    ],

    "Consul|Facilite": [
      {
        code: "E1",
        title: "Sensor ambiente",
        cause: "Sensor NTC ambiente aberto, em curto ou desconectado.",
        test: "Medir resistência do sensor e verificar conector na placa.",
        solution: "Reconectar ou substituir sensor."
      },
      {
        code: "E2",
        title: "Sensor serpentina",
        cause: "Sensor de serpentina da evaporadora com falha.",
        test: "Medir resistência e conferir chicote.",
        solution: "Substituir sensor se estiver fora da especificação."
      },
      {
        code: "E4",
        title: "Proteção anticongelamento",
        cause: "Evaporadora muito fria por sujeira, baixa ventilação, filtro obstruído ou baixa carga.",
        test: "Verificar filtros, turbina, serpentina, gás e sensor.",
        solution: "Limpar evaporadora, corrigir ventilação e verificar carga de fluido."
      }
    ],

    "Consul|Bem Estar": [
      {
        code: "E1",
        title: "Sensor ambiente",
        cause: "Falha no sensor de temperatura ambiente.",
        test: "Medir NTC e verificar conector.",
        solution: "Substituir sensor ou corrigir conexão."
      },
      {
        code: "E2",
        title: "Sensor serpentina",
        cause: "Falha no sensor de serpentina.",
        test: "Medir sensor e comparar com tabela.",
        solution: "Substituir sensor se necessário."
      }
    ],

    "Carrier|XPower": [
      {
        code: "E1",
        title: "Comunicação",
        cause: "Falha de comunicação entre evaporadora e condensadora.",
        test: "Verificar cabo de interligação, bornes e alimentação.",
        solution: "Corrigir cabeamento ou avaliar placas."
      },
      {
        code: "E3",
        title: "Ventilador evaporadora",
        cause: "Falha de rotação do motor interno.",
        test: "Verificar motor, capacitor, sensor Hall, chicote e placa.",
        solution: "Corrigir motor, capacitor ou placa conforme teste."
      },
      {
        code: "P4",
        title: "Proteção compressor",
        cause: "Proteção do compressor ou módulo inverter.",
        test: "Medir corrente, pressão, compressor e módulo.",
        solution: "Corrigir causa da proteção antes de trocar componentes."
      }
    ],

    "Carrier|Inverter Carrier": [
      {
        code: "E1",
        title: "Comunicação",
        cause: "Falha na comunicação entre unidades.",
        test: "Conferir cabo S, alimentação, bornes e aterramento.",
        solution: "Corrigir interligação ou avaliar placas eletrônicas."
      },
      {
        code: "P0",
        title: "Módulo inverter",
        cause: "Proteção ou falha no módulo IPM.",
        test: "Verificar compressor, barramento DC e placa inverter.",
        solution: "Corrigir alimentação ou substituir módulo/placa conforme diagnóstico."
      }
    ],

    "Gree|Eco Garden": [
      {
        code: "E1",
        title: "Alta pressão",
        cause: "Proteção por alta pressão ou condensação elevada.",
        test: "Verificar ventilador externo, serpentina suja, excesso de fluido e obstrução.",
        solution: "Limpar condensadora, corrigir ventilação e carga de fluido."
      },
      {
        code: "E2",
        title: "Congelamento",
        cause: "Proteção contra congelamento da evaporadora.",
        test: "Verificar filtros, turbina, serpentina, sensor e baixa carga.",
        solution: "Limpar evaporadora e corrigir causa da baixa evaporação."
      },
      {
        code: "E6",
        title: "Comunicação",
        cause: "Falha de comunicação entre unidade interna e externa.",
        test: "Verificar cabo, bornes, tensão e placas.",
        solution: "Corrigir ligação ou substituir placa defeituosa."
      }
    ],

    "Gree|G-Diamond": [
      {
        code: "E6",
        title: "Comunicação",
        cause: "Falha entre unidade interna e externa.",
        test: "Conferir interligação, alimentação e placas.",
        solution: "Corrigir conexão ou substituir componente com falha."
      },
      {
        code: "F0",
        title: "Falta de refrigerante",
        cause: "Possível vazamento ou baixa carga de fluido.",
        test: "Verificar pressão, superaquecimento, vazamento e temperatura de descarga.",
        solution: "Corrigir vazamento, fazer vácuo e carga correta."
      }
    ],

    "Elgin|Eco Inverter": [
      {
        code: "E1",
        title: "Sensor ambiente",
        cause: "Falha no sensor de temperatura ambiente.",
        test: "Verificar conector e medir resistência NTC.",
        solution: "Substituir sensor se estiver aberto, em curto ou fora da faixa."
      },
      {
        code: "E5",
        title: "Comunicação",
        cause: "Falha de comunicação entre evaporadora e condensadora.",
        test: "Conferir cabo de comunicação, borneira, tensão e aterramento.",
        solution: "Corrigir interligação ou avaliar placas."
      }
    ],

    "Elgin|Hi Wall Eco": [
      {
        code: "E1",
        title: "Sensor ambiente",
        cause: "Sensor ambiente com falha.",
        test: "Medir resistência do sensor.",
        solution: "Substituir sensor ou corrigir conexão."
      },
      {
        code: "E3",
        title: "Ventilador",
        cause: "Falha no motor ventilador interno.",
        test: "Verificar motor, capacitor e placa.",
        solution: "Corrigir componente defeituoso."
      }
    ],

    "Daikin|Advance": [
      {
        code: "U4",
        title: "Comunicação",
        cause: "Falha de comunicação entre unidade interna e externa.",
        test: "Verificar interligação, alimentação, polaridade e placas.",
        solution: "Corrigir comunicação ou substituir placa com defeito."
      },
      {
        code: "A5",
        title: "Proteção evaporadora",
        cause: "Controle de congelamento ou alta temperatura na serpentina.",
        test: "Verificar filtros, serpentina, carga de fluido e sensor.",
        solution: "Corrigir fluxo de ar, carga de fluido ou sensor."
      }
    ],

    "Daikin|EcoSwing": [
      {
        code: "U4",
        title: "Comunicação",
        cause: "Falha de comunicação entre evaporadora e condensadora.",
        test: "Conferir ligação e alimentação das unidades.",
        solution: "Corrigir cabeamento ou avaliar placas."
      },
      {
        code: "L5",
        title: "Sobrecorrente inverter",
        cause: "Falha no compressor, placa inverter ou alimentação.",
        test: "Medir compressor, barramento DC e corrente.",
        solution: "Corrigir alimentação ou substituir componente defeituoso."
      }
    ],

    "Fujitsu|Hi Wall Inverter": [
      {
        code: "Erro comunicação",
        title: "Comunicação",
        cause: "Falha de comunicação entre placas interna e externa.",
        test: "Verificar cabo, bornes, tensão e aterramento.",
        solution: "Corrigir interligação ou avaliar placas."
      },
      {
        code: "Erro sensor",
        title: "Sensor de temperatura",
        cause: "Sensor ambiente ou serpentina fora da faixa.",
        test: "Medir resistência NTC e verificar conector.",
        solution: "Substituir sensor defeituoso."
      }
    ],

    "Philco|PAC Inverter": [
      {
        code: "E1",
        title: "Comunicação",
        cause: "Falha entre evaporadora e condensadora.",
        test: "Verificar cabo de comunicação, borneira e alimentação.",
        solution: "Corrigir ligação ou avaliar placas."
      },
      {
        code: "E5",
        title: "Proteção",
        cause: "Proteção geral por corrente, temperatura ou pressão.",
        test: "Verificar corrente, serpentina, ventiladores e carga de fluido.",
        solution: "Corrigir causa da proteção antes de trocar placa."
      }
    ],

    "Electrolux|Eco Turbo": [
      {
        code: "E1",
        title: "Sensor ambiente",
        cause: "Sensor ambiente com falha.",
        test: "Medir sensor NTC e verificar conector.",
        solution: "Substituir sensor se necessário."
      },
      {
        code: "E4",
        title: "Proteção evaporadora",
        cause: "Possível congelamento ou falha de ventilação.",
        test: "Verificar filtro, evaporadora, turbina e sensor.",
        solution: "Limpar sistema e corrigir sensor/carga de fluido."
      }
    ],

    "TCL|TAC Inverter": [
      {
        code: "E1",
        title: "Comunicação",
        cause: "Falha de comunicação entre unidades.",
        test: "Verificar cabo, bornes, alimentação e aterramento.",
        solution: "Corrigir ligação ou avaliar placas."
      },
      {
        code: "P4",
        title: "Proteção inverter",
        cause: "Proteção do compressor ou módulo inverter.",
        test: "Medir compressor, corrente, pressão e barramento DC.",
        solution: "Corrigir falha de alimentação, compressor ou placa."
      }
    ]
  }
};
