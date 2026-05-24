/* HVAC PRO - databases/mascaras_fabricantes.js
   MÁSCARAS DE FABRICANTES
   LG - PADRÕES NOVOS, MULTI SPLIT E ANTIGOS

   REGRA:
   - Este arquivo NÃO substitui dado oficial.
   - Ele interpreta o código do condensador por padrão de fabricante.
   - Dados críticos como carga de gás, corrente, tubulação, disjuntor e carga adicional
     só devem vir do acervo técnico oficial/confiável.
*/

window.mascarasFabricantes = [

  {
    id: "LG_SPLIT_INVERTER_ATUAL",
    fabricante: "LG",
    grupo: "LG Electronics",
    marcasRelacionadas: ["LG"],

    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",

    nomeMascara: "LG Split Inverter atual",
    padroesInicio: ["S3", "S4", "U4"],

    regexLimpo: "^(S3|S4|U4)[QW][0-9]{2}[A-Z0-9]+$",

    exemplosValidos: [
      "S4-Q12JA3WC",
      "S3-Q12JA31B",
      "S4-W18KL3WA",
      "S4-W30L43FA",
      "S4-Q09WA51B",
      "S4-Q15JL31A"
    ],

    capacidades: {
      "07": "7.000 BTU/h",
      "09": "9.000 BTU/h",
      "12": "12.000 BTU/h",
      "15": "15.000 BTU/h",
      "18": "18.000 BTU/h",
      "24": "24.000 BTU/h",
      "30": "30.000 BTU/h",
      "36": "36.000 BTU/h"
    },

    leitura: {
      fabricante: "LG",
      tipoCodigo: "Condensadora provável",
      linhaProvavel: "LG Inverter / Dual Inverter provável",
      tecnologia: "Inverter / Dual Inverter provável",
      tipoEquipamento: "Split Hi Wall provável",
      origemLeitura: "Máscara LG baseada em padrões S3, S4 e U4 com número central de capacidade.",
      observacao: "Leitura automática por padrão de engenharia. Validar com etiqueta ou manual antes de aplicar dados críticos."
    }
  },

  {
    id: "LG_MULTI_SPLIT_EXTERNA",
    fabricante: "LG",
    grupo: "LG Electronics",
    marcasRelacionadas: ["LG"],

    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",

    nomeMascara: "LG Multi Split unidade externa",
    padroesInicio: ["A2UW", "A3UW", "A4UW", "A5UW"],

    regexLimpo: "^A[0-9]UW[0-9]{2}[A-Z0-9]+$",

    exemplosValidos: [
      "A2UW18GFA0",
      "A3UW21GFA0",
      "A3UW24GFA2",
      "A4UW30GFA2",
      "A5UW36GFA2",
      "A5UW42GFA2",
      "A5UW48GFA2"
    ],

    capacidades: {
      "18": "18.000 BTU/h provável",
      "21": "21.000 BTU/h provável",
      "24": "24.000 BTU/h provável",
      "30": "30.000 BTU/h provável",
      "36": "36.000 BTU/h provável",
      "42": "42.000 BTU/h provável",
      "48": "48.000 BTU/h provável"
    },

    leitura: {
      fabricante: "LG",
      tipoCodigo: "Unidade externa Multi Split provável",
      linhaProvavel: "LG Multi Split Inverter provável",
      tecnologia: "Inverter provável",
      tipoEquipamento: "Unidade externa Multi Split provável",
      origemLeitura: "Máscara LG baseada em padrão A*UW usado em unidades externas Multi Split.",
      observacao: "Leitura automática por padrão de engenharia. Validar combinações, capacidade total e limites no manual oficial."
    }
  },

  {
    id: "LG_ANTIGO_AS",
    fabricante: "LG",
    grupo: "LG Electronics",
    marcasRelacionadas: ["LG"],

    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",

    nomeMascara: "LG linha antiga / on-off provável",
    padroesInicio: ["AS"],

    regexLimpo: "^AS[A-Z][0-9]{2,3}[A-Z0-9]+$",

    exemplosValidos: [
      "AS-W122BRG2",
      "ASW122BRG2",
      "AS-Q092BRG2",
      "ASQ092BRG2"
    ],

    capacidades: {
      "07": "7.000 BTU/h provável",
      "09": "9.000 BTU/h provável",
      "12": "12.000 BTU/h provável",
      "18": "18.000 BTU/h provável",
      "24": "24.000 BTU/h provável",
      "30": "30.000 BTU/h provável"
    },

    leitura: {
      fabricante: "LG",
      tipoCodigo: "Código LG antigo provável",
      linhaProvavel: "LG Split antigo / on-off provável",
      tecnologia: "Convencional / on-off provável",
      tipoEquipamento: "Split Hi Wall antigo provável",
      origemLeitura: "Máscara LG baseada em códigos antigos iniciados por AS.",
      observacao: "Confiabilidade média. Validar sempre com etiqueta ou manual, pois linhas antigas possuem muitas variações."
    }
  }

];

/* =========================================================
   FUNÇÃO AUXILIAR GLOBAL
   Usada pelo app.js para interpretar códigos por máscara.
========================================================= */

window.interpretarMascaraFabricante = function (fabricanteInformado, codigoInformado) {
  const fabricante = String(fabricanteInformado || "").trim().toUpperCase();
  const codigoOriginal = String(codigoInformado || "").trim().toUpperCase();

  if (!fabricante || !codigoOriginal) {
    return {
      encontrado: false,
      motivo: "Fabricante ou código não informado."
    };
  }

  const base = Array.isArray(window.mascarasFabricantes) ? window.mascarasFabricantes : [];

  const mascarasDoFabricante = base.filter((item) => {
    return String(item.fabricante || "").toUpperCase() === fabricante &&
           String(item.status || "").toLowerCase() === "ativo";
  });

  if (!mascarasDoFabricante.length) {
    return {
      encontrado: false,
      motivo: "Fabricante sem máscara cadastrada."
    };
  }

  const codigoLimpo = codigoOriginal.replace(/[^A-Z0-9]/g, "");

  for (const mascara of mascarasDoFabricante) {
    const inicioValido = mascara.padroesInicio.some((inicio) => {
      return codigoLimpo.startsWith(String(inicio).toUpperCase());
    });

    if (!inicioValido) {
      continue;
    }

    const regex = new RegExp(mascara.regexLimpo);
    const bateRegex = regex.test(codigoLimpo);

    if (!bateRegex) {
      continue;
    }

    let capacidadeCodigo = "";
    let capacidadeProvavel = "";

    if (mascara.id === "LG_SPLIT_INVERTER_ATUAL") {
      const capacidadeMatch = codigoLimpo.match(/^(S3|S4|U4)[QW]([0-9]{2})/);
      capacidadeCodigo = capacidadeMatch ? capacidadeMatch[2] : "";
      capacidadeProvavel = mascara.capacidades[capacidadeCodigo] || "";
    }

    if (mascara.id === "LG_MULTI_SPLIT_EXTERNA") {
      const capacidadeMatch = codigoLimpo.match(/^A[0-9]UW([0-9]{2})/);
      capacidadeCodigo = capacidadeMatch ? capacidadeMatch[1] : "";
      capacidadeProvavel = mascara.capacidades[capacidadeCodigo] || "";
    }

    if (mascara.id === "LG_ANTIGO_AS") {
      const capacidadeMatch = codigoLimpo.match(/^AS[A-Z]([0-9]{2})/);
      capacidadeCodigo = capacidadeMatch ? capacidadeMatch[1] : "";
      capacidadeProvavel = mascara.capacidades[capacidadeCodigo] || "";
    }

    let cicloProvavel = "";

    if (mascara.id === "LG_SPLIT_INVERTER_ATUAL") {
      if (codigoLimpo.includes("Q")) {
        cicloProvavel = "Frio provável / variação Q";
      }

      if (codigoLimpo.includes("W")) {
        cicloProvavel = "Quente/Frio provável / variação W";
      }
    }

    if (mascara.id === "LG_MULTI_SPLIT_EXTERNA") {
      cicloProvavel = "Depende da combinação das unidades internas / validar no manual";
    }

    if (mascara.id === "LG_ANTIGO_AS") {
      cicloProvavel = "Ciclo não confirmado pela máscara / validar etiqueta";
    }

    return {
      encontrado: true,
      tipoResultado: "mascara",
      fabricante: mascara.fabricante,
      grupo: mascara.grupo,
      codigo: codigoOriginal,
      mascaraAplicada: mascara.nomeMascara,
      tipoCodigo: mascara.leitura.tipoCodigo,
      linhaProvavel: mascara.leitura.linhaProvavel,
      tipoProvavel: mascara.leitura.tipoEquipamento,
      tecnologiaProvavel: mascara.leitura.tecnologia,
      capacidadeProvavel: capacidadeProvavel,
      cicloProvavel: cicloProvavel,
      confiabilidadeMascara: mascara.confiabilidadeGeral,
      origemLeitura: mascara.leitura.origemLeitura,
      observacao: mascara.leitura.observacao
    };
  }

  return {
    encontrado: false,
    fabricante: fabricante,
    codigo: codigoOriginal,
    motivo: "Código não bate com nenhuma máscara ativa do fabricante selecionado."
  };
};
