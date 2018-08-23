import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

class ButtonName {
  constructor(public button1: string, public button2: string) { }
}

@Component({
  selector: 'app-button-group-basic',
  templateUrl: './button-group-basic.component.html',
  styleUrls: ['./button-group-basic.component.scss']
})
export class ButtonGroupBasic implements OnInit {

  @Output() buttonSelected: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Input() disabled: string

  @Input() active: boolean

  @Input() names: ButtonName = new ButtonName('Si', 'No')

  constructor() { }

  ngOnInit() {
  }

  pressedButton(opcion: boolean) {
    this.active = opcion
    this.buttonSelected.emit(opcion)
  }
}
