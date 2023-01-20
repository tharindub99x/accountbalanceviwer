import { Component } from '@angular/core';
import { ProcessBudgetFileService } from 'src/app/services/process-budget-file.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  constructor(private fileProcesser : ProcessBudgetFileService) {

  }
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth();
  onSelectYear(event: any) {
    this.year = event;

  }

  onSelectMonth(event: any) {
    this.month = event;
  }

  onBudgetUpdate(event: any) {
    console.log(this.year)
    console.log(this.month)
    let res = this.fileProcesser.processFile(event,this.year.toString(),this.month)
    
    if(res){

      alert("Budget updated succesfully !")
    }else {
      alert("Budget updated failed !")
    }
  }
}
