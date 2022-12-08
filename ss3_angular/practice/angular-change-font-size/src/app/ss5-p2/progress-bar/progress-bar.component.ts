import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;


  // tslint:disable-next-line:ban-types
  private time: Number = 0;

  ngOnInit(): void {
  }

  loading() {
    const interval = setInterval(() => {

      this.progress = +this.progress + 5;
      // @ts-ignore
      console.log( `Time = ${this.time++} Process = ${this.progress}`);
      // tslint:disable-next-line:triple-equals
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
