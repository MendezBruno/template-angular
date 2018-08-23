import { Pipe, PipeTransform } from "@angular/core";

/**
 * Convierte la fecha AAAA-MM-DD a DD/MM/AAAA
 * 
 * 
 * {{row.fecha | fecha}}
 */

@Pipe({name: 'fecha', pure: true})
export class FechaPipe implements PipeTransform {

  transform(value: string): string {
       //console.log("FechaPipe ", value);
       if (!value || value == '0001-01-01') {
           return "";
       }
       // 2017-06-25
       let res: string = value;
       if ((value.charAt(4) == '-') && (value.charAt(7) == '-')) {
           const anio = value.substring(0,4);
           const mes  = value.substring(5,7);
           const dia  = value.substring(8,10);
           res = dia + "/" + mes + "/" + anio;
       }
       return res;
  }

}