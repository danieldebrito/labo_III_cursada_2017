namespace SegundoParcial {

    export class Mascota extends Animal {
        private _id: number;
        private _nombre: string;

        constructor(edad: number, ETipo: ETipoMascotas, cantPatas: number, id: number, nombre: string) {
            super(edad, ETipo, cantPatas);
            this._id = id;
            this._nombre = nombre;
        }

        get ID(): number {
            return this._id;
        }

        set ID(id: number) {
            this._id = id;
        }

        get Nombre(): string {
            return this._nombre;
        }

        set Nombre(nombre: string) {
            this._nombre = nombre;
        }
    }
}// namespace
