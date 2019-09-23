export default class Ruta {
    constructor(nombre, tiempoMinutos) {
        this._nombre = nombre;
        this._tiempoMinutos = tiempoMinutos;
    }
    get nombre() {
        return this._nombre;
    }
    get tiempoMinutos() {
        return this._tiempoMinutos;
    }
}

export default class Camion {
    constructor(numero) {
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
}
