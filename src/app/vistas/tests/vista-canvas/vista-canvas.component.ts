import { Component, OnInit } from '@angular/core';
import { Utilitarios } from '../../../utils/Utilitarios';

@Component({
  selector: 'app-vista-canvas',
  templateUrl: './vista-canvas.component.html',
  styleUrls: ['./vista-canvas.component.css']
})
export class VistaCanvasComponent implements OnInit {

cols = [
    { field: 'clien_out', header: 'Cliente', width: '50%'},
    { field: 'grupo_out', header: 'Grupo' },
    { field: 'ctatit_out', header: 'Cuenta' },
    { field: 'vnbco_out', header: 'Vn' },
    { field: 'intbco_out', header: 'Dividendos %' },
    { field: 'impucaj_out', header: 'Impuesto caja' },
    { field: 'impblob_out', header: 'Bloqueo' },
    { field: 'totbco_out', header: 'Total' }
]

rowset = [
        {       clien_out:"3123456789 0123456789 0123456789 0123456",
                grupo_out:"ungrupo1un grupo11234",
                codeve_out:"1",
                codcaja_out:"132",
                codcajr_out:"321",
                ctatit_out:"1321312312456",
                impliqb_out:"123465789132456798",
                impliqc_out: "123465789132456798",
                impnetb_out: "123465789132456798",
                impnetc_out: "123465789132456798",
                impblob_out: "123465789132456798",
                impbloc_out: "123465789132456798",
                monbco_out: "A",
                moncaj_out: "A",
                vnbco_out: "123465789132456798",
                vncaja_out: "123465789132456798",
                intbco_out: "123465789132456798",
                intcaja_out: "123465789132456798",
                impubco_out: "123465789132456798",
                impucaj_out: "123465789132456798",
                amorbco_out: "123465789132456798",
                amorcaj_out: "123465789132456798",
                ajubco_out: "123465789132456798",
                ajuscaj_out: "123465789132456798",
                totbco_out: "123465789132456798",
                totcaj_out: "123465789132456798",
                usera_out: "usera",
                useran_out: "useran",
                userat_out: "algo",
                userm_out: "algo",
                usermn_out: "usermn",
                usermt_out: "usermt",
                amajbco_out: "123465789132456798",
                amajcaj_out: "123465789132456798",
                comis_out:"4521",
                iva1_out:"45",
                iva2_out:"13",
                retgan_out:"12",
                forpago_out:"MP",
                cuenta_out:"cuenta",
                importe_out:"123465789132456798",
                banco_out:"banco_out",
                nrcta_out:"nrcta_out",
                bancoin_out:"bancoin_out",
                narra_out:"narra_out",
                cbu_out:"cbu_out",
                detope_out:"detope_out",
                tipocli_out:"tipocli_out",
                motivo_out:"motivo_out",
                oficina_out:"oficina_out"
    }]




  constructor() {
    let unRes = Utilitarios.creatorJson(this.cols,this.rowset);
   }

  ngOnInit() {
  }

}
