import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mono-org',
  templateUrl: './mono-org.component.html',
  styleUrls: ['./mono-org.component.css']
})
export class MonoOrgComponent implements OnInit {

  imagenes = [
    '../../../../assets/img/muppets/muppets1.jpeg',
    '../../../../assets/img/muppets/muppets2.jpeg',
    '../../../../assets/img/muppets/muppets3.jpeg',
  ];
  constructor() { }

  ngOnInit() {
  }

}
