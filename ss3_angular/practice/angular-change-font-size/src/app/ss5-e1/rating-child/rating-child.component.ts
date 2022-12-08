import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-child',
  templateUrl: './rating-child.component.html',
  styleUrls: ['./rating-child.component.css']
})
export class RatingChildComponent implements OnInit {
  @Input()
  star: number;

  constructor() { }

  ngOnInit(): void {
  }

}
