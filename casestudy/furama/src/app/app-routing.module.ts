import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityComponent} from "./facility/facility.component";
import {CreateComponent} from "./facility/funtion-page/create/create.component";
import {FacilityListComponent} from "./ListFacility/facility/facility-list/facility-list.component";
import {FacilityCreateComponent} from "./ListFacility/facility/facility-create/facility-create.component";
import {CusomerListComponent} from "./CustomerList/customer/cusomer-list/cusomer-list.component";
import {ContractListComponent} from "./Contract/contract/contract-list/contract-list.component";
import {ContractCreateComponent} from "./Contract/contract/contract-create/contract-create.component";



const routes: Routes = [
  {path: '', component: FacilityComponent},
  {path: 'facility/create', component: CreateComponent},
  {path: 'facilityList', component: FacilityListComponent},
  {
    path: 'facilityList/create',
    component: FacilityCreateComponent
  },
  {
    path:'customer/list',
    component: CusomerListComponent
  },
  {
    path: 'contract/list',
    component: ContractListComponent
  }, {
  path: 'contract/edit/:id',
    component: ContractCreateComponent
  },
  {
    path: 'contract/create',
    component: ContractCreateComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
