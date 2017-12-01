import { Injectable } from '@angular/core';

@Injectable()
export class MonServiceService {

  compteur = 0;

  ajoute = function(){
    this.compteur++;
  };

  donne = function(){
    return this.compteur;
  }

}
