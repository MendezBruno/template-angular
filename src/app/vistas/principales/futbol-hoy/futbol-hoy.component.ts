import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-futbol-hoy',
  templateUrl: './futbol-hoy.component.html',
  styleUrls: ['./futbol-hoy.component.css']
})
export class FutbolHoyComponent implements OnInit {

  items = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  constructor() {
    console.log('Fui Creadooooo!!!! ALEXIIIIIIIIIs')
   }

  ngOnInit() {
  }

}
