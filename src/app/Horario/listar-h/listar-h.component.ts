import { Component, OnInit } from '@angular/core';
import { HorarioService } from 'src/app/horario.service';
import { Horario } from 'src/app/Modelo/Horario';

@Component({
  selector: 'app-listar-h',
  templateUrl: './listar-h.component.html',
  styleUrls: ['./listar-h.component.css']
})
export class ListarHComponent implements OnInit {

  horarios:Horario[];

  constructor(private horarioService:HorarioService) { }
 
  
 ngOnInit(): void {
   this.obtenerHorarios();

 }


private obtenerHorarios(){
   this.horarioService.obtenerListaHorarios().subscribe(dato => {
     this.horarios = dato;
     console.log(this.horarios)
     console.log(this.horarios[1].idHorario)
   })
 }

}

