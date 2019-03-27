import { Component, OnInit } from '@angular/core';
import { EdtTabele } from '../EdtTabele';
@Component({
  selector: 'app-edttable',
  templateUrl: './edttable.component.html',
  styleUrls: ['./edttable.component.scss']
})
export class EdttableComponent implements OnInit {

  edt: EdtTabele = {

    ListeDesModu: [{
      id: 1,
      name: "MATHS",
      nbrHeures : 25
    },{
      id: 2,
      name: "MAksTHS",
      nbrHeures : 25
    }],

    ListedesMats: [{
      id: 12,
      name: "Stattistique",
      nameModule : "MATHS",
      idModule : 1,
      nbrHeures : 12
    },{
      id: 12,
      name: "momom",
      nameModule : "MAksTHS",
      idModule : 2,
      nbrHeures : 24
    }],
    
  };
  constructor() { }

  ngOnInit() {
  }

}
