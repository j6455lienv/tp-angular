import { Component, OnInit, Input } from '@angular/core';
import {MonServiceService} from "../mon-service.service";
import {ApiService} from "../api.service";

@Component({
  selector: 'service',
  templateUrl: './tp-service.component.html',
  styleUrls: ['./tp-service.component.css'],
  providers: [MonServiceService, ApiService]
})
export class TpServiceComponent implements OnInit {

  constructor(private MonServiceService:MonServiceService) {

  }

  ngOnInit() {
  }

  clickSurTitre(){
    this.MonServiceService.ajoute();
    let v = this.MonServiceService.donne();
      console.log(v);
    }

  api: ApiService[];


}
