import {Component, Input, OnInit,} from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './tp-box.component.html',
  styleUrls: ['./tp-box.component.css']
})
export class TpBoxComponent implements OnInit {

  @Input() maPersonne;

  constructor() {
  }

  ngOnInit() {
  }

  title = 'angular-tp2-BOX';

  message = [
    {type :"alert-info", titre :"Information", message : "Message d'info"},
    {type :"alert-warning", titre :"Warning", message : "Message de Warning"},
    {type :"alert-danger", titre :"Erreur", message : "Message d'erreur"}
  ]

  type = '';
  titre = '';
  mess = '';

  choixClass(num){
  this.type = this.message[num].type;
  this.titre = this.message[num].titre;
  this.mess = this.message[num].message;
  }
}
