/* HVAC PRO - databases/diagnosticos.js */

window.HVAC_DIAGNOSTICOS = {
  aviso: "Diagnósticos de referência rápida. Sempre confirmar medições com instrumentos adequados, manual técnico e normas de segurança.",

  testes: {
    compressor: {
      titulo: "Teste do compressor",
      objetivo: "Verificar se o compressor está com bobinas íntegras, sem curto, sem fuga para carcaça e sem sinais de travamento.",
      passos: [
        "<span>1. Segurança:</span><br>Desligue o equipamento da energia antes de acessar os terminais do compressor.",
        "<span>2. Identificação:</span><br>Localize os terminais comum, partida e trabalho quando aplicável.",
        "<span>3. Resistência das bobinas:</span><br>Meça a resistência entre os terminais. As leituras devem ter coerência entre comum, partida e trabalho.",
        "<span>4. Fuga para carcaça:</span><br>Meça continuidade entre cada terminal e a carcaça do compressor. Não deve haver continuidade.",
        "<span>5. Corrente de trabalho:</span><br>Com o equipamento ligado e seguro para teste, compare a corrente com a etiqueta do compressor/equipamento.",
        "<span>6. Diagnóstico:</span><br>Bobina aberta, curto entre bobinas, fuga para carcaça ou corrente muito alta indicam falha grave."
      ],
      alertas: [
        "Risco elétrico",
        "Usar EPI",
        "Confirmar tensão",
        "Comparar com etiqueta"
      ]
    },

    capacitor: {
      titulo: "Teste de capacitor",
      objetivo: "Verificar se o capacitor está com capacitância correta e se não apresenta sinais físicos de falha.",
      passos: [
        "<span>1. Segurança:</span><br>Desligue o equipamento da energia e descarregue o capacitor com procedimento seguro.",
        "<span>2. Inspeção visual:</span><br>Verifique se o capacitor está estufado, vazando óleo, rachado ou com terminal queimado.",
        "<span>3. Medição:</span><br>Use multímetro com escala de capacitância e meça em microfarads.",
        "<span>4. Comparação:</span><br>Compare o valor medido com o valor impresso no capacitor.",
        "<span>5. Tolerância:</span><br>Se estiver muito abaixo do valor nominal, substitua o capacitor.",
        "<span>6. Sintomas comuns:</span><br>Motor zumbindo, compressor não parte, ventilador lento ou equipamento desarmando."
      ],
      alertas: [
        "Descarregar capacitor",
        "Risco de choque",
        "Conferir microfarads",
        "Conferir tensão VAC"
      ]
    },

    sensor: {
      titulo: "Teste de sensor NTC",
      objetivo: "Verificar se o sensor de temperatura está aberto, em curto, fora da curva ou com mau contato.",
      passos: [
        "<span>1. Segurança:</span><br>Desligue o equipamento da energia antes de desconectar sensores da placa.",
        "<span>2. Desconexão:</span><br>Remova o conector do sensor da placa para medir corretamente.",
        "<span>3. Medição:</span><br>Meça a resistência em ohms usando o multímetro.",
        "<span>4. Temperatura ambiente:</span><br>Compare a leitura com a tabela aproximada do sensor ou manual do fabricante.",
        "<span>5. Teste térmico:</span><br>Aqueça levemente o sensor com a mão. Em sensores NTC, a resistência deve diminuir.",
        "<span>6. Diagnóstico:</span><br>Sensor aberto, em curto ou sem variação térmica deve ser substituído."
      ],
      alertas: [
        "Não medir energizado",
        "Comparar com tabela",
        "Verificar conector",
        "Atenção ao tipo do sensor"
      ]
    },

    ventilador: {
      titulo: "Teste de ventilador",
      objetivo: "Verificar falha no motor ventilador, capacitor, sensor Hall, alimentação ou placa eletrônica.",
      passos: [
        "<span>1. Inspeção mecânica:</span><br>Gire a turbina ou hélice manualmente com o equipamento desligado. Verifique travamento, sujeira ou rolamento pesado.",
        "<span>2. Capacitor:</span><br>Em motores com capacitor, meça a capacitância e compare com o valor nominal.",
        "<span>3. Alimentação:</span><br>Verifique se chega tensão correta no motor durante o comando de funcionamento.",
        "<span>4. Conectores:</span><br>Confira chicote, encaixes, oxidação, fio rompido ou mau contato.",
        "<span>5. Sensor Hall:</span><br>Em motores eletrônicos, falha no retorno de rotação pode gerar erro mesmo com motor girando.",
        "<span>6. Diagnóstico:</span><br>Se há comando e tensão correta mas o motor não gira, suspeite do motor. Se não há comando, avalie placa e sinais."
      ],
      alertas: [
        "Cuidado com partes móveis",
        "Verificar capacitor",
        "Verificar Hall",
        "Conferir placa"
      ]
    }
  },

  sintomas: {
    naoLiga: {
      titulo: "Equipamento não liga",
      causasProvaveis: [
        "Falta de alimentação elétrica",
        "Disjuntor desligado",
        "Controle remoto sem bateria",
        "Placa eletrônica sem alimentação",
        "Fusível da placa aberto",
        "Erro de comunicação"
      ],
      verificacoes: [
        "Conferir tensão na tomada ou borneira",
        "Verificar disjuntor",
        "Testar controle remoto",
        "Verificar fusível da placa",
        "Conferir cabos e conectores"
      ]
    },

    naoGela: {
      titulo: "Equipamento liga mas não gela",
      causasProvaveis: [
        "Filtro sujo",
        "Evaporadora suja",
        "Condensadora obstruída",
        "Baixa carga de fluido",
        "Compressor não acionando",
        "Válvula ou capilar com restrição"
      ],
      verificacoes: [
        "Verificar limpeza dos filtros",
        "Verificar ventilação interna e externa",
        "Medir pressão de trabalho",
        "Verificar superaquecimento e subresfriamento",
        "Medir corrente do compressor"
      ]
    },

    congelaEvaporadora: {
      titulo: "Evaporadora congelando",
      causasProvaveis: [
        "Filtro muito sujo",
        "Baixa vazão de ar",
        "Turbina suja",
        "Baixa carga de fluido",
        "Sensor de serpentina com falha",
        "Temperatura ambiente muito baixa"
      ],
      verificacoes: [
        "Limpar filtros",
        "Verificar turbina",
        "Medir sensor de serpentina",
        "Conferir pressão e superaquecimento",
        "Verificar velocidade do ventilador"
      ]
    },

    desarma: {
      titulo: "Equipamento desarma",
      causasProvaveis: [
        "Alta corrente",
        "Alta pressão",
        "Baixa pressão",
        "Superaquecimento do compressor",
        "Falha de sensor",
        "Placa eletrônica com defeito"
      ],
      verificacoes: [
        "Medir corrente",
        "Conferir tensão de alimentação",
        "Verificar condensadora suja",
        "Verificar ventiladores",
        "Ler código de erro",
        "Verificar sensores"
      ]
    }
  }
};
