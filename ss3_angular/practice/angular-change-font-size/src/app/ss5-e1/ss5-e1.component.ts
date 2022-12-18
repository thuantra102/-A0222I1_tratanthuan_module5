import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-ss5-e1',
  templateUrl: './ss5-e1.component.html',
  styleUrls: ['./ss5-e1.component.css']
})
export class Ss5E1Component implements OnInit {
  chosenNumber = 3;
  chosenStar = [];
  restStar = [];


  constructor() {  }

  ngOnInit(): void {
    this.printStar();
  }

  changeNumber(starNumber) {

  this.chosenNumber = starNumber;

  this.chosenStar = [];
  this.restStar = [];
  this.printStar();

  }
  printStar() {
    // for (let i = 1; i <= this.chosenNumber; i++) {
    //   this.chosenStar.push(i);
    // }
    // for (let j = this.chosenNumber + 1; j <= 10; j ++) {
    //   this.restStar.push(j);
    // }
    console.log(this.chosenStar);
    console.log(this.restStar);

  }
}


