/* HVAC PRO - databases/pressao_temp.js */

window.HVAC_PRESSAO_TEMP = {
  aviso: "Tabelas resumidas e aproximadas para consulta rápida. Sempre confirmar com tabela PT oficial do fabricante do fluido.",

  unidades: {
    temperatura: "°C",
    pressao: "psi"
  },

  tabelas: {
    "R410A": [
      { temp: "-10", pressao: "78" },
      { temp: "-5", pressao: "88" },
      { temp: "0", pressao: "100" },
      { temp: "5", pressao: "118" },
      { temp: "10", pressao: "138" },
      { temp: "15", pressao: "160" },
      { temp: "20", pressao: "185" },
      { temp: "25", pressao: "217" },
      { temp: "30", pressao: "275" },
      { temp: "35", pressao: "317" },
      { temp: "40", pressao: "360" },
      { temp: "45", pressao: "410" },
      { temp: "50", pressao: "465" }
    ],

    "R22": [
      { temp: "-10", pressao: "33" },
      { temp: "-5", pressao: "44" },
      { temp: "0", pressao: "57" },
      { temp: "5", pressao: "70" },
      { temp: "10", pressao: "84" },
      { temp: "15", pressao: "100" },
      { temp: "20", pressao: "118" },
      { temp: "25", pressao: "137" },
      { temp: "30", pressao: "158" },
      { temp: "35", pressao: "180" },
      { temp: "40", pressao: "203" },
      { temp: "45", pressao: "229" },
      { temp: "50", pressao: "256" }
    ],

    "R32": [
      { temp: "-10", pressao: "72" },
      { temp: "-5", pressao: "82" },
      { temp: "0", pressao: "92" },
      { temp: "5", pressao: "111" },
      { temp: "10", pressao: "132" },
      { temp: "15", pressao: "156" },
      { temp: "20", pressao: "183" },
      { temp: "25", pressao: "214" },
      { temp: "30", pressao: "269" },
      { temp: "35", pressao: "309" },
      { temp: "40", pressao: "353" },
      { temp: "45", pressao: "402" },
      { temp: "50", pressao: "455" }
    ],

    "R407C": [
      { temp: "-10", pressao: "35" },
      { temp: "-5", pressao: "48" },
      { temp: "0", pressao: "61" },
      { temp: "5", pressao: "75" },
      { temp: "10", pressao: "89" },
      { temp: "15", pressao: "107" },
      { temp: "20", pressao: "126" },
      { temp: "25", pressao: "148" },
      { temp: "30", pressao: "173" },
      { temp: "35", pressao: "198" },
      { temp: "40", pressao: "226" },
      { temp: "45", pressao: "257" },
      { temp: "50", pressao: "290" }
    ],

    "R134A": [
      { temp: "-10", pressao: "16" },
      { temp: "-5", pressao: "23" },
      { temp: "0", pressao: "31" },
      { temp: "5", pressao: "37" },
      { temp: "10", pressao: "45" },
      { temp: "15", pressao: "54" },
      { temp: "20", pressao: "65" },
      { temp: "25", pressao: "78" },
      { temp: "30", pressao: "93" },
      { temp: "35", pressao: "108" },
      { temp: "40", pressao: "123" },
      { temp: "45", pressao: "141" },
      { temp: "50", pressao: "160" }
    ],

    "R404A": [
      { temp: "-35", pressao: "11" },
      { temp: "-30", pressao: "19" },
      { temp: "-25", pressao: "29" },
      { temp: "-20", pressao: "40" },
      { temp: "-15", pressao: "53" },
      { temp: "-10", pressao: "67" },
      { temp: "-5", pressao: "83" },
      { temp: "0", pressao: "101" },
      { temp: "10", pressao: "145" },
      { temp: "20", pressao: "200" },
      { temp: "30", pressao: "280" },
      { temp: "40", pressao: "374" }
    ],

    "R507A": [
      { temp: "-35", pressao: "12" },
      { temp: "-30", pressao: "20" },
      { temp: "-25", pressao: "31" },
      { temp: "-20", pressao: "42" },
      { temp: "-15", pressao: "55" },
      { temp: "-10", pressao: "70" },
      { temp: "-5", pressao: "87" },
      { temp: "0", pressao: "105" },
      { temp: "10", pressao: "151" },
      { temp: "20", pressao: "210" },
      { temp: "30", pressao: "290" },
      { temp: "40", pressao: "386" }
    ],

    "R448A": [
      { temp: "-35", pressao: "8" },
      { temp: "-30", pressao: "15" },
      { temp: "-25", pressao: "24" },
      { temp: "-20", pressao: "35" },
      { temp: "-15", pressao: "47" },
      { temp: "-10", pressao: "60" },
      { temp: "-5", pressao: "75" },
      { temp: "0", pressao: "92" },
      { temp: "10", pressao: "132" },
      { temp: "20", pressao: "185" },
      { temp: "30", pressao: "255" },
      { temp: "40", pressao: "336" }
    ],

    "R449A": [
      { temp: "-35", pressao: "9" },
      { temp: "-30", pressao: "16" },
      { temp: "-25", pressao: "25" },
      { temp: "-20", pressao: "36" },
      { temp: "-15", pressao: "48" },
      { temp: "-10", pressao: "61" },
      { temp: "-5", pressao: "77" },
      { temp: "0", pressao: "94" },
      { temp: "10", pressao: "135" },
      { temp: "20", pressao: "188" },
      { temp: "30", pressao: "260" },
      { temp: "40", pressao: "342" }
    ],

    "R600A": [
      { temp: "-30", pressao: "0" },
      { temp: "-25", pressao: "1" },
      { temp: "-20", pressao: "4" },
      { temp: "-15", pressao: "7" },
      { temp: "-10", pressao: "10" },
      { temp: "-5", pressao: "13" },
      { temp: "0", pressao: "17" },
      { temp: "10", pressao: "28" },
      { temp: "20", pressao: "42" },
      { temp: "30", pressao: "58" },
      { temp: "40", pressao: "78" }
    ],

    "R290": [
      { temp: "-35", pressao: "3" },
      { temp: "-30", pressao: "8" },
      { temp: "-25", pressao: "15" },
      { temp: "-20", pressao: "22" },
      { temp: "-15", pressao: "30" },
      { temp: "-10", pressao: "38" },
      { temp: "-5", pressao: "48" },
      { temp: "0", pressao: "59" },
      { temp: "10", pressao: "87" },
      { temp: "20", pressao: "120" },
      { temp: "30", pressao: "158" },
      { temp: "40", pressao: "203" }
    ]
  }
};
