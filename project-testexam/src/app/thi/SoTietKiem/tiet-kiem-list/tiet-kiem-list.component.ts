import { Component, OnInit } from '@angular/core';
import {SoTietKiemServiceService} from "../../service/so-tiet-kiem-service.service";
import {SoTietKiem} from "../../model/so-tiet-kiem";
import {KhachHang} from "../../model/khach-hang";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tiet-kiem-list',
  templateUrl: './tiet-kiem-list.component.html',
  styleUrls: ['./tiet-kiem-list.component.css']
})
export class TietKiemListComponent implements OnInit {
  soTietKiemList : SoTietKiem[];
  khachHangList: KhachHang[] = [];
  soTietKiem: SoTietKiem;
  config: any;
  formSave: FormGroup;
  khachHangForm: FormGroup;
  formSearch: FormGroup;


  constructor(private tietKiemService: SoTietKiemServiceService) { }

  ngOnInit(): void {
    this.getAllWithSearch('','');
    this.getAllKhachHang();
    this.buildFormSave();
    this.buildFormSearch();

  }
  getAllWithSearch(maSo,tenKh) {
    this.tietKiemService.getAllWithSearch(maSo,tenKh).subscribe( data => {
      this.soTietKiemList = data;
      this.config = {
        itemsPerPage: 2,
        currentPage: 1,
        totalItems: this.soTietKiemList.length
      };
    })
  }
  getAllKhachHang() {
    this.tietKiemService.getAllKhachHang().subscribe(data => {
      this.khachHangList = data;
      console.log(this.khachHangList)
    })
  }
  buildFormSearch() {
    this.formSearch = new FormGroup({
      tenKhSearch: new FormControl(''),
      maSoTkSearch: new FormControl('')
    })
  }

  addNew() {
    this.soTietKiem = undefined;
    this.buildFormSave();

  }

  getInfo(f: SoTietKiem) {
    this.soTietKiem = f;
    this.buildFormSave();

  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }
  changeToKhachHang(id) {
    if(id == undefined) {
      return "not found"
    } else  {
      for (let i = 0; i <  this.khachHangList.length; i++) {
        if(this.khachHangList[i].id == id) {
          return  this.khachHangList[i].tenKhachHang;
        }
      }
    }

  }

  delete() {
    this.tietKiemService.delete(this.soTietKiem.id).subscribe(data => {
      this.ngOnInit();
    })

  }

  submit() {
    console.log(this.formSave)
    this.tietKiemService.save(this.formSave.value).subscribe(data => {
      this.ngOnInit();
    })

  }
  buildFormSave() {
    this.formSave = new FormGroup({
      id: new FormControl(this.soTietKiem == undefined ? "" : this.soTietKiem.id),
      maKh: new FormControl(this.soTietKiem == undefined ? "" : this.soTietKiem.maKh),
      tenKh: new FormControl(this.soTietKiem == undefined ? "" : this.soTietKiem.tenKh,[Validators.pattern('^[A-Za-z ]{1,}$'),Validators.required]),
      ngayMoSo: new FormControl(this.soTietKiem == undefined ? "" : this.soTietKiem.ngayMoSo,[Validators.required]),
      thoiGianBatDau: new FormControl(this.soTietKiem == undefined ? "" : this.soTietKiem.thoiGianBatDau,[Validators.required]),
      kyHang: new FormControl(this.soTietKiem == undefined ? "" : this.soTietKiem.kyHang,[Validators.required, this.chechKyHang]),
      soTienGoi:  new FormControl(this.soTietKiem == undefined ? "" : this.soTietKiem.soTienGoi,[Validators.min(10),Validators.required]),
      laiSuat:  new FormControl(this.soTietKiem == undefined ? "" : this.soTietKiem.laiSuat,[Validators.required]),
      uuDai: new FormControl(this.soTietKiem == undefined ? "" : this.soTietKiem.uuDai,[Validators.required])
    })
  }

  search() {
    this.getAllWithSearch(this.formSearch.value.maSoTkSearch,this.formSearch.value.tenKhSearch)

  }

  reset() {
    this.formSearch.reset();
    this.ngOnInit();
  }
  chechKyHang(c: AbstractControl) {
    const kyHang = c.value;
    // const kyHangList = ['6 Thang','3 Thang','1 Nam','5 Nam']
   if(kyHang == '6 Thang') {
      return {'kyHangValid' : false}
   } else if (kyHang == '3 Thang') {
     return {'kyHangValid' : false}
   } else if(kyHang == '1 Nam') {
     return {'kyHangValid' : false}
   } else if(kyHang == '5 Nam') {
     return {'kyHangValid' : false}
   } else if(kyHang == 'Khong ky hang') {
     return {'kyHangValid' : false}
   }
   else {
     return {'kyHangValid' : true}
   }


  }
}
