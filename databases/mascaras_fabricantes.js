/* HVAC PRO - databases/mascaras_fabricantes.js
   MÁSCARAS DE FABRICANTES
   LG - VERSÃO AMPLIADA OPERACIONAL LIMPA

   REGRA:
   - Este arquivo NÃO substitui dado oficial.
   - Ele interpreta o código do condensador por padrão de fabricante.
   - Dados críticos como carga exata de gás, corrente nominal real, disjuntor e tubulação oficial
     só devem vir do acervo técnico oficial/confiável.
   - Quando a máscara gerar dados técnicos, eles são PROVÁVEIS / ESTIMADOS.
   - Máscaras comerciais/VRF são auxiliares e exigem validação em manual/etiqueta.
   - A observação técnica NÃO repete gás, tensão, corrente e tubulação.
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
      "S3-Q12JAQAL",
      "S3-Q18KLQAL",
      "S4-W18KL3WA",
      "S4-W30L43FA",
      "S4-W36R43FB",
      "S4-Q09WA51B",
      "S4-Q15JL31A",
      "S4-Q18KL3WB",
      "S4-Q24K23WD"
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

    referenciasTecnicas: {
      "07": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "127V ou 220V conforme sufixo/modelo",
        correnteEstimada: "Faixa típica estimada: 3 A a 6 A",
        tubulacaoProvavel: "1/4\" x 3/8\" provável",
        observacaoTecnica: "Capacidade baixa. Validar fluido e tensão na etiqueta."
      },
      "09": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "127V ou 220V conforme sufixo/modelo",
        correnteEstimada: "Faixa típica estimada: 3,5 A a 7 A",
        tubulacaoProvavel: "1/4\" x 3/8\" provável",
        observacaoTecnica: "Em LG inverter recente, 9.000 BTU costuma usar tubulação leve. Validar etiqueta."
      },
      "12": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "127V ou 220V conforme sufixo/modelo",
        correnteEstimada: "Faixa típica estimada: 5 A a 10 A",
        tubulacaoProvavel: "1/4\" x 3/8\" provável",
        observacaoTecnica: "Capacidade comum de campo. Validar fluido, corrente e tensão na etiqueta."
      },
      "15": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica estimada: 6 A a 11 A",
        tubulacaoProvavel: "1/4\" x 1/2\" provável",
        observacaoTecnica: "Capacidade intermediária. Validar tubulação no manual/etiqueta."
      },
      "18": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica estimada: 7 A a 14 A",
        tubulacaoProvavel: "1/4\" x 1/2\" provável",
        observacaoTecnica: "Em 18.000 BTU, validar bitola de sucção e corrente nominal na etiqueta."
      },
      "24": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica estimada: 9 A a 18 A",
        tubulacaoProvavel: "1/4\" x 1/2\" ou 3/8\" x 5/8\" provável conforme linha",
        observacaoTecnica: "A tubulação pode variar por família. Não usar sem validar."
      },
      "30": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica estimada: 11 A a 22 A",
        tubulacaoProvavel: "3/8\" x 5/8\" provável",
        observacaoTecnica: "Alta capacidade. Validar disjuntor, tubulação e corrente oficial."
      },
      "36": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica estimada: 14 A a 28 A",
        tubulacaoProvavel: "3/8\" x 5/8\" provável",
        observacaoTecnica: "Alta capacidade. Validar sempre no manual/etiqueta antes de dimensionar."
      }
    },

    leitura: {
      fabricante: "LG",
      tipoCodigo: "Condensadora provável",
      linhaProvavel: "LG Inverter / Dual Inverter provável",
      tecnologia: "Inverter / Dual Inverter provável",
      tipoEquipamento: "Split Hi Wall provável",
      origemLeitura: "Máscara LG baseada em padrões S3, S4 e U4 com número central de capacidade.",
      observacao: "Leitura automática por padrão de engenharia. Dados técnicos gerados são prováveis/estimados e devem ser validados na etiqueta ou manual."
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
      "48": "48.000 BTU/h provável",
      "54": "54.000 BTU/h provável"
    },

    referenciasTecnicas: {
      "18": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa estimada: validar pelo número de evaporadoras conectadas",
        tubulacaoProvavel: "Tubulação variável por combinação",
        observacaoTecnica: "Multi Split depende das evaporadoras conectadas. Não dimensionar só pela máscara."
      },
      "21": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa estimada: validar pelo manual do conjunto",
        tubulacaoProvavel: "Tubulação variável por combinação",
        observacaoTecnica: "Unidade externa Multi Split. Validar combinação permitida."
      },
      "24": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa estimada: validar pelo manual do conjunto",
        tubulacaoProvavel: "Tubulação variável por combinação",
        observacaoTecnica: "Unidade externa Multi Split. Validar distância, desnível e carga adicional."
      },
      "30": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa estimada: validar pelo manual",
        tubulacaoProvavel: "Tubulação variável por combinação",
        observacaoTecnica: "Unidade externa Multi Split maior. Validar limite de combinação."
      },
      "36": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa estimada: validar pelo manual",
        tubulacaoProvavel: "Tubulação variável por combinação",
        observacaoTecnica: "Unidade externa Multi Split de maior capacidade. Validar todas as evaporadoras."
      },
      "42": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa estimada: validar pelo manual",
        tubulacaoProvavel: "Tubulação variável por combinação",
        observacaoTecnica: "Capacidade elevada. Validar proteção elétrica e carga adicional."
      },
      "48": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa estimada: validar pelo manual",
        tubulacaoProvavel: "Tubulação variável por combinação",
        observacaoTecnica: "Capacidade elevada. Validar combinação máxima e manual."
      },
      "54": {
        gasProvavel: "R-410A / R-32 conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa estimada: validar pelo manual",
        tubulacaoProvavel: "Tubulação variável por combinação",
        observacaoTecnica: "Capacidade elevada. Validar documentação oficial."
      }
    },

    leitura: {
      fabricante: "LG",
      tipoCodigo: "Unidade externa Multi Split provável",
      linhaProvavel: "LG Multi Split Inverter provável",
      tecnologia: "Inverter provável",
      tipoEquipamento: "Unidade externa Multi Split provável",
      origemLeitura: "Máscara LG baseada em padrão A*UW usado em unidades externas Multi Split.",
      observacao: "Leitura automática por padrão de engenharia. Em Multi Split, dados técnicos dependem da combinação das unidades internas."
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

    referenciasTecnicas: {
      "07": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "127V ou 220V conforme etiqueta",
        correnteEstimada: "Faixa típica antiga: validar na etiqueta",
        tubulacaoProvavel: "1/4\" x 3/8\" provável",
        observacaoTecnica: "Linha antiga. Nunca assumir fluido sem etiqueta."
      },
      "09": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "127V ou 220V conforme etiqueta",
        correnteEstimada: "Faixa típica antiga: 4 A a 9 A estimada",
        tubulacaoProvavel: "1/4\" x 3/8\" provável",
        observacaoTecnica: "Linha antiga. Validar fluido antes de manutenção."
      },
      "12": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "127V ou 220V conforme etiqueta",
        correnteEstimada: "Faixa típica antiga: 5 A a 12 A estimada",
        tubulacaoProvavel: "1/4\" x 3/8\" provável",
        observacaoTecnica: "Linha antiga/on-off provável. Validar fluido e tensão na etiqueta."
      },
      "18": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica antiga: 7 A a 16 A estimada",
        tubulacaoProvavel: "1/4\" x 1/2\" provável",
        observacaoTecnica: "Linha antiga. Validar compressor, capacitor e fluido."
      },
      "24": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica antiga: 10 A a 22 A estimada",
        tubulacaoProvavel: "3/8\" x 5/8\" ou 1/4\" x 1/2\" provável",
        observacaoTecnica: "Linha antiga. Tubulação pode variar muito por modelo."
      },
      "30": {
        gasProvavel: "R-22 / R-410A conforme geração",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa típica antiga: validar na etiqueta",
        tubulacaoProvavel: "Validar no manual/etiqueta",
        observacaoTecnica: "Linha antiga de maior capacidade. Máscara apenas auxiliar."
      }
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
  },

  {
    id: "LG_COMERCIAL_LEVE",
    fabricante: "LG",
    grupo: "LG Electronics",
    marcasRelacionadas: ["LG"],

    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",

    nomeMascara: "LG Comercial leve / piso-teto / cassete provável",
    padroesInicio: ["UV", "UT", "LT", "LV", "AT", "AU"],

    regexLimpo: "^(UV|UT|LT|LV|AT|AU)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",

    exemplosValidos: [
      "UVNH36GM2A0",
      "UTNH36GM2A0",
      "LTNC482MLE0",
      "LVNC362MLE0",
      "ATNW48GMLT0",
      "AUNQ48GM3T0"
    ],

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
        correnteEstimada: "Faixa estimada: validar na etiqueta",
        tubulacaoProvavel: "1/4\" x 1/2\" provável",
        observacaoTecnica: "Comercial leve. Validar tipo exato: cassete, piso-teto ou dutado."
      },
      "24": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa estimada: validar na etiqueta",
        tubulacaoProvavel: "3/8\" x 5/8\" ou 1/4\" x 1/2\" provável",
        observacaoTecnica: "Comercial leve. Validar tipo exato e tubulação no manual."
      },
      "30": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V provável",
        correnteEstimada: "Faixa estimada: validar na etiqueta",
        tubulacaoProvavel: "3/8\" x 5/8\" provável",
        observacaoTecnica: "Comercial leve. Validar corrente e disjuntor no manual."
      },
      "36": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V / 380V conforme modelo",
        correnteEstimada: "Faixa estimada: validar na etiqueta",
        tubulacaoProvavel: "3/8\" x 5/8\" provável",
        observacaoTecnica: "Comercial leve. Pode haver variação monofásica/trifásica."
      },
      "42": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V / 380V conforme modelo",
        correnteEstimada: "Faixa estimada: validar na etiqueta",
        tubulacaoProvavel: "3/8\" x 5/8\" provável",
        observacaoTecnica: "Comercial leve alta capacidade. Validar manual."
      },
      "48": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V / 380V conforme modelo",
        correnteEstimada: "Faixa estimada: validar na etiqueta",
        tubulacaoProvavel: "3/8\" x 5/8\" ou maior conforme linha",
        observacaoTecnica: "Comercial leve alta capacidade. Validar proteção elétrica."
      },
      "54": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V / 380V conforme modelo",
        correnteEstimada: "Faixa estimada: validar na etiqueta",
        tubulacaoProvavel: "Validar manual",
        observacaoTecnica: "Comercial leve alta capacidade. Máscara apenas auxiliar."
      },
      "60": {
        gasProvavel: "R-410A / R-32 conforme linha",
        tensaoProvavel: "220V / 380V conforme modelo",
        correnteEstimada: "Faixa estimada: validar na etiqueta",
        tubulacaoProvavel: "Validar manual",
        observacaoTecnica: "Comercial leve 60.000 BTU. Validar todos os dados oficiais."
      }
    },

    leitura: {
      fabricante: "LG",
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
    marcasRelacionadas: ["LG"],

    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",

    nomeMascara: "LG VRF / Multi V provável",
    padroesInicio: ["ARU", "ARUN", "ARUV", "ARNU"],

    regexLimpo: "^(ARU|ARUN|ARUV|ARNU)[A-Z0-9]+$",

    exemplosValidos: [
      "ARUN080LTE5",
      "ARUN100LTE5",
      "ARUN120LTE5",
      "ARUV100LTE5",
      "ARNU123BHA2"
    ],

    capacidades: {},

    referenciasTecnicas: {},

    leitura: {
      fabricante: "LG",
      tipoCodigo: "Código VRF / Multi V provável",
      linhaProvavel: "LG Multi V / VRF provável",
      tecnologia: "VRF / Inverter comercial provável",
      tipoEquipamento: "Sistema VRF / Multi V provável",
      origemLeitura: "Máscara LG baseada em prefixos ARU, ARUN, ARUV e ARNU usados em linhas comerciais/VRF.",
      observacao: "Máscara auxiliar. Em VRF/Multi V, não gerar capacidade, corrente, gás ou tubulação apenas por código. Validar em manual/engenharia."
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
    const bateRegex = regex.test(codigoLimpo);

    if (!bateRegex) continue;

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

    if (mascara.id === "LG_COMERCIAL_LEVE") {
      const capacidadeMatch = codigoLimpo.match(/(18|24|30|36|42|48|54|60)/);
      capacidadeCodigo = capacidadeMatch ? capacidadeMatch[1] : "";
      capacidadeProvavel = mascara.capacidades[capacidadeCodigo] || "";
    }

    if (mascara.id === "LG_VRF_MULTI_V") {
      capacidadeCodigo = "";
      capacidadeProvavel = "";
    }

    const referencia = mascara.referenciasTecnicas && capacidadeCodigo
      ? mascara.referenciasTecnicas[capacidadeCodigo]
      : null;

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
