import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'angular-tp1-CALCULETTE';
  value = '';

  //fonction affichage 'qui recupere les clicks de l'utilisateur'
  affichage(value) {
    return this.value += value;
  }

  calcul() {
    return this.value = eval(this.value);
  }

  //fonction d'initialisation de la zone d'affichage
  init() {
    return this.value = "";
  }

//fonction plus ou moins 'signe plus ou moins'
  plusMoins() {
    return -this.value;
  }

//fonction suppression du dernier caractere 'fleche arriere'
  suppLastChar() {
    var result = this.value.toString().substr(0, this.value.length - 1);
    return this.value = result;
  }
}
