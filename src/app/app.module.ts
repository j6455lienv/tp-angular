import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalcComponent } from './calc/calc.component';
import { AppRoutingModule } from './/app-routing.module';
import { CoursComponent } from './cours/cours.component';


@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    CoursComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
