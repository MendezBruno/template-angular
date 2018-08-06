import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactive-form-one',
  templateUrl: './reactive-form-one.component.html',
  styleUrls: ['./reactive-form-one.component.css']
})
export class ReactiveFormOneComponent {
  
  name = 'Angular';  
  countrys = ['Arg', 'Uru', 'Bra', 'Bol'];  
  
  pointerForm = this.fb.group({
    x: [''],
    y: [''],
  });
  
  profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      country: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
  });


  //public theBoundCallback: Function;

  constructor(private fb: FormBuilder) {
    //this.theBoundCallback = this.theCallback.bind(this);
  }

  public theCallback(control): boolean {
    
    return control.value !== '';
  }

  public theCallback2(control): boolean {       

    var valor = control.value;

    return valor !== '' && !(isNaN(valor));
  }

  /*public theCallbackPointer(control): boolean {
    console.log(control);
    return control.value !== '';
  }*/

  onSubmit() {
    
    console.log(this.profileForm.value);
    
  }

  onSubmit2() {
    // TODO: Use EventEmitter with form value
    console.warn(this.pointerForm.value);
    console.log(this.pointerForm.value.x);
    console.log(this.pointerForm.value.y);
  }

}

class Punto {
  x: number;
  y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

}
