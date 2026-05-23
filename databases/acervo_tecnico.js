/* HVAC PRO - databases/acervo_tecnico.js
   Acervo Técnico Oficial
   Consulta por modelo/código da máquina.

   Regra:
   - Usar somente fonte oficial do fabricante.
   - Não inventar corrente, capacitor, tubulação ou placa.
   - Quando o manual oficial não informar, mostrar:
     "Não informado no manual oficial"
     ou
     "Validar etiqueta/manual".
*/

window.acervoTecnico = [
  {
    marca: "Midea",
    modelo: "Exemplo técnico",
    codigoBusca: ["EXEMPLO", "TESTE", "MIDEIA", "MIDEA"],
    linha: "Modelo de teste do Acervo Técnico",
    tipo: "Split / equipamento de referência",
    capacidade: "Não informado no manual oficial",
    anoFabricacao: "Validar etiqueta/manual",
    fluidoRefrigerante: "Validar etiqueta/manual",
    correnteNominal: "Não informado no manual oficial",
    superaquecimento: "Validar procedimento técnico do fabricante",
    subresfriamento: "Validar procedimento técnico do fabricante",
    capacitor: "Não informado no manual oficial",
    placaEletronica: "Não informado no manual oficial",
    tubulacaoAlta: "Não informado no manual oficial",
    tubulacaoBaixa: "Não informado no manual oficial",
    manualInstalacao: "Não cadastrado ainda",
    manualManutencao: "Não cadastrado ainda",
    fonte: "Base inicial do módulo Acervo Técnico",
    status: "Registro de teste para validar a busca antes de inserir manuais reais"
  }
];
