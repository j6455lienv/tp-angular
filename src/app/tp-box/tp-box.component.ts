import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './tp-box.component.html',
  styleUrls: ['./tp-box.component.css']
})
export class TpBoxComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  title = 'angular-tp2-BOX';

  class = '';
}
