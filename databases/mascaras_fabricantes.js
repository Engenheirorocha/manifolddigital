/* HVAC PRO - databases/mascaras_fabricantes.js
   MÁSCARAS DE FABRICANTES - v6630

   REGRA DO MÓDULO:
   - Primeiro o técnico seleciona o fabricante.
   - Depois digita o código do condensador.
   - O app aplica somente as máscaras do fabricante selecionado.
   - Este arquivo NÃO substitui manual, etiqueta ou fonte oficial.
   - Dados gerados por máscara são prováveis/estimados.
   - Carga exata de gás, corrente nominal real, disjuntor e tubulação oficial
     devem ser validados na etiqueta/manual.
*/

/* =========================================================
   REFERÊNCIAS TÉCNICAS GENÉRICAS POR CAPACIDADE
   Usadas como apoio quando a máscara identifica capacidade.
========================================================= */

const REF_SPLIT_INVERTER = {
  "07": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "127V ou 220V conforme modelo",
    correnteEstimada: "Faixa estimada: 3 A a 6 A",
    tubulacaoProvavel: "1/4\" x 3/8\" provável"
  },
  "09": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "127V ou 220V conforme modelo",
    correnteEstimada: "Faixa estimada: 3,5 A a 7 A",
    tubulacaoProvavel: "1/4\" x 3/8\" provável"
  },
  "12": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "127V ou 220V conforme modelo",
    correnteEstimada: "Faixa estimada: 5 A a 10 A",
    tubulacaoProvavel: "1/4\" x 3/8\" provável"
  },
  "15": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "220V provável",
    correnteEstimada: "Faixa estimada: 6 A a 11 A",
    tubulacaoProvavel: "1/4\" x 1/2\" provável"
  },
  "18": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "220V provável",
    correnteEstimada: "Faixa estimada: 7 A a 14 A",
    tubulacaoProvavel: "1/4\" x 1/2\" provável"
  },
  "22": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "220V provável",
    correnteEstimada: "Faixa estimada: 8 A a 16 A",
    tubulacaoProvavel: "1/4\" x 1/2\" ou 3/8\" x 5/8\" provável"
  },
  "24": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "220V provável",
    correnteEstimada: "Faixa estimada: 9 A a 18 A",
    tubulacaoProvavel: "1/4\" x 1/2\" ou 3/8\" x 5/8\" provável"
  },
  "30": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "220V provável",
    correnteEstimada: "Faixa estimada: 11 A a 22 A",
    tubulacaoProvavel: "3/8\" x 5/8\" provável"
  },
  "36": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "220V provável / 380V em alguns comerciais",
    correnteEstimada: "Faixa estimada: 14 A a 28 A",
    tubulacaoProvavel: "3/8\" x 5/8\" provável"
  },
  "48": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "220V / 380V conforme modelo",
    correnteEstimada: "Validar na etiqueta",
    tubulacaoProvavel: "3/8\" x 5/8\" ou maior conforme linha"
  },
  "60": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "220V / 380V conforme modelo",
    correnteEstimada: "Validar na etiqueta",
    tubulacaoProvavel: "Validar no manual/etiqueta"
  }
};

const REF_ANTIGO_ONOFF = {
  "07": {
    gasProvavel: "R-22 / R-410A conforme geração",
    tensaoProvavel: "127V ou 220V conforme etiqueta",
    correnteEstimada: "Validar na etiqueta",
    tubulacaoProvavel: "1/4\" x 3/8\" provável"
  },
  "09": {
    gasProvavel: "R-22 / R-410A conforme geração",
    tensaoProvavel: "127V ou 220V conforme etiqueta",
    correnteEstimada: "Faixa antiga estimada: 4 A a 9 A",
    tubulacaoProvavel: "1/4\" x 3/8\" provável"
  },
  "12": {
    gasProvavel: "R-22 / R-410A conforme geração",
    tensaoProvavel: "127V ou 220V conforme etiqueta",
    correnteEstimada: "Faixa antiga estimada: 5 A a 12 A",
    tubulacaoProvavel: "1/4\" x 3/8\" provável"
  },
  "18": {
    gasProvavel: "R-22 / R-410A conforme geração",
    tensaoProvavel: "220V provável",
    correnteEstimada: "Faixa antiga estimada: 7 A a 16 A",
    tubulacaoProvavel: "1/4\" x 1/2\" provável"
  },
  "24": {
    gasProvavel: "R-22 / R-410A conforme geração",
    tensaoProvavel: "220V provável",
    correnteEstimada: "Faixa antiga estimada: 10 A a 22 A",
    tubulacaoProvavel: "3/8\" x 5/8\" ou 1/4\" x 1/2\" provável"
  }
};

const REF_COMERCIAL = {
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
  "48": {
    gasProvavel: "R-410A / R-32 conforme linha",
    tensaoProvavel: "220V / 380V conforme modelo",
    correnteEstimada: "Validar na etiqueta",
    tubulacaoProvavel: "3/8\" x 5/8\" ou maior conforme linha"
  },
  "60": {
    gasProvavel: "R-410A / R-32 conforme linha",
    tensaoProvavel: "220V / 380V conforme modelo",
    correnteEstimada: "Validar na etiqueta",
    tubulacaoProvavel: "Validar no manual/etiqueta"
  }
};

const CAP_PADRAO = {
  "07": "7.000 BTU/h provável",
  "09": "9.000 BTU/h provável",
  "10": "10.000 BTU/h provável",
  "12": "12.000 BTU/h provável",
  "15": "15.000 BTU/h provável",
  "18": "18.000 BTU/h provável",
  "22": "22.000 BTU/h provável",
  "24": "24.000 BTU/h provável",
  "30": "30.000 BTU/h provável",
  "36": "36.000 BTU/h provável",
  "42": "42.000 BTU/h provável",
  "48": "48.000 BTU/h provável",
  "54": "54.000 BTU/h provável",
  "56": "56.000 BTU/h provável",
  "60": "60.000 BTU/h provável",
  "80": "80.000 BTU/h provável"
};

function makeLeitura(tipoCodigo, linhaProvavel, tecnologia, tipoEquipamento, origemLeitura, observacao) {
  return {
    tipoCodigo,
    linhaProvavel,
    tecnologia,
    tipoEquipamento,
    origemLeitura,
    observacao
  };
}

/* =========================================================
   MÁSCARAS
========================================================= */

window.mascarasFabricantes = [

  /* =========================
     LG
  ========================= */

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
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Condensadora provável",
      "LG Inverter / Dual Inverter provável",
      "Inverter / Dual Inverter provável",
      "Split Hi Wall provável",
      "Máscara LG baseada em padrões S3, S4 e U4 com número central de capacidade.",
      "Leitura automática por padrão de engenharia. Validar etiqueta/manual."
    )
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
    capacidades: CAP_PADRAO,
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
      }
    },
    leitura: makeLeitura(
      "Unidade externa Multi Split provável",
      "LG Multi Split Inverter provável",
      "Inverter provável",
      "Unidade externa Multi Split provável",
      "Máscara LG baseada em padrão A*UW usado em unidades externas Multi Split.",
      "Em Multi Split, dados técnicos dependem da combinação das unidades internas."
    )
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
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_ANTIGO_ONOFF,
    leitura: makeLeitura(
      "Código LG antigo provável",
      "LG Split antigo / on-off provável",
      "Convencional / on-off provável",
      "Split Hi Wall antigo provável",
      "Máscara LG baseada em códigos antigos iniciados por AS.",
      "Confiabilidade média. Validar sempre com etiqueta ou manual."
    )
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
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_COMERCIAL,
    leitura: makeLeitura(
      "Código comercial LG provável",
      "LG comercial leve provável",
      "Inverter ou convencional conforme linha",
      "Piso-teto / cassete / dutado / comercial leve provável",
      "Máscara LG baseada em prefixos comerciais UV, UT, LT, LV, AT e AU.",
      "Confiabilidade média. Usar como leitura auxiliar até validar por manual/etiqueta."
    )
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
    leitura: makeLeitura(
      "Código VRF / Multi V provável",
      "LG Multi V / VRF provável",
      "VRF / Inverter comercial provável",
      "Sistema VRF / Multi V provável",
      "Máscara LG baseada em prefixos ARU, ARUN, ARUV e ARNU.",
      "Em VRF/Multi V, validar capacidade, corrente, gás e tubulação no manual/projeto."
    )
  },

  /* =========================
     MIDEA / SPRINGER / CARRIER
  ========================= */

  {
    id: "MIDEA_RESIDENCIAL_38",
    fabricante: "MIDEA",
    grupo: "Midea / Springer / Carrier",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Midea/Springer/Carrier residencial - unidade externa 38",
    padroesInicio: ["38"],
    regexLimpo: "^38[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Condensadora / unidade externa provável",
      "Midea / Springer / Carrier residencial provável",
      "Inverter ou convencional conforme série",
      "Split Hi Wall provável",
      "Máscara baseada em códigos iniciados por 38 usados em unidades externas/condensadoras do grupo Midea.",
      "Códigos 42 costumam indicar unidade interna; para consulta atual usamos 38 como condensadora provável."
    )
  },

  {
    id: "MIDEA_COMERCIAL_38_40",
    fabricante: "MIDEA",
    grupo: "Midea / Springer / Carrier",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Midea/Springer/Carrier comercial leve",
    padroesInicio: ["38", "40"],
    regexLimpo: "^(38|40)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_COMERCIAL,
    leitura: makeLeitura(
      "Código comercial provável",
      "Midea / Springer / Carrier comercial leve provável",
      "Inverter ou convencional conforme linha",
      "Piso-teto / cassete / dutado / comercial leve provável",
      "Máscara baseada em prefixos 38/40 em linhas comerciais do grupo Midea.",
      "Validar tipo exato no manual, pois 40 pode variar conforme família."
    )
  },

  /* =========================
     GREE
  ========================= */

  {
    id: "GREE_SPLIT_GWC_GWH",
    fabricante: "GREE",
    grupo: "Gree",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Gree Split GWC/GWH",
    padroesInicio: ["GWC", "GWH"],
    regexLimpo: "^(GWC|GWH)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Código split Gree provável",
      "Gree G-Top / G-Tech / linha split provável",
      "Inverter ou convencional conforme sufixo",
      "Split Hi Wall provável",
      "Máscara baseada em prefixos GWC/GWH usados em linhas split Gree.",
      "Validar fluido e dados elétricos conforme manual/etiqueta."
    )
  },

  {
    id: "GREE_COMERCIAL_GKC_GTC_GULD",
    fabricante: "GREE",
    grupo: "Gree",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Gree comercial / unidade externa",
    padroesInicio: ["GKC", "GTC", "GULD"],
    regexLimpo: "^(GKC|GTC|GULD)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_COMERCIAL,
    leitura: makeLeitura(
      "Unidade externa/comercial Gree provável",
      "Gree comercial leve / G-Prime / G-Top provável",
      "Inverter ou convencional conforme linha",
      "Piso-teto / cassete / comercial leve provável",
      "Máscara baseada em prefixos GKC, GTC e GULD usados em linhas comerciais Gree.",
      "Se o código terminar com /O, reforça leitura de outdoor/unidade externa."
    )
  },

  /* =========================
     ELGIN
  ========================= */

  {
    id: "ELGIN_HJ_ECO_INVERTER",
    fabricante: "ELGIN",
    grupo: "Elgin",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Elgin Hi Wall / Eco Inverter",
    padroesInicio: ["45HJ", "HJ"],
    regexLimpo: "^(45HJ|HJ)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Condensadora Elgin Hi Wall provável",
      "Elgin Eco / Eco Inverter provável",
      "Inverter ou convencional conforme sufixo",
      "Split Hi Wall provável",
      "Máscara baseada em padrões HJ / 45HJ usados em linhas Hi Wall Elgin.",
      "Validar modelo da condensadora na etiqueta ou página oficial."
    )
  },

  {
    id: "ELGIN_PISO_TETO_CASSETE",
    fabricante: "ELGIN",
    grupo: "Elgin",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Elgin piso-teto / cassete",
    padroesInicio: ["PIF", "PTE", "K7E", "K7I"],
    regexLimpo: "^(PIF|PTE|K7E|K7I)[A-Z0-9]*[0-9]{2,3}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_COMERCIAL,
    leitura: makeLeitura(
      "Código comercial Elgin provável",
      "Elgin piso-teto / cassete provável",
      "Inverter ou convencional conforme linha",
      "Piso-teto / cassete provável",
      "Máscara baseada em prefixos PIF, PTE, K7E e K7I.",
      "Validar tensão e corrente na etiqueta/manual."
    )
  },

  /* =========================
     SAMSUNG
  ========================= */

  {
    id: "SAMSUNG_AR_WIND_FREE",
    fabricante: "SAMSUNG",
    grupo: "Samsung",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Samsung AR / WindFree / Split",
    padroesInicio: ["AR"],
    regexLimpo: "^AR[0-9]{2}[A-Z0-9]+$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Código Samsung split provável",
      "Samsung WindFree / Digital Inverter provável",
      "Inverter provável",
      "Split Hi Wall provável",
      "Máscara baseada em códigos Samsung iniciados por AR seguidos de capacidade.",
      "Validar se o código corresponde à unidade externa ou conjunto."
    )
  },

  {
    id: "SAMSUNG_COMERCIAL_AC",
    fabricante: "SAMSUNG",
    grupo: "Samsung",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Samsung comercial leve",
    padroesInicio: ["AC"],
    regexLimpo: "^AC[0-9]{3}[A-Z0-9]+$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_COMERCIAL,
    leitura: makeLeitura(
      "Código comercial Samsung provável",
      "Samsung comercial leve provável",
      "Inverter ou convencional conforme linha",
      "Cassete / piso-teto / dutado provável",
      "Máscara baseada em códigos Samsung comerciais iniciados por AC.",
      "Validar sempre no manual comercial."
    )
  },

  /* =========================
     CONSUL
  ========================= */

  {
    id: "CONSUL_CBK_CBN",
    fabricante: "CONSUL",
    grupo: "Consul / Whirlpool",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Consul Split CBK/CBN",
    padroesInicio: ["CBK", "CBN", "CBF"],
    regexLimpo: "^(CBK|CBN|CBF)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Código Consul split provável",
      "Consul Split / Inverter / Convencional provável",
      "Inverter ou convencional conforme família",
      "Split Hi Wall provável",
      "Máscara baseada em códigos Consul iniciados por CBK/CBN/CBF.",
      "Validar modelo completo na etiqueta ou página oficial."
    )
  },

  /* =========================
     ELECTROLUX
  ========================= */

  {
    id: "ELECTROLUX_UNIDADE_EXTERNA",
    fabricante: "ELECTROLUX",
    grupo: "Electrolux",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Electrolux unidade externa",
    padroesInicio: ["JE", "YE", "UE", "FE", "TE"],
    regexLimpo: "^(JE|YE|UE|FE|TE)[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Unidade externa Electrolux provável",
      "Electrolux Color Adapt / Inverter provável",
      "Inverter provável",
      "Unidade externa split provável",
      "Máscara baseada em códigos de unidade externa Electrolux como JE/YE/UE.",
      "Validar conjunto interno/externo e fluido na etiqueta/manual."
    )
  },

  /* =========================
     DAIKIN
  ========================= */

  {
    id: "DAIKIN_RESIDENCIAL_RX_RK",
    fabricante: "DAIKIN",
    grupo: "Daikin",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Daikin unidade externa RX/RK",
    padroesInicio: ["RX", "RK", "RZ"],
    regexLimpo: "^(RX|RK|RZ)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Unidade externa Daikin provável",
      "Daikin split / inverter provável",
      "Inverter ou convencional conforme linha",
      "Split Hi Wall / unidade externa provável",
      "Máscara baseada em prefixos RX/RK/RZ comuns em unidades externas Daikin.",
      "Validar com manual/etiqueta do conjunto."
    )
  },

  {
    id: "DAIKIN_VRV_RXY",
    fabricante: "DAIKIN",
    grupo: "Daikin",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Daikin VRV / comercial",
    padroesInicio: ["RXY", "RYY", "RQ"],
    regexLimpo: "^(RXY|RYY|RQ)[A-Z0-9]+$",
    capacidades: {},
    referenciasTecnicas: {},
    leitura: makeLeitura(
      "Código VRV/VRF Daikin provável",
      "Daikin VRV / comercial provável",
      "VRV / Inverter comercial provável",
      "Sistema VRV/VRF provável",
      "Máscara baseada em prefixos RXY/RYY/RQ.",
      "Não gerar dados críticos por máscara. Validar no projeto/manual."
    )
  },

  /* =========================
     FUJITSU
  ========================= */

  {
    id: "FUJITSU_AOYA_AOBR_AOU",
    fabricante: "FUJITSU",
    grupo: "Fujitsu",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Fujitsu unidade externa AO",
    padroesInicio: ["AO", "AOU", "AOYG", "AOBR"],
    regexLimpo: "^(AO|AOU|AOYG|AOBR)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Unidade externa Fujitsu provável",
      "Fujitsu split / inverter provável",
      "Inverter ou convencional conforme linha",
      "Unidade externa split provável",
      "Máscara baseada em prefixos AO/AOU/AOYG/AOBR usados em unidades externas Fujitsu.",
      "Validar conjunto interno/externo no manual."
    )
  },

  /* =========================
     KOMECO
  ========================= */

  {
    id: "KOMECO_KOS_KOP_KO",
    fabricante: "KOMECO",
    grupo: "Komeco",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Komeco split / comercial leve",
    padroesInicio: ["KOS", "KOP", "KO"],
    regexLimpo: "^(KOS|KOP|KO)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Código Komeco provável",
      "Komeco split / comercial leve provável",
      "Inverter ou convencional conforme linha",
      "Split / piso-teto provável",
      "Máscara baseada em prefixos KOS/KOP/KO.",
      "Validar tipo exato e dados elétricos na etiqueta."
    )
  },

  /* =========================
     PHILCO
  ========================= */

  {
    id: "PHILCO_PAC_PHI",
    fabricante: "PHILCO",
    grupo: "Philco",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Philco split",
    padroesInicio: ["PAC", "PHI", "PIF"],
    regexLimpo: "^(PAC|PHI|PIF)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Código Philco provável",
      "Philco split / inverter provável",
      "Inverter ou convencional conforme linha",
      "Split Hi Wall provável",
      "Máscara baseada em prefixos PAC/PHI/PIF.",
      "Confiabilidade média. Validar na etiqueta."
    )
  },

  /* =========================
     AGRATTO
  ========================= */

  {
    id: "AGRATTO_ECO_ACS",
    fabricante: "AGRATTO",
    grupo: "Agratto",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Agratto split",
    padroesInicio: ["ICS", "ACS", "ECS", "LCST", "LCS"],
    regexLimpo: "^(ICS|ACS|ECS|LCST|LCS)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Código Agratto provável",
      "Agratto split provável",
      "Inverter ou convencional conforme linha",
      "Split Hi Wall provável",
      "Máscara baseada em prefixos comuns em linhas Agratto.",
      "Validar dados técnicos na etiqueta."
    )
  },

  /* =========================
     TCL
  ========================= */

  {
    id: "TCL_TAC",
    fabricante: "TCL",
    grupo: "TCL",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "TCL split TAC",
    padroesInicio: ["TAC"],
    regexLimpo: "^TAC[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura(
      "Código TCL provável",
      "TCL split / inverter provável",
      "Inverter ou convencional conforme linha",
      "Split Hi Wall provável",
      "Máscara baseada em prefixo TAC comum em ar-condicionado TCL.",
      "Validar modelo completo na etiqueta/manual."
    )
  }

];

/* =========================================================
   INTERPRETADOR GLOBAL
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

    if (!inicioValido) continue;

    const regex = new RegExp(mascara.regexLimpo);
    if (!regex.test(codigoLimpo)) continue;

    let capacidadeCodigo = "";

    if (mascara.id === "LG_SPLIT_INVERTER_ATUAL") {
      const m = codigoLimpo.match(/^(S3|S4|U4)[QW]([0-9]{2})/);
      capacidadeCodigo = m ? m[2] : "";
    } else if (mascara.id === "LG_MULTI_SPLIT_EXTERNA") {
      const m = codigoLimpo.match(/^A[0-9]UW([0-9]{2})/);
      capacidadeCodigo = m ? m[1] : "";
    } else if (mascara.id === "LG_ANTIGO_AS") {
      const m = codigoLimpo.match(/^AS[A-Z]([0-9]{2})/);
      capacidadeCodigo = m ? m[1] : "";
    } else if (mascara.id === "DAIKIN_VRV_RXY" || mascara.id === "LG_VRF_MULTI_V") {
      capacidadeCodigo = "";
    } else {
      const m = codigoLimpo.match(/(07|09|10|12|15|18|22|24|30|36|42|48|54|56|60|80)/);
      capacidadeCodigo = m ? m[1] : "";
    }

    const capacidadeProvavel = mascara.capacidades && capacidadeCodigo
      ? (mascara.capacidades[capacidadeCodigo] || "")
      : "";

    const referencia = mascara.referenciasTecnicas && capacidadeCodigo
      ? mascara.referenciasTecnicas[capacidadeCodigo]
      : null;

    let cicloProvavel = "";

    if (mascara.id === "LG_SPLIT_INVERTER_ATUAL") {
      if (codigoLimpo.includes("Q")) cicloProvavel = "Frio provável / variação Q";
      if (codigoLimpo.includes("W")) cicloProvavel = "Quente/Frio provável / variação W";
    } else if (mascara.id.includes("MULTI") || mascara.id.includes("VRF") || mascara.id.includes("VRV")) {
      cicloProvavel = "Depende da combinação/projeto / validar no manual";
    } else {
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
