import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/Account.Model';

@Injectable({
  providedIn: 'root'
})
export class ProcessBudgetFileService {

  baseURL="https://accountbalanceapi20230120152237.azurewebsites.net/"
  constructor(private http: HttpClient) { }

  processFile(fileContent: string | ArrayBuffer, year: string, month: number) {

    const accountList: Account[] = [];

    if (typeof fileContent == "string") {
      let lines: string[] = fileContent.split("\n");
      lines.forEach((line) => {
        const splittedLine = line.split("\t")

        if (splittedLine.length > 1) {
          const department = splittedLine[0];
          const monthlyBudget = parseFloat(splittedLine[1].replace(/\s/g, '').split(",").join(""))

          const newAccountRecord: Account = {
            departmentCode: department,
            balance: monthlyBudget,
            monthlyRecords: [{
              month: this.numberToMonth(month),
              year: year,
              monthlyBalance: monthlyBudget

            }]
          }
          accountList.push(newAccountRecord)
        }

      })
    }
    return this.updateBudget(accountList)
    

  }

  updateBudget(accountList: Account[]){

    let success=true;
    accountList.forEach(element => {
      this.http.put<Account>(this.baseURL+'api/accounts'+element.departmentCode, element)
        .subscribe({
            next: data => {
                
            },
            error: error => {
                success = false;
                
            }
        });
    });
    return success;
  } 
  numberToMonth(monthInNumber: number) {
    const months = ["JAN", "FEB", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGEST", "SEP", "OCT", "NOV", "DEC"];
    return months[monthInNumber];

  }
}
