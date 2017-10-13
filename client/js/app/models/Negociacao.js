class Negociacao {

  constructor(data, qtde, valor) {
    this._data = new Date(data.getTime());  // Progr. defensiva
    this._qtde = qtde;
    this._valor = valor;
    Object.freeze(this);
  }

  get volume() {
    return this._qtde * this._valor;
  }

  get data() {
    return new Date(this._data.getTime());  // Progr. defensiva
  }

  get qtde() {
    return this._qtde;
  }

  get valor() {
    return this._valor;
  }

}
