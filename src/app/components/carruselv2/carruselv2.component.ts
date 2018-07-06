import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carruselv2',
  templateUrl: './carruselv2.component.html',
  styleUrls: ['./carruselv2.component.css']
})

export class Carruselv2Component implements OnInit {

  @Input() images: Image[];
  constructor() { }

  ngOnInit() {
  }

}


interface Image {
  title: string;
  url: string;
}
