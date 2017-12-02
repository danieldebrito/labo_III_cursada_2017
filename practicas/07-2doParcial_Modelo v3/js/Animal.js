"use strict";
var SegundoParcial;
(function (SegundoParcial) {
    var Animal = /** @class */ (function () {
        function Animal(edad, tipo, cantPatas) {
            this.tipo = tipo;
            this.patas = cantPatas;
            this.edad = edad;
        }
        Object.defineProperty(Animal.prototype, "ETipo", {
            get: function () {
                return this.tipo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animal.prototype, "CantPatas", {
            get: function () {
                return this.patas;
            },
            set: function (cantPatas) {
                this.patas = cantPatas;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animal.prototype, "Edad", {
            get: function () {
                return this.edad;
            },
            set: function (edad) {
                this.edad = edad;
            },
            enumerable: true,
            configurable: true
        });
        return Animal;
    }());
    SegundoParcial.Animal = Animal;
})(SegundoParcial || (SegundoParcial = {})); //namespace
