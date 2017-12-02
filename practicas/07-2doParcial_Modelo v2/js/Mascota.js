"use strict";
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
var SegundoParcial;
(function (SegundoParcial) {
    var Mascota = /** @class */ (function (_super) {
        __extends(Mascota, _super);
        function Mascota(edad, ETipo, cantPatas, id, nombre) {
            var _this = _super.call(this, edad, ETipo, cantPatas) || this;
            _this._id = id;
            _this._nombre = nombre;
            return _this;
        }
        Object.defineProperty(Mascota.prototype, "ID", {
            get: function () {
                return this._id;
            },
            set: function (id) {
                this._id = id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Mascota.prototype, "Nombre", {
            get: function () {
                return this._nombre;
            },
            set: function (nombre) {
                this._nombre = nombre;
            },
            enumerable: true,
            configurable: true
        });
        Mascota.prototype.ToJSON = function (m) {
            return {
                edad: m._edad,
                tipo: m._ETipo,
                cantPatas: m._cantPatas,
                id: m._id,
                nombre: m._nombre
            };
        };
        return Mascota;
    }(SegundoParcial.Animal));
    SegundoParcial.Mascota = Mascota;
})(SegundoParcial || (SegundoParcial = {})); // namespace
