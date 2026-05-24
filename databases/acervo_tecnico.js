/* HVAC PRO - databases/acervo_tecnico.js
   CONSULTAR EQUIPAMENTO / ACERVO TÉCNICO

   REGRA PRINCIPAL:
   - A busca é feita somente pelo CÓDIGO DO CONDENSADOR.
   - Não pesquisar por marca.
   - Não pesquisar por fabricante.
   - Não pesquisar por família.
   - Não pesquisar por evaporadora.
   - Não pesquisar por unidade interna.
   - Não misturar modelos parecidos.

   O técnico deve digitar o código exato da condensadora
   conforme etiqueta da unidade externa ou manual oficial.

   EXEMPLO DE USO NO APP:
   Campo de busca: "Digite o código do condensador"

   CONFIANÇA POR CAMPO:
   oficial    = dado de fabricante, manual oficial, etiqueta ou catálogo oficial
   confiavel  = dado de distribuidor, revenda técnica, catálogo técnico ou PDF técnico repostado
   sugerido   = dado de campo, fórum, vídeo técnico ou experiência prática

   REGRA DE EXIBIÇÃO:
   - Campo sem valor não aparece na ficha.
   - Campo sem fonte não deve ser cadastrado.
   - Campo sem confiança não deve ser cadastrado.
*/

window.acervoTecnico = [

  /*
  MODELO DE CADASTRO — NÃO USAR SEM FONTE REAL

  {
    modelo: "CODIGO-DO-CONDENSADOR",
    codigoBusca: [
      "CODIGO-DO-CONDENSADOR",
      "CODIGODOCONDENSADOR"
    ],

    tipoCodigo: "condensadora",

    marca: "",
    linha: "",
    tipo: "",
    capacidade: "",
    tensao: "",
    correnteNominal: "",
    fluidoRefrigerante: "",
    cargaGas: "",
    tubulacao: "",

    fontesCampos: {
      modelo: "",
      marca: "",
      linha: "",
      tipo: "",
      capacidade: "",
      tensao: "",
      correnteNominal: "",
      fluidoRefrigerante: "",
      cargaGas: "",
      tubulacao: ""
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial",
      correnteNominal: "oficial",
      fluidoRefrigerante: "oficial",
      cargaGas: "oficial",
      tubulacao: "oficial"
    },

    manualInstalacao: "",
    manualManutencao: "",
    paginaOficial: ""
  }
  */

];
