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
  facility: Facility;
  constructor(private facilityService: FacilityServiceService) { }

  ngOnInit(): void {
   this.getAll();

  }
  getAll() {
    this.facilityService.getAll().subscribe(data => {
      this.facilities = data;
    })
  }
  getInfo(f) {
    this.facility = f;
  }


  addNew() {
    this.facility = undefined;
  }

  delete() {
    console.log("delete")
    this.facilityService.delete(this.facility.id).subscribe(data => {
      this.ngOnInit()
      }
    )
  }
}
