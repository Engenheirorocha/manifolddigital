/* HVAC PRO - databases/erros.js
   LOTE 4: mantém Lotes 1, 2 e 3 e adiciona Komeco, Hisense, Hitachi, Trane e York.
   Base para consulta técnica em campo.
   Quando não confirmado por manual específico do modelo, usar VALIDAR_MANUAL_MODELO.
*/

function erro(code, title, cause, test, solution, sourceLevel) {
  return { code, title, cause, test, solution, sourceLevel };
}

const defeitosComuns = [
  erro("NAO_GELA", "Não gela / baixo rendimento", "Filtro sujo, evaporadora suja, condensadora obstruída, baixa carga de fluido, restrição, ventilador fraco ou compressor com baixo rendimento.", "Verificar filtros, evaporadora, condensadora, vazão de ar, pressão de trabalho, superaquecimento, subresfriamento e corrente do compressor.", "Limpar filtros e serpentinas, corrigir ventilação, verificar vazamento, fazer vácuo e carga correta quando necessário.", "DIAGNOSTICO_CAMPO"),
  erro("NAO_LIGA", "Equipamento não liga", "Falta de alimentação, disjuntor desligado, fusível aberto, controle sem bateria, placa sem alimentação ou borne solto.", "Conferir tensão de entrada, disjuntor, tomada/borneira, fusível da placa, controle remoto e conectores.", "Restabelecer alimentação, corrigir conexões, trocar fusível quando aplicável ou avaliar placa eletrônica.", "DIAGNOSTICO_CAMPO"),
  erro("CONGELA", "Evaporadora congelando", "Baixa vazão de ar, filtro sujo, turbina suja, serpentina obstruída, baixa carga de fluido ou sensor de serpentina com falha.", "Verificar filtros, turbina, evaporadora, velocidade do ventilador, pressão de sucção, superaquecimento e sensor de serpentina.", "Limpar sistema de ar, corrigir ventilação, verificar carga de fluido e substituir sensor defeituoso se necessário.", "DIAGNOSTICO_CAMPO"),
  erro("VENTILADOR", "Falha no ventilador", "Motor travado, capacitor fraco, turbina/hélice presa, sensor Hall com falha, chicote rompido, conector oxidado ou placa sem comando.", "Girar hélice/turbina manualmente, medir capacitor, verificar alimentação do motor, conector, chicote e retorno de rotação.", "Limpar e destravar conjunto, substituir capacitor, corrigir chicote/conector, trocar motor ou avaliar placa.", "DIAGNOSTICO_CAMPO"),
  erro("SENSOR", "Falha de sensor", "Sensor NTC aberto, em curto, fora da curva, mal encaixado, oxidado ou com cabo rompido.", "Desligar o equipamento, desconectar sensor da placa, medir resistência e comparar com tabela do fabricante.", "Reconectar, corrigir chicote/conector ou substituir sensor compatível.", "DIAGNOSTICO_CAMPO"),
  erro("COMUNICACAO", "Falha de comunicação", "Falha entre evaporadora e condensadora por cabo invertido, mau contato, borne frouxo, aterramento ruim, alimentação incorreta ou placa defeituosa.", "Conferir interligação, sequência dos bornes, cabo de comunicação, tensão, aterramento e conectores das placas.", "Corrigir ligação, refazer conexões, reapertar bornes, corrigir alimentação/aterramento ou avaliar placas.", "DIAGNOSTICO_CAMPO"),
  erro("COMPRESSOR", "Compressor não parte / proteção", "Capacitor defeituoso, compressor travado, bobina aberta, fuga para carcaça, módulo inverter com falha, pressão fora da faixa ou alimentação incorreta.", "Medir tensão, corrente, resistência das bobinas, fuga para carcaça, capacitor quando aplicável, pressão de trabalho e módulo inverter.", "Corrigir alimentação, trocar capacitor, corrigir carga/ventilação, avaliar módulo inverter ou substituir compressor se confirmado defeito.", "DIAGNOSTICO_CAMPO"),
  erro("ALTA_PRESSAO", "Alta pressão / condensação elevada", "Condensadora suja, ventilador externo fraco, recirculação de ar quente, excesso de fluido, obstrução ou temperatura externa muito alta.", "Verificar limpeza da condensadora, funcionamento do ventilador externo, pressão de alta, subresfriamento e ambiente de instalação.", "Limpar condensadora, corrigir ventilação, remover obstruções, ajustar carga de fluido e corrigir instalação.", "DIAGNOSTICO_CAMPO"),
  erro("BAIXA_PRESSAO", "Baixa pressão / baixa carga", "Vazamento, baixa carga de fluido, restrição, filtro/capilar obstruído, evaporadora suja ou baixa carga térmica.", "Verificar vazamentos, pressão de sucção, superaquecimento, temperatura de evaporação, filtros e serpentinas.", "Corrigir vazamento, fazer vácuo, carregar fluido na quantidade correta e corrigir restrições/obstruções.", "DIAGNOSTICO_CAMPO"),
  erro("DRENO", "Vazamento de água / dreno", "Dreno entupido, bandeja suja, mangueira mal posicionada, falta de queda, isolamento ruim ou evaporadora congelando.", "Verificar saída de água, bandeja, inclinação do dreno, mangueira, isolamento e presença de gelo.", "Limpar dreno e bandeja, corrigir queda, reposicionar mangueira, melhorar isolamento e resolver causa de congelamento.", "DIAGNOSTICO_CAMPO"),
  erro("RUIDO", "Ruído ou vibração", "Turbina suja/desbalanceada, hélice raspando, motor com rolamento ruim, carenagem solta, compressor vibrando ou tubulação encostando.", "Verificar fixação, hélice, turbina, rolamentos, coxins, carenagem, tubulação e vibração em funcionamento.", "Reapertar componentes, limpar turbina, alinhar hélice, corrigir tubulação, trocar motor ou coxins.", "DIAGNOSTICO_CAMPO"),
  erro("PLACA", "Suspeita de placa eletrônica", "Relé queimado, trilha danificada, varistor/fusível aberto, fonte sem saída, falha de comunicação ou comando ausente.", "Verificar alimentação de entrada, fusível, fonte da placa, conectores, sinais de queimado, relés e saída para motores.", "Corrigir alimentação e conexões. Se confirmado defeito interno, reparar ou substituir placa.", "DIAGNOSTICO_CAMPO")
];

/* LOTE 1 */

const baseMideaSplit = [
  erro("E1", "Comunicação / sensor conforme linha", "Falha de comunicação entre evaporadora e condensadora ou falha de sensor conforme modelo.", "Verificar cabo de interligação, borne S/comunicação, alimentação, aterramento, conectores e sensores NTC.", "Corrigir interligação, reapertar bornes, substituir sensor defeituoso ou avaliar placas.", "VALIDAR_MANUAL_MODELO"),
  erro("E2", "Sensor ambiente", "Sensor de temperatura ambiente aberto, em curto, desconectado ou fora da faixa.", "Desligar o equipamento, desconectar sensor da placa e medir resistência NTC.", "Reconectar chicote, limpar conector ou substituir sensor compatível.", "VALIDAR_MANUAL_MODELO"),
  erro("E3", "Sensor serpentina / ventilador interno", "Sensor da serpentina com falha ou falha no motor/rotação da evaporadora, conforme linha.", "Medir sensor NTC, verificar conector, motor ventilador, capacitor quando houver, chicote e placa.", "Substituir sensor, corrigir motor/capacitor/chicote ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E5", "Proteção / comunicação", "Proteção do sistema, alimentação incorreta, comunicação instável ou falha de placa.", "Verificar tensão de entrada, interligação, corrente de operação, bornes e placas.", "Corrigir alimentação, interligação ou avaliar placa eletrônica.", "VALIDAR_MANUAL_MODELO"),
  erro("P0", "Proteção módulo inverter", "Proteção do módulo IPM/inverter ou falha de acionamento do compressor.", "Medir compressor, barramento DC, alimentação da condensadora, corrente e módulo inverter.", "Corrigir alimentação, compressor, ventilação ou módulo/placa inverter.", "VALIDAR_MANUAL_MODELO"),
  erro("P1", "Proteção de tensão", "Tensão de alimentação fora da faixa ou proteção elétrica da placa.", "Medir tensão em repouso e em funcionamento, queda de tensão, disjuntor, cabos e bornes.", "Corrigir alimentação elétrica, bitola, conexões ou rede antes de religar.", "VALIDAR_MANUAL_MODELO"),
  erro("P4", "Proteção compressor / inverter", "Proteção do compressor, módulo IPM ou falha de acionamento inverter.", "Medir corrente, pressão de trabalho, tensão DC no barramento e resistência das bobinas do compressor.", "Corrigir ventilação, alimentação, carga de fluido ou avaliar módulo inverter/compressor.", "BASE_APP_ORIGINAL")
];

const baseMideaMulti = [
  erro("EE", "Nível de água / drenagem", "Fluxo excessivo de água, bomba/dreno com falha, tubulação de dreno incorreta, obstruída ou sem queda adequada.", "Verificar bandeja, bomba de dreno, boia, inclinação, comprimento, obstruções e descarga da tubulação.", "Corrigir instalação do dreno, limpar obstruções, testar bomba e drenar a água acumulada antes de religar.", "OFICIAL_MIDEA_FREEMATCH"),
  erro("E0", "Proteção / falha geral da unidade", "Falha geral de controle, alimentação, comunicação ou proteção da unidade.", "Verificar alimentação, placas, comunicação, sensores e histórico do erro.", "Corrigir alimentação, comunicação ou componente indicado pelo diagnóstico.", "VALIDAR_MANUAL_MODELO"),
  erro("E1", "Falha de comunicação", "Falha de comunicação entre unidade interna, externa ou controle.", "Conferir cabo, bornes, polaridade, alimentação e aterramento.", "Corrigir interligação, bornes, chicote ou placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E2", "Sensor ambiente", "Sensor ambiente aberto, em curto ou fora da faixa.", "Medir NTC e verificar conector.", "Substituir sensor ou corrigir conector.", "VALIDAR_MANUAL_MODELO"),
  erro("E3", "Sensor serpentina", "Sensor da serpentina da evaporadora ou condensadora com falha.", "Medir resistência NTC e comparar com tabela técnica.", "Substituir sensor ou corrigir chicote.", "VALIDAR_MANUAL_MODELO"),
  erro("E4", "Proteção anticongelamento / temperatura", "Temperatura de serpentina fora da faixa, congelamento ou fluxo de ar insuficiente.", "Verificar filtros, evaporadora, ventilador, sensor e carga de fluido.", "Limpar sistema, corrigir ventilação, carga de fluido ou sensor.", "VALIDAR_MANUAL_MODELO")
];

const baseSpringer = [
  erro("E1", "Sensor ambiente / comunicação", "Sensor ambiente com falha ou comunicação instável conforme linha.", "Medir sensor NTC, verificar conectores, interligação e alimentação.", "Reconectar, substituir sensor ou corrigir comunicação.", "VALIDAR_MANUAL_MODELO"),
  erro("E2", "Sensor evaporadora", "Sensor de serpentina aberto, em curto, desconectado ou fora da faixa.", "Medir resistência do sensor e verificar chicote.", "Substituir sensor se estiver fora da especificação.", "VALIDAR_MANUAL_MODELO"),
  erro("E3", "Ventilador interno", "Falha no motor da evaporadora, capacitor, chicote, retorno de rotação ou placa.", "Verificar motor, capacitor quando houver, alimentação, chicote e placa.", "Corrigir motor/capacitor/chicote ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("P4", "Proteção compressor / inverter", "Proteção do compressor, módulo inverter ou pressão fora da faixa.", "Medir corrente, pressões, bobinas do compressor, barramento DC e ventilação.", "Corrigir alimentação, carga de fluido, ventilação ou avaliar módulo/compressor.", "VALIDAR_MANUAL_MODELO")
];

const baseCarrier = [
  erro("E1", "Comunicação", "Falha de comunicação entre evaporadora e condensadora.", "Verificar cabo de comunicação, sequência de ligação, bornes, alimentação e aterramento.", "Corrigir interligação, reapertar bornes ou avaliar placas.", "VALIDAR_MANUAL_MODELO"),
  erro("E2", "Sensor ambiente", "Sensor de temperatura ambiente com falha, desconectado ou fora da faixa.", "Medir resistência NTC e verificar conector.", "Substituir sensor ou corrigir conexão.", "VALIDAR_MANUAL_MODELO"),
  erro("E3", "Ventilador evaporadora", "Falha de rotação do motor interno, capacitor, sensor Hall, chicote ou placa.", "Verificar motor, capacitor quando houver, sensor Hall, chicote, alimentação e placa.", "Corrigir motor, capacitor, chicote ou placa.", "BASE_APP_ORIGINAL"),
  erro("P4", "Proteção compressor", "Proteção do compressor, módulo inverter, corrente elevada ou pressão fora da faixa.", "Medir corrente, pressão, bobinas do compressor, barramento DC e ventilação.", "Corrigir causa da proteção antes de trocar componentes.", "VALIDAR_MANUAL_MODELO")
];

const baseSamsungOficial = [
  erro("CF", "Redefinição / limpeza do filtro", "Lembrete de limpeza do filtro interno.", "Verificar condição do filtro interno e confirmar se há sujeira acumulada.", "Limpar filtro e redefinir o aviso conforme o controle/manual do modelo.", "OFICIAL_SAMSUNG_SUPORTE"),
  erro("dF", "Degelo / Defrost", "Unidade em modo de descongelamento durante aquecimento.", "Verificar se está operando em aquecimento e se a unidade externa está em ciclo de degelo.", "Aguardar o ciclo de degelo. Se persistir anormalmente, verificar sensores e unidade externa.", "OFICIAL_SAMSUNG_SUPORTE"),
  erro("dL", "Degelo / Defrost", "Função de descongelamento ativa em alguns modelos.", "Verificar condição de operação em aquecimento e formação de gelo na unidade externa.", "Aguardar ciclo normal. Se não normalizar, avaliar sensores e troca térmica.", "OFICIAL_SAMSUNG_SUPORTE"),
  erro("AP", "SmartThings / pareamento", "Modo de pareamento ou função SmartThings habilitada.", "Verificar se o equipamento está em processo de conexão com aplicativo.", "Finalizar configuração no aplicativo ou sair do modo de pareamento.", "OFICIAL_SAMSUNG_SUPORTE"),
  erro("C1", "Limpeza automática", "Indicação relacionada ao modo de limpeza automática.", "Confirmar operação de limpeza automática no controle/display.", "Aguardar finalização do ciclo ou consultar manual do modelo.", "OFICIAL_SAMSUNG_SUPORTE"),
  erro("C121", "Alarme que exige assistência", "Alarme de duas etapas exibido como C1 21 / C121, exigindo assistência técnica.", "Anotar o código exibido e confirmar padrão de piscadas/display.", "Encaminhar para suporte/assistência Samsung ou técnico qualificado.", "OFICIAL_SAMSUNG_SUPORTE"),
  erro("C422", "EEV / refrigeração insuficiente", "Funcionamento anormal durante autoteste, controle de bloqueio de EEV ou refrigeração insuficiente.", "Verificar válvula de expansão eletrônica, sensores, carga de fluido, comunicação e unidade externa.", "Corrigir falha indicada por diagnóstico técnico; pode exigir assistência especializada.", "OFICIAL_SAMSUNG_SUPORTE")
];

const baseSamsungTecnica = [
  erro("E101", "Comunicação", "Falha de comunicação entre unidade interna e externa.", "Conferir interligação, bornes, alimentação, aterramento e comunicação.", "Corrigir cabo, conexão, aterramento ou placa.", "BASE_APP_ORIGINAL_VALIDAR_MANUAL"),
  erro("E121", "Sensor ambiente", "Sensor de temperatura ambiente com falha.", "Medir resistência NTC e verificar conector.", "Substituir sensor ou corrigir conexão.", "VALIDAR_MANUAL_MODELO"),
  erro("E122", "Sensor evaporadora", "Sensor de serpentina com falha.", "Medir resistência e comparar com tabela do fabricante.", "Substituir sensor se fora da faixa.", "VALIDAR_MANUAL_MODELO"),
  erro("E202", "Comunicação externa", "Falha de comunicação com a unidade externa.", "Conferir alimentação da condensadora, cabo, bornes e placa externa.", "Corrigir alimentação/interligação ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E464", "Proteção compressor inverter", "Sobrecorrente ou falha no compressor inverter.", "Medir bobinas do compressor, corrente, barramento DC e módulo inverter.", "Avaliar compressor, módulo inverter, ventilação e alimentação.", "BASE_APP_ORIGINAL_VALIDAR_MANUAL")
];

const baseLG = [
  erro("CH05", "Comunicação", "Falha de comunicação entre unidade interna e externa.", "Verificar cabo de comunicação, tensão, sequência de ligação, conectores e aterramento.", "Corrigir cabeamento, borne solto, mau contato ou avaliar placa.", "BASE_APP_ORIGINAL_VALIDAR_MANUAL"),
  erro("CH10", "Motor evaporadora", "Falha no motor BLDC da evaporadora ou retorno de rotação.", "Verificar conector, alimentação do motor, travamento mecânico, sinal de retorno e placa.", "Corrigir motor, conector, chicote ou placa evaporadora.", "VALIDAR_MANUAL_MODELO"),
  erro("CH21", "Pico DC / IPM", "Sobrecorrente no módulo inverter, compressor ou placa externa.", "Medir bobinas do compressor, corrente, tensão DC, módulo inverter e alimentação.", "Avaliar compressor, placa inverter e alimentação elétrica.", "VALIDAR_MANUAL_MODELO"),
  erro("CH38", "Baixa carga / baixa pressão", "Possível falta de fluido refrigerante, vazamento ou baixa pressão.", "Verificar vazamento, pressão de trabalho, superaquecimento e subresfriamento.", "Corrigir vazamento, fazer vácuo e carga correta conforme etiqueta/manual.", "VALIDAR_MANUAL_MODELO"),
  erro("CH01", "Sensor ambiente interno", "Sensor de temperatura ambiente interno com falha.", "Medir resistência NTC e verificar conector na placa interna.", "Substituir sensor ou corrigir conexão.", "VALIDAR_MANUAL_MODELO"),
  erro("CH02", "Sensor serpentina interna", "Sensor de tubo/serpentina interna com falha.", "Medir resistência do sensor e verificar fixação na serpentina.", "Substituir sensor ou corrigir chicote/conector.", "VALIDAR_MANUAL_MODELO"),
  erro("CH67", "Ventilador externo", "Falha no motor ventilador da condensadora ou retorno de rotação.", "Verificar motor externo, conector, alimentação, hélice travada e placa.", "Corrigir motor, chicote, hélice ou placa externa.", "VALIDAR_MANUAL_MODELO")
];

/* LOTE 2 */

const baseGree = [
  erro("E1", "Alta pressão / proteção do sistema", "Proteção por alta pressão, condensação elevada, condensadora suja, ventilador externo fraco ou excesso de fluido.", "Verificar pressão de alta, limpeza da condensadora, ventilador externo, recirculação de ar quente e carga de fluido.", "Limpar condensadora, corrigir ventilação, remover obstruções e ajustar carga de fluido conforme etiqueta/manual.", "VALIDAR_MANUAL_MODELO"),
  erro("E2", "Proteção anticongelamento", "Evaporadora com temperatura muito baixa por filtro sujo, baixa vazão de ar, baixa carga ou sensor com falha.", "Verificar filtros, turbina, evaporadora, pressão de sucção, superaquecimento e sensor de serpentina.", "Limpar evaporadora/filtros, corrigir ventilação, verificar carga e substituir sensor se necessário.", "VALIDAR_MANUAL_MODELO"),
  erro("E5", "Proteção de sobrecorrente", "Corrente elevada por compressor pesado, alimentação instável, pressão alta ou módulo com falha.", "Medir corrente, tensão, pressão de trabalho, compressor, ventilação e placa/módulo.", "Corrigir alimentação, ventilação, carga de fluido ou avaliar compressor/placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E6", "Comunicação", "Falha de comunicação entre unidade interna e externa.", "Verificar cabo de comunicação, bornes, alimentação, aterramento, sequência de ligação e placas.", "Corrigir interligação, reapertar bornes, refazer conexão ou avaliar placas.", "VALIDAR_MANUAL_MODELO"),
  erro("F0", "Falta de refrigerante / baixa carga", "Possível vazamento, baixa carga de fluido ou proteção por baixa pressão.", "Verificar vazamentos, pressão de sucção, superaquecimento, subresfriamento e temperatura de descarga.", "Corrigir vazamento, fazer vácuo e carregar fluido conforme etiqueta/manual.", "VALIDAR_MANUAL_MODELO"),
  erro("H6", "Ventilador interno sem resposta", "Motor interno travado, chicote rompido, sensor Hall sem retorno ou placa com falha.", "Verificar turbina, motor, conector, tensão de alimentação, retorno Hall e placa.", "Corrigir turbina/motor/chicote ou substituir placa/motor conforme teste.", "VALIDAR_MANUAL_MODELO")
];

const baseElgin = [
  erro("E1", "Sensor ambiente", "Sensor de temperatura ambiente aberto, em curto, desconectado ou fora da faixa.", "Medir resistência NTC, verificar conector e chicote na placa.", "Reconectar, corrigir chicote ou substituir sensor.", "VALIDAR_MANUAL_MODELO"),
  erro("E2", "Sensor serpentina", "Sensor de serpentina da evaporadora com falha.", "Medir resistência do sensor e verificar fixação/conector.", "Substituir sensor se fora da curva ou corrigir conexão.", "VALIDAR_MANUAL_MODELO"),
  erro("E3", "Ventilador interno", "Motor ventilador interno, capacitor, chicote ou placa com falha.", "Verificar motor, capacitor quando houver, alimentação, chicote e placa.", "Corrigir motor/capacitor/chicote ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E5", "Comunicação / proteção", "Falha de comunicação entre unidades, alimentação incorreta ou proteção do sistema.", "Conferir cabo de comunicação, borneira, tensão, aterramento e placas.", "Corrigir interligação, alimentação ou avaliar placas.", "VALIDAR_MANUAL_MODELO"),
  erro("F0", "Proteção / baixa carga", "Possível baixa carga de fluido, proteção por pressão ou falha de sensor conforme linha.", "Verificar pressão, vazamento, sensores, superaquecimento e subresfriamento.", "Corrigir vazamento/carga ou sensor conforme diagnóstico.", "VALIDAR_MANUAL_MODELO")
];

const baseDaikin = [
  erro("U4", "Comunicação", "Falha de comunicação entre unidade interna e externa.", "Verificar interligação, alimentação, polaridade, bornes, aterramento e placas.", "Corrigir comunicação/interligação ou substituir placa confirmada defeituosa.", "VALIDAR_MANUAL_MODELO"),
  erro("A1", "Placa da unidade interna", "Anomalia na placa da unidade interna ou falha de controle.", "Verificar alimentação, fusível, conectores, sensores e sinais da placa interna.", "Corrigir alimentação/conexões ou avaliar substituição/reparo da placa.", "VALIDAR_MANUAL_MODELO"),
  erro("A3", "Dreno / nível de água", "Falha no sistema de drenagem, boia, bomba de dreno ou nível de água.", "Verificar bandeja, boia, bomba de dreno, tubulação, queda e obstruções.", "Limpar dreno, corrigir instalação, testar bomba e boia.", "VALIDAR_MANUAL_MODELO"),
  erro("A5", "Proteção da serpentina", "Proteção anticongelamento ou alta temperatura na serpentina.", "Verificar filtros, evaporadora, ventilador, carga de fluido, sensor e fluxo de ar.", "Corrigir fluxo de ar, limpeza, carga de fluido ou sensor.", "VALIDAR_MANUAL_MODELO"),
  erro("L5", "Sobrecorrente inverter", "Sobrecorrente no compressor, placa inverter ou alimentação.", "Medir compressor, corrente, tensão, barramento DC e placa inverter.", "Corrigir alimentação ou avaliar compressor/placa inverter.", "VALIDAR_MANUAL_MODELO"),
  erro("E7", "Ventilador externo", "Falha no motor ventilador externo, chicote, hélice ou placa externa.", "Verificar motor externo, conector, tensão, hélice travada e placa.", "Corrigir motor, chicote, hélice ou placa externa.", "VALIDAR_MANUAL_MODELO")
];

const baseFujitsu = [
  erro("COM", "Erro de comunicação", "Falha de comunicação entre placas interna e externa.", "Verificar cabo de interligação, bornes, tensão, aterramento e placa.", "Corrigir interligação, alimentação ou avaliar placas.", "VALIDAR_MANUAL_MODELO"),
  erro("SENSOR", "Erro de sensor", "Sensor ambiente, sensor de serpentina ou sensor externo fora da faixa.", "Medir sensores NTC, verificar conectores, chicote e fixação.", "Substituir sensor defeituoso ou corrigir conexão.", "VALIDAR_MANUAL_MODELO"),
  erro("FAN", "Erro ventilador", "Motor ventilador interno/externo com falha, retorno ausente ou placa sem comando.", "Verificar motor, chicote, alimentação, hélice/turbina e retorno de rotação.", "Corrigir motor/chicote ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("TIMER", "Erro indicado por LEDs", "Alguns modelos Fujitsu indicam erro por combinação de LEDs, não por código alfanumérico simples.", "Contar piscadas dos LEDs Operation/Timer/Economy e comparar com manual do modelo.", "Aplicar diagnóstico conforme tabela específica do manual do modelo.", "OFICIAL_FUJITSU_MANUAL_LED")
];

const basePanasonic = [
  erro("H11", "Comunicação", "Falha de comunicação entre unidade interna e externa.", "Verificar cabo de comunicação, bornes, alimentação, aterramento e placas.", "Corrigir interligação, alimentação ou avaliar placas.", "VALIDAR_MANUAL_MODELO"),
  erro("H14", "Sensor ambiente interno", "Sensor de temperatura ambiente interno com falha.", "Medir resistência NTC, verificar conector e chicote.", "Substituir sensor ou corrigir conexão.", "VALIDAR_MANUAL_MODELO"),
  erro("H15", "Sensor compressor / externo", "Sensor da unidade externa ou compressor com falha conforme linha.", "Verificar sensor externo, chicote, conexão e placa.", "Substituir sensor ou corrigir chicote/placa.", "VALIDAR_MANUAL_MODELO"),
  erro("H19", "Ventilador interno", "Falha no motor ventilador interno ou retorno de rotação.", "Verificar motor, conector, tensão, turbina travada e placa.", "Corrigir motor, chicote, turbina ou placa.", "VALIDAR_MANUAL_MODELO"),
  erro("H23", "Sensor serpentina interna", "Sensor de serpentina interna com falha.", "Medir sensor NTC, verificar fixação e conector.", "Substituir sensor ou corrigir chicote.", "VALIDAR_MANUAL_MODELO"),
  erro("F91", "Ciclo de refrigeração", "Falha no ciclo de refrigeração, baixa carga, compressor, válvula ou obstrução.", "Verificar pressões, superaquecimento, subresfriamento, vazamento, compressor e válvula.", "Corrigir vazamento/carga, restrição ou componente do ciclo conforme diagnóstico.", "VALIDAR_MANUAL_MODELO"),
  erro("F95", "Alta pressão / proteção externa", "Pressão elevada, condensadora suja, ventilador externo fraco ou sobrecarga térmica.", "Verificar pressão de alta, limpeza da condensadora, ventilador externo e carga.", "Limpar condensadora, corrigir ventilação e carga de fluido.", "VALIDAR_MANUAL_MODELO")
];

/* LOTE 3 */

const basePhilco = [
  erro("E1", "Comunicação / sensor conforme linha", "Falha de comunicação entre unidades ou sensor ambiente com falha, conforme modelo Philco.", "Verificar interligação, alimentação, conectores, sensor ambiente e placa.", "Corrigir cabeamento, sensor, conector ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E2", "Sensor de serpentina", "Sensor de serpentina aberto, em curto ou fora da faixa.", "Medir resistência do sensor, verificar fixação na serpentina e conector.", "Substituir sensor ou corrigir chicote/conector.", "VALIDAR_MANUAL_MODELO"),
  erro("E3", "Ventilador interno", "Falha no motor ventilador, capacitor, sensor Hall, chicote ou placa.", "Verificar motor, turbina, capacitor quando houver, chicote, alimentação e retorno.", "Corrigir motor/capacitor/chicote ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E5", "Proteção do sistema", "Proteção por corrente, temperatura, pressão ou alimentação fora da faixa.", "Medir tensão, corrente, pressões, ventilação da condensadora e sensores.", "Corrigir alimentação, ventilação, carga de fluido ou componente em falha.", "VALIDAR_MANUAL_MODELO"),
  erro("P4", "Proteção inverter / compressor", "Proteção do compressor ou módulo inverter em modelos compatíveis.", "Medir bobinas do compressor, corrente, barramento DC, pressões e módulo.", "Corrigir alimentação, carga/ventilação ou avaliar compressor/módulo.", "VALIDAR_MANUAL_MODELO")
];

const baseElectrolux = [
  erro("E1", "Sensor ambiente", "Sensor de temperatura ambiente com falha, desconectado ou fora da faixa.", "Medir sensor NTC, verificar conector e chicote.", "Reconectar ou substituir sensor compatível.", "VALIDAR_MANUAL_MODELO"),
  erro("E2", "Sensor serpentina", "Sensor da serpentina da evaporadora com falha.", "Medir resistência do sensor, verificar fixação e conector.", "Substituir sensor ou corrigir conexão.", "VALIDAR_MANUAL_MODELO"),
  erro("E3", "Ventilador / rotação", "Falha no ventilador interno ou retorno de rotação, conforme linha.", "Verificar motor, capacitor, chicote, sensor Hall e placa.", "Corrigir motor/chicote/capacitor ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E4", "Proteção evaporadora / anticongelamento", "Evaporadora muito fria, baixa vazão de ar, filtro sujo, baixa carga ou sensor com falha.", "Verificar filtros, turbina, evaporadora, sensor, pressão de sucção e superaquecimento.", "Limpar evaporadora, corrigir ventilação, carga ou sensor.", "VALIDAR_MANUAL_MODELO"),
  erro("E5", "Proteção / comunicação", "Proteção geral, alimentação incorreta ou comunicação instável conforme linha.", "Conferir tensão, corrente, interligação, placas e sensores.", "Corrigir alimentação/interligação ou avaliar componente indicado.", "VALIDAR_MANUAL_MODELO")
];

const baseConsul = [
  erro("E1", "Sensor ambiente", "Sensor NTC ambiente aberto, em curto ou desconectado.", "Medir resistência do sensor e verificar conector na placa.", "Reconectar ou substituir sensor.", "BASE_APP_ORIGINAL_VALIDAR_MANUAL"),
  erro("E2", "Sensor serpentina", "Sensor de serpentina da evaporadora com falha.", "Medir resistência e conferir chicote/conector.", "Substituir sensor se estiver fora da especificação.", "VALIDAR_MANUAL_MODELO"),
  erro("E4", "Proteção anticongelamento", "Evaporadora muito fria por sujeira, baixa ventilação, filtro obstruído, baixa carga ou sensor com falha.", "Verificar filtros, turbina, serpentina, gás e sensor.", "Limpar evaporadora, corrigir ventilação e verificar carga de fluido.", "VALIDAR_MANUAL_MODELO"),
  erro("SEM_DISPLAY", "Janela / mecânico sem código digital", "Alguns modelos de janela ou mecânicos podem não exibir código de erro.", "Diagnosticar por alimentação, termostato, compressor, capacitor, ventilador, serpentina e dreno.", "Executar diagnóstico por sintoma e componente.", "DIAGNOSTICO_CAMPO"),
  erro("NAO_LIGA_CONSUL", "Não liga", "Pode ocorrer por tomada, disjuntor, queda de energia, controle, fusível, termostato ou placa.", "Testar tomada, disjuntor, alimentação no borne, controle e placa.", "Corrigir alimentação, comando ou componente defeituoso.", "OFICIAL_CONSUL_SUPORTE_GERAL")
];

const baseTCL = [
  erro("E1", "Comunicação / sensor conforme linha", "Falha de comunicação entre unidades ou sensor conforme modelo.", "Verificar interligação, bornes, alimentação, aterramento, sensor e placa.", "Corrigir cabo/conector, sensor ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E2", "Sensor ambiente", "Sensor ambiente aberto, em curto ou desconectado.", "Medir NTC e verificar conector.", "Substituir sensor ou corrigir conector.", "VALIDAR_MANUAL_MODELO"),
  erro("E3", "Sensor serpentina / ventilador", "Falha no sensor de serpentina ou no ventilador interno, conforme linha.", "Verificar sensor, motor, chicote, capacitor e placa.", "Corrigir sensor, motor, capacitor, chicote ou placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E5", "Proteção de corrente / sistema", "Proteção por corrente, pressão, temperatura ou alimentação fora da faixa.", "Medir tensão, corrente, pressões, ventiladores e serpentinas.", "Corrigir alimentação, ventilação, carga ou componente em falha.", "VALIDAR_MANUAL_MODELO"),
  erro("P4", "Proteção inverter / compressor", "Proteção do compressor ou módulo inverter.", "Medir compressor, corrente, pressão e barramento DC.", "Corrigir falha de alimentação, compressor, carga/ventilação ou placa.", "VALIDAR_MANUAL_MODELO")
];

const baseAgratto = [
  erro("E1", "Sensor ambiente", "Sensor ambiente aberto, em curto, desconectado ou fora da faixa.", "Medir resistência NTC, verificar chicote e conector.", "Reconectar ou substituir sensor.", "VALIDAR_MANUAL_MODELO"),
  erro("E2", "Sensor serpentina", "Sensor de serpentina com falha.", "Medir sensor NTC, verificar fixação e conector.", "Substituir sensor ou corrigir chicote.", "VALIDAR_MANUAL_MODELO"),
  erro("E3", "Ventilador interno", "Motor interno, capacitor, chicote, retorno de rotação ou placa com falha.", "Verificar motor, capacitor quando houver, chicote, tensão e placa.", "Corrigir motor/capacitor/chicote ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E5", "Proteção do sistema", "Proteção por corrente, pressão, temperatura ou alimentação.", "Medir tensão, corrente, pressões, ventilação e sensores.", "Corrigir alimentação, ventilação, carga ou componente indicado.", "VALIDAR_MANUAL_MODELO"),
  erro("F0", "Baixa carga / proteção", "Possível baixa carga de fluido, vazamento ou proteção por pressão.", "Verificar vazamento, pressão, superaquecimento e subresfriamento.", "Corrigir vazamento, fazer vácuo e carregar fluido conforme etiqueta/manual.", "VALIDAR_MANUAL_MODELO")
];

/* LOTE 4 */

const baseKomeco = [
  erro("E1", "Sensor ambiente", "Sensor ambiente aberto, em curto, desconectado ou fora da faixa.", "Medir sensor NTC, verificar chicote e conector na placa.", "Reconectar, corrigir chicote ou substituir sensor compatível.", "VALIDAR_MANUAL_MODELO"),
  erro("E2", "Sensor serpentina", "Sensor de serpentina da evaporadora com falha.", "Medir resistência do sensor, verificar fixação e conector.", "Substituir sensor ou corrigir chicote/conector.", "VALIDAR_MANUAL_MODELO"),
  erro("E3", "Ventilador interno", "Falha no motor ventilador, capacitor, chicote, retorno de rotação ou placa.", "Verificar motor, turbina, capacitor quando houver, chicote, alimentação e retorno.", "Corrigir motor/capacitor/chicote ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E5", "Proteção do sistema", "Proteção por corrente, pressão, temperatura ou alimentação incorreta.", "Medir tensão, corrente, pressões, ventilação, serpentinas e sensores.", "Corrigir alimentação, ventilação, carga de fluido ou componente indicado.", "VALIDAR_MANUAL_MODELO"),
  erro("E6", "Comunicação", "Falha de comunicação entre unidade interna e externa.", "Verificar cabo de comunicação, bornes, aterramento, alimentação e placas.", "Corrigir interligação, bornes, aterramento ou avaliar placas.", "VALIDAR_MANUAL_MODELO"),
  erro("P4", "Proteção inverter / compressor", "Proteção do compressor ou módulo inverter.", "Medir compressor, corrente, tensão DC, barramento, pressões e ventilação.", "Corrigir alimentação, carga/ventilação ou avaliar compressor/módulo.", "VALIDAR_MANUAL_MODELO")
];

const baseHisense = [
  erro("FC", "Limpeza de filtro / aviso de manutenção", "Aviso relacionado a filtro sujo ou necessidade de limpeza/manutenção, conforme linha.", "Verificar filtro de ar, serpentina e fluxo de ar.", "Limpar filtro, conferir serpentina e redefinir aviso conforme manual do modelo.", "VALIDAR_MANUAL_MODELO"),
  erro("E1", "Sensor ambiente / comunicação conforme linha", "Falha de sensor ambiente ou comunicação, dependendo do modelo.", "Verificar sensor NTC, conector, comunicação entre unidades e alimentação.", "Corrigir sensor, conector, interligação ou placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E4", "Proteção de temperatura / sensor", "Temperatura fora da faixa, sensor com falha ou proteção do sistema.", "Verificar sensores, fluxo de ar, pressão, carga de fluido e serpentinas.", "Corrigir sensor, ventilação, carga ou causa da proteção.", "VALIDAR_MANUAL_MODELO"),
  erro("E5", "Proteção de sobrecorrente", "Corrente elevada por compressor pesado, pressão alta, alimentação ruim ou placa/módulo com falha.", "Medir corrente, tensão, pressões, ventiladores e compressor.", "Corrigir alimentação, ventilação, carga ou avaliar compressor/placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E7", "Comunicação", "Falha de comunicação entre unidade interna e externa.", "Verificar cabo de comunicação, bornes, alimentação, aterramento e placas.", "Corrigir interligação, conexões, aterramento ou avaliar placas.", "VALIDAR_MANUAL_MODELO"),
  erro("F0", "Baixa carga / proteção de refrigerante", "Possível vazamento, baixa carga ou proteção por pressão.", "Verificar vazamento, pressões, superaquecimento, subresfriamento e temperatura de descarga.", "Corrigir vazamento, fazer vácuo e carregar fluido conforme etiqueta/manual.", "VALIDAR_MANUAL_MODELO")
];

const baseHitachi = [
  erro("01", "Proteção / comunicação conforme linha", "Falha de controle, comunicação ou proteção indicada pela unidade.", "Verificar alimentação, comunicação, sensores, placas e histórico do erro.", "Corrigir alimentação, comunicação ou componente indicado pelo diagnóstico.", "VALIDAR_MANUAL_MODELO"),
  erro("03", "Comunicação", "Falha de comunicação entre unidades ou controle.", "Verificar interligação, bornes, alimentação, aterramento e placas.", "Corrigir cabo, conexão, aterramento ou avaliar placa.", "VALIDAR_MANUAL_MODELO"),
  erro("07", "Proteção compressor / ciclo", "Proteção por corrente, pressão, temperatura ou falha no ciclo de refrigeração.", "Medir corrente, pressões, sensores, compressor, ventiladores e carga de fluido.", "Corrigir carga, ventilação, alimentação ou avaliar compressor/placa.", "VALIDAR_MANUAL_MODELO"),
  erro("11", "Sensor ambiente", "Sensor de temperatura ambiente com falha.", "Medir sensor NTC, verificar chicote e conector.", "Substituir sensor ou corrigir conexão.", "VALIDAR_MANUAL_MODELO"),
  erro("12", "Sensor serpentina", "Sensor de serpentina interna ou externa com falha.", "Medir sensor, verificar fixação e chicote.", "Substituir sensor ou corrigir chicote.", "VALIDAR_MANUAL_MODELO"),
  erro("31", "Alta pressão / proteção externa", "Proteção por pressão elevada ou temperatura externa.", "Verificar condensadora, ventilador externo, pressão de alta e carga de fluido.", "Limpar condensadora, corrigir ventilação e carga.", "VALIDAR_MANUAL_MODELO")
];

const baseTrane = [
  erro("E1", "Sensor ambiente unidade interna", "Mau funcionamento do sensor de temperatura ambiente da unidade interna.", "Verificar sensor desconectado, quebrado, mal posicionado ou em curto-circuito.", "Corrigir posição/conector ou substituir sensor.", "OFICIAL_TRANE_U_MATCH"),
  erro("E2", "Sensor tubulação unidade interna", "Mau funcionamento do sensor de temperatura da tubulação da unidade interna.", "Verificar sensor de tubulação, chicote, conector e curto/circuito aberto.", "Corrigir conexão ou substituir sensor.", "OFICIAL_TRANE_U_MATCH"),
  erro("E3", "Sensor tubulação externa / proteção conforme linha", "Falha de sensor ou proteção relacionada à unidade externa, conforme modelo.", "Verificar sensores externos, chicotes, conectores, placa e pressões.", "Corrigir sensor/chicote ou componente indicado.", "VALIDAR_MANUAL_MODELO"),
  erro("E5", "Proteção de sobrecorrente", "Proteção por corrente elevada, alimentação instável, compressor ou placa.", "Medir tensão, corrente, compressor, pressões e ventilação.", "Corrigir alimentação, carga/ventilação ou avaliar compressor/placa.", "VALIDAR_MANUAL_MODELO"),
  erro("E6", "Comunicação", "Falha de comunicação entre evaporadora e condensadora.", "Verificar cabo de comunicação, bornes, alimentação, aterramento e placas.", "Corrigir interligação, bornes, aterramento ou avaliar placas.", "VALIDAR_MANUAL_MODELO"),
  erro("F0", "Proteção de refrigerante / baixa pressão", "Possível baixa carga, vazamento ou proteção por pressão.", "Verificar vazamento, pressões, superaquecimento, subresfriamento e sensores.", "Corrigir vazamento, fazer vácuo e carga correta.", "VALIDAR_MANUAL_MODELO")
];

const baseYork = [
  erro("E1", "Controle de velocidade do ventilador", "Falha no controle de velocidade do ventilador ou conexão entre motor e placa.", "Verificar motor ventilador, chicote, conector, alimentação e placa de controle.", "Corrigir conexões, motor ou placa conforme medição.", "LISTA_TECNICA_NAO_OFICIAL_VALIDAR"),
  erro("E2", "Sensor de retorno", "Falha no sensor de retorno, sensor desconectado, aberto ou em curto.", "Verificar sensor de retorno, resistência NTC, chicote e conector.", "Corrigir conexão ou substituir sensor.", "LISTA_TECNICA_NAO_OFICIAL_VALIDAR"),
  erro("E3", "Sensor serpentina interna", "Falha no sensor da serpentina interna.", "Medir sensor, verificar fixação na serpentina e conector.", "Substituir sensor ou corrigir chicote.", "LISTA_TECNICA_NAO_OFICIAL_VALIDAR"),
  erro("E5", "Sensor serpentina externa", "Falha no sensor da serpentina externa.", "Medir sensor externo, verificar chicote, conector e placa.", "Substituir sensor ou corrigir conexão.", "LISTA_TECNICA_NAO_OFICIAL_VALIDAR"),
  erro("E6", "Comunicação / proteção", "Falha de comunicação ou proteção do sistema conforme linha.", "Verificar interligação, alimentação, aterramento, placa interna e externa.", "Corrigir cabeamento, alimentação ou avaliar placas.", "VALIDAR_MANUAL_MODELO")
];

const baseMideaJanela = [
  erro("E1", "Sensor ambiente", "Sensor de temperatura do ambiente com defeito.", "Desligar e religar. Se persistir, medir sensor e verificar conector.", "Substituir sensor ou encaminhar para assistência/SAC.", "OFICIAL_MIDEA_PORTATIL_REFERENCIA"),
  erro("E2", "Sensor evaporador", "Sensor de temperatura do evaporador com defeito.", "Medir sensor do evaporador e verificar conector/chicote.", "Substituir sensor ou corrigir conexão.", "OFICIAL_MIDEA_PORTATIL_REFERENCIA"),
  erro("E4", "Mostrador / painel", "Mostrador do painel de operação com defeito.", "Verificar painel, cabo flat, alimentação e placa.", "Corrigir conexão ou substituir painel/placa.", "OFICIAL_MIDEA_PORTATIL_REFERENCIA"),
  erro("P1", "Bandeja inferior / dreno cheio", "Bandeja inferior do dreno cheia.", "Verificar acúmulo de água, dreno e mangueira.", "Drenar água da bandeja inferior e corrigir escoamento.", "OFICIAL_MIDEA_PORTATIL_REFERENCIA")
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
  "Philco": basePhilco,
  "Electrolux": baseElectrolux,
  "Consul": baseConsul,
  "TCL": baseTCL,
  "Agratto": baseAgratto,
  "Komeco": baseKomeco,
  "Hisense": baseHisense,
  "Hitachi": baseHitachi,
  "Trane": baseTrane,
  "York": baseYork
};

const especificosPorModelo = {
  "Midea|Xtreme Save": [
    erro("E1", "Comunicação", "Falha de comunicação entre evaporadora e condensadora.", "Verificar cabo S, bornes, alimentação e aterramento.", "Corrigir interligação, reapertar bornes e testar placas.", "BASE_APP_ORIGINAL"),
    erro("P4", "Proteção inverter", "Proteção do compressor ou módulo IPM.", "Medir corrente, pressão, tensão DC e bobinas do compressor.", "Corrigir ventilação, alimentação ou avaliar módulo/compressor.", "BASE_APP_ORIGINAL")
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
    erro("SEM_DISPLAY", "Modelo mecânico sem código digital", "Equipamentos mecânicos podem não exibir código de erro no painel.", "Diagnosticar por alimentação, termostato, compressor, capacitor, ventilador, serpentina e dreno.", "Executar diagnóstico elétrico e mecânico por componente.", "DIAGNOSTICO_CAMPO"),
    ...defeitosComuns
  ],

  "Carrier|XPower": [
    erro("E3", "Ventilador evaporadora", "Falha de rotação do motor interno.", "Verificar motor, capacitor, sensor Hall e placa.", "Corrigir motor, capacitor ou placa.", "BASE_APP_ORIGINAL"),
    ...baseCarrier
  ],
  "Carrier|Inverter Carrier": baseCarrier,
  "Carrier|Piso Teto Space": baseCarrier,
  "Carrier|Cassete Carrier": baseCarrier,

  "Samsung|WindFree": [
    erro("E101", "Comunicação", "Falha entre unidade interna e externa.", "Conferir interligação, bornes e sinal de comunicação.", "Corrigir cabo, conexão ou placa.", "BASE_APP_ORIGINAL_VALIDAR_MANUAL"),
    erro("E464", "Proteção compressor", "Sobrecorrente ou falha no compressor inverter.", "Medir bobinas, corrente e barramento DC.", "Avaliar compressor, módulo inverter e alimentação.", "BASE_APP_ORIGINAL_VALIDAR_MANUAL"),
    ...baseSamsungOficial,
    ...baseSamsungTecnica
  ],
  "Samsung|Digital Inverter": [...baseSamsungOficial, ...baseSamsungTecnica],
  "Samsung|Max Plus": [...baseSamsungOficial, ...baseSamsungTecnica],
  "Samsung|Cassete 4 Vias": [...baseSamsungOficial, ...baseSamsungTecnica],

  "LG|Dual Inverter": [
    erro("CH05", "Comunicação", "Falha de comunicação entre unidades.", "Verificar cabo de comunicação, tensão e aterramento.", "Corrigir cabeamento ou substituir placa com defeito.", "BASE_APP_ORIGINAL_VALIDAR_MANUAL"),
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
  "Panasonic|Inverter Panasonic": basePanasonic,

  "Philco|PAC Inverter": basePhilco,
  "Philco|Janela Philco": [
    erro("SEM_DISPLAY", "Janela / linha simples", "Alguns modelos de janela podem não exibir códigos digitais completos.", "Diagnosticar por alimentação, sensor, compressor, capacitor, ventilador, termostato e placa.", "Corrigir componente defeituoso conforme medição.", "DIAGNOSTICO_CAMPO"),
    ...basePhilco
  ],

  "Electrolux|Eco Turbo": baseElectrolux,
  "Electrolux|Janela Eletrônico": [
    erro("SEM_DISPLAY", "Janela eletrônico / códigos limitados", "Alguns modelos de janela exibem poucos códigos e exigem diagnóstico por sintoma.", "Verificar alimentação, sensor, termostato, compressor, capacitor, ventilador, dreno e placa.", "Corrigir componente conforme medição.", "DIAGNOSTICO_CAMPO"),
    ...baseElectrolux
  ],
  "Electrolux|Cassete Electrolux": baseElectrolux,

  "Consul|Facilite": [
    erro("E1", "Sensor ambiente", "Sensor NTC ambiente aberto, em curto ou desconectado.", "Medir resistência do sensor e verificar conector na placa.", "Reconectar ou substituir sensor.", "BASE_APP_ORIGINAL_VALIDAR_MANUAL"),
    ...baseConsul
  ],
  "Consul|Bem Estar": baseConsul,
  "Consul|Janela Consul": [
    erro("SEM_DISPLAY", "Janela Consul / diagnóstico por sintoma", "Alguns modelos janela podem não apresentar código digital completo.", "Verificar alimentação, termostato, compressor, capacitor, ventilador, seletor e dreno.", "Corrigir componente defeituoso conforme medição.", "DIAGNOSTICO_CAMPO"),
    ...baseConsul
  ],

  "TCL|Elite Series": baseTCL,
  "TCL|TAC Inverter": baseTCL,

  "Agratto|Neo Top": baseAgratto,
  "Agratto|One Top": baseAgratto,

  "Komeco|Komeco Inverter": baseKomeco,
  "Komeco|Piso Teto Komeco": baseKomeco,

  "Hisense|Energy Pro": baseHisense,
  "Hisense|Hi Wall Inverter": baseHisense,

  "Hitachi|Set Free": baseHitachi,
  "Hitachi|Cassete Hitachi": baseHitachi,
  "Hitachi|Piso Teto Hitachi": baseHitachi,

  "Trane|Cassete Trane": baseTrane,
  "Trane|Piso Teto Trane": baseTrane,

  "York|Cassete York": baseYork,
  "York|Piso Teto York": baseYork
};

function juntarSemDuplicar(listaPrincipal, listaExtra) {
  const resultado = [];
  const vistos = new Set();

  [...listaPrincipal, ...listaExtra].forEach((item) => {
    const chave = String(item.code || "").toUpperCase();

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
