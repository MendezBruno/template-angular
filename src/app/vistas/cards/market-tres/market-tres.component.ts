import { Component, OnInit, Input } from '@angular/core';
import { UserGitData } from './model';

@Component({
  selector: 'app-market-tres',
  templateUrl: './market-tres.component.html',
  styleUrls: ['./market-tres.component.css']
})
export class MarketTresComponent implements OnInit {

  @Input() userData: UserGitData;
  constructor() { }

  ngOnInit() {
  }

}
