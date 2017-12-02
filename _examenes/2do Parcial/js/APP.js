"use strict";
/// <reference path="..\node_modules\@types\jquery\index.d.ts" />
var SegundoParcial;
(function (SegundoParcial) {
    window.onload = function () {
        TablaJason(genJSON(getListJSON(), checkBoxes()));
    };
    addEventListener('click', checkBoxes);
    function checkBoxes() {
        var z = [];
        if ($(".id").prop('checked')) {
            z.push('id');
        }
        if ($(".nombre").prop('checked')) {
            z.push('nombre');
        }
        if ($(".sexo").prop('checked')) {
            z.push('sexo');
        }
        if ($(".puesto").prop('checked')) {
            z.push('puesto');
        }
        TablaJason(genJSON(getListJSON(), z));
        return z;
    }
    function genJSON(data, arrayConfig) {
        var p = data.map(function (v) {
            var r = {};
            for (var index = 0; index < arrayConfig.length; index++) {
                var element = arrayConfig[index];
                switch (element) {
                    case 'nombre':
                        r.nombre = v.nombre;
                        break;
                    case 'sexo':
                        r.sexo = v.sexo;
                        break;
                    case 'id':
                        r.id = v.id;
                        break;
                    default:
                        r.puesto = v.puesto;
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
            html += "<td><button value=' " + i + " ' id='btnmodificar' class='btn btn-primary' onclick='modificar(" + i + ")'>Modificar</button></td>"
                + "<td><button value=' " + i + " ' id='btneliminar' class='btn btn-primary' onclick='borrar(" + i + ")'>Borrar</button></td>" + "</tr>";
        }
        html += "</tbody></table>";
        $("#table").html(html);
    }
    function getListString() {
        return localStorage.getItem("localList");
    }
    function getListJSON() {
        var l = getListString();
        if (l == null) {
            l = [];
        }
        else {
            var g = localStorage.getItem("localList");
            l = JSON.parse(g);
        }
        return l;
    }
    function Traer(id, arr) {
        for (var i = 0; i > arr.lenght; i++) {
            if (id == arr[i].id) {
                ($("#id").val(arr[i].id));
                ($("#nombre").val(arr[i].nombre));
                var edad = Number($("#edad").val());
                var tipo = Number($("#tipo").val());
                var patas = Number($("#cantpatas").val());
            }
        }
    }
})(SegundoParcial || (SegundoParcial = {})); //namespace
function getLocalString() {
    var ret = [];
    if (localStorage.getItem("localList") == null) {
        ret = [];
    }
    else {
        ret = localStorage.getItem(("localList"));
        console.log(ret);
    }
    return ret;
}
var listaString = [];
function getLocalJSON() {
    var l = getLocalString();
    if (l == null) {
        l = [];
    }
    else {
        var g = localStorage.getItem("localList");
        l = JSON.parse(g);
    }
    return l;
}
function guardar() {
    var id = Number($("#id").val());
    var nombre = String($("#nombre").val());
    var sexo = String($("#sexo").val());
    var puesto = String($("#puesto").val());
    var nuevaEmpleado = new SegundoParcial.Empleado(nombre, sexo, id, puesto);
    var l = localStorage.getItem("localList");
    var jsl = JSON.parse(l);
    listaString.push(nuevaEmpleado.ToJSON());
    localStorage.setItem("localList", JSON.stringify(listaString));
}
function borrarTodo() {
    localStorage.clear();
}
function modificar(i) {
    var l = localStorage.getItem("localList");
    var jsl = JSON.parse(l);
    $("#btnguardar").val(i);
    jsl[i];
    $("#id").val(jsl[i].id);
    $("#nombre").val(jsl[i].nombre);
    $("#sexo").val(jsl[i].sexo);
    $("#puesto").val(jsl[i].puesto);
}
function borrar(i) {
    var l = localStorage.getItem("localList");
    var jsl = JSON.parse(l);
    $("#btnguardar").val(i);
    jsl[i].splice(i, 1);
    var arr = JSON.stringify(jsl);
    localStorage.setItem("localList", jsl);
}
