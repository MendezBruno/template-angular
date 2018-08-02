import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


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


  public theBoundCallback: Function;

  constructor(private fb: FormBuilder) {
    this.theBoundCallback = this.theCallback.bind(this);
  }

  public theCallback(control): boolean {
    console.log(control);
    return control.value !== '';
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.log(this.profileForm.value.x);
    console.log(this.profileForm.value.y);
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
