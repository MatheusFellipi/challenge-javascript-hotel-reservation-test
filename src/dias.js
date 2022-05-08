const diasSemana = ["mon", "tues", "wed", "thur", "fri"];
const finalSemana = ["sat", "sun"];

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

exports.totaldeDias = totaldeDias;
