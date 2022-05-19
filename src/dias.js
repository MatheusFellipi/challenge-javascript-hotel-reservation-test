const hotels = require("./hoteis");
const hoteis = hotels.hoteis;

module.exports = class Dias {
  constructor(diasDoCliente, tipoCliente) {
    this._diasDoCliente = diasDoCliente;
    this._totalDeDias = {
      cliente: tipoCliente,
      semana: 0,
      final: 0,
    };
    this._valorHotel = [];
  }

  get totalDeDias() {
    return this._totalDeDias;
  }
  get valorHotel() {
    return this._valorHotel;
  }
  get melhorHotel() {
    return this._valorHotel.sort(this.sortTotal("total", "classificacao"))[0];
  }

  separandoOsDias() {
    this._diasDoCliente.map((item) => {
      if (item.toLocaleLowerCase().indexOf("mon") !== -1) {
        this.quandidadeDeDiasSemana();
      }
      if (item.toLocaleLowerCase().indexOf("tues") !== -1) {
        this.quandidadeDeDiasSemana();
      }
      if (item.toLocaleLowerCase().indexOf("wed") !== -1) {
        this.quandidadeDeDiasSemana();
      }
      if (item.toLocaleLowerCase().indexOf("thur") !== -1) {
        this.quandidadeDeDiasSemana();
      }
      if (item.toLocaleLowerCase().indexOf("fri") !== -1) {
        this.quandidadeDeDiasSemana();
      }
      if (item.toLocaleLowerCase().indexOf("sat") !== -1) {
        this.quandidadeDeDiasFinal();
      }
      if (item.toLocaleLowerCase().indexOf("sun") !== -1) {
        this.quandidadeDeDiasFinal();
      }
    });
    this.somaDosdias();
  }

  somaDosdias() {
    let obj = {
      hotel: "",
      classificacao: 0,
      total: 0,
    };

    hoteis.map((item) => {
      obj = {
        hotel: item.hotel,
        classificacao: item.classificacao,
        total:
          item.finalSemana[this._totalDeDias.cliente] *
            this._totalDeDias.final +
          item.diasSemana[this._totalDeDias.cliente] * this._totalDeDias.semana,
      };

      this._valorHotel.push(obj);
    });
  }

  sortTotal(array, array1) {
    return function (a, b) {
      if (a[array] > b[array] || a[array1] < b[array1]) {
        return 1;
      } else if (a[array] < b[array] || a[array1] > b[array1]) {
        return -1;
      }
      return 0;
    };
  }
  quandidadeDeDiasSemana() {
    this._totalDeDias = {
      ...this._totalDeDias,
      semana: this._totalDeDias.semana + 1,
    };
  }
  quandidadeDeDiasFinal() {
    this._totalDeDias = {
      ...this._totalDeDias,
      final: this._totalDeDias.final + 1,
    };
  }
};
