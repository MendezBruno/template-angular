import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {


  @Input() imagenes;
  imagenPath: any;
  index = 0;

  ImagesDummy = [
    '../../../assets/img/asado-tira.jpg',
    '../../../assets/img/carne-con-hueso.jpg',
    '../../../assets/img/Costillares.jpg',
  ];

  constructor() {
    // this.imagenes =  this.ImagesDummy;
  }

  ngOnInit() {
    if ( this.imagenes !== undefined ) {
      this.imagenPath = this.imagenes[this.index].url;
    }
  }

  cambiarImagenAnterior() {
    if (this.imagenes[this.index - 1] !== undefined) {
      this.index = this.index - 1;
      this.imagenPath = this.imagenes[this.index].url;
    }
  }

  cambiarImagenSiguiente() {
    if (this.imagenes[this.index + 1] !== undefined) {
      this.index = this.index + 1;
      this.imagenPath = this.imagenes[this.index].url;
    }
  }


}
