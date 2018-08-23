import { Pipe, PipeTransform } from "@angular/core";

/**
 * Convierte la hora HH.MM.SS a HH:MM
 * 
 * 
 * {{row.fecha | fechaConsul}}
 */

@Pipe({name: 'horaConsul', pure: true})
export class HoraConsultaPipe implements PipeTransform {

  transform(value: string): string {

        if (!value) {
            return "";
        }
        // 2017-06-25
        let res: string = value;
        const hora  = value.substring(0,2)
        const minutos  = value.substring(3,5)
        
        res = hora + ":" + minutos
       return res;
  }

}