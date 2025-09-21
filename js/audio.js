class Parlantes {
  /**
   * @param {string} marca
   * @param {string} wats
   * @param {string} bluetooth
   * @param {string} parlantes
   */
  constructor(marca, wats, bluetooth, parlantes) {
    this.marca = marca;
    this.wats = wats;
    this.bluetooth = bluetooth;
    this.parlantes = parlantes;
    this.id = -1;
  }

  mostrarDescripcion() {
    return (
      this.id +
      " - " +
      this.marca +
      " - " +
      this.wats +
      " - " +
      this.bluetooth +
      " - " +
      this.parlantes
    );
  }

  getId() {
    return this.id;
  }
  setId(nuevo_id) {
    this.id = nuevo_id;
  }

  getMarca() {
    return this.marca;
  }
  setMarca(nuevaMarca) {
    this.marca = nuevaMarca;
  }

  getWats() {
    return this.wats;
  }
  setWats(nuevoWats) {
    this.wats = nuevoWats;
  }

  getBluetooth() {
    return this.bluetooth;
  }
  setBluetooth(nuevoBluetooth) {
    this.bluetooth = nuevoBluetooth;
  }

  getParlantes() {
    return this.parlantes;
  }
  setParlantes(nuevoParlantes) {
    this.parlantes = nuevoParlantes;
  }
}

class convensionales {
  /**
   * @param {string} marca
   * @param {string} gamer
   * @param {string} bluetooth
   * @param {string} convensionales
   */
  constructor(marca, gamer, bluetooth, convensionales) {
    this.marca = marca;
    this.gamer = gamer;
    this.bluetooth = bluetooth;
    this.convensionales = convensionales;
    this.id = -1;
  }

  mostrarDescripcion() {
    return (
      this.id +
      " - " +
      this.marca +
      " - " +
      this.gamer +
      " - " +
      this.bluetooth +
      " - " +
      this.convensionales
    );
  }

  getId() {
    return this.id;
  }
  setId(nuevo_id) {
    this.id = nuevo_id;
  }

  getMarca() {
    return this.marca;
  }
  setMarca(nuevaMarca) {
    this.marca = nuevaMarca;
  }

  getgamer() {
    return this.gamer;
  }
  setgamer(nuevoGamer) {
    this.gamer = nuevoGamer;
  }

  getBluetooth() {
    return this.bluetooth;
  }
  setBluetooth(nuevoBluetooth) {
    this.bluetooth = nuevoBluetooth;
  }

  getconvensionales() {
    return this.convensionales;
  }
  setconvensionales(nuevoConvensionales) {
    this.convensionales = nuevoConvensionales;
  }
}
