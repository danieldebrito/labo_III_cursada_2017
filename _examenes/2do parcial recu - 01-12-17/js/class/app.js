"use strict";
/// <reference path="..\node_modules\@types\jquery\index.d.ts" />
var sp;
(function (sp) {
    var index;
    window.onload = function () {
        limpioImputs();
        ArrayToSelectHTML(EnumToArray(sp.ePuesto));
        ArrayToSelectFiltroHTML(EnumToArray(sp.ePuesto));
        TablaJason(genJSON(getListJSON(), checkBoxes()));
    };
    function getListJSON() {
        var l = localStorage.getItem("localList");
        if (l != null && l != "" && l != false && l != undefined) {
            var r = JSON.parse(l);
            return r;
        }
        else
            return {};
    }
    function getLocalString() {
        var l = localStorage.getItem("localList");
        if (l != null && l != "" && l != false && l != undefined)
            return localStorage.getItem(("localList"));
        else
            return [];
    }
    function isLocalStorageEmpty() {
        var l = localStorage.getItem("localList");
        if (l != null && l != "" && l != false && l != undefined)
            return false;
        else
            return true;
    }
    function EnumToArray(ePuesto) {
        var arrayRet = new Array();
        for (var i = 0; i < (Object.keys(ePuesto).length) * .5; i++) {
            arrayRet.push(ePuesto[i]);
        }
        return arrayRet;
    }
    function ArrayToSelectHTML(arrayParam) {
        var i = 0;
        var codeHTML = "";
        codeHTML += '<label for="puesto">Puesto: </label>';
        codeHTML += "<select id='puesto' class='form-control'>";
        arrayParam.forEach(function (element) {
            codeHTML += "<option value='" + i + "'>" + element + "</option>";
            i++;
        });
        codeHTML += "</select>";
        $("#select").html(codeHTML);
    }
    function ArrayToSelectFiltroHTML(arrayParam) {
        var i = 0;
        var codeHTML = "";
        codeHTML += '<label for="puestoFiltro">Filtrar por: </label>';
        codeHTML += "<select id='puestoFiltro' class='form-control'>";
        codeHTML += "<option value='" + "todos" + "'>" + "Todos" + "</option>";
        arrayParam.forEach(function (element) {
            codeHTML += "<option value='" + element + "'>" + element + "</option>";
            i++;
        });
        codeHTML += "</select>";
        $("#selectFiltro").html(codeHTML);
    }
    addEventListener('click', checkBoxes);
    function checkBoxes() {
        var z = [];
        if ($(".id").prop('checked')) {
            z.push('id');
        }
        if ($(".nombre").prop('checked')) {
            z.push('nombre');
        }
        if ($(".edad").prop('checked')) {
            z.push('edad');
        }
        if ($(".sexo").prop('checked')) {
            z.push('sexo');
        }
        if ($(".puesto").prop('checked')) {
            z.push('puesto');
        }
        if ($(".foto").prop('checked')) {
            z.push('foto');
        }
        TablaJason(genJSON(getListJSON(), z));
        return z;
    }
    function genJSON(data, arrayConfig) {
        if (!isLocalStorageEmpty()) {
            var p = data.map(function (v) {
                var r = {};
                for (var index_1 = 0; index_1 < arrayConfig.length; index_1++) {
                    var element = arrayConfig[index_1];
                    switch (element) {
                        case 'id':
                            r.id = v.id;
                            break;
                        case 'nombre':
                            r.nombre = v.nombre;
                            break;
                        case 'edad':
                            r.edad = v.edad;
                            break;
                        case 'sexo':
                            r.sexo = v.sexo;
                            break;
                        case 'puesto':
                            r.puesto = sp.ePuesto[v.puesto];
                            break;
                        default:
                            r.foto = v.foto;
                            break;
                    }
                }
                return r;
            })
                .filter(function (item) {
                var epuesto = $("#puestoFiltro").val();
                if (epuesto != "todos")
                    return item.puesto == epuesto;
                else
                    return item.puesto;
            });
        }
        return p;
    }
    function Promedio() {
        var arrayEmp = genJSON(getListJSON(), checkBoxes());
        var prom = arrayEmp.reduce(function (anterior, actual) {
            return parseInt(anterior) + parseInt(actual.edad);
        }, 0) / arrayEmp.length;
        $("#promedio").val(prom);
    }
    sp.Promedio = Promedio;
    function TablaJason(json) {
        if (!isLocalStorageEmpty()) {
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
                html += "<td><div id=img" + i + "></div></td>"
                    + "<td><button value=' " + i + " ' id='btnmodificar' class='btn btn-primary' onclick='sp.modificar(" + i + ")'>Modificar</button></td>"
                    + "<td><button value=' " + i + " ' id='btneliminar' class='btn btn-primary' onclick='sp.borrar(" + i + ")'>Borrar</button></td>" + "</tr>";
            }
            html += "</tbody></table>";
        }
        else
            html = "";
        $("#table").html(html);
        cargarFotos();
    }
    function encodeImageFileAsURL() {
        var filesSelected = document.getElementById("inputFileToLoad").files;
        if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];
            var fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result; // <--- data: base64
                var newImage = document.createElement('img');
                newImage.src = srcData;
                document.getElementById("imgTest").innerHTML = newImage.outerHTML;
                //alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
                //console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    } //encode*/
    sp.encodeImageFileAsURL = encodeImageFileAsURL;
    /*export function encodeImageFileAsURL(i:number) {
                    var filesSelected = document.getElementById("inputFileToLoad").files;
                    if (filesSelected.length > 0) {
                      var fileToLoad = filesSelected[0];
                
                      var fileReader = new FileReader();
                
                      fileReader.onload = function(fileLoadedEvent) {
        
                        var srcData = fileLoadedEvent.target.result; // <--- data: base64
                
                        var newImage = document.createElement('img');
                        newImage.src = srcData;
                
                        document.getElementById("img0").innerHTML = newImage.outerHTML;
                        //alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
                        //console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
                      }
                      fileReader.readAsDataURL(fileToLoad);
                    }
                  }//encode*/
    function cargarFotos() {
        var filesSelected = document.getElementById("inputFileToLoad").files;
        if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];
            var fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result; // <--- data: base64
                var newImage = document.createElement('img');
                newImage.src = srcData;
                document.getElementById("imgTest").innerHTML = newImage.outerHTML;
                //alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
                //console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    } //cargarfotos*
    function borrarTodo() {
        localStorage.clear();
    }
    sp.borrarTodo = borrarTodo;
    function borrar(i) {
        var l = localStorage.getItem("localList");
        var jsl = JSON.parse(l);
        jsl.splice(i, 1);
        var arr = JSON.stringify(jsl);
        localStorage.setItem("localList", arr);
    }
    sp.borrar = borrar;
    function retid() {
        var t = localStorage.getItem("localList");
        var l = JSON.parse(t);
        var id = 1;
        if (l != null && l != "" && l != false && l != undefined) {
            for (var i = 0; i < l.length; i++) {
                var max = 0;
                if (l[i].id > max)
                    max = l[i].id;
            }
            //let i: number = parseInt(l[l.length - 1].id);
            id = max + 1;
        }
        return id;
    }
    function guardar() {
        var id = retid();
        var nombre = String($("#nombre").val());
        var edad = Number($("#edad").val());
        var sexo = String($("#sexo").val());
        var puesto = Number($("#puesto").val());
        var e = new sp.empleado(id, nombre, edad, sexo, puesto, sp.foto_string);
        sp.foto_string = null;
        var arr;
        sp.arrayEmp = new Array();
        if (index == -1) {
            if (isLocalStorageEmpty()) {
                sp.arrayEmp.push(e.toJSON());
                arr = JSON.stringify(sp.arrayEmp);
                localStorage.setItem("localList", arr);
            }
            else {
                arr = localStorage.getItem("localList");
                sp.arrayEmp = JSON.parse(arr);
                sp.arrayEmp.push(e.toJSON());
                arr = JSON.stringify(sp.arrayEmp);
                localStorage.setItem("localList", arr);
            }
        }
        else {
            guardarEnIndice(index);
        }
        limpioImputs();
    } //guardar
    sp.guardar = guardar;
    function modificar(i) {
        index = i;
        var l = localStorage.getItem("localList");
        var jsl = JSON.parse(l);
        $("#id").val(jsl[i].id);
        $("#nombre").val(jsl[i].nombre);
        $("#edad").val(jsl[i].edad);
        $("#sexo").val(jsl[i].sexo);
        $("#puesto").val(jsl[i].puesto);
    } //modificar
    sp.modificar = modificar;
    function guardarEnIndice(i) {
        var l = localStorage.getItem("localList");
        var jsl = JSON.parse(l);
        var id = Number($("#id").val());
        var nombre = String($("#nombre").val());
        var edad = Number($("#edad").val());
        var sexo = String($("#sexo").val());
        var puesto = Number($("#puesto").val());
        jsl[i].id = Number($("#id").val());
        jsl[i].nombre = nombre;
        jsl[i].edad = edad;
        jsl[i].sexo = sexo;
        jsl[i].puesto = puesto;
        l = JSON.stringify(jsl);
        localStorage.setItem("localList", l);
        index = -1;
    } //guardar en indice
    function limpioImputs() {
        $("#id").val("");
        $("#nombre").val("");
        $("#edad").val("");
        $("#sexo").val("");
        $("#puesto").val("");
        index = -1;
    }
    var newImage = document.createElement('img');
    newImage = sp.foto_string;
    $("#imgTest").html();
})(sp || (sp = {})); //namespace
