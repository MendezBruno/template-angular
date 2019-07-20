import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MercadopagoService } from '../../services/mercadopago.service';

@Component({
  selector: 'app-mercado-pago-test',
  templateUrl: './mercado-pago-test.component.html',
  styleUrls: ['./mercado-pago-test.component.css']
})
export class MercadoPagoTestComponent implements OnInit {


  constructor(private mp: MercadopagoService) { }

  @ViewChild('paymentMethodId', {static: true}) paymentMethod: ElementRef;
  @ViewChild('pay', {static: true}) form;
  bin = '';
  doSubmit = false;

    ngOnInit() {
        this.mp.getIdentificationTypes();
    }

    setPaymentMethodInfo = (status, response) => {
        if (status === 200) {
            console.log(this.form);
            console.log('estoy en status 200 de setPayment');
            console.log(response[0].id);
            this.paymentMethod.nativeElement.name = 'paymentMethodId';
            this.paymentMethod.nativeElement.type = 'hidden';
            this.paymentMethod.nativeElement.value = response[0].id;
            this.form.nativeElement.appendChild(this.paymentMethod.nativeElement);
        } else {
                document.querySelector('input[name=paymentMethodId]').setAttribute('input[name=paymentMethodId]', response[0].id);
            }
    }

    sdkResponseHandler = (status, response) => {
        if (status !== 200 && status !== 201) {
            alert('verify filled data');
        } else {
            // var form = document.querySelector('#pay');
            const card = document.createElement('input');
            card.setAttribute('name', 'token');
            card.setAttribute('type', 'hidden');
            card.setAttribute('value', response.id);
            this.form.nativeElement.appendChild(card);
            this.doSubmit = true;
            this.doPayment(this.form);
        }
    }

    guessingPaymentMethod(event) {
        console.log(event);
        this.bin = this.bin + event.key;
        console.log(this.bin );
        if (event.type === 'keydown') {
            if (this.bin.length >= 6) {
                this.mp.getPaymentMethod({
                    'bin': this.bin
                }, this.setPaymentMethodInfo.bind(this));
            }
        } else {
            setTimeout(function() {
                if (this.bin.length >= 6) {
                    this.mp.getPaymentMethod({
                    'bin': this.bin
                    }, this.setPaymentMethodInfo.bind(this));
                }
            }, 100);
        }
    }

    onFormSubmit(event) {
      event.preventDefault();
      if (!this.doSubmit) {
          const $form = document.querySelector('#pay');
          this.mp.createToken($form, this.sdkResponseHandler.bind(this));
          return false;
      }
    }

    doPayment(form) {
        console.log(form);
    }
}
