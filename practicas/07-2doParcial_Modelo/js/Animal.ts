namespace SegundoParcial{
    
    export class Animal {
        public _ETipo:ETipoMascotas;
        public _cantPatas:number;
        public _edad:number;
    
        constructor(edad: number, ETipo: ETipoMascotas, cantPatas: number) {
            this._ETipo = ETipo;
            this._cantPatas = cantPatas;
            this._edad = edad;
        }
    
        get ETipo(): ETipoMascotas {
            return this._ETipo;
        }

        get CantPatas() :number {
            return this._cantPatas;
        }
    
        set CantPatas(cantPatas :number) {
            this._cantPatas = cantPatas;
        }

        get Edad() :number {
            return this._edad;
        }
    
        set Edad(edad :number) {
            this._edad = edad;
        }
    
    
    }
} //namespace