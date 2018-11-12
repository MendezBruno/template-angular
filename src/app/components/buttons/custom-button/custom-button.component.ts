import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

  @Input() buttonNombre : string;
  @Input() setClases : any[];
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  @Input() type: string = "button";
  @Input() activeButton: boolean = false;
  @Output() evento: EventEmitter<any> = new EventEmitter<any>();

  constructor( ) { }

  ngOnInit() {  }

  eventClick() {
    this.evento.emit(this.buttonNombre)
  }


}
