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
var sp;
(function (sp) {
    var empleado = /** @class */ (function (_super) {
        __extends(empleado, _super);
        function empleado(id, nombre, edad, sexo, puesto, foto) {
            var _this = _super.call(this, nombre, edad, sexo) || this;
            _this.id = id;
            _this.puesto = puesto;
            _this.foto = foto;
            return _this;
        }
        empleado.prototype.toJSON = function () {
            return {
                id: this.id,
                nombre: this.nombre,
                edad: this.edad,
                sexo: this.sexo,
                puesto: this.puesto
            };
        };
        return empleado;
    }(sp.persona));
    sp.empleado = empleado;
})(sp || (sp = {}));
