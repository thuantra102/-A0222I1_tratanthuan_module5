import { Component, OnInit } from '@angular/core';
import {DateUtilService} from "./service/date-util.service";

@Component({
  selector: 'app-ss7-p1',
  templateUrl: './ss7-p1.component.html',
  styleUrls: ['./ss7-p1.component.css']
})
export class Ss7P1Component implements OnInit {

  output = '';

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }

}
