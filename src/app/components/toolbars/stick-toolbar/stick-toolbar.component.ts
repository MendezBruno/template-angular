import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-stick-toolbar',
  templateUrl: './stick-toolbar.component.html',
  styleUrls: ['./stick-toolbar.component.css']
})
export class StickToolbarComponent implements OnInit {

  simpleToolbar = false;
  tripleToolbar = true;


  constructor() {

  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  handleScrollEvent(e) {

     if ( (window.pageYOffset > 100 && this.tripleToolbar ) ||
          (window.pageYOffset < 100 && !this.tripleToolbar ) )   {
        this.tripleToolbar = !this.tripleToolbar;
        this.simpleToolbar = !this.simpleToolbar;
     }
  }

}
