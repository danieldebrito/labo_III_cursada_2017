// Si no ponemos modificadores de Acceso todo es publico en Typescript.
class Avenger {
    private _nombre: string;
    nombreReal: string;
    peleasGanadas: number;

    constructor(nombreReal: string, peleasGanadas: number, nombre?: string) {
        this._nombre = nombre;  // nombre es opcional, comentar strict en el json
        this.nombreReal = nombreReal;
        this.peleasGanadas = peleasGanadas;
    }

    mostrar(): string {
        return `${this._nombre}, ${this.nombreReal}, ${this.peleasGanadas}`
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }
}

class Xmen extends Avenger {
    private _poder: string;
    constructor(nr: string, p: number, n: string, poder: string) {
        super(nr, p, n);
        this._poder = poder;
    }


    mostrar(): string {
        return super.mostrar() + ", " + this._poder;
        //con super llamo al metodo de la clase padre
    }
}

class Apocalipsis {  //  esta clase tendria una sola instancia
    private static _instance: Apocalipsis; // esa instancia se guarda aca en este metodo estatico
    private constructor(public nombre: string) {
    }
    
    static get Instance(): Apocalipsis {
        if (!(this._instance)) {
            this._instance = new Apocalipsis("HEEELL");
        }
        return this._instance;
    }
}
console.log(Apocalipsis.Instance);


// Declaramos una variable con LET(Esta posee alcance limitado).
let a1 = new Avenger("Ironman", 10, "Tony");
let a2 = new Avenger("Bruce", 2);
a1.nombreReal = "Tony";
a1.peleasGanadas = 10;

console.log(a1);  // muestro la clase
console.log(a1.nombre); // muestro con la prop
console.log(a1.mostrar());  // muestro a traves del metodo

a1.mostrar(); // metodo
a1.nombre;  // propiedad

let x1: Xmen = new Xmen("logan", 2, "wolvwrine", "garras mortales");
console.log(x1.mostrar());

let array = new Array<Avenger>();
array.push(a1);
array.push(x1);

array.forEach(element => {
    console.log(element.mostrar());
});
