import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-market-dos',
  templateUrl: './market-dos.component.html',
  styleUrls: ['./market-dos.component.css']
})
export class MarketDosComponent implements OnInit {

 @ViewChild('bottom') elementBotton: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addClicked() {
    this.elementBotton.nativeElement.classList.add("clicked");

  }

  removeClicked() {
    this.elementBotton.nativeElement.classList.add("clicked");
  }

}
