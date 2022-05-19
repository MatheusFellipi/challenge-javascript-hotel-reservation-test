const Dias = require("./dias.js");

function getCheapestHotel(input) {
  const tipoCliente = input.split(":")[0].toLocaleLowerCase();
  const diasDoCliente = input.split(":")[1].split(",");

  const dias = new Dias(diasDoCliente, tipoCliente);
  dias.separandoOsDias();

  return dias.melhorHotel.hotel;
}

exports.getCheapestHotel = getCheapestHotel;
