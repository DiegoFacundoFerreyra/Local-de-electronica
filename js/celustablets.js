class Celulares {
  /**
   * @param {string} marca
   * @param {string} modelo
   * @param {string} camara
   * @param {string} memoria
   */
  constructor(marca, modelo, camara, memoria) {
    this.marca = marca;
    this.modelo = modelo;
    this.camara = camara;
    this.memoria = memoria;
    this.id = -1;
  }

  mostrarDescripcion() {
    return (
      this.id +
      " - " +
      this.modelo +
      " - " +
      this.marca +
      " - " +
      this.camara +
      " - " +
      this.memoria
    );
  }

  getId() {
    return this.id;
  }
  setId(nuevo_id) {
    this.id = nuevo_id;
  }

  getModelo() {
    return this.modelo;
  }
  setModelo(nuevoModelo) {
    this.modelo = nuevoModelo;
  }

  getMarca() {
    return this.marca;
  }
  setMarca(nuevaMarca) {
    this.marca = nuevaMarca;
  }

  getCamara() {
    return this.camara;
  }
  setCamara(nuevaCamara) {
    this.camara = nuevaCamara;
  }

  getMemoria() {
    return this.memoria;
  }
  setMemoria(nuevaMemoria) {
    this.memoria = nuevaMemoria;
  }
}

class Tablets {
  /**
   * @param {string} marca
   * @param {string} modelo
   * @param {string} pantalla
   * @param {string} memoria
   */
  constructor(marca, modelo, pantalla, memoria) {
    this.marca = marca;
    this.modelo = modelo;
    this.pantalla = pantalla;
    this.memoria = memoria;
    this.id = -1;
  }

  mostrarDescripcion() {
    return (
      this.id +
      " - " +
      this.modelo +
      " - " +
      this.marca +
      " - " +
      this.pantalla +
      " - " +
      this.memoria
    );
  }

  getId() {
    return this.id;
  }
  setId(nuevo_id) {
    this.id = nuevo_id;
  }

  getModelo() {
    return this.modelo;
  }
  setModelo(nuevoModelo) {
    this.modelo = nuevoModelo;
  }

  getMarca() {
    return this.marca;
  }
  setMarca(nuevaMarca) {
    this.marca = nuevaMarca;
  }

  getPantalla() {
    return this.pantalla;
  }
  setPantalla(nuevaPantalla) {
    this.pantalla = nuevaPantalla;
  }

  getMemoria() {
    return this.memoria;
  }
  setMemoria(nuevaMemoria) {
    this.memoria = nuevaMemoria;
  }
}
