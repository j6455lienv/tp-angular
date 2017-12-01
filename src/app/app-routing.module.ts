import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CalcComponent} from "./calc/calc.component";
import {CoursComponent} from "./cours/cours.component";
import {TpBoxComponent} from "./tp-box/tp-box.component";
import {TpServiceComponent} from "./tp-service/tp-service.component";

const routes: Routes = [
  { path: 'calc', component: CalcComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'box', component: TpBoxComponent },
  { path: 'service', component: TpServiceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})

export class AppRoutingModule { }
