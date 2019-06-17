import { Component, OnInit } from '@angular/core';
import { UserGitData } from '../../cards/market-tres/model';

@Component({
  selector: 'app-cards-test',
  templateUrl: './cards-test.component.html',
  styleUrls: ['./cards-test.component.css']
})
export class CardsTestComponent implements OnInit {
  theUsersData: UserGitData;

  constructor() { }

  ngOnInit() {
    this.theUsersData = new UserGitData();

  }

}
