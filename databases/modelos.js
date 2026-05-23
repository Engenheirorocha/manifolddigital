/* HVAC PRO - databases/modelos.js
   Extraído do HTML principal original. */

window.errorCategories = [
  {
    name: "Split",
    search: ["split", "evaporadora"],
    icon: `<svg viewBox="0 0 100 100" fill="none"><rect x="15" y="25" width="70" height="32" rx="8" stroke="#ff3636" stroke-width="6"/><path d="M24 44H76" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/><path d="M34 62C42 68 58 68 66 62" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/></svg>`
  },
  {
    name: "Cassete",
    search: ["cassete", "casete", "teto"],
    icon: `<svg viewBox="0 0 100 100" fill="none"><rect x="22" y="18" width="56" height="56" rx="8" stroke="#ff3636" stroke-width="6"/><rect x="36" y="32" width="28" height="28" rx="5" stroke="#ff3636" stroke-width="5"/><path d="M50 20V32M50 60V72M24 46H36M64 46H76" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/></svg>`
  },
  {
    name: "Janela",
    search: ["janela", "ar janela", "ar de janela"],
    icon: `<svg viewBox="0 0 100 100" fill="none"><rect x="22" y="20" width="56" height="60" rx="8" stroke="#ff3636" stroke-width="6"/><path d="M30 38H70" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/><path d="M34 52H66M34 63H66" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/><circle cx="67" cy="70" r="4" fill="#ff3636"/></svg>`
  },
  {
    name: "Piso Teto",
    search: ["piso teto", "piso-teto", "piso", "teto"],
    icon: `<svg viewBox="0 0 100 100" fill="none"><rect x="18" y="24" width="64" height="28" rx="7" stroke="#ff3636" stroke-width="6"/><path d="M28 42H72" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/><path d="M30 58V76M50 58V76M70 58V76" stroke="#ff3636" stroke-width="5" stroke-linecap="round"/></svg>`
  }
];

window.brandsByCategory = {
  "Split": ["Midea","Springer","Carrier","Samsung","LG","Gree","Elgin","Daikin","Fujitsu","Panasonic","Philco","Electrolux","Consul","TCL","Agratto","Komeco","Hisense"],
  "Cassete": ["Midea","Carrier","Samsung","LG","Gree","Daikin","Fujitsu","Electrolux","Hitachi","Trane","York"],
  "Janela": ["Consul","Springer","Midea","Electrolux","Philco","Gree","Elgin"],
  "Piso Teto": ["Midea","Carrier","LG","Gree","Elgin","Daikin","Fujitsu","TCL","Komeco","Hitachi","Trane","York"]
};

window.modelsByBrand = {
  "Midea": ["Xtreme Save","AirVolution","Springer Midea","Liva","Inverter","Cassete Inverter","Piso Teto Inverter"],
  "Springer": ["AirVolution","Midea Springer","Janela Eletrônico","Janela Mecânico"],
  "Carrier": ["XPower","Inverter Carrier","Piso Teto Space","Cassete Carrier"],
  "Samsung": ["WindFree","Digital Inverter","Max Plus","Cassete 4 Vias"],
  "LG": ["Dual Inverter","ArtCool","Voice","UV Nano","Cassete Inverter","Piso Teto Inverter"],
  "Gree": ["Eco Garden","G-Top","G-Diamond","Cassete Gree"],
  "Elgin": ["Eco Inverter","Hi Wall Eco","Piso Teto Elgin"],
  "Daikin": ["Advance","EcoSwing","Cassete SkyAir","Piso Teto Daikin"],
  "Fujitsu": ["Hi Wall Inverter","Cassete Fujitsu","Piso Teto Fujitsu"],
  "Panasonic": ["Econavi","Inverter Panasonic"],
  "Philco": ["PAC Inverter","Janela Philco"],
  "Electrolux": ["Eco Turbo","Janela Eletrônico","Cassete Electrolux"],
  "Consul": ["Facilite","Bem Estar","Janela Consul"],
  "TCL": ["Elite Series","TAC Inverter"],
  "Agratto": ["Neo Top","One Top"],
  "Komeco": ["Komeco Inverter","Piso Teto Komeco"],
  "Hisense": ["Energy Pro","Hi Wall Inverter"],
  "Hitachi": ["Set Free","Cassete Hitachi","Piso Teto Hitachi"],
  "Trane": ["Cassete Trane","Piso Teto Trane"],
  "York": ["Cassete York","Piso Teto York"]
};
