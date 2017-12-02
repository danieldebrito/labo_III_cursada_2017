"use strict";
var sp;
(function (sp) {
    var ePuesto;
    (function (ePuesto) {
        ePuesto[ePuesto["gerente"] = 0] = "gerente";
        ePuesto[ePuesto["sub_gerente"] = 1] = "sub_gerente";
        ePuesto[ePuesto["supervisor"] = 2] = "supervisor";
        ePuesto[ePuesto["administrativo"] = 3] = "administrativo";
        ePuesto[ePuesto["operario"] = 4] = "operario";
        ePuesto[ePuesto["aprendiz"] = 5] = "aprendiz";
        ePuesto[ePuesto["cadete"] = 6] = "cadete";
    })(ePuesto = sp.ePuesto || (sp.ePuesto = {}));
})(sp || (sp = {})); // namespace
