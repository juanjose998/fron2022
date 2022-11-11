import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/asignatura.service';
import { Asignatura } from 'src/app/Modelo/Asignatura';

@Component({
  selector: 'app-listar-a',
  templateUrl: './listar-a.component.html',
  styleUrls: ['./listar-a.component.css']
})
export class ListarAComponent implements OnInit {

  asignaturas:Asignatura[];

  
   constructor(private asignaturaService:AsignaturaService) { 


   }
  
  
  ngOnInit(): void {
    this.obtenerAsignatura();

  }


  private obtenerAsignatura(){
    this.asignaturaService.obtenerListaAsignatura().subscribe(dato => {
      this.asignaturas = dato;
      console.log(dato);
    })

}

}
