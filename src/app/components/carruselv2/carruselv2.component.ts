import { Component, OnInit, Input } from '@angular/core';

const PORCENTAJE = '%';

@Component({
  selector: 'app-carruselv2',
  templateUrl: './carruselv2.component.html',
  styleUrls: ['./carruselv2.component.css']
})

export class Carruselv2Component implements OnInit {

  @Input() images: Image[];
  @Input() imagesPerFrame: number;
  constructor() { }

  ngOnInit() {
    if (!this.imagesPerFrame) {
      this.imagesPerFrame = 1;
    }
  }

  getWidthul(): string {
    return (this.images.length * 100).toString() + PORCENTAJE;
  }

  getWidthli(): string {
    return ((100 / this.images.length) / this.imagesPerFrame).toString() + PORCENTAJE;
  }

}


interface Image {
  title: string;
  url: string;
}
