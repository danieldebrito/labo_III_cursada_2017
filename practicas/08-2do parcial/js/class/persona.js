"use strict";
var sp;
(function (sp) {
    var persona = /** @class */ (function () {
        function persona(n, e, s) {
            this.nombre = n;
            this.edad = e;
            this.sexo = s;
        }
        return persona;
    }());
    sp.persona = persona;
})(sp || (sp = {})); // namespace
