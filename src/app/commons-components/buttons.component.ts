import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() buttonNombre : string;
  @Input() setClases : any[];
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  @Input() type: string = "button";
  @Input() activeButton: boolean = false;
  @Output() evento: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {  }

  eventClick() {
    if(!this.disabled) {
      this.evento.emit(this.buttonNombre)
    } else {
      console.log("DISABLED")
    }
  }

}
