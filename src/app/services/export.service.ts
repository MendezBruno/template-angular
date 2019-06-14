import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';



const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
const CSV_EXTENSION = '.csv';


@Injectable({
  providedIn: 'root'
})
export class ExportService {

  c
  // Export To Excel
  // public exportAsExcelFile(json: any[], excelFileName: string): void {
  //   console.log(json);
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  //   const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  //   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  //   this.saveAsExcelFile(excelBuffer, excelFileName);
  // }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  // Export to CSV
  exportAsCsvFile(json: any[], excelFileName: string): void {
    console.log(json);
    this.saveAsCsvFile(this.convertToCSV(JSON.stringify(json)), excelFileName);
  }

  saveAsCsvFile(csvStream: any, fileName: string): any {            
    console.log(csvStream);
    const blob = new Blob([csvStream], {type: 'text/csv' });
    console.log(blob);
    FileSaver.saveAs(blob, fileName + '_export_' + new Date().getTime() + CSV_EXTENSION);
  }


  convertToCSV(objArray) {
    const array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    const headers = Object.getOwnPropertyNames(array[0]);
    str += headers.shift();
    headers.forEach( (header) => str += ';' + header);
    str += '\r\n';

    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
          if (line != '') line += ';'

          line += array[i][index];
      }

      str += line + '\r\n';
    }

    return str;
  }



}
