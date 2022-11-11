import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListarComponent } from './Estudiante/listar/listar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uniremigton';
  constructor(private router:Router){}

Listar(){
  this.router.navigate(["listar"])

  }
 
 LstDocente(){
  this.router.navigate(["listardocente"])
 }   

 LstAsignatura(){
  this.router.navigate(["listarAsignatura"])
 }   

 LstHorartio(){
  this.router.navigate(["listarHorario"])
 }  
 LstSalon(){
  this.router.navigate(["listarSalon"])
 }  

 LstMatricula(){
  this.router.navigate(["listarMatricula"])
 }  
}
