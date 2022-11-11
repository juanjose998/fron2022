import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Docente } from './Modelo/Docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {


  Url7='http://localhost:8080/docente/listarDocentes';

  
  constructor(private httpClient : HttpClient) { }


   


 
  obtenerListaDocentes():Observable<Docente[]>{
    return this.httpClient.get<Docente[]>(`${this.Url7}`)
  }

}

