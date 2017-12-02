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
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(nomb, sex, id, p) {
            var _this = _super.call(this, nomb, sex) || this;
            _this.id = id;
            _this.puesto = p;
            return _this;
        }
        Empleado.prototype.ToJSON = function () {
            return {
                id: this.id,
                nombre: this.nombre,
                sexo: this.sexo,
                puesto: this.puesto
            };
        };
        return Empleado;
    }(SegundoParcial.Persona));
    SegundoParcial.Empleado = Empleado;
})(SegundoParcial || (SegundoParcial = {})); // namespace
