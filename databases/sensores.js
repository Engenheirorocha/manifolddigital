/* HVAC PRO - databases/sensores.js */

window.HVAC_SENSORES = {
  aviso: "Valores aproximados para referência rápida. Sempre confirmar com manual técnico do fabricante.",

  tipos: {
    "NTC_10K": {
      nome: "Sensor NTC 10K",
      uso: "Muito comum em evaporadoras, condensadoras e sensores de ambiente.",
      descricao: "A resistência diminui quando a temperatura aumenta.",
      testeRapido: [
        "Desligar o equipamento da energia.",
        "Desconectar o sensor da placa.",
        "Medir resistência em escala de ohms.",
        "Comparar com tabela aproximada ou tabela do fabricante.",
        "Aquecer o sensor com a mão: a resistência deve diminuir gradualmente."
      ],
      falhasComuns: [
        "Sensor aberto",
        "Sensor em curto",
        "Conector oxidado",
        "Cabo rompido",
        "Sensor fora da curva de resistência"
      ],
      tabelaAproximada: [
        { temperatura: "0 °C", resistencia: "32kΩ a 33kΩ" },
        { temperatura: "5 °C", resistencia: "25kΩ a 27kΩ" },
        { temperatura: "10 °C", resistencia: "19kΩ a 21kΩ" },
        { temperatura: "15 °C", resistencia: "15kΩ a 16kΩ" },
        { temperatura: "20 °C", resistencia: "12kΩ a 13kΩ" },
        { temperatura: "25 °C", resistencia: "10kΩ" },
        { temperatura: "30 °C", resistencia: "8kΩ a 8,5kΩ" },
        { temperatura: "35 °C", resistencia: "6,5kΩ a 7kΩ" },
        { temperatura: "40 °C", resistencia: "5kΩ a 5,5kΩ" }
      ]
    },

    "NTC_5K": {
      nome: "Sensor NTC 5K",
      uso: "Usado em alguns modelos de ar-condicionado, refrigeração e placas específicas.",
      descricao: "A resistência diminui conforme a temperatura sobe.",
      testeRapido: [
        "Desligar o aparelho da energia.",
        "Remover o conector do sensor.",
        "Medir resistência do sensor.",
        "Comparar com tabela técnica do fabricante.",
        "Aquecer levemente o sensor e observar queda progressiva da resistência."
      ],
      falhasComuns: [
        "Sensor aberto",
        "Sensor em curto",
        "Leitura instável",
        "Mau contato no conector",
        "Chicote danificado"
      ],
      tabelaAproximada: [
        { temperatura: "0 °C", resistencia: "15kΩ a 17kΩ" },
        { temperatura: "10 °C", resistencia: "9kΩ a 10kΩ" },
        { temperatura: "20 °C", resistencia: "6kΩ a 6,5kΩ" },
        { temperatura: "25 °C", resistencia: "5kΩ" },
        { temperatura: "30 °C", resistencia: "4kΩ a 4,3kΩ" },
        { temperatura: "40 °C", resistencia: "2,5kΩ a 3kΩ" }
      ]
    },

    "NTC_15K": {
      nome: "Sensor NTC 15K",
      uso: "Encontrado em alguns equipamentos inverter e linhas específicas.",
      descricao: "Sensor de coeficiente negativo: quanto maior a temperatura, menor a resistência.",
      testeRapido: [
        "Desligar o equipamento.",
        "Desconectar o sensor da placa.",
        "Medir resistência em temperatura ambiente.",
        "Comparar com a tabela do fabricante.",
        "Verificar se a resistência varia suavemente ao aquecer o sensor."
      ],
      falhasComuns: [
        "Valor fora da faixa",
        "Sensor aberto",
        "Sensor em curto",
        "Conector frouxo",
        "Oxidação"
      ],
      tabelaAproximada: [
        { temperatura: "0 °C", resistencia: "45kΩ a 50kΩ" },
        { temperatura: "10 °C", resistencia: "28kΩ a 32kΩ" },
        { temperatura: "20 °C", resistencia: "18kΩ a 20kΩ" },
        { temperatura: "25 °C", resistencia: "15kΩ" },
        { temperatura: "30 °C", resistencia: "12kΩ a 13kΩ" },
        { temperatura: "40 °C", resistencia: "7kΩ a 8kΩ" }
      ]
    }
  },

  aplicacoes: {
    sensorAmbiente: {
      nome: "Sensor de ambiente",
      funcao: "Mede a temperatura do ar de retorno ou do ambiente.",
      sintomas: [
        "Equipamento não desliga",
        "Equipamento não liga compressor",
        "Temperatura incorreta no display",
        "Código de erro de sensor ambiente"
      ],
      verificacoes: [
        "Verificar posição do sensor",
        "Conferir se está encostado em serpentina ou carcaça",
        "Medir resistência",
        "Verificar conector na placa"
      ]
    },

    sensorSerpentina: {
      nome: "Sensor de serpentina",
      funcao: "Monitora a temperatura da evaporadora ou condensadora.",
      sintomas: [
        "Evaporadora congelando",
        "Ventilador não parte no modo quente",
        "Compressor desarma",
        "Código de erro de sensor de serpentina"
      ],
      verificacoes: [
        "Verificar fixação na serpentina",
        "Medir resistência",
        "Conferir chicote",
        "Comparar com tabela do fabricante"
      ]
    },

    sensorDescarga: {
      nome: "Sensor de descarga",
      funcao: "Monitora temperatura da descarga do compressor.",
      sintomas: [
        "Proteção por alta temperatura",
        "Compressor desarma",
        "Erro em placa inverter",
        "Equipamento funciona por pouco tempo"
      ],
      verificacoes: [
        "Verificar fixação no tubo de descarga",
        "Verificar carga de fluido",
        "Conferir ventilação da condensadora",
        "Medir resistência do sensor"
      ]
    }
  }
};
