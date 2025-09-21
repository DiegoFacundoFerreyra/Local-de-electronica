class SmartWatches {
  /**
   * @param {string} marca
   * @param {string} modelo
   * @param {string} formato
   */
  constructor(marca, modelo, formato) {
    this.marca = marca;
    this.modelo = modelo;
    this.formato = formato;
    this.id = -1;
  }

  mostrarDescripcion() {
    return (
      this.id +
      " -  " +
      this.marca +
      " - " +
      this.modelo +
      " -  " +
      this.formato
    );
  }

  getId() {
    return this.id;
  }
  setId(nuevoId) {
    this.id = nuevoId;
  }

  getMarca() {
    return this.marca;
  }
  setMarca(nuevoMarca) {
    this.marca = nuevoMarca;
  }

  getModelo() {
    return this.modelo;
  }
  setModelo(nuevoModelo) {
    this.modelo = nuevoModelo;
  }

  getFormato() {
    return this.formato;
  }
  setFormato(nuevoFormato) {
    this.formato = nuevoFormato;
  }
}

class Cargadores {
  /**
   * @param {string} celulares
   * @param {string} tablets
   * @param {string} inalambricos
   */
  constructor(celulares, tablets, inalambricos) {
    this.celulares = celulares;
    this.tablets = tablets;
    this.inalambricos = inalambricos;
    this.id = -1;
  }

  mostrarDescripcion() {
    return (
      this.id +
      " -  " +
      this.celulares +
      " -  " +
      this.tablets +
      " - " +
      this.inalambricos
    );
  }

  getId() {
    return this.id;
  }
  setId(nuevoId) {
    this.id = nuevoId;
  }

  getCelulares() {
    return this.celulares;
  }
  setCelulares(nuevoCelulares) {
    this.celulares = nuevoCelulares;
  }

  getTablets() {
    return this.tablets;
  }
  settablets(nuevoTablets) {
    this.tablets = nuevoTablets;
  }

  getInalambricos() {
    return this.inalambricos;
  }
  setTnalambricos(nuevoInalambricos) {
    this.inalambricos = nuevoInalambricos;
  }
}
