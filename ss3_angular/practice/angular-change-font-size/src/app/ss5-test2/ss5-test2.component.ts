import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss5-test2',
  templateUrl: './ss5-test2.component.html',
  styleUrls: ['./ss5-test2.component.css']
})
export class Ss5Test2Component implements OnInit {
  countParent: number;
  constructor() { }

  ngOnInit(): void {
  }

  countChangeHandle(count: number) {
  this.countParent = count;
  }
}
