/// <reference path="..\node_modules\@types\jquery\index.d.ts" />

namespace SegundoParcial {

    window.onload = function () {

        ArrayToSelectHTML(EnumToArray(ETipoMascotas));
        TablaJason(genJSON(MOCK_DATA,checkBoxes()));

    }

   function EnumToArray(ETipoMascotas:any): Array<any> {
        let arrayRet = new Array<any>();

        for (var i = 0; i < (Object.keys(ETipoMascotas).length)*.5; i++) {
            arrayRet.push(ETipoMascotas[i]);
        }

        return arrayRet;
}

    function  ArrayToSelectHTML(arrayParam: Array<any>){
        let i=0;
        var codeHTML = "";
        codeHTML += '<label for="cantpatas">Tipo: </label>';
        codeHTML += "<select id='tipo' class='form-control'>";
        arrayParam.forEach(element => {
            codeHTML += "<option value='" + i + "'>" + element + "</option>";
            i++;
        });
        codeHTML += "</select>";

        $("#select").html(codeHTML);
}




addEventListener('click', checkBoxes);

function checkBoxes(){
    var z = [];
    
    if( $(".id").prop('checked') ) {
        z.push('ID');
    }

    if( $(".nombre").prop('checked') ) {
        z.push('Nombre');
    }

    if( $(".edad").prop('checked') ) {
        z.push('Edad');
    }

    if( $(".tipo").prop('checked') ) {
        z.push('Tipo');
    }

    if( $(".patas").prop('checked') ) {
        z.push('Patas');
    }
    TablaJason(genJSON(MOCK_DATA, z));
    return z;
}

function genJSON(data:any, arrayConfig:any){
    
    var p = data.map((v: any) => {
    var r: any = {};
      for (let index = 0; index < arrayConfig.length; index++) {
        const element = arrayConfig[index];
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

function TablaJason(json:any){
    var html = "<table class='table table-striped table-bordered table-hover table-condensed'><tr><thead>";

    for (var item in json[0]) {
        html += "<th>" + item + "</th>";
    }
    html += "</tr></thead><tbody>";

    for (var i = 0; i < Object.keys(json).length; i++) {
        html += "<tr>";
        for (var item in json[0]){
            html += "<td>" + eval('json[i].' + item) + "</td>"; 
       }
       html += "</tr>";
    }
    html += "</tbody></table>";

    $("#table").html(html);
}



}//namespace


function Guardar():void {
    let id :number = Number($("#id").val());
    let nombre :string = String($("#nombre").val());
    let edad :number = Number($("#edad").val());
    let tipo :number = Number($("#tipo").val());
    let patas :number  = Number($("#cantpatas").val());

    let nuevaMascota: SegundoParcial.Mascota = new SegundoParcial.Mascota(edad, tipo, patas, id, nombre);

    console.log(nuevaMascota);
};