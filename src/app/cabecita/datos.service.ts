import { Injectable } from '@angular/core';
import { Peliculas, contenidos } from "./proyectos";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosService {

  peliculas: Peliculas[] = contenidos;

  private cambioIdioma= new BehaviorSubject<string>('es');
  lang= this.cambioIdioma.asObservable();

  constructor() {}
  setIdioma(data: string){
    this.cambioIdioma.next(data)
  }
  getPeliculabySlug(slug: string): Peliculas{

    return this.peliculas.find( film => film.slug === slug );
  }
  getDesarrollo() : Peliculas[]{
    return this.peliculas.filter( film => film.desarrollo === 2 )
  }
  getTerminadas(){
    return this.peliculas.filter( film => film.desarrollo === 1 )
  }
  getPeliculasPre() {
    return this.peliculas.filter( film => film.desarrollo === 3 )
  }
}
