const hotels = require("./hoteis");
const dia = require("./dias");
const hoteis = hotels.hoteis;

function getCheapestHotel(input) {
  const tipoCliente = input.split(":")[0].toLocaleLowerCase();
  const diasDoCliente = input.split(":")[1].split(",");
  const dias = dia.totaldeDias(diasDoCliente, tipoCliente);

  const valorHotel = [];
  let obj = {
    hotel: "",
    total: 0,
  };

  hoteis.map((item) => {
    obj = {
      hotel: item.hotel,
      classificacao: item.classificacao,
      total:
        item.finalSemana[dias.cliente] * dias.final +
        item.diasSemana[dias.cliente] * dias.semana,
    };

    valorHotel.push(obj);
  });

  const melhorHotel = valorHotel.sort(sortTotal("total", "classificacao"))[0];

  return melhorHotel.hotel;
}

function sortTotal(array, array1) {
  return function (a, b) {
    if (a[array] > b[array] || a[array1] < b[array1]) {
      return 1;
    } else if (a[array] < b[array] || a[array1] > b[array1]) {
      return -1;
    }
    return 0;
  };
}

exports.getCheapestHotel = getCheapestHotel;
