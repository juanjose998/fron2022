import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/Modelo/Estudiante';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  estudiante: Estudiante = new Estudiante();
  router!:Router;
 // constructor(private estudianteServicio: ServiceService,  router: Router) { }

  ngOnInit() {

  }  

  /* Guardar(estudiante:Estudiante){
    this.service.createEstudiante(estudiante)
    .subscribe(data=>{
      alert("Se agrego correctamente");
      this.router.navigate(["listar"]);
    })
  */
  

  
/* 
  guardarEstudiante() {

    this.estudianteServicio.registrarEstudiante(this.estudiante).subscribe(dato => {
      console.log(dato);
     // this.envioAlistaActividades();

    },error => console.log(error));
  }
 */

  envioAlistaActividades(){
    this.router.navigate(['/listarEstudiantes'])
  }

  onSubmit2() {
  //   this.guardarEstudiante();
  }




}
