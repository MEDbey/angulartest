import { Component, OnInit } from '@angular/core';
import { EdtMatere } from '../EdtMatere';

@Component({
  selector: 'app-edtmateres',
  templateUrl: './edtmateres.component.html',
  styleUrls: ['./edtmateres.component.scss']
})
export class EdtmateresComponent implements OnInit {

   matere1 : EdtMatere ={
    id: 12,
    name: "Stattistique",
    nameModule : "MATHS",
    idModule : 1,
    nbrHeures : 12
  }
  constructor() { }

  ngOnInit() {
  }

}
