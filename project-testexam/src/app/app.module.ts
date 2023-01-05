import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ObjectListComponent } from './component/object/object-list/object-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { TietKiemListComponent } from './thi/SoTietKiem/tiet-kiem-list/tiet-kiem-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectListComponent,
    TietKiemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
