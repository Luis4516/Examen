export default class Base {
    constructor(nombre, latitud, longitud) {
        this._nombre = nombre;
        this._latitud = latitud;
        this._longitud = longitud;
    }
    get nombre() {
        return this._nombre;
    }
    get latitud() {
        return this._latitud;
    }
    get longitud() {
        return this._longitud;
    }
}