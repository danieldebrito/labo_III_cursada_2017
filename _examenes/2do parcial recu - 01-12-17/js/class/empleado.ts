namespace sp {
    export class empleado extends persona {
        public id: number;
        public puesto: ePuesto;
        public foto:string;

        constructor(id: number, nombre: string, edad: number, sexo: string, puesto: ePuesto, foto:string) {
            super(nombre, edad, sexo)
            this.id = id;
            this.puesto = puesto;
            this.foto = foto;
        }

        toJSON():any {
            return {
                id: this.id,
                nombre: this.nombre,
                edad: this.edad,
                sexo: this.sexo,
                puesto: this.puesto
            }
        }
    }
}