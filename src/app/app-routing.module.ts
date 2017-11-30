import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CalcComponent} from "./calc/calc.component";
import {CoursComponent} from "./cours/cours.component";

const routes: Routes = [
  { path: 'calc', component: CalcComponent },
  { path: 'cours', component: CoursComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})

export class AppRoutingModule { }
