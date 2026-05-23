/* HVAC PRO - REFORCO DE DADOS TECNICOS - ETAPA 1/3

   COMO USAR COM SEGURANCA:
   1. Abra databases/acervo_tecnico.js
   2. NAO apague a base atual
   3. Va ate o final do arquivo
   4. Depois do fechamento do array window.acervoTecnico = [ ... ];
   5. Cole este bloco inteiro abaixo
   6. Commit changes

   OBJETIVO DA ETAPA 1/3:
   - Comecar a enriquecer dados tecnicos sem quebrar a base atual.
   - Atualizar os principais modelos ja cadastrados.
   - Adicionar carga de gas, corrente, disjuntor, tubulacao, comprimento e desnivel quando disponivel.

   CORES:
   - OFICIAL = azul
   - CONFIAVEL_NAO_OFICIAL = verde
   - INFORMACAO_SUGERIDA = branco

   IMPORTANTE:
   - Este bloco nao muda app.js.
   - Este bloco nao apaga registros.
   - Este bloco apenas complementa registros ja existentes.
*/

(function () {
  if (!window.acervoTecnico || !Array.isArray(window.acervoTecnico)) {
    window.acervoTecnico = [];
  }

  function textoSeguro(valor) {
    return String(valor || "").toUpperCase();
  }

  function encontrarRegistro(termos) {
    for (var i = 0; i < window.acervoTecnico.length; i++) {
      var item = window.acervoTecnico[i] || {};
      var base = [
        item.marca,
        item.modelo,
        item.linha,
        item.tipo,
        Array.isArray(item.codigoBusca) ? item.codigoBusca.join(" ") : ""
      ].join(" ").toUpperCase();

      var encontrou = true;
      for (var t = 0; t < termos.length; t++) {
        if (base.indexOf(textoSeguro(termos[t])) === -1) {
          encontrou = false;
          break;
        }
      }
      if (encontrou) return item;
    }
    return null;
  }

  function aplicarDados(termos, dados, confianca) {
    var item = encontrarRegistro(termos);
    if (!item) return;

    for (var chave in dados) {
      if (Object.prototype.hasOwnProperty.call(dados, chave)) {
        item[chave] = dados[chave];
      }
    }

    if (!item.confiancaCampos) item.confiancaCampos = {};
    for (var campo in confianca) {
      if (Object.prototype.hasOwnProperty.call(confianca, campo)) {
        item.confiancaCampos[campo] = confianca[campo];
      }
    }
  }

  /* =========================================================
     MIDEA - XTREME SAVE AI CONNECT AGVCJ R32
     ========================================================= */

  aplicarDados(
    ["MIDEA", "AGVCJ"],
    {
      cargaGas: "9.000: 320 g ate 5 m | 12.000: 440 g ate 5 m",
      tubulacaoAlta: "1/4 pol.",
      tubulacaoBaixa: "3/8 pol.",
      comprimentoMaximo: "25 m",
      desnivelMaximo: "10 m",
      capacitor: "Inverter: validar placa/diagrama do modelo exato antes de substituir componente",
      observacaoTecnica: "Usar vacuo, balanca e procedimento de carga conforme manual; validar etiqueta da unidade externa"
    },
    {
      cargaGas: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL",
      capacitor: "INFORMACAO_SUGERIDA",
      observacaoTecnica: "OFICIAL"
    }
  );

  /* =========================================================
     GREE - G-DIAMOND AUTO INVERTER R32
     ========================================================= */

  aplicarDados(
    ["GREE", "DIAMOND"],
    {
      cargaGas: "9.000: 550 g | 12.000: 630 g | 18.000: 940 g | 24.000: 1100 g",
      correnteNominal: "9.000: 6 A | 12.000: 10,6 A | 18.000: 13,5 A | 24.000: 13,5 A",
      correnteTrabalho: "Variavel por ser inverter; validar consumo/corrente em operacao conforme carga termica e etiqueta",
      disjuntor: "Validar conforme tabela do manual e instalacao eletrica local",
      tubulacaoAlta: "1/4 pol.",
      tubulacaoBaixa: "9.000: 3/8 pol. | 12.000/18.000/24.000: 1/2 pol.",
      comprimentoMaximo: "9.000: 15 m | 12.000: 20 m | 18.000/24.000: 25 m",
      desnivelMaximo: "10 m",
      capacitor: "Inverter: validar placa/diagrama do modelo exato antes de substituir componente"
    },
    {
      cargaGas: "CONFIAVEL_NAO_OFICIAL",
      correnteNominal: "CONFIAVEL_NAO_OFICIAL",
      correnteTrabalho: "INFORMACAO_SUGERIDA",
      disjuntor: "INFORMACAO_SUGERIDA",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL",
      capacitor: "INFORMACAO_SUGERIDA"
    }
  );

  /* =========================================================
     ELGIN - ECO INVERTER II WIFI 9K E 12K
     ========================================================= */

  aplicarDados(
    ["ELGIN", "HJFC12"],
    {
      cargaGas: "Validar etiqueta da condensadora HJFE12/HJFC12",
      correnteNominal: "6,7 A corrente maxima",
      correnteTrabalho: "Variavel por ser inverter; medir em operacao estabilizada",
      disjuntor: "10 A",
      tubulacaoAlta: "1/4 pol.",
      tubulacaoBaixa: "3/8 pol.",
      comprimentoMaximo: "15 m",
      desnivelMaximo: "7 m",
      capacitor: "Inverter: validar placa/diagrama do modelo exato antes de substituir componente"
    },
    {
      cargaGas: "INFORMACAO_SUGERIDA",
      correnteNominal: "CONFIAVEL_NAO_OFICIAL",
      correnteTrabalho: "INFORMACAO_SUGERIDA",
      disjuntor: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL",
      capacitor: "INFORMACAO_SUGERIDA"
    }
  );

  aplicarDados(
    ["ELGIN", "HJFC09"],
    {
      cargaGas: "Validar etiqueta da condensadora HJFE09/HJFC09",
      correnteNominal: "7,3 A corrente maxima",
      correnteTrabalho: "Variavel por ser inverter; medir em operacao estabilizada",
      disjuntor: "10 A",
      tubulacaoAlta: "1/4 pol.",
      tubulacaoBaixa: "3/8 pol.",
      comprimentoMaximo: "15 m",
      desnivelMaximo: "7 m",
      capacitor: "Inverter: validar placa/diagrama do modelo exato antes de substituir componente"
    },
    {
      cargaGas: "INFORMACAO_SUGERIDA",
      correnteNominal: "CONFIAVEL_NAO_OFICIAL",
      correnteTrabalho: "INFORMACAO_SUGERIDA",
      disjuntor: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoAlta: "CONFIAVEL_NAO_OFICIAL",
      tubulacaoBaixa: "CONFIAVEL_NAO_OFICIAL",
      comprimentoMaximo: "CONFIAVEL_NAO_OFICIAL",
      desnivelMaximo: "CONFIAVEL_NAO_OFICIAL",
      capacitor: "INFORMACAO_SUGERIDA"
    }
  );

  /* =========================================================
     KOMECO - KOHI 09 / 12 / 18 / 24
     ========================================================= */

  aplicarDados(
    ["KOMECO", "KOHI 09"],
    {
      fluidoRefrigerante: "A2L baixa inflamabilidade conforme manual da linha",
      tubulacaoAlta: "Descarga: 1/4 pol. (6,35 mm)",
      tubulacaoBaixa: "Succao: 1/2 pol. (12,7 mm)",
      capacitor: "Inverter: validar manual tecnico/diagrama antes de substituir componente",
      observacaoTecnica: "Manual tecnico Komeco possui tabelas e conectores de placa para diagnostico"
    },
    {
      fluidoRefrigerante: "OFICIAL",
      tubulacaoAlta: "OFICIAL",
      tubulacaoBaixa: "OFICIAL",
      capacitor: "INFORMACAO_SUGERIDA",
      observacaoTecnica: "OFICIAL"
    }
  );

  aplicarDados(
    ["KOMECO", "KOHI 12"],
    {
      fluidoRefrigerante: "A2L baixa inflamabilidade conforme manual da linha",
      tubulacaoAlta: "Descarga: 3/8 pol. (9,52 mm)",
      tubulacaoBaixa: "Succao: 1/4 pol. (6,35 mm)",
      capacitor: "Inverter: validar manual tecnico/diagrama antes de substituir componente",
      observacaoTecnica: "Manual tecnico Komeco possui tabelas e conectores de placa para diagnostico"
    },
    {
      fluidoRefrigerante: "OFICIAL",
      tubulacaoAlta: "OFICIAL",
      tubulacaoBaixa: "OFICIAL",
      capacitor: "INFORMACAO_SUGERIDA",
      observacaoTecnica: "OFICIAL"
    }
  );

  /* =========================================================
     LG - S4-Q12JA315
     ========================================================= */

  aplicarDados(
    ["LG", "S4-Q12JA315"],
    {
      correnteTrabalho: "Inverter: corrente varia conforme rotacao do compressor, temperatura e carga termica",
      capacitor: "Inverter: validar placa/diagrama do modelo exato antes de substituir componente",
      observacaoTecnica: "Para fluido, carga, bitola e disjuntor, priorizar etiqueta da unidade externa ou manual especifico do codigo"
    },
    {
      correnteTrabalho: "INFORMACAO_SUGERIDA",
      capacitor: "INFORMACAO_SUGERIDA",
      observacaoTecnica: "INFORMACAO_SUGERIDA"
    }
  );

  /* =========================================================
     SAMSUNG - WINDFREE 12K
     ========================================================= */

  aplicarDados(
    ["SAMSUNG", "AR12"],
    {
      correnteTrabalho: "Inverter: corrente varia conforme rotacao do compressor, temperatura e carga termica",
      capacitor: "Inverter: validar placa/diagrama do modelo exato antes de substituir componente",
      observacaoTecnica: "Para fluido, carga, bitola e disjuntor, priorizar etiqueta da unidade externa ou pagina de suporte do codigo exato"
    },
    {
      correnteTrabalho: "INFORMACAO_SUGERIDA",
      capacitor: "INFORMACAO_SUGERIDA",
      observacaoTecnica: "INFORMACAO_SUGERIDA"
    }
  );
})();
