import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from './Modelo/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {


  url="http://localhost:8080/estudiante/listarEstudiantes"
  constructor(private httpClient : HttpClient) { }




  obtenerListaEstudiantes():Observable<Estudiante[]>{
    return this.httpClient.get<Estudiante[]>(`${this.url}`)
  }

}
