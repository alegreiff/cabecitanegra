import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../proyectos';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  peliculasTerminadas: Peliculas[];
  peliculasDesarrollo: Peliculas[];
  peliculasPre: Peliculas[];
  lang: string;

  constructor(
    private ds: DatosService
  ) { }

  ngOnInit(){
    this.peliculasTerminadas = this.ds.getTerminadas();
    this.peliculasDesarrollo = this.ds.getDesarrollo();
    this.peliculasPre = this.ds.getPeliculasPre();

    this.ds.lang.subscribe( (val: string) =>  this.lang = val)
  }

}
