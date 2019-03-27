import { Component, OnInit } from '@angular/core';
import { periode } from '../periode';

@Component({
  selector: 'app-edt-periode',
  templateUrl: './edt-periode.component.html',
  styleUrls: ['./edt-periode.component.scss']
})
export class EdtPeriodeComponent implements OnInit {

  constructor() { }

  period1 : periode ={
    nom: "periode 1",
    listeDeMat : [{
      id: 12,
      name: "Stattistique",
      nameModule : "MATHS",
      idModule : 1,
      nbrHeures : 12
    },{
      id: 12,
      name: "momom",
      nameModule : "MAksTHS",
      idModule : 1,
      nbrHeures : 24
    }],
    }


  ngOnInit() {
  }

}
