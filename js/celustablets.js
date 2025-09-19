class Celulares {
  /**
   * @param {*} marca
   *  @param {*} modelo
   *  @param {*} camara
   *  @param {*} memoria
   */

  constructor(marca, modelo, camara, memoria) {
    this.marca = marca;
    this.modelo = modelo;
    this.camara = camara;
    this.memoria = memoria;
    this.id = -1;
  }
  /**
   *
   * @returns
   */
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
  /**
   * @param {*} nuevo_id
   */

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
  setModelo(nuevaCamara) {
    this.camara = nuevaCamara;
  }

  getMemoria() {
    return this.memoria;
  }
  setMemoria(nuevaMemoria) {
    this.memoria = nuevaMemoria;
  }
}
