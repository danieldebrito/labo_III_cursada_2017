"use strict";
/// <reference path="..\node_modules\@types\jquery\index.d.ts" />
var SegundoParcial;
(function (SegundoParcial) {
    window.onload = function () {
        ArrayToSelectHTML(EnumToArray(SegundoParcial.ETipoMascotas));
        TablaJason(genJSON(MOCK_DATA, checkBoxes()));
    };
    function EnumToArray(ETipoMascotas) {
        var arrayRet = new Array();
        for (var i = 0; i < (Object.keys(ETipoMascotas).length) * .5; i++) {
            arrayRet.push(ETipoMascotas[i]);
        }
        return arrayRet;
    }
    function ArrayToSelectHTML(arrayParam) {
        var i = 0;
        var codeHTML = "";
        codeHTML += '<label for="cantpatas">Tipo: </label>';
        codeHTML += "<select id='tipo' class='form-control'>";
        arrayParam.forEach(function (element) {
            codeHTML += "<option value='" + i + "'>" + element + "</option>";
            i++;
        });
        codeHTML += "</select>";
        $("#select").html(codeHTML);
    }
    addEventListener('click', checkBoxes);
    function checkBoxes() {
        var z = [];
        if ($(".id").prop('checked')) {
            z.push('ID');
        }
        if ($(".nombre").prop('checked')) {
            z.push('Nombre');
        }
        if ($(".edad").prop('checked')) {
            z.push('Edad');
        }
        if ($(".tipo").prop('checked')) {
            z.push('Tipo');
        }
        if ($(".patas").prop('checked')) {
            z.push('Patas');
        }
        TablaJason(genJSON(MOCK_DATA, z));
        return z;
    }
    function genJSON(data, arrayConfig) {
        var p = data.map(function (v) {
            var r = {};
            for (var index = 0; index < arrayConfig.length; index++) {
                var element = arrayConfig[index];
                switch (element) {
                    case 'ID':
                        r.ID = v.ID;
                        break;
                    case 'Nombre':
                        r.Nombre = v.Nombre;
                        break;
                    case 'Edad':
                        r.Edad = v.Edad;
                        break;
                    case 'Tipo':
                        r.Tipo = SegundoParcial.ETipoMascotas[v.Tipo];
                        break;
                    default:
                        r.Patas = v.Patas;
                        break;
                }
            }
            return r;
        });
        return p;
    }
    function TablaJason(json) {
        var html = "<table class='table table-striped table-bordered table-hover table-condensed'><tr><thead>";
        for (var item in json[0]) {
            html += "<th>" + item + "</th>";
        }
        html += "</tr></thead><tbody>";
        for (var i = 0; i < Object.keys(json).length; i++) {
            html += "<tr>";
            for (var item in json[0]) {
                html += "<td>" + eval('json[i].' + item) + "</td>";
            }
            html += "</tr>";
        }
        html += "</tbody></table>";
        $("#table").html(html);
    }
})(SegundoParcial || (SegundoParcial = {})); //namespace
function Guardar() {
    var id = Number($("#id").val());
    var nombre = String($("#nombre").val());
    var edad = Number($("#edad").val());
    var tipo = Number($("#tipo").val());
    var patas = Number($("#cantpatas").val());
    var nuevaMascota = new SegundoParcial.Mascota(edad, tipo, patas, id, nombre);
    console.log(nuevaMascota);
}
;
