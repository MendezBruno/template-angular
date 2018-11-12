import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../../services/communication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spinner-test',
  templateUrl: './spinner-test.component.html',
  styleUrls: ['./spinner-test.component.css']
})
export class SpinnerTestComponent implements OnInit {

  spinnerState: SpinnerClass;
  constructor(private communicationService: CommunicationService) { 
    this.spinnerState = new SpinnerClass();
  }

  ngOnInit() {
  
  }

  probarSpinner() {
    this.spinnerState.bool = true;
    this.spinnerState.servicio = 'activar';
    this.communicationService.spinnerChangueState(this.spinnerState)
    this.sequence.subscribe( {
      next(num) { console.log(num); },
      complete() { 
        console.log('Finished sequence');
        
      }
    });
  }


  seq = [1, 2, 3];
  timeoutId;
    // Will run through an array of numbers, emitting one value
    // per second until it gets to the end of the array.
  doSequence(observer ,arr, idx) {
      this.timeoutId = setTimeout(() => {
        observer.next(arr[idx]);
        if (idx === arr.length - 1) {
          observer.complete();
          this.spinnerState.bool = false;
          this.communicationService.spinnerChangueState(this.spinnerState);
        } else {
          this.doSequence(observer, arr, ++idx);
        }
      }, 1000);
    }
   
  
  sequenceSubscriber(observer) {
    
    let timeoutId;  
    this.doSequence(observer,this.seq, 0);
   
    // Unsubscribe should clear the timeout to stop execution
    return {unsubscribe() {
      clearTimeout(timeoutId);
    }};
  }
   
  // Create a new Observable that will deliver the above sequence
  sequence = new Observable(this.sequenceSubscriber.bind(this));
   
 
   
  // Logs:
  // (at 1 second): 1
  // (at 2 seconds): 2
  // (at 3 seconds): 3
  // (at 3 seconds): Finished sequence
}

class SpinnerClass {
  bool: boolean;
  servicio: string;
} 



