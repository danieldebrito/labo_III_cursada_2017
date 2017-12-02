/// <reference path="..\node_modules\@types\jquery\index.d.ts" />

namespace sp {

    window.onload = function () {

        ArrayToSelectHTML(EnumToArray(ePuesto));
        TablaJason(genJSON(getListJSON(),checkBoxes()));    

    }

    function EnumToArray(ePuesto: any): Array<any> {
        let arrayRet = new Array<any>();

        for (var i = 0; i < (Object.keys(ePuesto).length) * .5; i++) {
            arrayRet.push(ePuesto[i]);
        }
        //console.log(arrayRet);
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
        TablaJason(genJSON(getListJSON(),z));
        return z;
    }

    function genJSON(data: any, arrayConfig: any) {

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
                    default:
                        r.puesto = sp.ePuesto[v.puesto];
                        break;
                }
            }
            return r;
        });
        return p;
    }

    function TablaJason(json: any) {
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
            html += "<td><button value=' " + i + " ' id='btnmodificar' class='btn btn-primary' onclick='modificar()'>Modificar</button></td>"
                + "<td><button value=' " + i + " ' id='btneliminar' class='btn btn-primary' onclick='borrar()'>Borrar</button></td>" + "</tr>";
        }
        html += "</tbody></table>";

        $("#table").html(html);
    }

    export function guardar(): void {
    let id: number = Number($("#id").val());
    let nombre: string = String($("#nombre").val());
    let edad: number = Number($("#edad").val());
    let sexo: string = String($("#sexo").val());
    let puesto: number = Number($("#puesto").val());
    let e: sp.empleado = new sp.empleado(id, nombre, edad, sexo, puesto);

    let listaString = getListJSON();
    
    listaString.push(e.toJSON());
    localStorage.setItem("localList", JSON.stringify(listaString));
}

    
    export function borrarTodo(){
        localStorage.clear();
    }

    function getListJSON() {
        let l: any = getLocalString();
        if (l == null) {
            return {
                id: "",
                nombre: "",
                edad: "",
                sexo: "",
                puesto: ""
            };
        }
        else {
            let g: any = localStorage.getItem("localList");
            l = JSON.parse(g);
        }
        return l;
    }

    function getLocalString() {
        let ret: any = [];
        if (localStorage.getItem("localList") == null) {
            ret = [];
        }
        else {
            ret = localStorage.getItem(("localList"));
            console.log(ret);
        }
        return ret;
    }
    

}//namespace

/*

function getListString() {
        return localStorage.getItem("localList");
    }

    

    function Traer(id: number, arr: any): void {
        for (let i = 0; i > arr.lenght; i++) {
            if (id == arr[i].id) {

                ($("#id").val(arr[i].id));
                ($("#nombre").val(arr[i].nombre));
                let edad: number = Number($("#edad").val());
                let tipo: number = Number($("#tipo").val());
                let patas: number = Number($("#cantpatas").val());
            }
        }
    }


let listaString: any;
listaString = getLocalString();





function borrar(index: number) {


    alert("ffffff");
}

function modificar() {
    alert("golaaa");
}

*/





