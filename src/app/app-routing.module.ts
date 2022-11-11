import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarAComponent } from './Asignatura/actualizar-a/actualizar-a.component';
import { EliminarAComponent } from './Asignatura/eliminar-a/eliminar-a.component';
import { ListarAComponent } from './Asignatura/listar-a/listar-a.component';
import { NuevoAComponent } from './Asignatura/nuevo-a/nuevo-a.component';
import { ActualizarDComponent } from './Docente/actualizar-d/actualizar-d.component';
import { EliminarDComponent } from './Docente/eliminar-d/eliminar-d.component';
import { ListarDComponent } from './Docente/listar-d/listar-d.component';
import { NuevoDComponent } from './Docente/nuevo-d/nuevo-d.component';
import { ActualizarComponent } from './Estudiante/actualizar/actualizar.component';
import { EliminarComponent } from './Estudiante/eliminar/eliminar.component';
import { ListarComponent } from './Estudiante/listar/listar.component';
import { NuevoComponent } from './Estudiante/nuevo/nuevo.component';
import { ActualizarHComponent } from './Horario/actualizar-h/actualizar-h.component';
import { EliminarHComponent } from './Horario/eliminar-h/eliminar-h.component';
import { ListarHComponent } from './Horario/listar-h/listar-h.component';
import { NuevoHComponent } from './Horario/nuevo-h/nuevo-h.component';
import { ActualizarMComponent } from './Matricula/actualizar-m/actualizar-m.component';
import { EliminarMComponent } from './Matricula/eliminar-m/eliminar-m.component';
import { ListarMComponent } from './Matricula/listar-m/listar-m.component';
import { NuevoMComponent } from './Matricula/nuevo-m/nuevo-m.component';
import { ActualizarSComponent } from './Salon/actualizar-s/actualizar-s.component';
import { EliminarSComponent } from './Salon/eliminar-s/eliminar-s.component';
import { ListarSComponent } from './Salon/listar-s/listar-s.component';
import { NuevoSComponent } from './Salon/nuevo-s/nuevo-s.component';




const routes: Routes = [
{path: 'listar' , component:ListarComponent},
{path: 'nuevo' , component:NuevoComponent},
{path: 'actualizar' , component:ActualizarComponent},
{path: 'eliminar' , component:EliminarComponent},

{path: 'listardocente', component:ListarDComponent},
{path: 'nuevod', component:NuevoDComponent},
{path: 'actualizard', component:ActualizarDComponent},
{path: 'eliminard', component:EliminarDComponent},

{path: 'listarAsignatura', component:ListarAComponent},
{path: 'nuevoa', component:NuevoAComponent},
{path: 'actualizara', component:ActualizarAComponent},
{path: 'eliminara', component:EliminarAComponent},

{path: 'listarHorario', component:ListarHComponent},
{path: 'nuevoh', component:NuevoHComponent},
{path: 'actualizarh', component:ActualizarHComponent},
{path: 'eliminarh', component:EliminarHComponent},

{path: 'listarSalon', component:ListarSComponent},
{path: 'nuevos', component:NuevoSComponent},
{path: 'actualizars', component:ActualizarSComponent},
{path: 'eliminars', component:EliminarSComponent},

{path: 'listarMatricula', component:ListarMComponent},
{path: 'nuevosm', component:NuevoMComponent},
{path: 'actualizarm', component:ActualizarMComponent},
{path: 'eliminarm', component:EliminarMComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
