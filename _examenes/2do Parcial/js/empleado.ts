namespace SegundoParcial {
    
        export class Empleado extends Persona {
            private id: number;
            private puesto: string;
    
            constructor(nomb: string, sex: string, id:number, p:string) {
                super(nomb, sex);
                this.id = id;
                this.puesto = p;
            }
    
            
    
            ToJSON():any {
                return {
                    id: this.id,
                    nombre: this.nombre,
                    sexo: this.sexo,
                    puesto: this.puesto
                }
            }
    
        }
    }// namespace
    