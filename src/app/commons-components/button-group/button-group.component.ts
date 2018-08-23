import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {


  @Output() buttonSelected: EventEmitter<string> = new EventEmitter<string>()

  @Input() disabled: string

  @Input() opcion: string

  constructor() { }

  ngOnInit() {
  }

  pressedButton(opcion: string) {
    this.opcion = opcion
    this.buttonSelected.emit(opcion)
  }

}
