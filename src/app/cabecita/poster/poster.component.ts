import { Component, OnInit, Input } from '@angular/core';
import { Peliculas } from '../proyectos';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {


  @Input()
  dato: Peliculas;
  lang: string
  constructor(private ds: DatosService) { }

  ngOnInit(): void {
    this.ds.lang.subscribe( (val: string) =>  this.lang = val)
  }

}
