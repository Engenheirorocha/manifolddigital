/* HVAC PRO - databases/erros.js
   LOTE 2: mantém Lote 1 e adiciona Gree, Elgin, Daikin, Fujitsu e Panasonic.
   Base para consulta técnica em campo.
   Regra: quando não confirmado por manual específico do modelo, marcar como VALIDAR_MANUAL_MODELO.
*/

const defeitosComuns = [
  {
    code: "NAO_GELA",
    title: "Não gela / baixo rendimento",
    cause: "Filtro sujo, evaporadora suja, condensadora obstruída, baixa carga de fluido, restrição, ventilador fraco ou compressor com baixo rendimento.",
    test: "Verificar filtros, evaporadora, condensadora, vazão de ar, pressão de trabalho, superaquecimento, subresfriamento e corrente do compressor.",
    solution: "Limpar filtros e serpentinas, corrigir ventilação, verificar vazamento, fazer vácuo e carga correta quando necessário.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  },
  {
    code: "NAO_LIGA",
    title: "Equipamento não liga",
    cause: "Falta de alimentação, disjuntor desligado, fusível aberto, controle sem bateria, placa sem alimentação ou borne solto.",
    test: "Conferir tensão de entrada, disjuntor, tomada/borneira, fusível da placa, controle remoto e conectores.",
    solution: "Restabelecer alimentação, corrigir conexões, trocar fusível quando aplicável ou avaliar placa eletrônica.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  },
  {
    code: "CONGELA",
    title: "Evaporadora congelando",
    cause: "Baixa vazão de ar, filtro sujo, turbina suja, serpentina obstruída, baixa carga de fluido ou sensor de serpentina com falha.",
    test: "Verificar filtros, turbina, evaporadora, velocidade do ventilador, pressão de sucção, superaquecimento e sensor de serpentina.",
    solution: "Limpar sistema de ar, corrigir ventilação, verificar carga de fluido e substituir sensor defeituoso se necessário.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  },
  {
    code: "VENTILADOR",
    title: "Falha no ventilador",
    cause: "Motor travado, capacitor fraco, turbina/hélice presa, sensor Hall com falha, chicote rompido, conector oxidado ou placa sem comando.",
    test: "Girar hélice/turbina manualmente, medir capacitor, verificar alimentação do motor, conector, chicote e retorno de rotação.",
    solution: "Limpar e destravar conjunto, substituir capacitor, corrigir chicote/conector, trocar motor ou avaliar placa.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  },
  {
    code: "SENSOR",
    title: "Falha de sensor",
    cause: "Sensor NTC aberto, em curto, fora da curva, mal encaixado, oxidado ou com cabo rompido.",
    test: "Desligar o equipamento, desconectar sensor da placa, medir resistência e comparar com tabela do fabricante.",
    solution: "Reconectar, corrigir chicote/conector ou substituir sensor compatível.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  },
  {
    code: "COMUNICACAO",
    title: "Falha de comunicação",
    cause: "Falha entre evaporadora e condensadora por cabo invertido, mau contato, borne frouxo, aterramento ruim, alimentação incorreta ou placa defeituosa.",
    test: "Conferir interligação, sequência dos bornes, cabo de comunicação, tensão, aterramento e conectores das placas.",
    solution: "Corrigir ligação, refazer conexões, reapertar bornes, corrigir alimentação/aterramento ou avaliar placas.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  },
  {
    code: "COMPRESSOR",
    title: "Compressor não parte / proteção",
    cause: "Capacitor defeituoso, compressor travado, bobina aberta, fuga para carcaça, módulo inverter com falha, pressão fora da faixa ou alimentação incorreta.",
    test: "Medir tensão, corrente, resistência das bobinas, fuga para carcaça, capacitor quando aplicável, pressão de trabalho e módulo inverter.",
    solution: "Corrigir alimentação, trocar capacitor, corrigir carga/ventilação, avaliar módulo inverter ou substituir compressor se confirmado defeito.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  },
  {
    code: "ALTA_PRESSAO",
    title: "Alta pressão / condensação elevada",
    cause: "Condensadora suja, ventilador externo fraco, recirculação de ar quente, excesso de fluido, obstrução ou temperatura externa muito alta.",
    test: "Verificar limpeza da condensadora, funcionamento do ventilador externo, pressão de alta, subresfriamento e ambiente de instalação.",
    solution: "Limpar condensadora, corrigir ventilação, remover obstruções, ajustar carga de fluido e corrigir instalação.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  },
  {
    code: "BAIXA_PRESSAO",
    title: "Baixa pressão / baixa carga",
    cause: "Vazamento, baixa carga de fluido, restrição, filtro/capilar obstruído, evaporadora suja ou baixa carga térmica.",
    test: "Verificar vazamentos, pressão de sucção, superaquecimento, temperatura de evaporação, filtros e serpentinas.",
    solution: "Corrigir vazamento, fazer vácuo, carregar fluido na quantidade correta e corrigir restrições/obstruções.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  },
  {
    code: "DRENO",
    title: "Vazamento de água / dreno",
    cause: "Dreno entupido, bandeja suja, mangueira mal posicionada, falta de queda, isolamento ruim ou evaporadora congelando.",
    test: "Verificar saída de água, bandeja, inclinação do dreno, mangueira, isolamento e presença de gelo.",
    solution: "Limpar dreno e bandeja, corrigir queda, reposicionar mangueira, melhorar isolamento e resolver causa de congelamento.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  },
  {
    code: "RUIDO",
    title: "Ruído ou vibração",
    cause: "Turbina suja/desbalanceada, hélice raspando, motor com rolamento ruim, carenagem solta, compressor vibrando ou tubulação encostando.",
    test: "Verificar fixação, hélice, turbina, rolamentos, coxins, carenagem, tubulação e vibração em funcionamento.",
    solution: "Reapertar componentes, limpar turbina, alinhar hélice, corrigir tubulação, trocar motor ou coxins.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  },
  {
    code: "PLACA",
    title: "Suspeita de placa eletrônica",
    cause: "Relé queimado, trilha danificada, varistor/fusível aberto, fonte sem saída, falha de comunicação ou comando ausente.",
    test: "Verificar alimentação de entrada, fusível, fonte da placa, conectores, sinais de queimado, relés e saída para motores.",
    solution: "Corrigir alimentação e conexões. Se confirmado defeito interno, reparar ou substituir placa.",
    sourceLevel: "DIAGNOSTICO_CAMPO"
  }
];

/* LOTE 1 */

const baseMideaSplit = [
  {
    code: "E1",
    title: "Comunicação / sensor conforme linha",
    cause: "Falha de comunicação entre evaporadora e condensadora ou falha de sensor conforme modelo.",
    test: "Verificar cabo de interligação, borne S/comunicação, alimentação, aterramento, conectores e sensores NTC.",
    solution: "Corrigir interligação, reapertar bornes, substituir sensor defeituoso ou avaliar placas.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E2",
    title: "Sensor ambiente",
    cause: "Sensor de temperatura ambiente aberto, em curto, desconectado ou fora da faixa.",
    test: "Desligar o equipamento, desconectar sensor da placa e medir resistência NTC.",
    solution: "Reconectar chicote, limpar conector ou substituir sensor compatível.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E3",
    title: "Sensor serpentina / ventilador interno",
    cause: "Sensor da serpentina com falha ou falha no motor/rotação da evaporadora, conforme linha.",
    test: "Medir sensor NTC, verificar conector, motor ventilador, capacitor quando houver, chicote e placa.",
    solution: "Substituir sensor, corrigir motor/capacitor/chicote ou avaliar placa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E5",
    title: "Proteção / comunicação",
    cause: "Proteção do sistema, alimentação incorreta, comunicação instável ou falha de placa.",
    test: "Verificar tensão de entrada, interligação, corrente de operação, bornes e placas.",
    solution: "Corrigir alimentação, interligação ou avaliar placa eletrônica.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "P0",
    title: "Proteção módulo inverter",
    cause: "Proteção do módulo IPM/inverter ou falha de acionamento do compressor.",
    test: "Medir compressor, barramento DC, alimentação da condensadora, corrente e módulo inverter.",
    solution: "Corrigir alimentação, compressor, ventilação ou módulo/placa inverter.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "P1",
    title: "Proteção de tensão",
    cause: "Tensão de alimentação fora da faixa ou proteção elétrica da placa.",
    test: "Medir tensão em repouso e em funcionamento, queda de tensão, disjuntor, cabos e bornes.",
    solution: "Corrigir alimentação elétrica, bitola, conexões ou rede antes de religar.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "P4",
    title: "Proteção compressor / inverter",
    cause: "Proteção do compressor, módulo IPM ou falha de acionamento inverter.",
    test: "Medir corrente, pressão de trabalho, tensão DC no barramento e resistência das bobinas do compressor.",
    solution: "Corrigir ventilação, alimentação, carga de fluido ou avaliar módulo inverter/compressor.",
    sourceLevel: "BASE_APP_ORIGINAL"
  }
];

const baseMideaMulti = [
  {
    code: "EE",
    title: "Nível de água / drenagem",
    cause: "Fluxo excessivo de água, bomba/dreno com falha, tubulação de dreno incorreta, obstruída ou sem queda adequada.",
    test: "Verificar bandeja, bomba de dreno, boia, inclinação, comprimento, obstruções e descarga da tubulação.",
    solution: "Corrigir instalação do dreno, limpar obstruções, testar bomba e drenar a água acumulada antes de religar.",
    sourceLevel: "OFICIAL_MIDEA_FREEMATCH"
  },
  {
    code: "E0",
    title: "Proteção / falha geral da unidade",
    cause: "Falha geral de controle, alimentação, comunicação ou proteção da unidade.",
    test: "Verificar alimentação, placas, comunicação, sensores e histórico do erro.",
    solution: "Corrigir alimentação, comunicação ou componente indicado pelo diagnóstico.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E1",
    title: "Falha de comunicação",
    cause: "Falha de comunicação entre unidade interna, externa ou controle.",
    test: "Conferir cabo, bornes, polaridade, alimentação e aterramento.",
    solution: "Corrigir interligação, bornes, chicote ou placa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E2",
    title: "Sensor ambiente",
    cause: "Sensor ambiente aberto, em curto ou fora da faixa.",
    test: "Medir NTC e verificar conector.",
    solution: "Substituir sensor ou corrigir conector.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E3",
    title: "Sensor serpentina",
    cause: "Sensor da serpentina da evaporadora ou condensadora com falha.",
    test: "Medir resistência NTC e comparar com tabela técnica.",
    solution: "Substituir sensor ou corrigir chicote.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E4",
    title: "Proteção anticongelamento / temperatura",
    cause: "Temperatura de serpentina fora da faixa, congelamento ou fluxo de ar insuficiente.",
    test: "Verificar filtros, evaporadora, ventilador, sensor e carga de fluido.",
    solution: "Limpar sistema, corrigir ventilação, carga de fluido ou sensor.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  }
];

const baseSpringer = [
  {
    code: "E1",
    title: "Sensor ambiente / comunicação",
    cause: "Sensor ambiente com falha ou comunicação instável conforme linha.",
    test: "Medir sensor NTC, verificar conectores, interligação e alimentação.",
    solution: "Reconectar, substituir sensor ou corrigir comunicação.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E2",
    title: "Sensor evaporadora",
    cause: "Sensor de serpentina aberto, em curto, desconectado ou fora da faixa.",
    test: "Medir resistência do sensor e verificar chicote.",
    solution: "Substituir sensor se estiver fora da especificação.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E3",
    title: "Ventilador interno",
    cause: "Falha no motor da evaporadora, capacitor, chicote, retorno de rotação ou placa.",
    test: "Verificar motor, capacitor quando houver, alimentação, chicote e placa.",
    solution: "Corrigir motor/capacitor/chicote ou avaliar placa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "P4",
    title: "Proteção compressor / inverter",
    cause: "Proteção do compressor, módulo inverter ou pressão fora da faixa.",
    test: "Medir corrente, pressões, bobinas do compressor, barramento DC e ventilação.",
    solution: "Corrigir alimentação, carga de fluido, ventilação ou avaliar módulo/compressor.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  }
];

const baseCarrier = [
  {
    code: "E1",
    title: "Comunicação",
    cause: "Falha de comunicação entre evaporadora e condensadora.",
    test: "Verificar cabo de comunicação, sequência de ligação, bornes, alimentação e aterramento.",
    solution: "Corrigir interligação, reapertar bornes ou avaliar placas.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E2",
    title: "Sensor ambiente",
    cause: "Sensor de temperatura ambiente com falha, desconectado ou fora da faixa.",
    test: "Medir resistência NTC e verificar conector.",
    solution: "Substituir sensor ou corrigir conexão.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E3",
    title: "Ventilador evaporadora",
    cause: "Falha de rotação do motor interno, capacitor, sensor Hall, chicote ou placa.",
    test: "Verificar motor, capacitor quando houver, sensor Hall, chicote, alimentação e placa.",
    solution: "Corrigir motor, capacitor, chicote ou placa.",
    sourceLevel: "BASE_APP_ORIGINAL"
  },
  {
    code: "P4",
    title: "Proteção compressor",
    cause: "Proteção do compressor, módulo inverter, corrente elevada ou pressão fora da faixa.",
    test: "Medir corrente, pressão, bobinas do compressor, barramento DC e ventilação.",
    solution: "Corrigir causa da proteção antes de trocar componentes.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  }
];

const baseSamsungOficial = [
  {
    code: "CF",
    title: "Redefinição / limpeza do filtro",
    cause: "Lembrete de limpeza do filtro interno.",
    test: "Verificar condição do filtro interno e confirmar se há sujeira acumulada.",
    solution: "Limpar filtro e redefinir o aviso conforme o controle/manual do modelo.",
    sourceLevel: "OFICIAL_SAMSUNG_SUPORTE"
  },
  {
    code: "dF",
    title: "Degelo / Defrost",
    cause: "Unidade em modo de descongelamento durante aquecimento.",
    test: "Verificar se está operando em aquecimento e se a unidade externa está em ciclo de degelo.",
    solution: "Aguardar o ciclo de degelo. Se persistir anormalmente, verificar sensores e unidade externa.",
    sourceLevel: "OFICIAL_SAMSUNG_SUPORTE"
  },
  {
    code: "dL",
    title: "Degelo / Defrost",
    cause: "Função de descongelamento ativa em alguns modelos.",
    test: "Verificar condição de operação em aquecimento e formação de gelo na unidade externa.",
    solution: "Aguardar ciclo normal. Se não normalizar, avaliar sensores e troca térmica.",
    sourceLevel: "OFICIAL_SAMSUNG_SUPORTE"
  },
  {
    code: "AP",
    title: "SmartThings / pareamento",
    cause: "Modo de pareamento ou função SmartThings habilitada.",
    test: "Verificar se o equipamento está em processo de conexão com aplicativo.",
    solution: "Finalizar configuração no aplicativo ou sair do modo de pareamento.",
    sourceLevel: "OFICIAL_SAMSUNG_SUPORTE"
  },
  {
    code: "C1",
    title: "Limpeza automática",
    cause: "Indicação relacionada ao modo de limpeza automática.",
    test: "Confirmar operação de limpeza automática no controle/display.",
    solution: "Aguardar finalização do ciclo ou consultar manual do modelo.",
    sourceLevel: "OFICIAL_SAMSUNG_SUPORTE"
  },
  {
    code: "C121",
    title: "Alarme que exige assistência",
    cause: "Alarme de duas etapas exibido como C1 21 / C121, exigindo assistência técnica.",
    test: "Anotar o código exibido e confirmar padrão de piscadas/display.",
    solution: "Encaminhar para suporte/assistência Samsung ou técnico qualificado.",
    sourceLevel: "OFICIAL_SAMSUNG_SUPORTE"
  },
  {
    code: "C422",
    title: "EEV / refrigeração insuficiente",
    cause: "Funcionamento anormal durante autoteste, controle de bloqueio de EEV ou refrigeração insuficiente.",
    test: "Verificar válvula de expansão eletrônica, sensores, carga de fluido, comunicação e unidade externa.",
    solution: "Corrigir falha indicada por diagnóstico técnico; pode exigir assistência especializada.",
    sourceLevel: "OFICIAL_SAMSUNG_SUPORTE"
  }
];

const baseSamsungTecnica = [
  {
    code: "E101",
    title: "Comunicação",
    cause: "Falha de comunicação entre unidade interna e externa.",
    test: "Conferir interligação, bornes, alimentação, aterramento e comunicação.",
    solution: "Corrigir cabo, conexão, aterramento ou placa.",
    sourceLevel: "BASE_APP_ORIGINAL_VALIDAR_MANUAL"
  },
  {
    code: "E121",
    title: "Sensor ambiente",
    cause: "Sensor de temperatura ambiente com falha.",
    test: "Medir resistência NTC e verificar conector.",
    solution: "Substituir sensor ou corrigir conexão.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E122",
    title: "Sensor evaporadora",
    cause: "Sensor de serpentina com falha.",
    test: "Medir resistência e comparar com tabela do fabricante.",
    solution: "Substituir sensor se fora da faixa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E202",
    title: "Comunicação externa",
    cause: "Falha de comunicação com a unidade externa.",
    test: "Conferir alimentação da condensadora, cabo, bornes e placa externa.",
    solution: "Corrigir alimentação/interligação ou avaliar placa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E464",
    title: "Proteção compressor inverter",
    cause: "Sobrecorrente ou falha no compressor inverter.",
    test: "Medir bobinas do compressor, corrente, barramento DC e módulo inverter.",
    solution: "Avaliar compressor, módulo inverter, ventilação e alimentação.",
    sourceLevel: "BASE_APP_ORIGINAL_VALIDAR_MANUAL"
  }
];

const baseLG = [
  {
    code: "CH05",
    title: "Comunicação",
    cause: "Falha de comunicação entre unidade interna e externa.",
    test: "Verificar cabo de comunicação, tensão, sequência de ligação, conectores e aterramento.",
    solution: "Corrigir cabeamento, borne solto, mau contato ou avaliar placa.",
    sourceLevel: "BASE_APP_ORIGINAL_VALIDAR_MANUAL"
  },
  {
    code: "CH10",
    title: "Motor evaporadora",
    cause: "Falha no motor BLDC da evaporadora ou retorno de rotação.",
    test: "Verificar conector, alimentação do motor, travamento mecânico, sinal de retorno e placa.",
    solution: "Corrigir motor, conector, chicote ou placa evaporadora.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "CH21",
    title: "Pico DC / IPM",
    cause: "Sobrecorrente no módulo inverter, compressor ou placa externa.",
    test: "Medir bobinas do compressor, corrente, tensão DC, módulo inverter e alimentação.",
    solution: "Avaliar compressor, placa inverter e alimentação elétrica.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "CH38",
    title: "Baixa carga / baixa pressão",
    cause: "Possível falta de fluido refrigerante, vazamento ou baixa pressão.",
    test: "Verificar vazamento, pressão de trabalho, superaquecimento e subresfriamento.",
    solution: "Corrigir vazamento, fazer vácuo e carga correta conforme etiqueta/manual.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "CH01",
    title: "Sensor ambiente interno",
    cause: "Sensor de temperatura ambiente interno com falha.",
    test: "Medir resistência NTC e verificar conector na placa interna.",
    solution: "Substituir sensor ou corrigir conexão.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "CH02",
    title: "Sensor serpentina interna",
    cause: "Sensor de tubo/serpentina interna com falha.",
    test: "Medir resistência do sensor e verificar fixação na serpentina.",
    solution: "Substituir sensor ou corrigir chicote/conector.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "CH67",
    title: "Ventilador externo",
    cause: "Falha no motor ventilador da condensadora ou retorno de rotação.",
    test: "Verificar motor externo, conector, alimentação, hélice travada e placa.",
    solution: "Corrigir motor, chicote, hélice ou placa externa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  }
];

const baseMideaJanela = [
  {
    code: "E1",
    title: "Sensor ambiente",
    cause: "Sensor de temperatura do ambiente com defeito.",
    test: "Desligar e religar. Se persistir, medir sensor e verificar conector.",
    solution: "Substituir sensor ou encaminhar para assistência/SAC.",
    sourceLevel: "OFICIAL_MIDEA_PORTATIL_REFERENCIA"
  },
  {
    code: "E2",
    title: "Sensor evaporador",
    cause: "Sensor de temperatura do evaporador com defeito.",
    test: "Medir sensor do evaporador e verificar conector/chicote.",
    solution: "Substituir sensor ou corrigir conexão.",
    sourceLevel: "OFICIAL_MIDEA_PORTATIL_REFERENCIA"
  },
  {
    code: "E4",
    title: "Mostrador / painel",
    cause: "Mostrador do painel de operação com defeito.",
    test: "Verificar painel, cabo flat, alimentação e placa.",
    solution: "Corrigir conexão ou substituir painel/placa.",
    sourceLevel: "OFICIAL_MIDEA_PORTATIL_REFERENCIA"
  },
  {
    code: "P1",
    title: "Bandeja inferior / dreno cheio",
    cause: "Bandeja inferior do dreno cheia.",
    test: "Verificar acúmulo de água, dreno e mangueira.",
    solution: "Drenar água da bandeja inferior e corrigir escoamento.",
    sourceLevel: "OFICIAL_MIDEA_PORTATIL_REFERENCIA"
  }
];

/* LOTE 2 */

const baseGree = [
  {
    code: "E1",
    title: "Alta pressão / proteção do sistema",
    cause: "Proteção por alta pressão, condensação elevada, condensadora suja, ventilador externo fraco ou excesso de fluido.",
    test: "Verificar pressão de alta, limpeza da condensadora, ventilador externo, recirculação de ar quente e carga de fluido.",
    solution: "Limpar condensadora, corrigir ventilação, remover obstruções e ajustar carga de fluido conforme etiqueta/manual.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E2",
    title: "Proteção anticongelamento",
    cause: "Evaporadora com temperatura muito baixa por filtro sujo, baixa vazão de ar, baixa carga ou sensor com falha.",
    test: "Verificar filtros, turbina, evaporadora, pressão de sucção, superaquecimento e sensor de serpentina.",
    solution: "Limpar evaporadora/filtros, corrigir ventilação, verificar carga e substituir sensor se necessário.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E5",
    title: "Proteção de sobrecorrente",
    cause: "Corrente elevada por compressor pesado, alimentação instável, pressão alta ou módulo com falha.",
    test: "Medir corrente, tensão, pressão de trabalho, compressor, ventilação e placa/módulo.",
    solution: "Corrigir alimentação, ventilação, carga de fluido ou avaliar compressor/placa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E6",
    title: "Comunicação",
    cause: "Falha de comunicação entre unidade interna e externa.",
    test: "Verificar cabo de comunicação, bornes, alimentação, aterramento, sequência de ligação e placas.",
    solution: "Corrigir interligação, reapertar bornes, refazer conexão ou avaliar placas.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "F0",
    title: "Falta de refrigerante / baixa carga",
    cause: "Possível vazamento, baixa carga de fluido ou proteção por baixa pressão.",
    test: "Verificar vazamentos, pressão de sucção, superaquecimento, subresfriamento e temperatura de descarga.",
    solution: "Corrigir vazamento, fazer vácuo e carregar fluido conforme etiqueta/manual.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "H6",
    title: "Ventilador interno sem resposta",
    cause: "Motor interno travado, chicote rompido, sensor Hall sem retorno ou placa com falha.",
    test: "Verificar turbina, motor, conector, tensão de alimentação, retorno Hall e placa.",
    solution: "Corrigir turbina/motor/chicote ou substituir placa/motor conforme teste.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  }
];

const baseElgin = [
  {
    code: "E1",
    title: "Sensor ambiente",
    cause: "Sensor de temperatura ambiente aberto, em curto, desconectado ou fora da faixa.",
    test: "Medir resistência NTC, verificar conector e chicote na placa.",
    solution: "Reconectar, corrigir chicote ou substituir sensor.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E2",
    title: "Sensor serpentina",
    cause: "Sensor de serpentina da evaporadora com falha.",
    test: "Medir resistência do sensor e verificar fixação/conector.",
    solution: "Substituir sensor se fora da curva ou corrigir conexão.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E3",
    title: "Ventilador interno",
    cause: "Motor ventilador interno, capacitor, chicote ou placa com falha.",
    test: "Verificar motor, capacitor quando houver, alimentação, chicote e placa.",
    solution: "Corrigir motor/capacitor/chicote ou avaliar placa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E5",
    title: "Comunicação / proteção",
    cause: "Falha de comunicação entre unidades, alimentação incorreta ou proteção do sistema.",
    test: "Conferir cabo de comunicação, borneira, tensão, aterramento e placas.",
    solution: "Corrigir interligação, alimentação ou avaliar placas.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "F0",
    title: "Proteção / baixa carga",
    cause: "Possível baixa carga de fluido, proteção por pressão ou falha de sensor conforme linha.",
    test: "Verificar pressão, vazamento, sensores, superaquecimento e subresfriamento.",
    solution: "Corrigir vazamento/carga ou sensor conforme diagnóstico.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  }
];

const baseDaikin = [
  {
    code: "U4",
    title: "Comunicação",
    cause: "Falha de comunicação entre unidade interna e externa.",
    test: "Verificar interligação, alimentação, polaridade, bornes, aterramento e placas.",
    solution: "Corrigir comunicação/interligação ou substituir placa confirmada defeituosa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "A1",
    title: "Placa da unidade interna",
    cause: "Anomalia na placa da unidade interna ou falha de controle.",
    test: "Verificar alimentação, fusível, conectores, sensores e sinais da placa interna.",
    solution: "Corrigir alimentação/conexões ou avaliar substituição/reparo da placa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "A3",
    title: "Dreno / nível de água",
    cause: "Falha no sistema de drenagem, boia, bomba de dreno ou nível de água.",
    test: "Verificar bandeja, boia, bomba de dreno, tubulação, queda e obstruções.",
    solution: "Limpar dreno, corrigir instalação, testar bomba e boia.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "A5",
    title: "Proteção da serpentina",
    cause: "Proteção anticongelamento ou alta temperatura na serpentina.",
    test: "Verificar filtros, evaporadora, ventilador, carga de fluido, sensor e fluxo de ar.",
    solution: "Corrigir fluxo de ar, limpeza, carga de fluido ou sensor.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "L5",
    title: "Sobrecorrente inverter",
    cause: "Sobrecorrente no compressor, placa inverter ou alimentação.",
    test: "Medir compressor, corrente, tensão, barramento DC e placa inverter.",
    solution: "Corrigir alimentação ou avaliar compressor/placa inverter.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "E7",
    title: "Ventilador externo",
    cause: "Falha no motor ventilador externo, chicote, hélice ou placa externa.",
    test: "Verificar motor externo, conector, tensão, hélice travada e placa.",
    solution: "Corrigir motor, chicote, hélice ou placa externa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  }
];

const baseFujitsu = [
  {
    code: "COM",
    title: "Erro de comunicação",
    cause: "Falha de comunicação entre placas interna e externa.",
    test: "Verificar cabo de interligação, bornes, tensão, aterramento e placa.",
    solution: "Corrigir interligação, alimentação ou avaliar placas.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "SENSOR",
    title: "Erro de sensor",
    cause: "Sensor ambiente, sensor de serpentina ou sensor externo fora da faixa.",
    test: "Medir sensores NTC, verificar conectores, chicote e fixação.",
    solution: "Substituir sensor defeituoso ou corrigir conexão.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "FAN",
    title: "Erro ventilador",
    cause: "Motor ventilador interno/externo com falha, retorno ausente ou placa sem comando.",
    test: "Verificar motor, chicote, alimentação, hélice/turbina e retorno de rotação.",
    solution: "Corrigir motor/chicote ou avaliar placa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "TIMER",
    title: "Erro indicado por LEDs",
    cause: "Alguns modelos Fujitsu indicam erro por combinação de LEDs, não por código alfanumérico simples.",
    test: "Contar piscadas dos LEDs Operation/Timer/Economy e comparar com manual do modelo.",
    solution: "Aplicar diagnóstico conforme tabela específica do manual do modelo.",
    sourceLevel: "OFICIAL_FUJITSU_MANUAL_LED"
  }
];

const basePanasonic = [
  {
    code: "H11",
    title: "Comunicação",
    cause: "Falha de comunicação entre unidade interna e externa.",
    test: "Verificar cabo de comunicação, bornes, alimentação, aterramento e placas.",
    solution: "Corrigir interligação, alimentação ou avaliar placas.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "H14",
    title: "Sensor ambiente interno",
    cause: "Sensor de temperatura ambiente interno com falha.",
    test: "Medir resistência NTC, verificar conector e chicote.",
    solution: "Substituir sensor ou corrigir conexão.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "H15",
    title: "Sensor compressor / externo",
    cause: "Sensor da unidade externa ou compressor com falha conforme linha.",
    test: "Verificar sensor externo, chicote, conexão e placa.",
    solution: "Substituir sensor ou corrigir chicote/placa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "H19",
    title: "Ventilador interno",
    cause: "Falha no motor ventilador interno ou retorno de rotação.",
    test: "Verificar motor, conector, tensão, turbina travada e placa.",
    solution: "Corrigir motor, chicote, turbina ou placa.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "H23",
    title: "Sensor serpentina interna",
    cause: "Sensor de serpentina interna com falha.",
    test: "Medir sensor NTC, verificar fixação e conector.",
    solution: "Substituir sensor ou corrigir chicote.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "F91",
    title: "Ciclo de refrigeração",
    cause: "Falha no ciclo de refrigeração, baixa carga, compressor, válvula ou obstrução.",
    test: "Verificar pressões, superaquecimento, subresfriamento, vazamento, compressor e válvula.",
    solution: "Corrigir vazamento/carga, restrição ou componente do ciclo conforme diagnóstico.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  },
  {
    code: "F95",
    title: "Alta pressão / proteção externa",
    cause: "Pressão elevada, condensadora suja, ventilador externo fraco ou sobrecarga térmica.",
    test: "Verificar pressão de alta, limpeza da condensadora, ventilador externo e carga.",
    solution: "Limpar condensadora, corrigir ventilação e carga de fluido.",
    sourceLevel: "VALIDAR_MANUAL_MODELO"
  }
];

const baseMideaJanela = [
  {
    code: "E1",
    title: "Sensor ambiente",
    cause: "Sensor de temperatura do ambiente com defeito.",
    test: "Desligar e religar. Se persistir, medir sensor e verificar conector.",
    solution: "Substituir sensor ou encaminhar para assistência/SAC.",
    sourceLevel: "OFICIAL_MIDEA_PORTATIL_REFERENCIA"
  },
  {
    code: "E2",
    title: "Sensor evaporador",
    cause: "Sensor de temperatura do evaporador com defeito.",
    test: "Medir sensor do evaporador e verificar conector/chicote.",
    solution: "Substituir sensor ou corrigir conexão.",
    sourceLevel: "OFICIAL_MIDEA_PORTATIL_REFERENCIA"
  },
  {
    code: "E4",
    title: "Mostrador / painel",
    cause: "Mostrador do painel de operação com defeito.",
    test: "Verificar painel, cabo flat, alimentação e placa.",
    solution: "Corrigir conexão ou substituir painel/placa.",
    sourceLevel: "OFICIAL_MIDEA_PORTATIL_REFERENCIA"
  },
  {
    code: "P1",
    title: "Bandeja inferior / dreno cheio",
    cause: "Bandeja inferior do dreno cheia.",
    test: "Verificar acúmulo de água, dreno e mangueira.",
    solution: "Drenar água da bandeja inferior e corrigir escoamento.",
    sourceLevel: "OFICIAL_MIDEA_PORTATIL_REFERENCIA"
  }
];

const perfisPorMarca = {
  "Midea": baseMideaSplit,
  "Springer": baseSpringer,
  "Carrier": baseCarrier,
  "Samsung": [...baseSamsungOficial, ...baseSamsungTecnica],
  "LG": baseLG,
  "Gree": baseGree,
  "Elgin": baseElgin,
  "Daikin": baseDaikin,
  "Fujitsu": baseFujitsu,
  "Panasonic": basePanasonic,

  "Philco": [],
  "Electrolux": [],
  "Consul": [],
  "TCL": [],
  "Agratto": [],
  "Komeco": [],
  "Hisense": [],
  "Hitachi": [],
  "Trane": [],
  "York": []
};

const especificosPorModelo = {
  "Midea|Xtreme Save": [
    {
      code: "E1",
      title: "Comunicação",
      cause: "Falha de comunicação entre evaporadora e condensadora.",
      test: "Verificar cabo S, bornes, alimentação e aterramento.",
      solution: "Corrigir interligação, reapertar bornes e testar placas.",
      sourceLevel: "BASE_APP_ORIGINAL"
    },
    {
      code: "P4",
      title: "Proteção inverter",
      cause: "Proteção do compressor ou módulo IPM.",
      test: "Medir corrente, pressão, tensão DC e bobinas do compressor.",
      solution: "Corrigir ventilação, alimentação ou avaliar módulo/compressor.",
      sourceLevel: "BASE_APP_ORIGINAL"
    }
  ],

  "Midea|AirVolution": baseMideaSplit,
  "Midea|Springer Midea": baseSpringer,
  "Midea|Liva": baseMideaSplit,
  "Midea|Inverter": baseMideaSplit,
  "Midea|Cassete Inverter": baseMideaMulti,
  "Midea|Piso Teto Inverter": baseMideaMulti,

  "Springer|AirVolution": baseSpringer,
  "Springer|Midea Springer": baseSpringer,
  "Springer|Janela Eletrônico": baseMideaJanela,
  "Springer|Janela Mecânico": [
    {
      code: "SEM_DISPLAY",
      title: "Modelo mecânico sem código digital",
      cause: "Equipamentos mecânicos podem não exibir código de erro no painel.",
      test: "Diagnosticar por sintoma: alimentação, termostato, compressor, capacitor, ventilador, serpentina e dreno.",
      solution: "Executar diagnóstico elétrico e mecânico por componente.",
      sourceLevel: "DIAGNOSTICO_CAMPO"
    },
    ...defeitosComuns
  ],

  "Carrier|XPower": [
    {
      code: "E3",
      title: "Ventilador evaporadora",
      cause: "Falha de rotação do motor interno.",
      test: "Verificar motor, capacitor, sensor Hall e placa.",
      solution: "Corrigir motor, capacitor ou placa.",
      sourceLevel: "BASE_APP_ORIGINAL"
    },
    ...baseCarrier
  ],
  "Carrier|Inverter Carrier": baseCarrier,
  "Carrier|Piso Teto Space": baseCarrier,
  "Carrier|Cassete Carrier": baseCarrier,

  "Samsung|WindFree": [
    {
      code: "E101",
      title: "Comunicação",
      cause: "Falha entre unidade interna e externa.",
      test: "Conferir interligação, bornes e sinal de comunicação.",
      solution: "Corrigir cabo, conexão ou placa.",
      sourceLevel: "BASE_APP_ORIGINAL_VALIDAR_MANUAL"
    },
    {
      code: "E464",
      title: "Proteção compressor",
      cause: "Sobrecorrente ou falha no compressor inverter.",
      test: "Medir bobinas, corrente e barramento DC.",
      solution: "Avaliar compressor, módulo inverter e alimentação.",
      sourceLevel: "BASE_APP_ORIGINAL_VALIDAR_MANUAL"
    },
    ...baseSamsungOficial,
    ...baseSamsungTecnica
  ],
  "Samsung|Digital Inverter": [...baseSamsungOficial, ...baseSamsungTecnica],
  "Samsung|Max Plus": [...baseSamsungOficial, ...baseSamsungTecnica],
  "Samsung|Cassete 4 Vias": [...baseSamsungOficial, ...baseSamsungTecnica],

  "LG|Dual Inverter": [
    {
      code: "CH05",
      title: "Comunicação",
      cause: "Falha de comunicação entre unidades.",
      test: "Verificar cabo de comunicação, tensão e aterramento.",
      solution: "Corrigir cabeamento ou substituir placa com defeito.",
      sourceLevel: "BASE_APP_ORIGINAL_VALIDAR_MANUAL"
    },
    ...baseLG
  ],
  "LG|ArtCool": baseLG,
  "LG|Voice": baseLG,
  "LG|UV Nano": baseLG,
  "LG|Cassete Inverter": baseLG,
  "LG|Piso Teto Inverter": baseLG,

  "Gree|Eco Garden": baseGree,
  "Gree|G-Top": baseGree,
  "Gree|G-Diamond": baseGree,
  "Gree|Cassete Gree": baseGree,

  "Elgin|Eco Inverter": baseElgin,
  "Elgin|Hi Wall Eco": baseElgin,
  "Elgin|Piso Teto Elgin": baseElgin,

  "Daikin|Advance": baseDaikin,
  "Daikin|EcoSwing": baseDaikin,
  "Daikin|Cassete SkyAir": baseDaikin,
  "Daikin|Piso Teto Daikin": baseDaikin,

  "Fujitsu|Hi Wall Inverter": baseFujitsu,
  "Fujitsu|Cassete Fujitsu": baseFujitsu,
  "Fujitsu|Piso Teto Fujitsu": baseFujitsu,

  "Panasonic|Econavi": basePanasonic,
  "Panasonic|Inverter Panasonic": basePanasonic
};

function juntarSemDuplicar(listaPrincipal, listaExtra) {
  const resultado = [];
  const vistos = new Set();

  [...listaPrincipal, ...listaExtra].forEach((item) => {
    const chave = String(item.code || "").toUpperCase() + "|" + String(item.title || "").toUpperCase();

    if (!vistos.has(chave)) {
      vistos.add(chave);
      resultado.push(item);
    }
  });

  return resultado;
}

function montarListaParaModelo(brand, model) {
  const chave = brand + "|" + model;
  const especificos = especificosPorModelo[chave] || [];
  const perfilMarca = perfisPorMarca[brand] || [];

  return juntarSemDuplicar(especificos, juntarSemDuplicar(perfilMarca, defeitosComuns));
}

window.errorCodesByModel = {};

Object.entries(window.modelsByBrand || {}).forEach(([brand, models]) => {
  models.forEach((model) => {
    window.errorCodesByModel[brand + "|" + model] = montarListaParaModelo(brand, model);
  });
});
