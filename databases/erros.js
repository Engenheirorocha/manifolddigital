/* HVAC PRO - databases/erros.js
   Extraído do HTML principal original. */

window.errorCodesByModel = {
  "Midea|Xtreme Save": [
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
  ],

  "LG|Dual Inverter": [
    {
      code: "CH05",
      title: "Comunicação",
      cause: "Falha de comunicação entre unidades.",
      test: "Verificar cabo de comunicação, tensão e aterramento.",
      solution: "Corrigir cabeamento ou substituir placa com defeito."
    }
  ],

  "Samsung|WindFree": [
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
  ],

  "Consul|Facilite": [
    {
      code: "E1",
      title: "Sensor ambiente",
      cause: "Sensor NTC aberto, em curto ou desconectado.",
      test: "Medir resistência do sensor e verificar conector.",
      solution: "Reconectar ou substituir sensor."
    }
  ],

  "Carrier|XPower": [
    {
      code: "E3",
      title: "Ventilador evaporadora",
      cause: "Falha de rotação do motor interno.",
      test: "Verificar motor, capacitor, sensor Hall e placa.",
      solution: "Corrigir motor, capacitor ou placa."
    }
  ]
};
