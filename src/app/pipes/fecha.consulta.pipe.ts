import { Pipe, PipeTransform } from "@angular/core";
import { Utilitarios } from "../utils/Utilitarios";
import { Mes } from "../model/data/meses";

/**
 * Convierte la fecha AAAA-MM-DD a DD-MES
 * 
 * 
 * {{row.fecha | fechaConsul}}
 */

@Pipe({name: 'fechaConsul', pure: true})
export class FechaConsultaPipe implements PipeTransform {

  transform(value: string): string {

       if (!value || value == '0001-01-01') {
           return "";
       }
       // 2017-06-25
       let res: string = value;
       if ((value.charAt(4) == '-') && (value.charAt(7) == '-')) {

           const mes  = value.substring(5,7)
           const dia  = value.substring(8,10)
           let mesString: string = Mes[Utilitarios.stringToNumber(Utilitarios.sinCeros(mes)) - 1]
           res = dia + "-" + mesString
       }
       return res;
  }

}