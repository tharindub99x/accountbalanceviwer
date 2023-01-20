import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/Account.Model';

@Injectable({
  providedIn: 'root'
})
export class AccountSummeryService {

  baseURL="https://accountbalanceapi20230120152237.azurewebsites.net/"
  constructor(private http: HttpClient) { }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseURL+"api/accounts");
  }
}
