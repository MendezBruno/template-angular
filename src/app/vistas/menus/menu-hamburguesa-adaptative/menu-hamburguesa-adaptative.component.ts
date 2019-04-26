import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-menu-hamburguesa-adaptative',
  templateUrl: './menu-hamburguesa-adaptative.component.html',
  styleUrls: ['./menu-hamburguesa-adaptative.component.css']
})
export class MenuHamburguesaAdaptativeComponent implements OnInit {

  @Input() sections: string[];
  
  @ViewChild('menu') menu;
  condicion:boolean = false;



  constructor() {
    this.sections = ["Home", "Service", "Portfolio" ,"Contact" ,"About" ]
  }

  ngOnInit() { 
    // this.menu.nativeElement.onclick( () => {

    // })  
  }

}
