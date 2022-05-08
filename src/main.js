const hoteis = [
  {
    hotel: "Lakewood",
    classificacao: 3,
    diasSemana: {
      regular: 110,
      rewards: 80,
    },
    finalSemana: {
      regular: 90,
      rewards: 80,
    },
  },
  {
    hotel: "Bridgewood",
    classificacao: 4,
    diasSemana: {
      regular: 160,
      rewards: 110,
    },
    finalSemana: {
      rewards: 50,
      regular: 60,
    },
  },
  {
    hotel: "Ridgewood",
    classificacao: 5,
    diasSemana: {
      regular: 220,
      rewards: 100,
    },
    finalSemana: {
      regular: 150,
      rewards: 40,
    },
  },
];

const diasSemana = ["mon", "tues", "wed", "thur", "fri"];
const finalSemana = ["sat", "sun"];

//DO NOT change the function's name.
function getCheapestHotel(input) {
  const tipoCliente = input.split(":")[0].toLocaleLowerCase();
  const diasDoCliente = input.split(":")[1].split(",");
  const dias = totaldeDias(diasDoCliente, tipoCliente);

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

const totaldeDias = (diasDoCliente, tipoCliente) => {
  const dias = separandoOsDias(diasDoCliente);

  let totalDeDias = {
    cliente: tipoCliente,
    semana: 0,
    final: 0,
  };

  dias.map((dia) => {
    const semana = diasSemana.find(
      (diasemana) => diasemana.toLowerCase() === dia.toLowerCase()
    );

    if (semana) {
      totalDeDias = {
        ...totalDeDias,
        semana: totalDeDias.semana + 1,
      };
    }

    const final = finalSemana.find(
      (diasemana) => diasemana.toLowerCase() === dia.toLowerCase()
    );

    if (final) {
      totalDeDias = {
        ...totalDeDias,
        final: totalDeDias.final + 1,
      };
    }
  });
  return totalDeDias;
};

const separandoOsDias = (diasDoCliente) => {
  const dias = [];

  diasDoCliente.map((item) => {
    if (item.toLocaleLowerCase().indexOf("mon") !== -1) {
      dias.push("mon");
    }
    if (item.toLocaleLowerCase().indexOf("tues") !== -1) {
      dias.push("tues");
    }
    if (item.toLocaleLowerCase().indexOf("wed") !== -1) {
      dias.push("wed");
    }
    if (item.toLocaleLowerCase().indexOf("thur") !== -1) {
      dias.push("thur");
    }
    if (item.toLocaleLowerCase().indexOf("fri") !== -1) {
      dias.push("fri");
    }
    if (item.toLocaleLowerCase().indexOf("sat") !== -1) {
      dias.push("sat");
    }
    if (item.toLocaleLowerCase().indexOf("sun") !== -1) {
      dias.push("sun");
    }
  });

  return dias;
};

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
