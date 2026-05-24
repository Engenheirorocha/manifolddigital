/* HVAC PRO - databases/mascaras_fabricantes.js
   LG - MÁSCARAS OPERACIONAIS v6622
*/

window.mascarasFabricantes = [

  {
    id: "LG_SPLIT_INVERTER_ATUAL",
    fabricante: "LG",
    grupo: "LG Electronics",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "LG Split Inverter atual",
    padroesInicio: ["S3", "S4", "U4"],
    regexLimpo: "^(S3|S4|U4)[QW][0-9]{2}[A-Z0-9]+$",

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

    referenciasTecnicas: {
      "07": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "127V ou 220V conforme sufixo/modelo",
        correnteEstimada: "Faixa típica estimada: 3 A a 6 A",
        tubulacaoProvavel: "1/4\" x 3/8\" provável"
      },
      "09": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "127V ou 220V conforme sufixo/modelo",
        correnteEstimada: "Faixa típica estimada: 3,5 A a 7 A",
        tubulacaoProvavel: "1/4\" x 3/8\" provável"
      },
      "12": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "127V ou 220V conforme sufixo/modelo",
        correnteEstimada: "Faixa típica estimada: 5 A a 10 A",
        tubulacaoProvavel: "1/4\" x 3/8\" provável"
      },
      "15": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica estimada: 6 A a 11 A",
        tubulacaoProvavel: "1/4\" x 1/2\" provável"
      },
      "18": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica estimada: 7 A a 14 A",
        tubulacaoProvavel: "1/4\" x 1/2\" provável"
      },
      "24": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica estimada: 9 A a 18 A",
        tubulacaoProvavel: "1/4\" x 1/2\" ou 3/8\" x 5/8\" provável conforme linha"
      },
      "30": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica estimada: 11 A a 22 A",
        tubulacaoProvavel: "3/8\" x 5/8\" provável"
      },
      "36": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica estimada: 14 A a 28 A",
        tubulacaoProvavel: "3/8\" x 5/8\" provável"
      }
    },

    leitura: {
      tipoCodigo: "Condensadora provável",
      linhaProvavel: "LG Inverter / Dual Inverter provável",
      tecnologia: "Inverter / Dual Inverter provável",
      tipoEquipamento: "Split Hi Wall provável",
      origemLeitura: "Máscara LG baseada em padrões S3, S4 e U4 com número central de capacidade.",
      observacao: "Leitura automática por padrão de engenharia. Validar etiqueta/manual."
    }
  },

  {
    id: "LG_MULTI_SPLIT_EXTERNA",
    fabricante: "LG",
    grupo: "LG Electronics",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "LG Multi Split unidade externa",
    padroesInicio: ["A2UW", "A3UW", "A4UW", "A5UW"],
    regexLimpo: "^A[0-9]UW[0-9]{2}[A-Z0-9]+$",

    capacidades: {
      "18": "18.000 BTU/h provável",
      "21": "21.000 BTU/h provável",
      "24": "24.000 BTU/h provável",
      "30": "30.000 BTU/h provável",
      "36": "36.000 BTU/h provável",
      "42": "42.000 BTU/h provável",
      "48": "48.000 BTU/h provável",
      "54": "54.000 BTU/h provável"
    },

    referenciasTecnicas: {
      "18": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar pelo número de evaporadoras conectadas",
        tubulacaoProvavel: "Tubulação variável por combinação"
      },
      "21": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar pelo manual do conjunto",
        tubulacaoProvavel: "Tubulação variável por combinação"
      },
      "24": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar pelo manual do conjunto",
        tubulacaoProvavel: "Tubulação variável por combinação"
      },
      "30": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar pelo manual",
        tubulacaoProvavel: "Tubulação variável por combinação"
      },
      "36": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar pelo manual",
        tubulacaoProvavel: "Tubulação variável por combinação"
      },
      "42": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar pelo manual",
        tubulacaoProvavel: "Tubulação variável por combinação"
      },
      "48": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar pelo manual",
        tubulacaoProvavel: "Tubulação variável por combinação"
      },
      "54": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar pelo manual",
        tubulacaoProvavel: "Tubulação variável por combinação"
      }
    },

    leitura: {
      tipoCodigo: "Unidade externa Multi Split provável",
      linhaProvavel: "LG Multi Split Inverter provável",
      tecnologia: "Inverter provável",
      tipoEquipamento: "Unidade externa Multi Split provável",
      origemLeitura: "Máscara LG baseada em padrão A*UW usado em unidades externas Multi Split.",
      observacao: "Em Multi Split, dados técnicos dependem da combinação das unidades internas."
    }
  },

  {
    id: "LG_ANTIGO_AS",
    fabricante: "LG",
    grupo: "LG Electronics",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "LG linha antiga / on-off provável",
    padroesInicio: ["AS"],
    regexLimpo: "^AS[A-Z][0-9]{2,3}[A-Z0-9]+$",

    capacidades: {
      "07": "7.000 BTU/h provável",
      "09": "9.000 BTU/h provável",
      "12": "12.000 BTU/h provável",
      "18": "18.000 BTU/h provável",
      "24": "24.000 BTU/h provável",
      "30": "30.000 BTU/h provável"
    },

    referenciasTecnicas: {
      "07": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "127V ou 220V conforme etiqueta",
        correnteEstimada: "Validar na etiqueta",
        tubulacaoProvavel: "1/4\" x 3/8\" provável"
      },
      "09": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "127V ou 220V conforme etiqueta",
        correnteEstimada: "Faixa típica antiga: 4 A a 9 A estimada",
        tubulacaoProvavel: "1/4\" x 3/8\" provável"
      },
      "12": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "127V ou 220V conforme etiqueta",
        correnteEstimada: "Faixa típica antiga: 5 A a 12 A estimada",
        tubulacaoProvavel: "1/4\" x 3/8\" provável"
      },
      "18": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica antiga: 7 A a 16 A estimada",
        tubulacaoProvavel: "1/4\" x 1/2\" provável"
      },
      "24": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica antiga: 10 A a 22 A estimada",
        tubulacaoProvavel: "3/8\" x 5/8\" ou 1/4\" x 1/2\" provável"
      },
      "30": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar na etiqueta",
        tubulacaoProvavel: "Validar no manual/etiqueta"
      }
    },

    leitura: {
      tipoCodigo: "Código LG antigo provável",
      linhaProvavel: "LG Split antigo / on-off provável",
      tecnologia: "Convencional / on-off provável",
      tipoEquipamento: "Split Hi Wall antigo provável",
      origemLeitura: "Máscara LG baseada em códigos antigos iniciados por AS.",
      observacao: "Confiabilidade média. Validar sempre com etiqueta ou manual."
    }
  },

  {
    id: "LG_COMERCIAL_LEVE",
    fabricante: "LG",
    grupo: "LG Electronics",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "LG Comercial leve / piso-teto / cassete provável",
    padroesInicio: ["UV", "UT", "LT", "LV", "AT", "AU"],
    regexLimpo: "^(UV|UT|LT|LV|AT|AU)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",

    capacidades: {
      "18": "18.000 BTU/h provável",
      "24": "24.000 BTU/h provável",
      "30": "30.000 BTU/h provável",
      "36": "36.000 BTU/h provável",
      "42": "42.000 BTU/h provável",
      "48": "48.000 BTU/h provável",
      "54": "54.000 BTU/h provável",
      "60": "60.000 BTU/h provável"
    },

    referenciasTecnicas: {
      "18": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar na etiqueta",
        tubulacaoProvavel: "1/4\" x 1/2\" provável"
      },
      "24": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar na etiqueta",
        tubulacaoProvavel: "3/8\" x 5/8\" ou 1/4\" x 1/2\" provável"
      },
      "30": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Validar na etiqueta",
        tubulacaoProvavel: "3/8\" x 5/8\" provável"
      },
      "36": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V / 380V conforme modelo",
        correnteEstimada: "Validar na etiqueta",
        tubulacaoProvavel: "3/8\" x 5/8\" provável"
      },
      "42": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V / 380V conforme modelo",
        correnteEstimada: "Validar na etiqueta",
        tubulacaoProvavel: "3/8\" x 5/8\" provável"
      },
      "48": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V / 380V conforme modelo",
        correnteEstimada: "Validar na etiqueta",
        tubulacaoProvavel: "3/8\" x 5/8\" ou maior conforme linha"
      },
      "54": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V / 380V conforme modelo",
        correnteEstimada: "Validar na etiqueta",
        tubulacaoProvavel: "Validar manual"
      },
      "60": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V / 380V conforme modelo",
        correnteEstimada: "Validar na etiqueta",
        tubulacaoProvavel: "Validar manual"
      }
    },

    leitura: {
      tipoCodigo: "Código comercial LG provável",
      linhaProvavel: "LG comercial leve provável",
      tecnologia: "Inverter ou convencional conforme linha",
      tipoEquipamento: "Piso-teto / cassete / dutado / comercial leve provável",
      origemLeitura: "Máscara LG baseada em prefixos comerciais UV, UT, LT, LV, AT e AU.",
      observacao: "Confiabilidade média. Usar como leitura auxiliar até validar por manual/etiqueta."
    }
  },

  {
    id: "LG_VRF_MULTI_V",
    fabricante: "LG",
    grupo: "LG Electronics",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "LG VRF / Multi V provável",
    padroesInicio: ["ARU", "ARUN", "ARUV", "ARNU"],
    regexLimpo: "^(ARU|ARUN|ARUV|ARNU)[A-Z0-9]+$",
    capacidades: {},
    referenciasTecnicas: {},

    leitura: {
      tipoCodigo: "Código VRF / Multi V provável",
      linhaProvavel: "LG Multi V / VRF provável",
      tecnologia: "VRF / Inverter comercial provável",
      tipoEquipamento: "Sistema VRF / Multi V provável",
      origemLeitura: "Máscara LG baseada em prefixos ARU, ARUN, ARUV e ARNU.",
      observacao: "Em VRF/Multi V, validar capacidade, corrente, gás e tubulação no manual/projeto."
    }
  }

];

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

    if (!inicioValido) continue;

    const regex = new RegExp(mascara.regexLimpo);
    if (!regex.test(codigoLimpo)) continue;

    let capacidadeCodigo = "";
    let capacidadeProvavel = "";

    if (mascara.id === "LG_SPLIT_INVERTER_ATUAL") {
      const m = codigoLimpo.match(/^(S3|S4|U4)[QW]([0-9]{2})/);
      capacidadeCodigo = m ? m[2] : "";
    }

    if (mascara.id === "LG_MULTI_SPLIT_EXTERNA") {
      const m = codigoLimpo.match(/^A[0-9]UW([0-9]{2})/);
      capacidadeCodigo = m ? m[1] : "";
    }

    if (mascara.id === "LG_ANTIGO_AS") {
      const m = codigoLimpo.match(/^AS[A-Z]([0-9]{2})/);
      capacidadeCodigo = m ? m[1] : "";
    }

    if (mascara.id === "LG_COMERCIAL_LEVE") {
      const m = codigoLimpo.match(/(18|24|30|36|42|48|54|60)/);
      capacidadeCodigo = m ? m[1] : "";
    }

    capacidadeProvavel = mascara.capacidades[capacidadeCodigo] || "";

    const referencia = mascara.referenciasTecnicas && capacidadeCodigo
      ? mascara.referenciasTecnicas[capacidadeCodigo]
      : null;

    let cicloProvavel = "";

    if (mascara.id === "LG_SPLIT_INVERTER_ATUAL") {
      if (codigoLimpo.includes("Q")) cicloProvavel = "Frio provável / variação Q";
      if (codigoLimpo.includes("W")) cicloProvavel = "Quente/Frio provável / variação W";
    }

    if (mascara.id === "LG_MULTI_SPLIT_EXTERNA") {
      cicloProvavel = "Depende da combinação das unidades internas / validar no manual";
    }

    if (mascara.id === "LG_ANTIGO_AS") {
      cicloProvavel = "Ciclo não confirmado pela máscara / validar etiqueta";
    }

    if (mascara.id === "LG_COMERCIAL_LEVE") {
      cicloProvavel = "Ciclo não confirmado pela máscara / validar etiqueta";
    }

    if (mascara.id === "LG_VRF_MULTI_V") {
      cicloProvavel = "Depende da combinação do sistema VRF / validar projeto e manual";
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
      gasProvavel: referencia ? referencia.gasProvavel : "",
      tensaoProvavel: referencia ? referencia.tensaoProvavel : "",
      correnteEstimada: referencia ? referencia.correnteEstimada : "",
      tubulacaoProvavel: referencia ? referencia.tubulacaoProvavel : "",
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
