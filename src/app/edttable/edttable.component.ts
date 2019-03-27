import { Component, OnInit } from '@angular/core';
import { EdtTabele } from '../EdtTabele';
@Component({
  selector: 'app-edttable',
  templateUrl: './edttable.component.html',
  styleUrls: ['./edttable.component.scss']
})
export class EdttableComponent implements OnInit {

  edt: EdtTabele = {
    num: 12
  };
  constructor() { }

  ngOnInit() {
  }

}
