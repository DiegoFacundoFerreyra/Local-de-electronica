class Parlantes {
  /**
   * @param {string} marca
   * @param {string} wats
   * @param {boolean} bluetooth
   * @param {string} tipo
   */
  constructor(marca, wats, bluetooth, tipo) {
    this.marca = marca;
    this.wats = wats;
    this.bluetooth = bluetooth;
    this.tipo = tipo;
    this.id = -1;
  }

  mostrarDescripcion() {
    return (
      this.id +
      " - " +
      this.marca +
      " - " +
      this.wats +
      "W" +
      " - Bluetooth: " +
      (this.bluetooth ? "Sí" : "No") +
      " - " +
      this.tipo
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

  getTipo() {
    return this.tipo;
  }
  setTipo(nuevoTipo) {
    this.tipo = nuevoTipo;
  }
}

class Convencionales {
  /**
   * @param {string} marca
   * @param {boolean} gamer
   * @param {boolean} bluetooth
   * @param {string} tipo
   */
  constructor(marca, gamer, bluetooth, tipo) {
    this.marca = marca;
    this.gamer = gamer;
    this.bluetooth = bluetooth;
    this.tipo = tipo;
    this.id = -1;
  }

  mostrarDescripcion() {
    return (
      this.id +
      " - " +
      this.marca +
      " - Gamer: " +
      (this.gamer ? "Sí" : "No") +
      " - Bluetooth: " +
      (this.bluetooth ? "Sí" : "No") +
      " - " +
      this.tipo
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
  setMarca(nuevaMarca) {
    this.marca = nuevaMarca;
  }

  getGamer() {
    return this.gamer;
  }
  setGamer(nuevoGamer) {
    this.gamer = nuevoGamer;
  }

  getBluetooth() {
    return this.bluetooth;
  }
  setBluetooth(nuevoBluetooth) {
    this.bluetooth = nuevoBluetooth;
  }

  getTipo() {
    return this.tipo;
  }
  setTipo(nuevoTipo) {
    this.tipo = nuevoTipo;
  }
}
