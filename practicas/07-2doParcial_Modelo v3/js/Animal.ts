namespace SegundoParcial{
    
    export class Animal {
        public tipo:ETipoMascotas;
        public patas:number;
        public edad:number;
    
        constructor(edad: number, tipo: ETipoMascotas, cantPatas: number) {
            this.tipo = tipo;
            this.patas = cantPatas;
            this.edad = edad;
        }
    
        get ETipo(): ETipoMascotas {
            return this.tipo;
        }

        get CantPatas() :number {
            return this.patas;
        }
    
        set CantPatas(cantPatas :number) {
            this.patas = cantPatas;
        }

        get Edad() :number {
            return this.edad;
        }
    
        set Edad(edad :number) {
            this.edad = edad;
        }
    
    
    }
} //namespace