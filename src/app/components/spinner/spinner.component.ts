import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs/Subscription';
import { delay } from 'rxjs/operator/delay';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ArrayUtils } from '../../utils/arrayUtils';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input()
  mostrar: boolean;
  spinnerSubcription: Subscription;
  acumA: string[] = [];

  constructor(private comunicationService: CommunicationService) { }

  ngOnInit() {
    this.spinnerSubcription = this.comunicationService.observerSpinner$.subscribe( 
      (value: any) => { 
        // if (value.servicio == "bepa") { return }
        value.bool? this.acumA.push(value.servicio) : ArrayUtils.remove(this.acumA, value.servicio);
        console.log("Los LLamados acumulados son: ", this.acumA);
        if (this.acumA.length == 0 && !value.bool) {this.mostrar = false }
        if (this.acumA.length == 1 && value.bool)  {this.mostrar = true }
      }
    )
  }

}