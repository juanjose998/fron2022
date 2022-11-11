import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from 'src/app/estudiante.service';
import { Estudiante } from 'src/app/Modelo/Estudiante';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
 
  estudiantes:Estudiante[];

   constructor(private estudianteService:EstudianteService) { }
  
   
  ngOnInit(): void {
    this.obtenerEstudiantes();

  }


private obtenerEstudiantes(){
    this.estudianteService.obtenerListaEstudiantes().subscribe(dato => {
      this.estudiantes = dato;
    })
  }
 
}
