/// <reference path="..\node_modules\@types\jquery\index.d.ts" />

namespace SegundoParcial {
    
   window.onload = function () {

          
        TablaJason(genJSON(getListJSON(),checkBoxes()));

    }

    addEventListener('click', checkBoxes);

function checkBoxes(){
    var z = [];
    
    if( $(".id").prop('checked') ) {
        z.push('id');
    }

    if( $(".nombre").prop('checked') ) {
        z.push('nombre');
    }

    if( $(".sexo").prop('checked') ) {
        z.push('sexo');
    }

    if( $(".puesto").prop('checked') ) {
        z.push('puesto');
    }
    TablaJason(genJSON(getListJSON(),z));
    return z;
}

function genJSON(data:any, arrayConfig:any){
    
    var p = data.map((v: any) => {
    var r: any = {};
      for (let index = 0; index < arrayConfig.length; index++) {
        const element = arrayConfig[index];
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

function TablaJason(json:any){
    var html = "<table class='table table-striped table-bordered table-hover table-condensed'><tr><thead>";

    for (var item in json[0]) {
        html += "<th>" + item + "</th>";
    }
    html += "</tr></thead><tbody>";

    for (var i = 0; i < Object.keys(json).length; i++) {
        html += "<tr>";
        for (var item in json[0]){
            html += "<td>" + eval('json[i].' + item)  +  "</td>" ;
       }
       html +=  "<td><button value=' "+ i +" ' id='btnmodificar' class='btn btn-primary' onclick='modificar(" + i + ")'>Modificar</button></td>" 
       +   "<td><button value=' "+ i +" ' id='btneliminar' class='btn btn-primary' onclick='borrar(" + i + ")'>Borrar</button></td>" + "</tr>";
    }
    html += "</tbody></table>";

    $("#table").html(html);
}

function getListString(){
    return localStorage.getItem("localList");
}

function getListJSON(){
    let l:any = getListString();
    if(l == null){
        l = [];
    }
    else{
        let g:any = localStorage.getItem("localList");
        l = JSON.parse(g);
    }
        return l; 
    }


    function Traer (id:number, arr:any):void{
        for(let i=0;i>arr.lenght;i++){
            if(id==arr[i].id){
        
                ($("#id").val(arr[i].id));
                ($("#nombre").val(arr[i].nombre));
                let edad :number = Number($("#edad").val());
                let tipo :number = Number($("#tipo").val());
                let patas :number  = Number($("#cantpatas").val());
            }
        }
    }
    

}//namespace

function getLocalString(){
    let ret:any = [];
    if(localStorage.getItem("localList") == null){
        ret = [];
    }
    else{
        ret = localStorage.getItem(("localList"));
        console.log(ret);
    }
    return ret;
}

let listaString:any = [];

function getLocalJSON(){
    let l:any = getLocalString();
    if(l == null){
        l = [];
    }
    else{
        let g:any = localStorage.getItem("localList");
        l = JSON.parse(g);
    }
        return l; 
    }




    function guardar():void {
    let id :number = Number($("#id").val());
    let nombre :string = String($("#nombre").val());
    let sexo :string = String($("#sexo").val());
    let puesto :string = String($("#puesto").val());
    let nuevaEmpleado: SegundoParcial.Empleado = new SegundoParcial.Empleado(nombre, sexo, id, puesto);
    
    let l:any = localStorage.getItem("localList");
    let jsl = JSON.parse(l);
    
    
    listaString.push(nuevaEmpleado.ToJSON());
    localStorage.setItem("localList",JSON.stringify(listaString));
}

function borrarTodo(){
    localStorage.clear();
}

function modificar(i:number){

    let l:any = localStorage.getItem("localList");
    let jsl = JSON.parse(l);

    $("#btnguardar").val(i);

    jsl[i]

    $("#id").val(jsl[i].id);
    $("#nombre").val(jsl[i].nombre);
    $("#sexo").val(jsl[i].sexo);
    $("#puesto").val(jsl[i].puesto);
}

function borrar(i:number){
    let l:any = localStorage.getItem("localList");
    let jsl = JSON.parse(l);

    $("#btnguardar").val(i);

    jsl[i].splice( i, 1 );

    let arr = JSON.stringify(jsl);

    localStorage.setItem("localList",jsl);
}







