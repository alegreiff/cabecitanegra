import { Component, OnInit } from '@angular/core';
import { DatosService } from './cabecita/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  lang: string;
constructor(private ds: DatosService){}


  ngOnInit(): void {
    this.ds.lang.subscribe( (val: string) =>  this.lang = val)
  }


idiomaCont(lang: string){
  this.ds.setIdioma(lang)
}

}

