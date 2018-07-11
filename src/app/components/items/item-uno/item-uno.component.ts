import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-item-uno',
  templateUrl: './item-uno.component.html',
  styleUrls: ['./item-uno.component.css'],
  animations: [
    trigger('flyLeftToRigth', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateX(100%)'}))
      ])
    ]),

    trigger('flyRigthToLeft', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(+100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateX(100%)'}))
      ])
    ])

  ]
})
export class ItemUnoComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}

interface Item {
  logo: string;
  titulo: string;
  pharagrap: string;
}
