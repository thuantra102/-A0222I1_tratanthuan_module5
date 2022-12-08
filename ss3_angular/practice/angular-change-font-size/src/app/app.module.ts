import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule} from "@angular/forms";
import { PetComponent } from './pet/pet.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import { NavbarComponent } from './article/navbar/navbar.component';
import { FooterComponent } from './article/footer/footer.component';
import { Ss5ComponentInteractionComponent } from './ss5-component-interaction/ss5-component-interaction.component';
import { NameCardComponent } from './ss5-component-interaction/name-card/name-card.component';
import { Ss5P2Component } from './ss5-p2/ss5-p2.component';
import { ProgressBarComponent } from './ss5-p2/progress-bar/progress-bar.component';
import { Ss5E1Component } from './ss5-e1/ss5-e1.component';
import { Ss5Test1Component } from './ss5-test1/ss5-test1.component';
import { ChildComponent } from './ss5-test1/child/child.component';
import { Ss5Test2Component } from './ss5-test2/ss5-test2.component';
import { Childtest2Component } from './ss5-test2/childtest2/childtest2.component';
import { RatingChildComponent } from './ss5-e1/rating-child/rating-child.component';
import { Ss5E2Component } from './ss5-e2/ss5-e2.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    Ss5ComponentInteractionComponent,
    NameCardComponent,
    Ss5P2Component,
    ProgressBarComponent,
    Ss5E1Component,
    Ss5Test1Component,
    ChildComponent,
    Ss5Test2Component,
    Childtest2Component,
    RatingChildComponent,
    Ss5E2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
