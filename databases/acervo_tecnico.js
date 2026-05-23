/* HVAC PRO - databases/acervo_tecnico.js
   TESTE SIMPLES DE CORES DO ACERVO

   Objetivo:
   - Testar a lógica de cores sem depender de busca por códigoBusca.
   - Pesquisar direto pelo nome do modelo: AZUL, VERDE ou BRANCO.

   Depois do teste, este arquivo deve ser substituído pelo acervo real.
*/

window.acervoTecnico = [
  {
    marca: "HVAC PRO",
    modelo: "AZUL",
    codigoBusca: ["AZUL"],
    linha: "Teste de cor oficial",
    tipo: "Registro de teste",
    capacidade: "12.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R32",
    cargaGas: "500 g",
    correnteNominal: "6 A",
    disjuntor: "10 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    manualInstalacao: "https://example.com/azul",
    manualManutencao: "https://example.com/azul",
    fonte: "Site oficial / fabricante / manual oficial",
    fonteTipo: "FABRICANTE_OFICIAL",
    nivelConfianca: "OFICIAL",
    status: "OFICIAL"
  },

  {
    marca: "HVAC PRO",
    modelo: "VERDE",
    codigoBusca: ["VERDE"],
    linha: "Teste de cor confiável não oficial",
    tipo: "Registro de teste",
    capacidade: "18.000 BTU/h",
    tensao: "220V",
    fluidoRefrigerante: "R410A",
    cargaGas: "900 g",
    correnteNominal: "9 A",
    disjuntor: "16 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "1/2 pol.",
    manualInstalacao: "https://example.com/verde",
    manualManutencao: "https://example.com/verde",
    fonte: "Distribuidor autorizado / catálogo técnico confiável não oficial",
    fonteTipo: "CONFIAVEL_NAO_OFICIAL",
    nivelConfianca: "CONFIAVEL_NAO_OFICIAL",
    status: "CONFIAVEL_NAO_OFICIAL"
  },

  {
    marca: "HVAC PRO",
    modelo: "BRANCO",
    codigoBusca: ["BRANCO"],
    linha: "Teste de cor informação sugerida",
    tipo: "Registro de teste",
    capacidade: "9.000 BTU/h",
    tensao: "127V",
    fluidoRefrigerante: "R22",
    cargaGas: "450 g",
    correnteNominal: "5 A",
    disjuntor: "10 A",
    tubulacaoAlta: "1/4 pol.",
    tubulacaoBaixa: "3/8 pol.",
    manualInstalacao: "https://example.com/branco",
    manualManutencao: "https://example.com/branco",
    fonte: "Informação sugerida por usuário / internet / campo",
    fonteTipo: "INFORMACAO_SUGERIDA",
    nivelConfianca: "INFORMACAO_SUGERIDA",
    status: "INFORMACAO_SUGERIDA"
  }
];
