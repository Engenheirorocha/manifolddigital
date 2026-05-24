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

   CAMPO DE BUSCA NO APP:
   "Digite o código do condensador"

   CORES POR CAMPO:
   oficial   = verde
   confiavel = azul
   sugerido  = amarelo

   REGRA DE EXIBIÇÃO:
   - Campo sem valor não aparece na ficha.
   - Campo sem fonte não deve ser cadastrado.
   - Campo sem confiança não deve ser cadastrado.
*/

window.acervoTecnico = [

  {
    modelo: "S4-Q12JA3WC",
    codigoBusca: [
      "S4-Q12JA3WC",
      "S4Q12JA3WC"
    ],

    tipoCodigo: "condensadora",

    marca: "LG",
    linha: "Dual Inverter",
    tipo: "Split Hi Wall Frio",
    capacidade: "12.000 BTU/h",
    tensao: "220V / 60Hz / 1F",
    corrente: "6 A",
    gas: "R-410A",
    tubulacao: "1/4\" - 3/8\"",

    fontesCampos: {
      modelo: "Página oficial LG Brasil",
      marca: "Página oficial LG Brasil",
      linha: "Página oficial LG Brasil",
      tipo: "Página oficial LG Brasil",
      capacidade: "Página oficial LG Brasil - especificações do conjunto",
      tensao: "Página oficial LG Brasil - alimentação elétrica",
      corrente: "Página oficial LG Brasil - corrente de refrigeração",
      gas: "Página oficial LG Brasil - gás refrigerante",
      tubulacao: "Página oficial LG Brasil - conexões Ø"
    },

    confiancaCampos: {
      modelo: "oficial",
      marca: "oficial",
      linha: "oficial",
      tipo: "oficial",
      capacidade: "oficial",
      tensao: "oficial",
      corrente: "oficial",
      gas: "oficial",
      tubulacao: "oficial"
    },

    paginaOficial: "https://www.lg.com/br/ar-condicionado-residencial/dual-inverter-split/s4-q12ja3wc/",
    fonte: "LG Brasil - página oficial do produto"
  }

];
