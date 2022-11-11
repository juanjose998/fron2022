import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponent } from './Estudiante/nuevo/nuevo.component';
import { ListarComponent } from './Estudiante/listar/listar.component';
import { ActualizarComponent } from './Estudiante/actualizar/actualizar.component';
import { EliminarComponent } from './Estudiante/eliminar/eliminar.component';
import { NuevoDComponent } from './Docente/nuevo-d/nuevo-d.component';
import { ListarDComponent } from './Docente/listar-d/listar-d.component';
import { ActualizarDComponent } from './Docente/actualizar-d/actualizar-d.component';
import { EliminarDComponent } from './Docente/eliminar-d/eliminar-d.component';
import { NuevoAComponent } from './Asignatura/nuevo-a/nuevo-a.component';
import { ListarAComponent } from './Asignatura/listar-a/listar-a.component';
import { ActualizarAComponent } from './Asignatura/actualizar-a/actualizar-a.component';
import { EliminarAComponent } from './Asignatura/eliminar-a/eliminar-a.component';
import { NuevoHComponent } from './Horario/nuevo-h/nuevo-h.component';
import { ListarHComponent } from './Horario/listar-h/listar-h.component';
import { ActualizarHComponent } from './Horario/actualizar-h/actualizar-h.component';
import { EliminarHComponent } from './Horario/eliminar-h/eliminar-h.component';
import { NuevoSComponent } from './Salon/nuevo-s/nuevo-s.component';
import { ListarSComponent } from './Salon/listar-s/listar-s.component';
import { ActualizarSComponent } from './Salon/actualizar-s/actualizar-s.component';
import { EliminarSComponent } from './Salon/eliminar-s/eliminar-s.component';
import { NuevoMComponent } from './Matricula/nuevo-m/nuevo-m.component';
import { ListarMComponent } from './Matricula/listar-m/listar-m.component';
import { ActualizarMComponent } from './Matricula/actualizar-m/actualizar-m.component';
import { EliminarMComponent } from './Matricula/eliminar-m/eliminar-m.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    ListarComponent,
    ActualizarComponent,
    EliminarComponent,
    NuevoDComponent,
    ListarDComponent,
    ActualizarDComponent,
    EliminarDComponent,
    NuevoAComponent,
    ListarAComponent,
    ActualizarAComponent,
    EliminarAComponent,
    NuevoHComponent,
    ListarHComponent,
    ActualizarHComponent,
    EliminarHComponent,
    NuevoSComponent,
    ListarSComponent,
    ActualizarSComponent,
    EliminarSComponent,
    NuevoMComponent,
    ListarMComponent,
    ActualizarMComponent,
    EliminarMComponent,
  
   
 
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
