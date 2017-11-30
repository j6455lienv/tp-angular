import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'angular-cours';

  liste = [{
    nom: "Einstein",
    prenom: "Albert",
    description: "Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.",
    travail: "Relativité Générale"
  },
    {
      nom: "Faraday",
      prenom: "Michael",
      description: "Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.",
      travail: "Relativité Générale"
    },
    {
      nom: "Curie",
      prenom: "Marie",
      description: "Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.",
      travail: "Relativité Générale"
    },
    {
      nom: "Curie",
      prenom: "Pierre",
      description: "Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système.",
      travail: "Relativité Générale"
    }]

  personne = this.liste[0];

  clickPersonne = function (a) {
    this.personne = a;
  }

}
