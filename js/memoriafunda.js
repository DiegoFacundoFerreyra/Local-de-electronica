class Fundas {
  /**
   * @param {string} paraCelulares
   * @param {string} paraTablets
   * @param {string} conTecladoParaTablets
   */
  constructor(paraCelulares, paraTablets, conTecladoParaTablets) {
    this.paraCelulares = paraCelulares;
    this.paraTablets = paraTablets;
    this.conTecladoParaTablets = conTecladoParaTablets;
    this.id = -1;
  }

  mostrarDescripcion() {
    return (
      this.id +
      " - Funda Celular: " +
      this.paraCelulares +
      " - Funda Tablet: " +
      this.paraTablets +
      " - Con teclado: " +
      this.conTecladoParaTablets
    );
  }

  getId() {
    return this.id;
  }
  setId(nuevoId) {
    this.id = nuevoId;
  }

  getParaCelulares() {
    return this.paraCelulares;
  }
  setParaCelulares(nuevoParaCelulares) {
    this.paraCelulares = nuevoParaCelulares;
  }

  getParaTablets() {
    return this.paraTablets;
  }
  setParaTablets(nuevoparaTablets) {
    this.paraTablets = nuevoparaTablets;
  }

  getConTecladoParaTablets() {
    return this.conTecladoParaTablets;
  }
  setConTecladoParaTablets(nuevoconTecladoParaTablets) {
    this.conTecladoParaTablets = nuevoconTecladoParaTablets;
  }
}

class Almacenamiento {
  /**
   * @param {string} discosExternos
   * @param {string} penDrive
   * @param {string} tarjetasDeMemoria
   */
  constructor(discosExternos, penDrive, tarjetasDeMemoria) {
    this.discosExternos = discosExternos;
    this.penDrive = penDrive;
    this.tarjetasDeMemoria = tarjetasDeMemoria;
    this.id = -1;
  }

  mostrarDescripcion() {
    return (
      this.id +
      " - Disco externo: " +
      this.discosExternos +
      " - Pen Drive: " +
      this.penDrive +
      " - Tarjeta de Memoria: " +
      this.tarjetasDeMemoria
    );
  }

  getId() {
    return this.id;
  }
  setId(nuevoId) {
    this.id = nuevoId;
  }

  getDiscosExternos() {
    return this.discosExternos;
  }
  setDiscosExternos(nuevoDiscosExternos) {
    this.discosExternos = nuevoDiscosExternos;
  }

  getPenDrive() {
    return this.penDrive;
  }
  setPenDrive(nuevoPenDrive) {
    this.penDrive = nuevoPenDrive;
  }

  getTarjetasDeMemoria() {
    return this.tarjetasDeMemoria;
  }
  setTarjetasDeMemoria(nuevoTarjetasDeMemoria) {
    this.tarjetasDeMemoria = nuevoTarjetasDeMemoria;
  }
}
