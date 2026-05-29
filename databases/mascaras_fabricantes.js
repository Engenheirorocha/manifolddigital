/* =========================================================
   HVAC PRO - MÁSCARAS DE FABRICANTES
   Versão sem fallback genérico
   Regra:
   - Cada fabricante só usa sua própria máscara.
   - Não mistura LG com Samsung, Midea, Gree etc.
   - Se não reconhecer, retorna null.
========================================================= */

window.MASCARAS_FABRICANTES = {
  LG: {
    nome: "LG",
    interpretar: function(codigoOriginal) {
      const codigo = normalizarCodigo(codigoOriginal);

      /*
        Exemplos reais/padrões LG:
        S4UQ09WA5WB
        S4-Q09WA5WB
        S3Q12JA31B
        S4W18KL3WA
        S4-W18KL3WA
      */

      const limpo = codigo.replace(/-/g, "");

      const regexLG = /^(S[34])([A-Z]{0,3})Q?(\d{2})([A-Z0-9]*)$/;
      const match = limpo.match(regexLG);

      if (!match) return null;

      const serie = match[1];
      const bloco = match[2] || "";
      const capacidade = match[3];
      const sufixo = match[4] || "";

      const btus = capacidadeParaBTU(capacidade);

      if (!btus) return null;

      return {
        fabricante: "LG",
        codigoDigitado: codigoOriginal,
        codigoNormalizado: limpo,
        linhaProvavel: serie === "S4" ? "Dual Inverter / Inverter LG - leitura provável" : "Inverter LG - leitura provável",
        tipoProvavel: "Split Hi Wall / Condensadora",
        capacidadeProvavel: btus,
        tensaoProvavel: interpretarTensaoLG(sufixo),
        observacao: "Código interpretado por máscara LG. Validar dados finais na etiqueta da unidade externa ou manual oficial.",
        confianca: "PROVAVEL_MASCARA"
      };
    }
  },

  MIDEA: {
    nome: "Midea / Springer / Carrier",
    interpretar: function(codigoOriginal) {
      const codigo = normalizarCodigo(codigoOriginal);

      /*
        Por enquanto sem chute agressivo.
        Só retorna algo se encontrar padrão forte.
      */

      const match = codigo.match(/(\d{2})([A-Z]{2,})/);

      if (!match) return null;

      const capacidade = match[1];
      const btus = capacidadeParaBTU(capacidade);

      if (!btus) return null;

      return {
        fabricante: "Midea / Springer / Carrier",
        codigoDigitado: codigoOriginal,
        codigoNormalizado: codigo,
        linhaProvavel: "Linha Midea/Springer/Carrier - leitura provável",
        tipoProvavel: "Condensadora / Split",
        capacidadeProvavel: btus,
        observacao: "Código interpretado por máscara Midea/Springer/Carrier. Validar com etiqueta ou manual.",
        confianca: "PROVAVEL_MASCARA"
      };
    }
  },

  SAMSUNG: {
    nome: "Samsung",
    interpretar: function(codigoOriginal) {
      const codigo = normalizarCodigo(codigoOriginal);

      /*
        Samsung costuma usar padrões com AR, AQ, AJ etc.
        Exemplo genérico: AR09, AR12, AR18, AR24
      */

      const match = codigo.match(/^(AR|AQ|AJ)(\d{2})/);

      if (!match) return null;

      const capacidade = match[2];
      const btus = capacidadeParaBTU(capacidade);

      if (!btus) return null;

      return {
        fabricante: "Samsung",
        codigoDigitado: codigoOriginal,
        codigoNormalizado: codigo,
        linhaProvavel: "Samsung Split/Inverter - leitura provável",
        tipoProvavel: "Split / Condensadora",
        capacidadeProvavel: btus,
        observacao: "Código interpretado por máscara Samsung. Validar com etiqueta ou manual.",
        confianca: "PROVAVEL_MASCARA"
      };
    }
  },

  GREE: {
    nome: "Gree",
    interpretar: function(codigoOriginal) {
      const codigo = normalizarCodigo(codigoOriginal);

      const match = codigo.match(/(\d{2})/);

      if (!match) return null;

      const btus = capacidadeParaBTU(match[1]);

      if (!btus) return null;

      return {
        fabricante: "Gree",
        codigoDigitado: codigoOriginal,
        codigoNormalizado: codigo,
        linhaProvavel: "Gree - leitura provável",
        tipoProvavel: "Split / Condensadora",
        capacidadeProvavel: btus,
        observacao: "Código interpretado por máscara Gree. Validar com etiqueta ou manual.",
        confianca: "PROVAVEL_MASCARA"
      };
    }
  }
};

/* ==========================
   Funções auxiliares
========================== */

function normalizarCodigo(valor) {
  return String(valor || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/[–—]/g, "-");
}

function capacidadeParaBTU(capacidade) {
  const mapa = {
    "07": "7.000 BTU/h",
    "08": "8.000 BTU/h",
    "09": "9.000 BTU/h",
    "10": "10.000 BTU/h",
    "12": "12.000 BTU/h",
    "15": "15.000 BTU/h",
    "18": "18.000 BTU/h",
    "21": "21.000 BTU/h",
    "22": "22.000 BTU/h",
    "24": "24.000 BTU/h",
    "30": "30.000 BTU/h",
    "36": "36.000 BTU/h",
    "48": "48.000 BTU/h",
    "60": "60.000 BTU/h"
  };

  return mapa[capacidade] || null;
}

function interpretarTensaoLG(sufixo) {
  const texto = String(sufixo || "").toUpperCase();

  if (texto.includes("WB") || texto.includes("WA")) {
    return "220V provável";
  }

  if (texto.includes("B")) {
    return "220V provável";
  }

  return null;
}
