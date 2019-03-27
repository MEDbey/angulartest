import { Component, OnInit } from '@angular/core';
import { EdtModule } from '../EdtModule';
@Component({
  selector: 'app-edtmodules',
  templateUrl: './edtmodules.component.html',
  styleUrls: ['./edtmodules.component.scss']
})
export class EdtmodulesComponent implements OnInit {

  module1 :EdtModule = {
    id: 1,
    name: "MATHS",
    nbrHeures : 25
  }
  constructor() { }

  ngOnInit() {
  }

}
