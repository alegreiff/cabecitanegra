import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './cabecita/proyectos/proyectos.component';
import { InicioComponent } from './cabecita/inicio/inicio.component';
import { DetalleComponent } from './cabecita/detalle/detalle.component';
import { PerfilComponent } from './cabecita/perfil/perfil.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'pelicula/:id', component: DetalleComponent },
  { path: 'perfil/:persona', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
