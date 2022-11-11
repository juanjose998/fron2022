import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from './Modelo/Asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  
  Url7='http://localhost:8080/asignatura/listarAsignatura';

  
  constructor(private httpClient : HttpClient) { }


   


 
  obtenerListaAsignatura():Observable<Asignatura[]>{
    return this.httpClient.get<Asignatura[]>(`${this.Url7}`)
  }

}
