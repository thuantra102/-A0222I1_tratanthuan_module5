import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ObjectListComponent} from "./component/object/object-list/object-list.component";
import {TietKiemListComponent} from "./thi/SoTietKiem/tiet-kiem-list/tiet-kiem-list.component";


const routes: Routes = [{path:"", component: TietKiemListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
