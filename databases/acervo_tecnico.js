/* HVAC PRO - databases/acervo_tecnico.js
   TESTE DE CORES POR CAMPO - ACERVO TÉCNICO

   Objetivo:
   Validar a lógica correta:
   - dentro da mesma ficha do equipamento, cada campo pode ter uma cor diferente.

   Cores esperadas:
   - OFICIAL = azul
   - CONFIAVEL_NAO_OFICIAL = verde
   - INFORMACAO_SUGERIDA = branco

   Depois do teste, este arquivo será substituído pelo acervo real enriquecido.
*/

window.acervoTecnico = [
  {
    marca: "LG",
    modelo: "LG S4-Q12JA315 Dual Inverter Voice 12000 BTU",
    codigoBusca: [
      "LG",
      "S4-Q12JA315",
      "S4Q12JA315",
      "DUAL INVERTER",
      "DUAL INVERTER VOICE",
      "TESTE-CAMPO",
      "TESTE CAMPO"
    ],

    linha: "Dual Inverter Voice",
    tipo: "Split Hi Wall Inverter",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R410A",
    cargaGas: "Informação sugerida: 720 g",
    correnteNominal: "6,2 A",
    disjuntor: "Informação sugerida: 10 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    comprimentoMaximo: "15 m",
    desnivelMaximo: "7 m",

    manualInstalacao: "https://www.lg.com/br/suporte/manuais-sistema/",
    manualManutencao: "https://www.lg.com/br/suporte/manuais-sistema/",
    fonte: "Ficha teste: mistura de fonte oficial, confiável não oficial e informação sugerida",

    /* Status geral fica OFICIAL só para compatibilidade.
       A cor correta deve ser definida pelo confiancaCampos de cada campo. */
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL",

    /* Fonte por campo */
    fontesCampos: {
      modelo: "FABRICANTE_OFICIAL",
      marca: "FABRICANTE_OFICIAL",
      linha: "FABRICANTE_OFICIAL",
      tipo: "FABRICANTE_OFICIAL",
      capacidade: "FABRICANTE_OFICIAL",
      tensao: "CONFIAVEL_NAO_OFICIAL",
      fluidoRefrigerante: "INFORMACAO_SUGERIDA",
      cargaGas: "INFORMACAO_SUGERIDA",
      correnteNominal: "CONFIAVEL_NAO_OFICIAL",
      disjuntor: "INFORMACAO_SUGERIDA",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    },

    /* Confiança por campo */
    confiancaCampos: {
      modelo: "OFICIAL",
      marca: "OFICIAL",
      linha: "OFICIAL",
      tipo: "OFICIAL",
      capacidade: "OFICIAL",
      tensao: "CONFIAVEL_NAO_OFICIAL",
      fluidoRefrigerante: "INFORMACAO_SUGERIDA",
      cargaGas: "INFORMACAO_SUGERIDA",
      correnteNominal: "CONFIAVEL_NAO_OFICIAL",
      disjuntor: "INFORMACAO_SUGERIDA",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL"
    }
  }
];
