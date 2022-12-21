import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FacilityComponent } from './facility/facility.component';
import { FooterComponent } from './footer/footer.component';
import {AppRoutingModule} from "./app-routing.module";
import { CreateComponent } from './facility/funtion-page/create/create.component';
import { FacilityCreateComponent } from './ListFacility/facility/facility-create/facility-create.component';

import { FacilityListComponent } from './ListFacility/facility/facility-list/facility-list.component';
import { CusomerListComponent } from './CustomerList/customer/cusomer-list/cusomer-list.component';
import { ContractListComponent } from './Contract/contract/contract-list/contract-list.component';
import {HttpClientModule} from "@angular/common/http";
import { ContractCreateComponent } from './Contract/contract/contract-create/contract-create.component';
import { ReactiveFormsModule} from "@angular/forms";
import { FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FacilityComponent,
    FooterComponent,
    CreateComponent,
    FacilityCreateComponent,
    FacilityListComponent,
    CusomerListComponent,
    ContractListComponent,
    ContractCreateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
