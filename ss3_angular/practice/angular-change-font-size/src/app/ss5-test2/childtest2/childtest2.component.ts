import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-childtest2',
  templateUrl: './childtest2.component.html',
  styleUrls: ['./childtest2.component.css']
})
export class Childtest2Component implements OnInit {
  count = 5;
  countChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }



  ngOnInit(): void {
  }

  increase() {
    this.count++;
    // this.countChanged.emit(this.count);
  }

  decrease() {
    this.count--;
    // this.countChanged.emit(this.count);
  }
}
