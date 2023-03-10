import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsummaryComponent } from './components/accountsummary/accountsummary.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';

const routes: Routes = [
  { path: '', component: AccountsummaryComponent },
  { path: 'admin', component: AdminViewComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
