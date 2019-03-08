import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPriceForma]'
})
export class PriceFormaDirective {
    
  DIGITS_REGEXP =  new RegExp(/^[0-9]+([,][0-9]{0,2})?$/g);
  PARCIAL_DIGITS_REGEXP = new RegExp(/^([0-9]+([,|.][0-9]{0,1})?)/g);
  constructor(private el?: ElementRef) { 
    this.el.nativeElement.onpaste = (e:any) => {
      e.preventDefault();
      let text;
      debugger
      let clp = (e.originalEvent || e).clipboardData;
      if (clp === undefined || clp === null) {
          text = (<any>window).clipboardData.getData('text') || '';
          if (text !== '') {
              text = text.replace(this.DIGITS_REGEXP, '');
          }
      } else {
          text = clp.getData('text/plain') || '';
          if (text !== '') {
              text = text.replace(this.DIGITS_REGEXP, '');
              document.execCommand('insertText', false, text);
          }
      }
  };
   }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
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
    //   if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    //       e.preventDefault();
    //   }
    
    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);
    
    if ( (e.keyCode == 110 ||  e.keyCode == 190) && next && this.areEqualToRegExp( next, this.PARCIAL_DIGITS_REGEXP ) ) {
        return
    }
    
    //   let next: string = current.concat(event.key);
    if (next && !String(next).match(this.DIGITS_REGEXP)) { 
      event.preventDefault();
    } else {
        debugger
        console.log('entre por el prevent default')
    }
  }

  
  
  //   @HostListener("input", ["$event"]) onInput(value) {
      //     console.log(value)
      //     let e = <KeyboardEvent> event;
      //     let current: string = this.el.nativeElement.value;
//     let next: string = current.concat(e.key);
//     if (current && !String(current).match(this.DIGITS_REGEXP)) { 
    //         event.preventDefault();
//         // this.el.nativeElement.value = current
//       } else {
//           debugger
//           console.log('entre por el prevent default')
//           this.el.nativeElement.value = this.el.nativeElement.value.replace('.',',');   
//       }
//   }


    @HostListener("input", ["$event.target.value"]) onInput(value) {
        debugger;
        if (this.areEqualToRegExp(value ,this.DIGITS_REGEXP) || this.areEqualToRegExp(value ,this.PARCIAL_DIGITS_REGEXP) ) { 
            this.el.nativeElement.value = this.el.nativeElement.value.replace('.',',')
        }  
        // if (this.areEqualToRegExp(value ,this.DIGITS_REGEXP)) { 
        //     event.preventDefault();
        //     // this.el.nativeElement.value = current
        // } else {
        //     debugger
        //     console.log('entre por el prevent default')
        //     this.el.nativeElement.value = this.el.nativeElement.value.replace('.',',');   
        // }
    }
    
    areEqualToRegExp(next: string, expReg): boolean {
      let expMatch = !!String(next).match(expReg)? String(next).match(expReg)[0]:"" 
      return next == expMatch;
    }

}


// String(next).match(this.PARCIAL_DIGITS_REGEXP)