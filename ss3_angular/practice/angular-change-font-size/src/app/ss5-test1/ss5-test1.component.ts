import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss5-test1',
  templateUrl: './ss5-test1.component.html',
  styleUrls: ['./ss5-test1.component.css']
})
export class Ss5Test1Component implements OnInit {

  Counter = 5;
  constructor() { }

  ngOnInit(): void {
  }

  in() {
    this.Counter ++;
  }

  de() {
    this.Counter --;
  }
}
