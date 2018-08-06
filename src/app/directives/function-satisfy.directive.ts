import { Directive, forwardRef, Input } from '@angular/core';
import { FormGroup, FormControl, NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';


@Directive({
  selector: '[notEmpty][formGroup], [notEmpty][formGroupName]',
  providers: [{provide: NG_VALIDATORS, useExisting: FunctionSatisfyDirective, multi: true}]
})

export class FunctionSatisfyDirective implements Validator  {

  constructor() { }



@Input()
  public myCallback: Function;


  validate(control: AbstractControl): {[key: string]: any} {

    if (control.value != null || typeof control.value === 'string' && control.value.length !== 0) {
      //return this.anySatifyNotNull(control) ? null : { 'notEmpty': true };
      return this.allSatifyNotNull(control) ? null : { 'notEmpty': true };
    } 
    else {
      return null;
    }

  }

  /*private anySatifyNotNull (control: any): boolean {
    let res;       

    (Object.values(control.controls)).forEach( (aControl) => {
    
      if (this.myCallback(aControl)) {res = true; }
      
    });
       
    return res;

  }  */
  
  private allSatifyNotNull (control: any): boolean {    
    
    return (Object.values(control.controls)).every((element, index, array) => {return this.myCallback(element);} );          

  }

}
