/* HVAC PRO - databases/mascaras_fabricantes.js
   MÁSCARAS DE FABRICANTES - v6652 SEM FALLBACK

   FOCO DESTA VERSÃO:
   - Corrige LG real de campo:
     S4UQ09WA5WB
     S4UW09WA51A
     S4UW09WA5WA
     S4UQ12JA314
     ASUQ092B4A0
     ASUQ122B4A0
     ASUW123EUH0

   - Remove fallback automático.
   - Fabricante selecionado trava a leitura.
   - Se não bater com máscara real do fabricante, retorna "encontrado: false".
   - Dados gerados são prováveis/estimados, nunca oficiais.
*/

const CAP_PADRAO = {
  "07": "7.000 BTU/h provável",
  "09": "9.000 BTU/h provável",
  "10": "10.000 BTU/h provável",
  "12": "12.000 BTU/h provável",
  "15": "15.000 BTU/h provável",
  "18": "18.000 BTU/h provável",
  "22": "22.000 BTU/h provável",
  "24": "24.000 BTU/h provável",
  "28": "28.000 BTU/h provável",
  "30": "30.000 BTU/h provável",
  "36": "36.000 BTU/h provável",
  "42": "42.000 BTU/h provável",
  "48": "48.000 BTU/h provável",
  "54": "54.000 BTU/h provável",
  "56": "56.000 BTU/h provável",
  "60": "60.000 BTU/h provável",
  "80": "80.000 BTU/h provável"
};

const REF_SPLIT = {
  "07": {
    gasProvavel: "R-410A / R-32 / R-22 conforme geração",
    tensaoProvavel: "127V ou 220V conforme etiqueta",
    correnteEstimada: "Faixa estimada: 3 A a 6 A",
    tubulacaoProvavel: "1/4\" x 3/8\" provável"
  },
  "09": {
    gasProvavel: "R-410A / R-32 / R-22 conforme geração",
    tensaoProvavel: "127V ou 220V conforme etiqueta",
    correnteEstimada: "Faixa estimada: 3,5 A a 7 A",
    tubulacaoProvavel: "1/4\" x 3/8\" provável"
  },
  "10": {
    gasProvavel: "R-410A / R-32 / R-22 conforme geração",
    tensaoProvavel: "127V ou 220V conforme etiqueta",
    correnteEstimada: "Faixa estimada: 4 A a 8 A",
    tubulacaoProvavel: "1/4\" x 3/8\" provável"
  },
  "12": {
    gasProvavel: "R-410A / R-32 / R-22 conforme geração",
    tensaoProvavel: "127V ou 220V conforme etiqueta",
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
    gasProvavel: "R-410A / R-32 / R-22 conforme geração",
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
    gasProvavel: "R-410A / R-32 / R-22 conforme geração",
    tensaoProvavel: "220V provável",
    correnteEstimada: "Faixa estimada: 9 A a 18 A",
    tubulacaoProvavel: "1/4\" x 1/2\" ou 3/8\" x 5/8\" provável"
  },
  "28": {
    gasProvavel: "R-410A / R-32 conforme geração",
    tensaoProvavel: "220V provável",
    correnteEstimada: "Faixa estimada: 10 A a 20 A",
    tubulacaoProvavel: "3/8\" x 5/8\" provável"
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
  "42": {
    gasProvavel: "R-410A / R-32 conforme linha",
    tensaoProvavel: "220V / 380V conforme etiqueta",
    correnteEstimada: "Validar na etiqueta",
    tubulacaoProvavel: "3/8\" x 5/8\" provável"
  },
  "48": {
    gasProvavel: "R-410A / R-32 conforme linha",
    tensaoProvavel: "220V / 380V conforme etiqueta",
    correnteEstimada: "Validar na etiqueta",
    tubulacaoProvavel: "3/8\" x 5/8\" ou maior conforme linha"
  },
  "54": {
    gasProvavel: "R-410A / R-32 conforme linha",
    tensaoProvavel: "220V / 380V conforme etiqueta",
    correnteEstimada: "Validar na etiqueta",
    tubulacaoProvavel: "Validar no manual/etiqueta"
  },
  "56": {
    gasProvavel: "R-410A / R-32 conforme linha",
    tensaoProvavel: "220V / 380V conforme etiqueta",
    correnteEstimada: "Validar na etiqueta",
    tubulacaoProvavel: "Validar no manual/etiqueta"
  },
  "60": {
    gasProvavel: "R-410A / R-32 conforme linha",
    tensaoProvavel: "220V / 380V conforme etiqueta",
    correnteEstimada: "Validar na etiqueta",
    tubulacaoProvavel: "Validar no manual/etiqueta"
  },
  "80": {
    gasProvavel: "R-410A / R-32 conforme linha",
    tensaoProvavel: "380V provável em muitos comerciais",
    correnteEstimada: "Validar na etiqueta",
    tubulacaoProvavel: "Validar no manual/etiqueta"
  }
};

function leitura(tipoCodigo, linha, tecnologia, tipo, origem, obs) {
  return {
    tipoCodigo: tipoCodigo,
    linhaProvavel: linha,
    tecnologia: tecnologia,
    tipoEquipamento: tipo,
    origemLeitura: origem,
    observacao: obs
  };
}

function mask(id, fabricante, grupo, nome, inicios, regex, conf, ref, leituraObj, capRegex, capGrupo) {
  return {
    id: id,
    fabricante: fabricante,
    grupo: grupo,
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: conf,
    nomeMascara: nome,
    padroesInicio: inicios,
    regexLimpo: regex,
    capacidades: CAP_PADRAO,
    referenciasTecnicas: ref || REF_SPLIT,
    capacidadeRegex: capRegex || "",
    capacidadeGrupo: capGrupo || 1,
    leitura: leituraObj
  };
}

window.mascarasFabricantes = [

  /* =========================================================
     LG — REFINADO COM PADRÕES REAIS ENCONTRADOS
  ========================================================= */

  mask(
    "LG_SPLIT_INVERTER_ATUAL_FLEX",
    "LG",
    "LG Electronics",
    "LG Split Inverter atual flexível",
    ["S3", "S4", "U4"],
    "^(S3|S4|U4)[A-Z]{0,3}[QW][0-9]{2}[A-Z0-9]+$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Condensadora provável",
      "LG Inverter / Dual Inverter provável",
      "Inverter / Dual Inverter provável",
      "Split Hi Wall provável",
      "Máscara LG flexível validada por exemplos reais S4-Q, S4UQ, S4UW.",
      "Aceita variações reais como S4UQ09WA5WB, S4UW09WA51A e S4-Q12JA3WC. Validar etiqueta/manual."
    ),
    "^(S3|S4|U4)[A-Z]{0,3}[QW]([0-9]{2})",
    2
  ),

  mask(
    "LG_SPLIT_ANTIGO_ASU",
    "LG",
    "LG Electronics",
    "LG Split antigo ASUQ/ASUW",
    ["ASUQ", "ASUW", "ASNW", "ASNQ", "AS"],
    "^(ASUQ|ASUW|ASNW|ASNQ|AS)[A-Z0-9]*[0-9]{2,3}[A-Z0-9]+$",
    "Média/Alta",
    REF_SPLIT,
    leitura(
      "Código LG antigo provável",
      "LG Split antigo / on-off provável",
      "Convencional / on-off provável",
      "Split Hi Wall antigo provável",
      "Máscara LG antiga baseada em ASUQ/ASUW/ASNW/ASNQ/AS.",
      "Validação obrigatória na etiqueta, pois linhas antigas variam muito."
    )
  ),

  mask(
    "LG_MULTI_SPLIT_EXTERNA",
    "LG",
    "LG Electronics",
    "LG Multi Split unidade externa",
    ["A2UW", "A3UW", "A4UW", "A5UW"],
    "^A[0-9]UW[0-9]{2}[A-Z0-9]+$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Unidade externa Multi Split provável",
      "LG Multi Split Inverter provável",
      "Inverter provável",
      "Unidade externa Multi Split provável",
      "Máscara LG baseada em A*UW.",
      "Em Multi Split, validar combinação das evaporadoras."
    ),
    "^A[0-9]UW([0-9]{2})",
    1
  ),

  mask(
    "LG_COMERCIAL_LEVE",
    "LG",
    "LG Electronics",
    "LG Comercial leve",
    ["UV", "UT", "LT", "LV", "AT", "AU"],
    "^(UV|UT|LT|LV|AT|AU)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Média",
    REF_SPLIT,
    leitura(
      "Código comercial LG provável",
      "LG comercial leve provável",
      "Inverter ou convencional conforme linha",
      "Piso-teto / cassete / dutado provável",
      "Máscara LG comercial UV/UT/LT/LV/AT/AU.",
      "Validar etiqueta/manual."
    )
  ),

  mask(
    "LG_VRF_MULTI_V",
    "LG",
    "LG Electronics",
    "LG VRF / Multi V provável",
    ["ARU", "ARUN", "ARUV", "ARNU"],
    "^(ARU|ARUN|ARUV|ARNU)[A-Z0-9]+$",
    "Média",
    {},
    leitura(
      "Código VRF / Multi V provável",
      "LG Multi V / VRF provável",
      "VRF / Inverter comercial provável",
      "Sistema VRF provável",
      "Máscara LG ARU/ARUN/ARUV/ARNU.",
      "Não gerar dados críticos por máscara em VRF."
    )
  ),

  /* =========================================================
     MIDEA / SPRINGER / CARRIER
  ========================================================= */

  mask(
    "MIDEA_38_RESIDENCIAL",
    "MIDEA",
    "Midea / Springer / Carrier",
    "Midea/Springer/Carrier unidade externa 38",
    ["38"],
    "^38[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Condensadora / unidade externa provável",
      "Midea/Springer/Carrier residencial provável",
      "Inverter ou convencional conforme série",
      "Split Hi Wall provável",
      "Prefixo 38 usado como unidade externa em muitos conjuntos do grupo Midea.",
      "Códigos 42 costumam ser unidade interna; 38 é foco da condensadora."
    )
  ),

  mask(
    "MIDEA_40_COMERCIAL",
    "MIDEA",
    "Midea / Springer / Carrier",
    "Midea/Springer/Carrier comercial 40",
    ["40"],
    "^40[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Média",
    REF_SPLIT,
    leitura(
      "Código comercial provável",
      "Midea/Springer/Carrier comercial provável",
      "Inverter ou convencional conforme linha",
      "Cassete / piso-teto / dutado provável",
      "Prefixo 40 aparece em linhas comerciais do grupo Midea.",
      "Validar se é unidade externa ou parte do conjunto."
    )
  ),

  mask(
    "MIDEA_ANTIGOS_MS",
    "MIDEA",
    "Midea / Springer / Carrier",
    "Midea/Springer códigos antigos MS",
    ["MSC", "MSA", "MST", "MSE", "MSV", "MS"],
    "^(MSC|MSA|MST|MSE|MSV|MS)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Média",
    REF_SPLIT,
    leitura(
      "Código Midea/Springer antigo provável",
      "Midea/Springer antigo provável",
      "Convencional ou inverter conforme sufixo",
      "Split provável",
      "Máscara Midea/Springer MS.",
      "Validar na etiqueta/manual."
    )
  ),

  /* =========================================================
     GREE
  ========================================================= */

  mask(
    "GREE_GWC_GWH_SPLIT",
    "GREE",
    "Gree",
    "Gree Split GWC/GWH",
    ["GWC", "GWH"],
    "^(GWC|GWH)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Código split Gree provável",
      "Gree split provável",
      "Inverter ou convencional conforme sufixo",
      "Split Hi Wall provável",
      "Máscara Gree GWC/GWH.",
      "Validar etiqueta/manual."
    )
  ),

  mask(
    "GREE_COMERCIAL",
    "GREE",
    "Gree",
    "Gree comercial GKC/GTC/GULD/GMV",
    ["GKC", "GTC", "GULD", "GMV"],
    "^(GKC|GTC|GULD|GMV)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Unidade externa/comercial Gree provável",
      "Gree comercial provável",
      "Inverter ou convencional conforme linha",
      "Piso-teto / cassete / comercial provável",
      "Máscara Gree GKC/GTC/GULD/GMV.",
      "Final /O reforça outdoor/unidade externa."
    )
  ),

  /* =========================================================
     ELGIN
  ========================================================= */

  mask(
    "ELGIN_HJ",
    "ELGIN",
    "Elgin",
    "Elgin Hi Wall HJ/45HJ",
    ["45HJ", "HJ"],
    "^(45HJ|HJ)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Condensadora Elgin Hi Wall provável",
      "Elgin Eco / Eco Inverter provável",
      "Inverter ou convencional conforme sufixo",
      "Split Hi Wall provável",
      "Máscara Elgin HJ/45HJ.",
      "Validar modelo da condensadora."
    )
  ),

  mask(
    "ELGIN_COMERCIAL",
    "ELGIN",
    "Elgin",
    "Elgin piso-teto / cassete",
    ["PIF", "PTE", "K7E", "K7I", "K7F"],
    "^(PIF|PTE|K7E|K7I|K7F)[A-Z0-9]*[0-9]{2,3}[A-Z0-9]*$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Código comercial Elgin provável",
      "Elgin piso-teto / cassete provável",
      "Inverter ou convencional conforme linha",
      "Piso-teto / cassete provável",
      "Máscara Elgin PIF/PTE/K7.",
      "Validar etiqueta/manual."
    )
  ),

  /* =========================================================
     SAMSUNG
  ========================================================= */

  mask(
    "SAMSUNG_AR_SPLIT",
    "SAMSUNG",
    "Samsung",
    "Samsung AR WindFree / Digital Inverter",
    ["AR"],
    "^AR[0-9]{2}[A-Z0-9]+$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Código Samsung split provável",
      "Samsung WindFree / Digital Inverter provável",
      "Inverter provável",
      "Split Hi Wall provável",
      "Máscara Samsung AR + capacidade.",
      "Validar se o código é unidade externa ou conjunto."
    ),
    "^AR([0-9]{2})",
    1
  ),

  mask(
    "SAMSUNG_AC_COMERCIAL",
    "SAMSUNG",
    "Samsung",
    "Samsung comercial AC",
    ["AC"],
    "^AC[0-9]{3}[A-Z0-9]+$",
    "Média",
    REF_SPLIT,
    leitura(
      "Código comercial Samsung provável",
      "Samsung comercial provável",
      "Inverter ou convencional conforme linha",
      "Cassete / piso-teto / dutado provável",
      "Máscara Samsung AC.",
      "Validar manual comercial."
    ),
    "^AC0?([0-9]{2})",
    1
  ),

  /* =========================================================
     CONSUL
  ========================================================= */

  mask(
    "CONSUL_CBK_CBN_CBF",
    "CONSUL",
    "Consul / Whirlpool",
    "Consul Split CBK/CBN/CBF",
    ["CBK", "CBN", "CBF", "CCK", "CCN"],
    "^(CBK|CBN|CBF|CCK|CCN)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Código Consul split provável",
      "Consul Split provável",
      "Inverter ou convencional conforme família",
      "Split Hi Wall provável",
      "Máscara Consul CBK/CBN/CBF.",
      "Validar etiqueta/página oficial."
    )
  ),

  /* =========================================================
     ELECTROLUX
  ========================================================= */

  mask(
    "ELECTROLUX_EXTERNA",
    "ELECTROLUX",
    "Electrolux",
    "Electrolux unidade externa",
    ["JE", "YE", "UE", "FE", "TE", "DE", "PE"],
    "^(JE|YE|UE|FE|TE|DE|PE)[0-9]{2}[A-Z0-9]*$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Unidade externa Electrolux provável",
      "Electrolux Color Adapt / Inverter provável",
      "Inverter provável",
      "Unidade externa split provável",
      "Máscara Electrolux JE/YE/UE.",
      "Validar conjunto interno/externo."
    ),
    "^(JE|YE|UE|FE|TE|DE|PE)([0-9]{2})",
    2
  ),

  /* =========================================================
     DAIKIN
  ========================================================= */

  mask(
    "DAIKIN_RX_RK_RZ",
    "DAIKIN",
    "Daikin",
    "Daikin unidade externa RX/RK/RZ",
    ["RX", "RK", "RZ", "RXS", "RXM", "RXN", "RKC"],
    "^(RX|RK|RZ|RXS|RXM|RXN|RKC)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Unidade externa Daikin provável",
      "Daikin split / inverter provável",
      "Inverter ou convencional conforme linha",
      "Split / unidade externa provável",
      "Máscara Daikin RX/RK/RZ.",
      "Validar etiqueta/manual."
    )
  ),

  mask(
    "DAIKIN_VRV",
    "DAIKIN",
    "Daikin",
    "Daikin VRV / comercial",
    ["RXY", "RYY", "RQ", "REYQ", "RXYQ"],
    "^(RXY|RYY|RQ|REYQ|RXYQ)[A-Z0-9]+$",
    "Média",
    {},
    leitura(
      "Código VRV/VRF Daikin provável",
      "Daikin VRV / comercial provável",
      "VRV / Inverter comercial provável",
      "Sistema VRV/VRF provável",
      "Máscara Daikin VRV.",
      "Não gerar dados críticos por máscara em VRV."
    )
  ),

  /* =========================================================
     FUJITSU
  ========================================================= */

  mask(
    "FUJITSU_AO",
    "FUJITSU",
    "Fujitsu",
    "Fujitsu unidade externa AO/AOU/AOYG",
    ["AO", "AOU", "AOYG", "AOBR", "AOH"],
    "^(AO|AOU|AOYG|AOBR|AOH)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Alta",
    REF_SPLIT,
    leitura(
      "Unidade externa Fujitsu provável",
      "Fujitsu split / inverter provável",
      "Inverter ou convencional conforme linha",
      "Unidade externa split provável",
      "Máscara Fujitsu AO/AOU/AOYG/AOBR.",
      "Validar conjunto interno/externo."
    )
  ),

  /* =========================================================
     KOMECO
  ========================================================= */

  mask(
    "KOMECO_KO",
    "KOMECO",
    "Komeco",
    "Komeco split / comercial leve",
    ["KOS", "KOP", "KO", "KOC", "KPI"],
    "^(KOS|KOP|KO|KOC|KPI)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Média",
    REF_SPLIT,
    leitura(
      "Código Komeco provável",
      "Komeco split / comercial provável",
      "Inverter ou convencional conforme linha",
      "Split / piso-teto provável",
      "Máscara Komeco KOS/KOP/KO.",
      "Validar etiqueta."
    )
  ),

  /* =========================================================
     PHILCO
  ========================================================= */

  mask(
    "PHILCO_PAC",
    "PHILCO",
    "Philco",
    "Philco split",
    ["PAC", "PHI", "PIF", "PCL", "PQC"],
    "^(PAC|PHI|PIF|PCL|PQC)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Média",
    REF_SPLIT,
    leitura(
      "Código Philco provável",
      "Philco split / inverter provável",
      "Inverter ou convencional conforme linha",
      "Split Hi Wall provável",
      "Máscara Philco PAC/PHI/PIF.",
      "Validar etiqueta."
    )
  ),

  /* =========================================================
     AGRATTO
  ========================================================= */

  mask(
    "AGRATTO_ICS",
    "AGRATTO",
    "Agratto",
    "Agratto split",
    ["ICS", "ACS", "ECS", "LCST", "LCS", "CCS"],
    "^(ICS|ACS|ECS|LCST|LCS|CCS)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Média",
    REF_SPLIT,
    leitura(
      "Código Agratto provável",
      "Agratto split provável",
      "Inverter ou convencional conforme linha",
      "Split Hi Wall provável",
      "Máscara Agratto ICS/ACS/ECS/LCST.",
      "Validar etiqueta."
    )
  ),

  /* =========================================================
     TCL
  ========================================================= */

  mask(
    "TCL_TAC",
    "TCL",
    "TCL",
    "TCL split TAC",
    ["TAC"],
    "^TAC[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    "Média",
    REF_SPLIT,
    leitura(
      "Código TCL provável",
      "TCL split / inverter provável",
      "Inverter ou convencional conforme linha",
      "Split Hi Wall provável",
      "Máscara TCL TAC.",
      "Validar etiqueta/manual."
    )
  )
];

/* =========================================================
   INTERPRETADOR GLOBAL SEM FALLBACK
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

  function extrairCapacidadeGenerica(codigo) {
    const m = codigo.match(/(07|09|10|12|15|18|22|24|28|30|36|42|48|54|56|60|80)/);
    return m ? m[1] : "";
  }

  function montarResultado(mascara, capacidadeCodigo) {
    const capacidadeProvavel = capacidadeCodigo ? (CAP_PADRAO[capacidadeCodigo] || "") : "";

    const referencia = capacidadeCodigo
      ? (
          mascara.referenciasTecnicas && mascara.referenciasTecnicas[capacidadeCodigo]
            ? mascara.referenciasTecnicas[capacidadeCodigo]
            : REF_SPLIT[capacidadeCodigo]
        )
      : null;

    let cicloProvavel = "Ciclo não confirmado pela máscara / validar etiqueta";

    if (mascara.id === "LG_SPLIT_INVERTER_ATUAL_FLEX") {
      if (codigoLimpo.includes("Q")) cicloProvavel = "Frio provável / variação Q";
      if (codigoLimpo.includes("W")) cicloProvavel = "Quente/Frio provável / variação W";
    }

    if (mascara.id.includes("MULTI") || mascara.id.includes("VRF") || mascara.id.includes("VRV")) {
      cicloProvavel = "Depende da combinação/projeto / validar no manual";
    }

    return {
      encontrado: true,
      tipoResultado: "mascara",
      fabricante: fabricante,
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

  for (const mascara of mascarasDoFabricante) {
    const inicioValido = mascara.padroesInicio.some((inicio) => {
      return codigoLimpo.startsWith(String(inicio).toUpperCase());
    });

    if (!inicioValido) continue;

    const regex = new RegExp(mascara.regexLimpo);

    if (!regex.test(codigoLimpo)) continue;

    let capacidadeCodigo = "";

    if (mascara.capacidadeRegex) {
      const reCap = new RegExp(mascara.capacidadeRegex);
      const m = codigoLimpo.match(reCap);
      capacidadeCodigo = m ? m[mascara.capacidadeGrupo || 1] : "";
    } else if (mascara.id.includes("VRF") || mascara.id.includes("VRV")) {
      capacidadeCodigo = "";
    } else {
      capacidadeCodigo = extrairCapacidadeGenerica(codigoLimpo);
    }

    return montarResultado(mascara, capacidadeCodigo);
  }

  return {
    encontrado: false,
    motivo: "O código não bateu com nenhuma máscara ativa do fabricante selecionado. Nenhum fallback foi aplicado."
  };
};
