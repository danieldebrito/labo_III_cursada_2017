"use strict";
var SegundoParcial;
(function (SegundoParcial) {
    var Animal = /** @class */ (function () {
        function Animal(edad, ETipo, cantPatas) {
            this._ETipo = ETipo;
            this._cantPatas = cantPatas;
            this._edad = edad;
        }
        Object.defineProperty(Animal.prototype, "ETipo", {
            get: function () {
                return this._ETipo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animal.prototype, "CantPatas", {
            get: function () {
                return this._cantPatas;
            },
            set: function (cantPatas) {
                this._cantPatas = cantPatas;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animal.prototype, "Edad", {
            get: function () {
                return this._edad;
            },
            set: function (edad) {
                this._edad = edad;
            },
            enumerable: true,
            configurable: true
        });
        return Animal;
    }());
    SegundoParcial.Animal = Animal;
})(SegundoParcial || (SegundoParcial = {})); //namespace
