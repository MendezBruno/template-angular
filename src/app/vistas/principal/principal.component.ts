import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArrayVistas } from '../../model/data/vistas';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  links = ArrayVistas;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goto(link) {
    this.router.navigate([link]);
  }
}
