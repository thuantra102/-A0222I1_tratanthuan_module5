import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Ss7P1Component} from './ss7-p1/ss7-p1.component';
import {Ss7P2Component} from './ss7-p2/ss7-p2.component';
import {YoutubePlayerComponent} from './ss7-p2/youtube-player/youtube-player.component';
import {Ss7P3Component} from './ss7-p3/ss7-p3.component';
import {ProductCreateComponent} from './ss7-p3/product/product-create/product-create.component';
import {Ss7E1Component} from './ss7-e1/ss7-e1.component';
import {TranslateComponent} from './ss7-e1/dictionaryService/translate/translate.component';


const routes: Routes = [
  {
    path: 'youtube', component: Ss7P2Component, children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'product/list',
    component: Ss7P3Component
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  }, {
    path: 'dictionary',
    component: Ss7E1Component,
    children: [{
      path: ':word',
      component: TranslateComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
