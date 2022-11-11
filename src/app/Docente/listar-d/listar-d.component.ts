import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteService } from 'src/app/docente.service';
import { Docente } from 'src/app/Modelo/Docente';

@Component({
  selector: 'app-listar-d',
  templateUrl: './listar-d.component.html',
  styleUrls: ['./listar-d.component.css']
})
export class ListarDComponent implements OnInit {
  docentes:Docente[];

  router:Router;
  
   constructor(private docenteService:DocenteService ,  router:Router) { 


   }
  
  
  ngOnInit(): void {
    this.obtenerDocentes();

  }


  private obtenerDocentes(){
    this.docenteService.obtenerListaDocentes().subscribe(dato => {
      this.docentes = dato;
      console.log(this.docentes)
    })

}

}
