/* HVAC PRO - databases/mascaras_fabricantes.js
   MÁSCARAS DE FABRICANTES - v6640

   REGRA:
   - O técnico escolhe o fabricante primeiro.
   - Depois digita o código do condensador.
   - O app aplica somente máscaras do fabricante selecionado.
   - Dados gerados por máscara são prováveis/estimados.
   - Manual, etiqueta e acervo oficial continuam sendo a fonte final para dado crítico.
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
  "30": "30.000 BTU/h provável",
  "36": "36.000 BTU/h provável",
  "42": "42.000 BTU/h provável",
  "48": "48.000 BTU/h provável",
  "54": "54.000 BTU/h provável",
  "56": "56.000 BTU/h provável",
  "60": "60.000 BTU/h provável",
  "80": "80.000 BTU/h provável"
};

const REF_SPLIT_INVERTER = {
  "07": { gasProvavel: "R-410A / R-32 conforme geração", tensaoProvavel: "127V ou 220V conforme modelo", correnteEstimada: "Faixa estimada: 3 A a 6 A", tubulacaoProvavel: "1/4\" x 3/8\" provável" },
  "09": { gasProvavel: "R-410A / R-32 conforme geração", tensaoProvavel: "127V ou 220V conforme modelo", correnteEstimada: "Faixa estimada: 3,5 A a 7 A", tubulacaoProvavel: "1/4\" x 3/8\" provável" },
  "10": { gasProvavel: "R-410A / R-32 conforme geração", tensaoProvavel: "127V ou 220V conforme modelo", correnteEstimada: "Faixa estimada: 4 A a 8 A", tubulacaoProvavel: "1/4\" x 3/8\" provável" },
  "12": { gasProvavel: "R-410A / R-32 conforme geração", tensaoProvavel: "127V ou 220V conforme modelo", correnteEstimada: "Faixa estimada: 5 A a 10 A", tubulacaoProvavel: "1/4\" x 3/8\" provável" },
  "15": { gasProvavel: "R-410A / R-32 conforme geração", tensaoProvavel: "220V provável", correnteEstimada: "Faixa estimada: 6 A a 11 A", tubulacaoProvavel: "1/4\" x 1/2\" provável" },
  "18": { gasProvavel: "R-410A / R-32 conforme geração", tensaoProvavel: "220V provável", correnteEstimada: "Faixa estimada: 7 A a 14 A", tubulacaoProvavel: "1/4\" x 1/2\" provável" },
  "22": { gasProvavel: "R-410A / R-32 conforme geração", tensaoProvavel: "220V provável", correnteEstimada: "Faixa estimada: 8 A a 16 A", tubulacaoProvavel: "1/4\" x 1/2\" ou 3/8\" x 5/8\" provável" },
  "24": { gasProvavel: "R-410A / R-32 conforme geração", tensaoProvavel: "220V provável", correnteEstimada: "Faixa estimada: 9 A a 18 A", tubulacaoProvavel: "1/4\" x 1/2\" ou 3/8\" x 5/8\" provável" },
  "30": { gasProvavel: "R-410A / R-32 conforme geração", tensaoProvavel: "220V provável", correnteEstimada: "Faixa estimada: 11 A a 22 A", tubulacaoProvavel: "3/8\" x 5/8\" provável" },
  "36": { gasProvavel: "R-410A / R-32 conforme geração", tensaoProvavel: "220V provável / 380V em alguns comerciais", correnteEstimada: "Faixa estimada: 14 A a 28 A", tubulacaoProvavel: "3/8\" x 5/8\" provável" }
};

const REF_ANTIGO_ONOFF = {
  "07": { gasProvavel: "R-22 / R-410A conforme geração", tensaoProvavel: "127V ou 220V conforme etiqueta", correnteEstimada: "Validar na etiqueta", tubulacaoProvavel: "1/4\" x 3/8\" provável" },
  "09": { gasProvavel: "R-22 / R-410A conforme geração", tensaoProvavel: "127V ou 220V conforme etiqueta", correnteEstimada: "Faixa antiga estimada: 4 A a 9 A", tubulacaoProvavel: "1/4\" x 3/8\" provável" },
  "12": { gasProvavel: "R-22 / R-410A conforme geração", tensaoProvavel: "127V ou 220V conforme etiqueta", correnteEstimada: "Faixa antiga estimada: 5 A a 12 A", tubulacaoProvavel: "1/4\" x 3/8\" provável" },
  "18": { gasProvavel: "R-22 / R-410A conforme geração", tensaoProvavel: "220V provável", correnteEstimada: "Faixa antiga estimada: 7 A a 16 A", tubulacaoProvavel: "1/4\" x 1/2\" provável" },
  "24": { gasProvavel: "R-22 / R-410A conforme geração", tensaoProvavel: "220V provável", correnteEstimada: "Faixa antiga estimada: 10 A a 22 A", tubulacaoProvavel: "3/8\" x 5/8\" ou 1/4\" x 1/2\" provável" }
};

const REF_COMERCIAL = {
  "18": { gasProvavel: "R-410A / R-32 conforme linha", tensaoProvavel: "220V provável", correnteEstimada: "Validar na etiqueta", tubulacaoProvavel: "1/4\" x 1/2\" provável" },
  "24": { gasProvavel: "R-410A / R-32 conforme linha", tensaoProvavel: "220V provável", correnteEstimada: "Validar na etiqueta", tubulacaoProvavel: "3/8\" x 5/8\" ou 1/4\" x 1/2\" provável" },
  "30": { gasProvavel: "R-410A / R-32 conforme linha", tensaoProvavel: "220V provável", correnteEstimada: "Validar na etiqueta", tubulacaoProvavel: "3/8\" x 5/8\" provável" },
  "36": { gasProvavel: "R-410A / R-32 conforme linha", tensaoProvavel: "220V / 380V conforme modelo", correnteEstimada: "Validar na etiqueta", tubulacaoProvavel: "3/8\" x 5/8\" provável" },
  "42": { gasProvavel: "R-410A / R-32 conforme linha", tensaoProvavel: "220V / 380V conforme modelo", correnteEstimada: "Validar na etiqueta", tubulacaoProvavel: "3/8\" x 5/8\" provável" },
  "48": { gasProvavel: "R-410A / R-32 conforme linha", tensaoProvavel: "220V / 380V conforme modelo", correnteEstimada: "Validar na etiqueta", tubulacaoProvavel: "3/8\" x 5/8\" ou maior conforme linha" },
  "54": { gasProvavel: "R-410A / R-32 conforme linha", tensaoProvavel: "220V / 380V conforme modelo", correnteEstimada: "Validar na etiqueta", tubulacaoProvavel: "Validar no manual/etiqueta" },
  "56": { gasProvavel: "R-410A / R-32 conforme linha", tensaoProvavel: "220V / 380V conforme modelo", correnteEstimada: "Validar na etiqueta", tubulacaoProvavel: "Validar no manual/etiqueta" },
  "60": { gasProvavel: "R-410A / R-32 conforme linha", tensaoProvavel: "220V / 380V conforme modelo", correnteEstimada: "Validar na etiqueta", tubulacaoProvavel: "Validar no manual/etiqueta" },
  "80": { gasProvavel: "R-410A / R-32 conforme linha", tensaoProvavel: "380V provável em muitos comerciais", correnteEstimada: "Validar na etiqueta", tubulacaoProvavel: "Validar no manual/etiqueta" }
};

const REF_R32_SPLIT = {
  "09": { gasProvavel: "R-32 provável", tensaoProvavel: "127V ou 220V conforme modelo", correnteEstimada: "Faixa estimada: 3,5 A a 7 A", tubulacaoProvavel: "1/4\" x 3/8\" provável" },
  "12": { gasProvavel: "R-32 provável", tensaoProvavel: "127V ou 220V conforme modelo", correnteEstimada: "Faixa estimada: 5 A a 10 A", tubulacaoProvavel: "1/4\" x 3/8\" provável" },
  "18": { gasProvavel: "R-32 provável", tensaoProvavel: "220V provável", correnteEstimada: "Faixa estimada: 7 A a 14 A", tubulacaoProvavel: "1/4\" x 1/2\" provável" },
  "24": { gasProvavel: "R-32 provável", tensaoProvavel: "220V provável", correnteEstimada: "Faixa estimada: 9 A a 18 A", tubulacaoProvavel: "1/4\" x 1/2\" ou 3/8\" x 5/8\" provável" }
};

function makeLeitura(tipoCodigo, linhaProvavel, tecnologia, tipoEquipamento, origemLeitura, observacao) {
  return { tipoCodigo, linhaProvavel, tecnologia, tipoEquipamento, origemLeitura, observacao };
}

window.mascarasFabricantes = [

  /* LG */
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
    capacidadeRegex: "^(S3|S4|U4)[QW]([0-9]{2})",
    capacidadeGrupo: 2,
    leitura: makeLeitura("Condensadora provável", "LG Inverter / Dual Inverter provável", "Inverter / Dual Inverter provável", "Split Hi Wall provável", "Máscara LG baseada em S3/S4/U4.", "Validar etiqueta/manual.")
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
    referenciasTecnicas: REF_COMERCIAL,
    capacidadeRegex: "^A[0-9]UW([0-9]{2})",
    capacidadeGrupo: 1,
    leitura: makeLeitura("Unidade externa Multi Split provável", "LG Multi Split Inverter provável", "Inverter provável", "Unidade externa Multi Split provável", "Máscara LG baseada em A*UW.", "Em Multi Split, validar combinação das evaporadoras.")
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
    capacidadeRegex: "^AS[A-Z]([0-9]{2})",
    capacidadeGrupo: 1,
    leitura: makeLeitura("Código LG antigo provável", "LG Split antigo / on-off provável", "Convencional / on-off provável", "Split Hi Wall antigo provável", "Máscara LG baseada em AS.", "Confiabilidade média. Validar etiqueta/manual.")
  },
  {
    id: "LG_COMERCIAL_LEVE",
    fabricante: "LG",
    grupo: "LG Electronics",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "LG Comercial leve",
    padroesInicio: ["UV", "UT", "LT", "LV", "AT", "AU"],
    regexLimpo: "^(UV|UT|LT|LV|AT|AU)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_COMERCIAL,
    leitura: makeLeitura("Código comercial LG provável", "LG comercial leve provável", "Inverter ou convencional conforme linha", "Piso-teto / cassete / dutado provável", "Máscara LG comercial UV/UT/LT/LV/AT/AU.", "Validar etiqueta/manual.")
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
    leitura: makeLeitura("Código VRF / Multi V provável", "LG Multi V / VRF provável", "VRF / Inverter comercial provável", "Sistema VRF provável", "Máscara LG ARU/ARUN/ARUV/ARNU.", "Não gerar dados críticos por máscara em VRF.")
  },

  /* MIDEA / SPRINGER / CARRIER */
  {
    id: "MIDEA_38_RESIDENCIAL",
    fabricante: "MIDEA",
    grupo: "Midea / Springer / Carrier",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Midea/Springer/Carrier unidade externa 38",
    padroesInicio: ["38"],
    regexLimpo: "^38[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_R32_SPLIT,
    leitura: makeLeitura("Condensadora / unidade externa provável", "Midea/Springer/Carrier residencial provável", "Inverter ou convencional conforme série", "Split Hi Wall provável", "Prefixo 38 usado como unidade externa em muitos conjuntos do grupo Midea.", "Códigos 42 costumam ser unidade interna; 38 é o foco da condensadora.")
  },
  {
    id: "MIDEA_40_COMERCIAL",
    fabricante: "MIDEA",
    grupo: "Midea / Springer / Carrier",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Midea/Springer/Carrier comercial 40",
    padroesInicio: ["40"],
    regexLimpo: "^40[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_COMERCIAL,
    leitura: makeLeitura("Código comercial provável", "Midea/Springer/Carrier comercial provável", "Inverter ou convencional conforme linha", "Cassete / piso-teto / dutado provável", "Prefixo 40 aparece em linhas comerciais do grupo Midea.", "Validar se é unidade externa ou parte do conjunto.")
  },
  {
    id: "MIDEA_MSC_MSA_MST",
    fabricante: "MIDEA",
    grupo: "Midea / Springer / Carrier",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Midea/Springer códigos antigos MSC/MSA/MST",
    padroesInicio: ["MSC", "MSA", "MST", "MSE", "MSV"],
    regexLimpo: "^(MSC|MSA|MST|MSE|MSV)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_ANTIGO_ONOFF,
    leitura: makeLeitura("Código Midea/Springer antigo provável", "Midea/Springer antigo provável", "Convencional ou inverter conforme sufixo", "Split provável", "Máscara baseada em prefixos antigos MSC/MSA/MST/MSE/MSV.", "Validar na etiqueta/manual.")
  },

  /* GREE */
  {
    id: "GREE_GWC_GWH_SPLIT",
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
    leitura: makeLeitura("Código split Gree provável", "Gree split provável", "Inverter ou convencional conforme sufixo", "Split Hi Wall provável", "Máscara Gree GWC/GWH.", "Validar etiqueta/manual.")
  },
  {
    id: "GREE_GKC_GTC_GULD_COMERCIAL",
    fabricante: "GREE",
    grupo: "Gree",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Gree comercial GKC/GTC/GULD",
    padroesInicio: ["GKC", "GTC", "GULD"],
    regexLimpo: "^(GKC|GTC|GULD)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_COMERCIAL,
    leitura: makeLeitura("Unidade externa/comercial Gree provável", "Gree comercial provável", "Inverter ou convencional conforme linha", "Piso-teto / cassete / comercial provável", "Máscara Gree GKC/GTC/GULD.", "Final /O reforça outdoor/unidade externa.")
  },

  /* ELGIN */
  {
    id: "ELGIN_HJ_45HJ",
    fabricante: "ELGIN",
    grupo: "Elgin",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Elgin Hi Wall HJ/45HJ",
    padroesInicio: ["45HJ", "HJ"],
    regexLimpo: "^(45HJ|HJ)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura("Condensadora Elgin Hi Wall provável", "Elgin Eco / Eco Inverter provável", "Inverter ou convencional conforme sufixo", "Split Hi Wall provável", "Máscara Elgin HJ/45HJ.", "Validar modelo da condensadora.")
  },
  {
    id: "ELGIN_PIF_PTE_K7",
    fabricante: "ELGIN",
    grupo: "Elgin",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Elgin piso-teto / cassete",
    padroesInicio: ["PIF", "PTE", "K7E", "K7I", "K7F"],
    regexLimpo: "^(PIF|PTE|K7E|K7I|K7F)[A-Z0-9]*[0-9]{2,3}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_COMERCIAL,
    leitura: makeLeitura("Código comercial Elgin provável", "Elgin piso-teto / cassete provável", "Inverter ou convencional conforme linha", "Piso-teto / cassete provável", "Máscara Elgin PIF/PTE/K7.", "Validar etiqueta/manual.")
  },

  /* SAMSUNG */
  {
    id: "SAMSUNG_AR_SPLIT",
    fabricante: "SAMSUNG",
    grupo: "Samsung",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Samsung AR WindFree / Split",
    padroesInicio: ["AR"],
    regexLimpo: "^AR[0-9]{2}[A-Z0-9]+$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    capacidadeRegex: "^AR([0-9]{2})",
    capacidadeGrupo: 1,
    leitura: makeLeitura("Código Samsung split provável", "Samsung WindFree / Digital Inverter provável", "Inverter provável", "Split Hi Wall provável", "Máscara Samsung AR + capacidade.", "Validar se o código é unidade externa ou conjunto.")
  },
  {
    id: "SAMSUNG_AC_COMERCIAL",
    fabricante: "SAMSUNG",
    grupo: "Samsung",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Samsung comercial AC",
    padroesInicio: ["AC"],
    regexLimpo: "^AC[0-9]{3}[A-Z0-9]+$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_COMERCIAL,
    capacidadeRegex: "^AC0?([0-9]{2})",
    capacidadeGrupo: 1,
    leitura: makeLeitura("Código comercial Samsung provável", "Samsung comercial provável", "Inverter ou convencional conforme linha", "Cassete / piso-teto / dutado provável", "Máscara Samsung AC.", "Validar em manual comercial.")
  },

  /* CONSUL */
  {
    id: "CONSUL_CBK_CBN_CBF",
    fabricante: "CONSUL",
    grupo: "Consul / Whirlpool",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Consul Split CBK/CBN/CBF",
    padroesInicio: ["CBK", "CBN", "CBF"],
    regexLimpo: "^(CBK|CBN|CBF)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura("Código Consul split provável", "Consul Split provável", "Inverter ou convencional conforme família", "Split Hi Wall provável", "Máscara Consul CBK/CBN/CBF.", "Validar etiqueta/página oficial.")
  },

  /* ELECTROLUX */
  {
    id: "ELECTROLUX_JE_YE_UE",
    fabricante: "ELECTROLUX",
    grupo: "Electrolux",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Electrolux unidade externa JE/YE/UE",
    padroesInicio: ["JE", "YE", "UE", "FE", "TE", "DE", "PE"],
    regexLimpo: "^(JE|YE|UE|FE|TE|DE|PE)[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_R32_SPLIT,
    capacidadeRegex: "^(JE|YE|UE|FE|TE|DE|PE)([0-9]{2})",
    capacidadeGrupo: 2,
    leitura: makeLeitura("Unidade externa Electrolux provável", "Electrolux Color Adapt / Inverter provável", "Inverter provável", "Unidade externa split provável", "Máscara Electrolux JE/YE/UE.", "Validar conjunto interno/externo.")
  },

  /* DAIKIN */
  {
    id: "DAIKIN_RX_RK_RZ",
    fabricante: "DAIKIN",
    grupo: "Daikin",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Daikin unidade externa RX/RK/RZ",
    padroesInicio: ["RX", "RK", "RZ", "RXS", "RXM", "RXN", "RKC"],
    regexLimpo: "^(RX|RK|RZ|RXS|RXM|RXN|RKC)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura("Unidade externa Daikin provável", "Daikin split / inverter provável", "Inverter ou convencional conforme linha", "Split / unidade externa provável", "Máscara Daikin RX/RK/RZ.", "Validar etiqueta/manual.")
  },
  {
    id: "DAIKIN_VRV_RXY",
    fabricante: "DAIKIN",
    grupo: "Daikin",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Daikin VRV / comercial",
    padroesInicio: ["RXY", "RYY", "RQ", "REYQ", "RXYQ"],
    regexLimpo: "^(RXY|RYY|RQ|REYQ|RXYQ)[A-Z0-9]+$",
    capacidades: {},
    referenciasTecnicas: {},
    leitura: makeLeitura("Código VRV/VRF Daikin provável", "Daikin VRV / comercial provável", "VRV / Inverter comercial provável", "Sistema VRV/VRF provável", "Máscara Daikin VRV.", "Não gerar dados críticos por máscara em VRV.")
  },

  /* FUJITSU */
  {
    id: "FUJITSU_AO_AOU_AOYG",
    fabricante: "FUJITSU",
    grupo: "Fujitsu",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Alta",
    nomeMascara: "Fujitsu unidade externa AO/AOU/AOYG",
    padroesInicio: ["AO", "AOU", "AOYG", "AOBR", "AOH"],
    regexLimpo: "^(AO|AOU|AOYG|AOBR|AOH)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura("Unidade externa Fujitsu provável", "Fujitsu split / inverter provável", "Inverter ou convencional conforme linha", "Unidade externa split provável", "Máscara Fujitsu AO/AOU/AOYG/AOBR.", "Validar conjunto interno/externo.")
  },

  /* KOMECO */
  {
    id: "KOMECO_KOS_KOP_KO",
    fabricante: "KOMECO",
    grupo: "Komeco",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Komeco split / comercial leve",
    padroesInicio: ["KOS", "KOP", "KO", "KOC", "KPI"],
    regexLimpo: "^(KOS|KOP|KO|KOC|KPI)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura("Código Komeco provável", "Komeco split / comercial provável", "Inverter ou convencional conforme linha", "Split / piso-teto provável", "Máscara Komeco KOS/KOP/KO.", "Validar etiqueta.")
  },

  /* PHILCO */
  {
    id: "PHILCO_PAC_PHI_PIF",
    fabricante: "PHILCO",
    grupo: "Philco",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Philco split",
    padroesInicio: ["PAC", "PHI", "PIF", "PCL", "PQC"],
    regexLimpo: "^(PAC|PHI|PIF|PCL|PQC)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura("Código Philco provável", "Philco split / inverter provável", "Inverter ou convencional conforme linha", "Split Hi Wall provável", "Máscara Philco PAC/PHI/PIF.", "Validar etiqueta.")
  },

  /* AGRATTO */
  {
    id: "AGRATTO_ICS_ACS_ECS",
    fabricante: "AGRATTO",
    grupo: "Agratto",
    status: "ativo",
    tipoMascara: "condensadora",
    confiabilidadeGeral: "Média",
    nomeMascara: "Agratto split",
    padroesInicio: ["ICS", "ACS", "ECS", "LCST", "LCS", "CCS"],
    regexLimpo: "^(ICS|ACS|ECS|LCST|LCS|CCS)[A-Z0-9]*[0-9]{2}[A-Z0-9]*$",
    capacidades: CAP_PADRAO,
    referenciasTecnicas: REF_SPLIT_INVERTER,
    leitura: makeLeitura("Código Agratto provável", "Agratto split provável", "Inverter ou convencional conforme linha", "Split Hi Wall provável", "Máscara Agratto ICS/ACS/ECS/LCST.", "Validar etiqueta.")
  },

  /* TCL */
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
    leitura: makeLeitura("Código TCL provável", "TCL split / inverter provável", "Inverter ou convencional conforme linha", "Split Hi Wall provável", "Máscara TCL TAC.", "Validar etiqueta/manual.")
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

    if (mascara.capacidadeRegex) {
      const reCap = new RegExp(mascara.capacidadeRegex);
      const m = codigoLimpo.match(reCap);
      capacidadeCodigo = m ? m[mascara.capacidadeGrupo || 1] : "";
    } else if (mascara.id.includes("VRF") || mascara.id.includes("VRV")) {
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

    let cicloProvavel = "Ciclo não confirmado pela máscara / validar etiqueta";

    if (mascara.id === "LG_SPLIT_INVERTER_ATUAL") {
      if (codigoLimpo.includes("Q")) cicloProvavel = "Frio provável / variação Q";
      if (codigoLimpo.includes("W")) cicloProvavel = "Quente/Frio provável / variação W";
    }

    if (mascara.id.includes("MULTI") || mascara.id.includes("VRF") || mascara.id.includes("VRV")) {
      cicloProvavel = "Depende da combinação/projeto / validar no manual";
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
