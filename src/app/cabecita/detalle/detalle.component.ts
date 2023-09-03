import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../datos.service';
import { Peliculas } from '../proyectos';

import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  pelicula: Peliculas;
  lang: string;
  slug: string;
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private ds: DatosService
    ) { }

  ngOnInit(): void {

    this.ds.lang.subscribe( (val: string) =>  this.lang = val)
    this.route.params.subscribe( res => this.slug = res.id)
    this.pelicula = this.ds.getPeliculabySlug(this.slug)

    if(this.pelicula.galeria){
      this.galleryImages = this.creaGaleria();
    }
    this.galleryOptions = [
      {
        width: '1200px',
        height: '100px',
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Fade,
        image: false
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '400px',
        height: '100px',
        thumbnailsColumns: 3,
        /* imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20 */
      },
      // max-width 400
      {
        breakpoint: 400,
        width: '250px',
        /* preview: false */
      }
    ];

    /* this.galleryImages = [
      {
        small: 'assets/posteres/1/3.jpg',
        big: 'assets/posteres/3/3.jpg'
      },
      {
        small: 'assets/posteres/1/4.jpg',
        big: 'assets/posteres/1/4.jpg'
      },
      {
        small: 'assets/posteres/1/7.jpg',
        big: 'assets/posteres/1/7.jpg'
      },{
        small: 'assets/posteres/1/8.jpg',
        big: 'assets/posteres/1/8.jpg'
      },{
        small: 'assets/posteres/1/8.jpg',
        big: 'assets/posteres/1/8.jpg'
      },{
        small: 'assets/posteres/1/8.jpg',
        big: 'assets/posteres/1/8.jpg'
      },{
        small: 'assets/posteres/1/8.jpg',
        big: 'assets/posteres/1/8.jpg'
      },{
        small: 'assets/posteres/1/8.jpg',
        big: 'assets/posteres/1/8.jpg'
      }

    ]; */
  }

  creaGaleria(){
    const arreglo = this.pelicula.galeria;
    const imagenes = [];
    for(let img of arreglo){
      imagenes.push({small: `assets/posteres/${this.pelicula.id}/${img}.jpg`, big: `assets/posteres/${this.pelicula.id}/${img}.jpg`})
    }
    return imagenes;
  }

}
