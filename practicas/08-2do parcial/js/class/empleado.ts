namespace sp {
    export class empleado extends persona {
        public id: number;
        public puesto: ePuesto;

        constructor(id: number, nombre: string, edad: number, sexo: string, puesto: ePuesto) {
            super(nombre, edad, sexo)
            this.id = id;
            this.puesto = puesto;
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