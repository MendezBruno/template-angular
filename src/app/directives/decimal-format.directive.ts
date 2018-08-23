import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[decimalFormatter]'
})
export class DecimalFormatDirective implements OnInit {


  DIGITS_REGEXP =  new RegExp(/^[0-9]{1,6}(\.[0-9]{0,9}){0,1}$/g);
  constructor(private el?: ElementRef) {  }

@HostListener('keydown', ['$event']) onKeyDown(event) {
  let e = <KeyboardEvent> event;
  if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
    // Allow: Ctrl+A
    (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
    // Allow: Ctrl+C
    (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
    // Allow: Ctrl+V
    (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
    // Allow: Ctrl+X
    (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
    // Allow: home, end, left, right
    (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);
    if (next && !String(next).match(this.DIGITS_REGEXP)) { 
      event.preventDefault();
    }
             
  }

  ngOnInit() { }

  //     // Allow decimal numbers. The \. is only allowed once to occur
  //     private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);

  //     // Allow key codes for special events. Reflect :
  //     // Backspace, tab, end, home
  //     private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', 'Delete', 'Enter', 'Right arrow' ];
  
  //     @HostListener('keydown', [ '$event' ])
  //     onKeyDown(event: KeyboardEvent) {
  //         // Allow Backspace, tab, end, and home keys
  //         if (this.specialKeys.indexOf(event.key) !== -1) {
  //             return;
  //         }
  
  //         // Do not use event.keycode this is deprecated.
  //         // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
  //         let current: string = this.elementRef.nativeElement.value;
  //         // We need this because the current value on the DOM element
  //         // is not yet updated with the value from this event
  //         let next: string = current.concat(event.key);
  //         if (next && !String(next).match(this.regex)) {
  //             event.preventDefault();
  //         }
  //     }

  // @HostListener("keyup", ["$event.target.value"])
  // onKeyup(value) {
  //   let exp = /[0-9]/
  //   let cadena = value.toString()
  //   if(exp.test(cadena)) {
  //     console.log('ok')
  //     return cadena
  //   } else {
  //     console.log('false')
  //     return ''
  //   }
  //   // return cadena.replace(exp, '')
  // }

  // @HostListener("input", ["$event.target.value"])
  // onInput(value) {
  //   console.log(value)
  //   // let input: string = (value || "").toString()
  //   let exp = /^\d+$/
  //   if(exp.test(value)) {
  //     console.log('ok')
  //     return value
  //   } else {
  //     console.log('false')
  //     return ''
  //   }    
  // }

  // @HostListener("focus", ["$event.target.value"])
  // onFocus(value) {
  //   console.log("ONFOCUS", value)
  //   let input: string = (value || "").toString()
  //   return input.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  //   // let [ integer, fraction = "" ] = (value || "").toString()

  //   // integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  //   // return integer + fraction;
  // }

  // @HostListener("blur", ["$event.target.value"])
  // onBlur(value) {
  //   console.log("ONBLUR")
  // }

}
