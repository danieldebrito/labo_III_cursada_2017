/// <reference path="..\node_modules\@types\jquery\index.d.ts" />

namespace sp {

    export let arrayEmp: empleado[];
    let index: number;
    export let foto_string: any;//: string | null = null;



    window.onload = function () {
        limpioImputs();
        ArrayToSelectHTML(EnumToArray(ePuesto));
        ArrayToSelectFiltroHTML(EnumToArray(ePuesto));
        TablaJason(genJSON(getListJSON(), checkBoxes()));
    }

    function getListJSON() {
        let l: any = localStorage.getItem("localList");

        if (l != null && l != "" && l != false && l != undefined) {
            let r = JSON.parse(l);
            return r;
        }
        else
            return {};
    }

    function getLocalString() {
        let l: any = localStorage.getItem("localList");

        if (l != null && l != "" && l != false && l != undefined)
            return localStorage.getItem(("localList"));
        else
            return [];
    }

    function isLocalStorageEmpty(): boolean {
        let l: any = localStorage.getItem("localList");

        if (l != null && l != "" && l != false && l != undefined)
            return false;
        else
            return true;
    }

    function EnumToArray(ePuesto: any): Array<any> {
        let arrayRet = new Array<any>();

        for (var i = 0; i < (Object.keys(ePuesto).length) * .5; i++) {
            arrayRet.push(ePuesto[i]);
        }
        return arrayRet;
    }

    function ArrayToSelectHTML(arrayParam: Array<any>) {
        let i = 0;
        var codeHTML = "";
        codeHTML += '<label for="puesto">Puesto: </label>';
        codeHTML += "<select id='puesto' class='form-control'>";
        arrayParam.forEach(element => {
            codeHTML += "<option value='" + i + "'>" + element + "</option>";
            i++;
        });
        codeHTML += "</select>";

        $("#select").html(codeHTML);
    }

    function ArrayToSelectFiltroHTML(arrayParam: Array<any>) {
        let i = 0;
        var codeHTML = "";
        codeHTML += '<label for="puestoFiltro">Filtrar por: </label>';
        codeHTML += "<select id='puestoFiltro' class='form-control'>";
        codeHTML += "<option value='" + "todos" + "'>" + "Todos" + "</option>";
        arrayParam.forEach(element => {
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

    function genJSON(data: any, arrayConfig: any) {

        if (!isLocalStorageEmpty()) {
            var p = data.map((v: any) => {
                var r: any = {};
                for (let index = 0; index < arrayConfig.length; index++) {
                    const element = arrayConfig[index];
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
                .filter(function (item: any) {
                    let epuesto = $("#puestoFiltro").val();
                    if (epuesto != "todos")
                        return item.puesto == epuesto;
                    else
                        return item.puesto;
                })
        }
        return p;
    }

    export function Promedio() {
        let arrayEmp = genJSON(getListJSON(), checkBoxes());

        let prom: number = arrayEmp.reduce(function (anterior: any, actual: any) {
            return parseInt(anterior) + parseInt(actual.edad);
        }, 0) / arrayEmp.length;
        $("#promedio").val(prom);
    }

    function TablaJason(json: any) {
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
        } else
            html = "";

        $("#table").html(html);
        cargarFotos();

    }

    export function encodeImageFileAsURL() {

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
            }
            fileReader.readAsDataURL(fileToLoad);
        }
    }//encode*/


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
            }
            fileReader.readAsDataURL(fileToLoad);
        }
    }//cargarfotos*

    export function borrarTodo() {
        localStorage.clear();
    }

    export function borrar(i: number) {
        let l: any = localStorage.getItem("localList");
        let jsl = JSON.parse(l);

        jsl.splice(i, 1);

        let arr = JSON.stringify(jsl);
        localStorage.setItem("localList", arr);
    }

    function retid(): number {
        let t: any = localStorage.getItem("localList");
        let l = JSON.parse(t);

        let id: number = 1;

        if (l != null && l != "" && l != false && l != undefined) {
            
            for (let i = 0; i < l.length; i++) {
                let max: number = 0;
                if (l[i].id > max)
                    max = l[i].id;
            }

            //let i: number = parseInt(l[l.length - 1].id);
            id = max + 1;
        }


        return id;
    }

    export function guardar(): void {
        let id: number = retid();
        let nombre: string = String($("#nombre").val());
        let edad: number = Number($("#edad").val());
        let sexo: string = String($("#sexo").val());
        let puesto: number = Number($("#puesto").val());
        let e: sp.empleado = new sp.empleado(id, nombre, edad, sexo, puesto, foto_string);
        foto_string = null;

        let arr: any;
        arrayEmp = new Array<empleado>();

        if (index == -1) {

            if (isLocalStorageEmpty()) {
                arrayEmp.push(e.toJSON());
                arr = JSON.stringify(arrayEmp)
                localStorage.setItem("localList", arr);
            }
            else {
                arr = localStorage.getItem("localList");
                arrayEmp = JSON.parse(arr);
                arrayEmp.push(e.toJSON());
                arr = JSON.stringify(arrayEmp);
                localStorage.setItem("localList", arr);
            }
        }
        else {
            guardarEnIndice(index);
        }
        limpioImputs();
    }//guardar

    export function modificar(i: number) {
        index = i;

        let l: any = localStorage.getItem("localList");
        let jsl = JSON.parse(l);

        $("#id").val(jsl[i].id);
        $("#nombre").val(jsl[i].nombre);
        $("#edad").val(jsl[i].edad);
        $("#sexo").val(jsl[i].sexo);
        $("#puesto").val(jsl[i].puesto);
    }//modificar

    function guardarEnIndice(i: number) {
        let l: any = localStorage.getItem("localList");
        let jsl = JSON.parse(l);

        let id: number = Number($("#id").val());
        let nombre: string = String($("#nombre").val());
        let edad: number = Number($("#edad").val());
        let sexo: string = String($("#sexo").val());
        let puesto: number = Number($("#puesto").val());

        jsl[i].id = Number($("#id").val());
        jsl[i].nombre = nombre;
        jsl[i].edad = edad;
        jsl[i].sexo = sexo;
        jsl[i].puesto = puesto;

        l = JSON.stringify(jsl);
        localStorage.setItem("localList", l);

        index = -1;
    }//guardar en indice

    function limpioImputs() {
        $("#id").val("");
        $("#nombre").val("");
        $("#edad").val("");
        $("#sexo").val("");
        $("#puesto").val("");

        index = -1;
    }

    var newImage = document.createElement('img');
    newImage = foto_string;
    $("#imgTest").html();


}//namespace