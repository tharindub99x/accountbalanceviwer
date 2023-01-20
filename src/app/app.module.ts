import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FiledropzoneComponent } from './components/filedropzone/filedropzone.component';
import { FileDragNDropDirective } from './directives/dragDrop.directive';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { AccountsummaryComponent } from './components/accountsummary/accountsummary.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminViewComponent,
    DatepickerComponent,
    FiledropzoneComponent,
    FileDragNDropDirective,
    DialogConfirmComponent,
    AccountsummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
