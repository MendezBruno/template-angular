import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.css']
})
export class UserPasswordComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  login(model) {
    console.log(model);

  }

  gotoPrincipalPageUser(): any {

  }
}
