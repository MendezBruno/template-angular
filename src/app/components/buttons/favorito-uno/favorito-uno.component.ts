import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-favorito-uno',
  templateUrl: './favorito-uno.component.html',
  styleUrls: ['./favorito-uno.component.css']
})
export class FavoritoUnoComponent implements OnInit {

  @ViewChild('like', {static: true}) like: ElementRef;
  este = true;

  constructor() { }

  ngOnInit() {
  }

  toggleClass() {
    this.este = !this.este;
  }


}
