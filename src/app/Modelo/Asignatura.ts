import { Docente } from "./Docente";

export class Asignatura{
   
    id_asignatura:number; 
    codigo:string; 
    creditos:number; 
    descripcion:string; 
    nombre:string; 
    pre_requisito:string;
    docente:Docente;
}