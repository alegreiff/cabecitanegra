import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../datos.service';
export interface Persona {
  nombre: string;
  en: Perfil;
  es: Perfil;
  slug: string;
}
export interface Perfil {
  habilidades: string;
  perfil: string;
}
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  personas: Persona[] = [
    {
      nombre: 'Alfonso Acosta',
      slug: 'alfonso',
      es: {
        habilidades: 'DIRECTOR / GUIONISTA / MONTAJISTA / DOCENTE',
        perfil: `Director, guionista y montajista colombiano. Estudió cine en la Universidad Nacional de Colombia. Su primer largometraje, El resquicio (2012) se estrenó en el Festival Internacional de Cine de Busán y su agente de ventas es E One de Canadá. Director y guionista de la película Cólera morbo (2021). Director de Laika en las Estrellas (2020) una serie juvenil y animalista, y el cortometraje infantil Duermevela (2019).<br /><br />
        Sus historias están envueltas por un halo de melancolía con personajes particulares con mundos internos llenos de matices. Así como disfruta crear historias que navegan entre géneros como el drama, terror psicológico y el misterio, así mismo disfruta crear para público infantil y juvenil. Docente con más de diez años de experiencia.
        `,
      },
      en: {
        habilidades: 'DIRECTOR / SCRIPTWRITER / EDITOR',
        perfil: `Colombian director, screenwriter and editor. He studied filmmaking at National University of Colombia. His first feature film, The Crack (2012) was released at the Busan International Film Festival and its sales agent is E One from Canada. Director and scriptwriter of the film Rage (2020). Director of Laika in the Stars (2020) a TV series, and the shortfilm for children Doze (2019).`,
      },
    },
    {
      nombre: 'Carolina Mosquera',
      slug: 'carolina',
      es: {
        habilidades: 'PRODUCTORA CREATIVA / DOCENTE',
        perfil:
          'Productora colombiana involucrada creativamente en todos los procesos de producción de sus proyectos. Es Realizadora de cine y televisión de la Universidad Nacional de Colombia, promoción 2007. Productora EAVE - Puentes promoción 2015 - 2016. Becaria Torino Film Lab – Idartes 2019. Ganadora de múltiples premios del Fondo para el Desarrollo Cinematográfico y del Programa Nacional de Estímulos del Ministerio de Cultura. Actualmente adelanta estudios en la Maestría en Estética e Historia del arte en la universidad Jorge Tadeo Lozano',
      },
      en: {
        habilidades: 'PRODUCER',
        perfil:
          'Colombian producer. EAVE – PUENTES promotion 2015/2016. Graduated from Film School of the Universidad Nacional de Colombia. She´s a producer involved creatively in all processes of production for her projects. Producer of the feature film The Crack (2012, 101 min.) premiered at Busan International Film Festival. Producer, scriptwriter and lead actress of Rage (2020, 100 min).',
      },
    },
  ];

  lang: string;
  slug: string;
  //persona: Persona
  constructor(private route: ActivatedRoute, private ds: DatosService) {}

  ngOnInit() {
    this.ds.lang.subscribe((val: string) => (this.lang = val));
    /* this.route.params.subscribe( res => {
      this.slug = res.persona,
      this.persona = this.personas.find( gente => gente.slug === this.slug )
    }) */
  }
}
