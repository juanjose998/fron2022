import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horario } from './Modelo/Horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  
  url="http://localhost:8080/horario/listarHorarios"
  constructor(private httpClient : HttpClient) { }




  obtenerListaHorarios():Observable<Horario[]>{
    return this.httpClient.get<Horario[]>(`${this.url}`)
  }

}
