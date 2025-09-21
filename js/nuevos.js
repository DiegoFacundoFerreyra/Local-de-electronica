class Nuevos {
  /**
   * @param {string} auriculares
   * @param {string} parlantes
   * @param {string} almacenamiento
   * @param {string} cargadores
   * @param {string} fundas
   * @param {string} relojes
   * @param {string} celulares
   * @param {string} tabletes
   */
  constructor(
    auriculares,
    parlantes,
    almacenamiento,
    cargadores,
    fundas,
    relojes,
    celulares,
    tabletes
  ) {
    this.auriculares = auriculares;
    this.parlantes = parlantes;
    this.almacenamiento = almacenamiento;
    this.cargadores = cargadores;
    this.fundas = fundas;
    this.relojes = relojes;
    this.celulares = celulares;
    this.tabletes = tabletes;
    this.id = -1;
  }
  mostrarDescripcion() {
    return (
      this.id +
      " - " +
      this.auriculares +
      " - " +
      this.parlantes +
      " - " +
      this.almacenamiento +
      " - " +
      this.cargadores +
      " - " +
      this.fundas +
      " - " +
      this.relojes +
      " - " +
      this.celulares +
      " - " +
      this.tabletes +
      " - "
    );
  }
  getId() {
    return this.id;
  }
  setId(nuevoId) {
    this.id = nuevoId;
  }
  getAuriculares() {
    return this.auriculares;
  }
  setAuriculares(nuevoAuriculares) {
    this.auriculares = nuevoAuriculares;
  }
  getParlantes() {
    return this.parlantes;
  }
  setParlantes(nuevoParlantes) {
    this.parlantes = nuevoParlantes;
  }
  getAlmacenamiento() {
    return this.almacenamiento;
  }
  setAlmacenamiento(nuevoAlmacenamiento) {
    this.almacenamiento = nuevoAlmacenamiento;
  }
  getCargadores() {
    return this.cargadores;
  }
  setCargadores(nuevoCargadores) {
    this.cargadores = nuevoCargadores;
  }
  getFundas() {
    return this.fundas;
  }
  setFundas(nuevoFundas) {
    this.fundas = nuevoFundas;
  }
  getRelojes() {
    return this.relojes;
  }
  setRelojes(nuevoRelojes) {
    this.relojes = nuevoRelojes;
  }
  getCelulares() {
    return this.celulares;
  }
  setCelulares(nuevoCelulares) {
    this.celulares = nuevoCelulares;
  }
  getTablets() {
    return this.tabletes;
  }
  setTablets(nuevoTablets) {
    this.tabletes = nuevoTablets;
  }
}
