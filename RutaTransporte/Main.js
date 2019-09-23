import Ruta from "./Ruta.js";
import Base from "./Base.js";
import Camion from "./Ruta.js"

class Main {
    constructor() {
     var r1 = new Ruta();
     r1._nombre = "colima-guadalajara";
     r1._tiempoMinutos = 180;
     var b1 = new Base();
     b1._nombre = "BaseColima"
     b1._latitud = 20;
     b1._longitud = 10;
     var c1 = new Camion();
     var r2 = new Ruta();
     r2._nombre = "guadalajara-michoacan"
     r2._tiempoMinutos = 120;
     var b2 = new Base();
     b1._nombre = "BaseGuadalajara"
     b1._latitud = 25;
     b1._longitud = 30;
     var c2 = new Camion();
     var r3 = new Ruta();
     r3._nombre = "michoacan-edmx"
     r3._tiempoMinutos = 240;
     var b3 = new Base();
     b1._nombre = "BaseMichoacan"
     b1._latitud = 30;
     b1._longitud = 40;
     var c3 = new Camion();
     var r4 = new Ruta();
     r4._nombre = "edmx-veracruz"
     r4._tiempoMinutos = 180;
     var b4 = new Base();
     b1._nombre
     b1._latitud
     b1._longitud
     var c4 = new Camion();
     var r5 = new Ruta();
     r5._nombre = "veracruz-yucatan"
     r5._tiempoMinutos = 90;
     var b5 = new Base();
     b1._nombre
     b1._latitud
     b1._longitud
     var c5 = new Camion();   
    }
}
let m = new Main();
