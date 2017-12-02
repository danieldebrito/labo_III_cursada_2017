namespace SegundoParcial {

    export class Mascota extends Animal {
        private id: number;
        private nombre: string;

        constructor(edad: number, ETipo: ETipoMascotas, cantPatas: number, id: number, nombre: string) {
            super(edad, ETipo, cantPatas);
            this.id = id;
            this.nombre = nombre;
        }

        get ID(): number {
            return this.id;
        }

        set ID(id: number) {
            this.id = id;
        }

        get Nombre(): string {
            return this.nombre;
        }

        set Nombre(nombre: string) {
            this.nombre = nombre;
        }

        ToJSON():any {
            return {
                "Edad": this.edad,
                "Tipo": this.tipo,
                "Patas": this.patas,
                "ID": this.id,
                "Nombre": this.nombre
            }
        }

    }
}// namespace
