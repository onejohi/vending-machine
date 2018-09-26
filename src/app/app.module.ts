import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';

//import angular material elements
import { MatToolbarModule, MatCardModule, MatButtonModule, MatSnackBarModule } from "@angular/material";
import { DataService } from '../services/data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
