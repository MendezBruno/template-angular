import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDecimal159Validator]'
})
export class Decimal159ValidatorDirective {

  DIGITS_REGEXP =  new RegExp(/^[0-9]{1,6}(\.[0-9]{0,9}){0,1}$/g)

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;

    let current: string = this.el.nativeElement.value;
    return this.DIGITS_REGEXP.test(current)

    // let next: string = current.concat(event.key);
    // if (next && !String(next).match(this.DIGITS_REGEXP)) { 
    //   event.preventDefault();
    // }
               
    }

}
