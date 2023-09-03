import { Component, OnInit } from "@angular/core";
import { DatosService } from "../datos.service";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"],
})
export class InicioComponent implements OnInit {
  constructor(private ds: DatosService) {}
  lang: string;
  title = "cabecita";
  contenidoES: string = `Si Somos una empresa colombiana de <strong>creación</strong> y <strong>producción</strong> de contenidos para cine y televisión fundada en 2009 por Carolina Mosquera y Alfonso Acosta, realizadores de cine y televisión y docentes. Nos interesa desarrollar y producir proyectos de alto valor artístico en los que se asuman riesgos narrativos y estéticos, historias con visiones fuertes, personales y originales. 
   
  <br><br>
  En Cabecitanegra encontrarán un espacio íntimo de creación, de aprendizaje, y de trabajo colaborativo.`;
  contenidoEN: string = `Independent film production company based in Bogotá, Colombia interested in producing art-house content. Its films and TV series are caracterized by its multiple reading layers with a strong, fresh and original vision.
  <br><br>
  A creative look on production processes, the strength of good ideas, the passion and a strong authorial character, guide the production of our projects.`;
  //contenido: string;
  ngOnInit() {
    //this.contenido = this.contenidoES;
    this.ds.lang.subscribe((val: string) => (this.lang = val));
  }

  /* idiomaCont(lang: string){
if(lang === 'es'){
  this.contenido=this.contenidoES;
}

if(lang=== 'en'){
  this.contenido=this.contenidoEN;
}
} */
}
