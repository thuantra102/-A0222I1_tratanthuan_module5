import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  display = '0';
  firstValue: number | null = null;
  action : string;
  constructor() { }

  ngOnInit(): void {
  }

  numClick(number: number) {
    if(this.display=== '0') {
      this.display = number.toString();
    }else  {
      this.display = this.display + number.toString();

    }

  }

  oper(m: string) {
 this.firstValue = parseFloat(this.display);
 this.action = m;
 this.display = '';

  }

  calculate() {
    const a = this.firstValue;
    const b = parseFloat(this.display);

    let result;
    if(this.action == 'm') {
        result = a * b;

    }else if (this.action === 'd') {
      result = a / b;
    }
    else if (this.action === 'a') {
      result = a + b;
    }
    else if (this.action === 's') {
      result = a - b;
    }
    this.firstValue = result;
    this.display = result.toString();
  }
}
