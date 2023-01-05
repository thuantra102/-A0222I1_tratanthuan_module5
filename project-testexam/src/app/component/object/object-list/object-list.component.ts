import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ObjectServiceService} from "../../service/object-service.service";
import {Object} from "../../model/object";
import {Type1} from "../../model/type1";

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css']
})
export class ObjectListComponent implements OnInit {
  formSearch: FormGroup;
  formSave: FormGroup;
  objectList: Object[];
  typeList: Type1[] =[];
  config: any;
  object: Object;



  constructor(private objectService: ObjectServiceService) {
  }

  ngOnInit(): void {
    this.getAllWithSearch('','');
    this.getAllType();
    this.buildForm();
    this.buildFormSearch()
  }

  getAllWithSearch(name, typeId) {
    this.objectService.getAllWithSearch(name, typeId).subscribe(data => {
      this.objectList = data
      console.log(this.objectList)
      this.config = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.objectList.length
      };
    })
  }
  getAllType() {
    this.objectService.getType().subscribe(data => {
      this.typeList = data;
      console.log(this.typeList )
    })
  }
  buildFormSearch() {
    this.formSearch = new FormGroup({
      name: new FormControl(''),
      typeCode: new FormControl('')
    })
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }

  addNew() {
    this.object = undefined;
    this.buildForm();

  }
  changeToName(id ) {
    for (let i = 0; i <  this.typeList.length; i++) {
      if(this.typeList[i].id == id) {
        return  this.typeList[i].name;
      }
    }
  }
  changeStatus(value: Boolean) {
    if (value) {
      return "Nam"
    } else {
      return "Nu"
    }
  }

  getInfo(f: Object) {
    this.object = f;
    this.buildForm();
  }

  submit() {
    console.log('submit')
    this.objectService.save(this.formSave.value).subscribe(data => {
      this.ngOnInit()
    })

  }

  delete() {
    this.objectService.delete(this.object.id).subscribe(data => {
      this.ngOnInit()
    })
  }
  buildForm() {
    this.formSave = new FormGroup({
      id: new FormControl(this.object == undefined ? "" : this.object.id),
      name: new FormControl(this.object == undefined ? "" : this.object.name,[Validators.required]),
      phoneNumber: new FormControl(this.object == undefined ? "" : this.object.phoneNumber,[Validators.required]),
      typeCode: new FormControl(this.object == undefined ? "" : this.object.typeCode,[Validators.required]),
      dateOfBirth: new FormControl(this.object == undefined ? "" : this.object.dateOfBirth,[Validators.required]),
      gender: new FormControl(this.object == undefined ? "" : this.object.gender,[Validators.required])
    })
  }

  search() {
    this.getAllWithSearch(this.formSearch.value.name, this.formSearch.value.typeCode)
  }

  reset() {
    this.formSearch.reset();
    this.ngOnInit()

  }
}
