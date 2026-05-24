/* HVAC PRO - databases/mascaras_fabricantes.js
   MÁSCARAS DE FABRICANTES
   TESTE INICIAL: LG

   REGRA:
   - Este arquivo NÃO substitui dado oficial.
   - Ele interpreta o código do condensador por padrão de fabricante.
   - Dados críticos como carga de gás, corrente, tubulação, disjuntor e carga adicional
     só devem vir do acervo técnico oficial/confiável.
*/

window.mascarasFabricantes = [

  {
    fabricante: "LG",
    grupo: "LG Electronics",
    marcasRelacionadas: ["LG"],

    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",

    padroesInicio: [
      "S3",
      "S4",
      "U4"
    ],

    regexPrincipal: "^(S3|S4|U4)-?[QW][0-9]{2}[A-Z0-9]+$",

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

  const mascara = base.find((item) => {
    return String(item.fabricante || "").toUpperCase() === fabricante;
  });

  if (!mascara) {
    return {
      encontrado: false,
      motivo: "Fabricante sem máscara cadastrada."
    };
  }

  const codigoLimpo = codigoOriginal.replace(/[^A-Z0-9]/g, "");

  const inicioValido = mascara.padroesInicio.some((inicio) => {
    return codigoLimpo.startsWith(String(inicio).toUpperCase());
  });

  if (!inicioValido) {
    return {
      encontrado: false,
      fabricante: mascara.fabricante,
      codigo: codigoOriginal,
      motivo: "Código não bate com os padrões iniciais do fabricante selecionado."
    };
  }

  const regex = new RegExp(mascara.regexPrincipal);
  const bateRegex = regex.test(codigoOriginal) || regex.test(codigoLimpo);

  if (!bateRegex) {
    return {
      encontrado: false,
      fabricante: mascara.fabricante,
      codigo: codigoOriginal,
      motivo: "Código não bate com a estrutura principal da máscara LG."
    };
  }

  const capacidadeMatch = codigoLimpo.match(/(?:S3|S4|U4)[QW]?([0-9]{2})/);
  const capacidadeCodigo = capacidadeMatch ? capacidadeMatch[1] : "";
  const capacidadeProvavel = mascara.capacidades[capacidadeCodigo] || "";

  let cicloProvavel = "";

  if (codigoOriginal.includes("-Q") || codigoLimpo.includes("Q")) {
    cicloProvavel = "Frio provável / variação Q";
  }

  if (codigoOriginal.includes("-W") || codigoLimpo.includes("W")) {
    cicloProvavel = "Quente/Frio provável / variação W";
  }

  return {
    encontrado: true,
    tipoResultado: "mascara",
    fabricante: mascara.fabricante,
    grupo: mascara.grupo,
    codigo: codigoOriginal,
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
};
