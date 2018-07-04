import { Component, OnInit, ViewChild } from '@angular/core';
import { MercadopagoService } from '../../services/mercadopago.service';

@Component({
  selector: 'app-mercado-pago-test',
  templateUrl: './mercado-pago-test.component.html',
  styleUrls: ['./mercado-pago-test.component.css']
})
export class MercadoPagoTestComponent implements OnInit {

  constructor(private mp: MercadopagoService) { }

  @ViewChild('paymentMethodId') paymentMethod;
  @ViewChild('pay') form;
  bin = '';
  ngOnInit() {
    this.mp.getIdentificationTypes();
  }

  setPaymentMethodInfo = (status, response) => {
    if (status === 200) {
        let paymentMethod : Element;
        console.log('estoy en status 200 de setPayment');
        console.log(response[0].id);
        paymentMethod.setAttribute('name', 'paymentMethodId');
        paymentMethod.setAttribute('type', 'hidden');
        paymentMethod.setAttribute('value', response[0].id);

        // this.form.appendChild(this.paymentMethod);
        document.querySelector('pay').appendChild(paymentMethod);
        } else {
            document.querySelector('input[name=paymentMethodId]').setAttribute('input[name=paymentMethodId]', response[0].id);
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
            }, this.setPaymentMethodInfo);
        }
    } else {
        setTimeout(function() {
            if (this.bin.length >= 6) {
                this.mp.getPaymentMethod({
                  'bin': this.bin
                }, this.setPaymentMethodInfo);
            }
        }, 100);
    }
}

}
