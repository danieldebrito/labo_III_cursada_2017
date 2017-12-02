namespace sp {
    export class persona {
        public nombre: string;
        public edad: number;
        public sexo: string;

        constructor(n: string, e: number, s: string) {
            this.nombre = n;
            this.edad = e;
            this.sexo = s;
        }
    }
}// namespace