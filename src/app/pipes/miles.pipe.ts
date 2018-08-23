import { Pipe, PipeTransform } from "@angular/core";
//import { Utils } from "../utils";

/**
 * Agrega miles al string de un numero
 * 
 * 10200300 --> 10.200.300
 * 300 --> 300
 * 1000 --> 1.000
 * 
 * {{row.campo | miles}}
 */

@Pipe({name: 'miles', pure: true})
export class MilesPipe implements PipeTransform {

  transform(value: string): string {
       //console.log("MilesPipe ", value);
       if (!value) {
           return "";
       }
       const longitud: number = value.length;
       let pos: number = longitud - 1;
       let res: string = "";
       let cont: number = 0;
       while (pos >= 0) {
           if (cont == 3) {
               cont = 0;
               res = "." + res;
           }
           res = value.charAt(pos) + res;
           pos--;
           cont++;
       }
       return res;
  }

}