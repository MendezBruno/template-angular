import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-desplegable-button',
  templateUrl: './desplegable-button.component.html',
  styleUrls: ['./desplegable-button.component.css']
})
export class DesplegableButtonComponent implements OnInit {

  @Input() setClases : any[];
  subButton:  boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleButton() {
    this.subButton = !this.subButton;
  }

  eventClickButton() {
    alert('Over Button');
  }

  eventClickSubButton() {
    alert('Sub Button');
  }


}
