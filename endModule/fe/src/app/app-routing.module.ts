import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './savingBook/list/list.component';
import {SaveComponent} from './savingBook/save/save.component';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'savingBook/create', component: SaveComponent},
  {path: 'savingBook/edit/:id', component: SaveComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
