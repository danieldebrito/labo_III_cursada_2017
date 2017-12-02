var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Si no ponemos modificadores de Acceso todo es publico en Typescript.
var Avenger = /** @class */ (function () {
    function Avenger(nombreReal, peleasGanadas, nombre) {
        this._nombre = nombre; // nombre es opcional, comentar strict en el json
        this.nombreReal = nombreReal;
        this.peleasGanadas = peleasGanadas;
    }
    Avenger.prototype.mostrar = function () {
        return this._nombre + ", " + this.nombreReal + ", " + this.peleasGanadas;
    };
    Object.defineProperty(Avenger.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nr, p, n, poder) {
        var _this = _super.call(this, nr, p, n) || this;
        _this._poder = poder;
        return _this;
    }
    Xmen.prototype.mostrar = function () {
        return _super.prototype.mostrar.call(this) + ", " + this._poder;
        //con super llamo al metodo de la clase padre
    };
    return Xmen;
}(Avenger));
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Object.defineProperty(Apocalipsis, "Instance", {
        get: function () {
            if (!(this._instance)) {
                this._instance = new Apocalipsis("HEEELL");
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    return Apocalipsis;
}());
console.log(Apocalipsis.Instance);
// Declaramos una variable con LET(Esta posee alcance limitado).
var a1 = new Avenger("Ironman", 10, "Tony");
var a2 = new Avenger("Bruce", 2);
a1.nombreReal = "Tony";
a1.peleasGanadas = 10;
console.log(a1); // muestro la clase
console.log(a1.nombre); // muestro con la prop
console.log(a1.mostrar()); // muestro a traves del metodo
a1.mostrar(); // metodo
a1.nombre; // propiedad
var x1 = new Xmen("logan", 2, "wolvwrine", "garras mortales");
console.log(x1.mostrar());
var array = new Array();
array.push(a1);
array.push(x1);
array.forEach(function (element) {
    console.log(element.mostrar());
});
