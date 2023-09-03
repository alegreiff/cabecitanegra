import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './cabecita/proyectos/proyectos.component';
import { InicioComponent } from './cabecita/inicio/inicio.component';
import { PosterComponent } from './cabecita/poster/poster.component';
import { DetalleComponent } from './cabecita/detalle/detalle.component';
import { SafeurlPipe } from './cabecita/safeurl.pipe';
import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { PerfilComponent } from './cabecita/perfil/perfil.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './cabecita/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    InicioComponent,
    PosterComponent,
    DetalleComponent,
    SafeurlPipe,
    PerfilComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    HttpClientModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
