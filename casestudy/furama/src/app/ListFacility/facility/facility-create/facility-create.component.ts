import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Facility} from "../../model/facility";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {isChildNodeOf} from "codelyzer/util/isChildNodeOf";
import {FacilityServiceService} from "../../service/facility-service.service";
import {Router} from "@angular/router";
import {FacilityListComponent} from "../facility-list/facility-list.component";
import {FindValueOperator} from "rxjs/internal/operators/find";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit, OnChanges {
  @Input()
  facility: Facility;
  facilityForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private facilityService: FacilityServiceService,
              private router: Router,
              private list: FacilityListComponent) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
   this.facility = changes.facility.currentValue;
   this.facility = Object.assign({}, this.facility);
   console.log(changes.facility.isFirstChange())
    if(this.facility != undefined) {
      this.buildForm(this.facility.id,this.facility.name,this.facility.cost,this.facility.description,this.facility.poolArea,this.facility.status,this.facility.floor)
    } else {
      this.buildForm("","","","","","","")

    }


  }
  buildForm(id,name,cost,description,poolArea,status,floor) {
    this.facilityForm = this.formBuilder.group({
      id: [id],
      name: [name,[Validators.required, Validators.pattern('^[A-Za-z ]{0,}')]],
      cost: [cost, [Validators.required,Validators.min(0)]],
      description: [description,[Validators.minLength(12)]],
      poolArea: [poolArea,[Validators.required,Validators.min(0)]],
      status: [status,[Validators.required]],
      floor: [floor,[Validators.min(0)]],
    })
  }

  submit() {
    console.log("submit")
    console.log(this.facilityForm)
    this.facilityService.save(this.facilityForm.value).subscribe(data => {
      this.list.ngOnInit();
    },error => {}, () => {
      this.resetForm();
    });

  }
  resetForm() {
    console.log("close")
    this.facilityForm.reset();

  }
}
