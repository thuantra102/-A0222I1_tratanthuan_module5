import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ss5-e2',
  templateUrl: './ss5-e2.component.html',
  styleUrls: ['./ss5-e2.component.css']
})
export class Ss5E2Component implements OnInit {
  time = 0;
  interval;

  constructor() {
  }

  ngOnInit(): void {
  }

  start() {
    this.interval = setInterval(() => {
      this.time++;
    }, 1000);
  }

  finish() {
    clearInterval(this.interval);
  }

  resetTime() {
    this.time = 0;
  }
}
