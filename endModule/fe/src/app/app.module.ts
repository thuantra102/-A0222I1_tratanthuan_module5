import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListComponent } from './savingBook/list/list.component';
import {HttpClientModule} from '@angular/common/http';
import { SaveComponent } from './savingBook/save/save.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
