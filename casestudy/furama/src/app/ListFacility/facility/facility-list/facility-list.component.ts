import { Component, OnInit } from '@angular/core';
// import {ServiceComponent} from "../../service/service.component";
import {Facility} from "../../model/facility";
import {FacilityServiceService} from "../../service/facility-service.service";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[];
  constructor(private facilityService: FacilityServiceService) { }

  ngOnInit(): void {
   this.getAll();

  }
  getAll() {
    this.facilityService.getAll().subscribe(data => {
      this.facilities = data;
    })
  }


}
