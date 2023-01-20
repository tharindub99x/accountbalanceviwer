import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/Account.Model';
import { AccountSummeryService } from 'src/app/services/account-summery.service';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {

  allAccounts : Account[] =[]
  constructor(private accountService:AccountSummeryService){

  }
  ngOnInit(): void {
    
    this.accountService.getAllAccounts().subscribe(res=>{
     this.allAccounts = res;
    })
  }

  

}
