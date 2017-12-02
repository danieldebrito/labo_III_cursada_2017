function enviarMision(xmen) {
    console.log(xmen.nombre);
}
var xmen;
xmen.nombre = "GENIAL";
xmen.peleasGanadas = 4;
xmen.otroAtributo = "otro";
enviarMision(xmen);
var XMEN2 = /** @class */ (function () {
    function XMEN2() {
    }
    XMEN2.prototype.miMetodo = function () {
        return "Hola";
    };
    return XMEN2;
}());
var xmen2 = new XMEN2();
/**
 function enviarMission(xmen:any){
    console.log(xmen.nombre);
}

let xmen = {
    nombre: "Ciclope",
    peleasGanadas : 4
}
enviarMission(xmen);
 */
/*
interface IXmen{
   nombre:string;
   peleasGanadas:number;
}

function enviarMission(xmen:{nombre:string, peleasGanadas:number}){
   console.log(xmen.nombre);
}

let xmen = {
   nombre: "Ciclope",
   peleasGanadas : 4
}
enviarMission(xmen);
*/ 
