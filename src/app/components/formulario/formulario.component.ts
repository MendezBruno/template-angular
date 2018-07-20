import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  animations: [
    trigger('flyRigthToLeft', [
      state('show', style({
        transform: 'translateX(+100%)'
      })),
      state('hide',   style({
        transform: 'translateX(+200%)'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]  
})
export class FormularioComponent implements OnInit {

  consulta: any = {};
  state = 'hide';

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop - 400;
      const scrollPosition = window.pageYOffset;

      if (this.state == 'hide' && (scrollPosition >= componentPosition)) {
        this.state = 'show';
      }      

    }

  ngOnInit() {
  }

  guardarConsulta(){
    
    console.log(this.consulta);
  }

}
