import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { Ss6P1Component } from './ss6-p1/ss6-p1.component';
import { TodoComponent } from './ss6-p1/todo/todo.component';

import { Ss6E1Component } from './ss6-e1/ss6-e1.component';
import { CreateAccountTestComponent } from './create-account-test/create-account-test.component';
import { Ss7P1Component } from './ss7-p1/ss7-p1.component';
import { Ss7P2Component } from './ss7-p2/ss7-p2.component';
import { YoutubePlayerComponent } from './ss7-p2/youtube-player/youtube-player.component';
import { Ss7P3Component } from './ss7-p3/ss7-p3.component';
import { ProductCreateComponent } from './ss7-p3/product/product-create/product-create.component';
import { Ss7E1Component } from './ss7-e1/ss7-e1.component';
import { TranslateComponent } from './ss7-e1/dictionaryService/translate/translate.component';
import { ProductEditComponent } from './ss7-p3/product/product-edit/product-edit.component';
import {HttpClientModule} from '@angular/common/http';

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
    Ss5E2Component,
    Ss6P1Component,
    TodoComponent,
    Ss6E1Component,
    CreateAccountTestComponent,
    Ss7P1Component,
    Ss7P2Component,
    YoutubePlayerComponent,
    Ss7P3Component,
    ProductCreateComponent,
    Ss7E1Component,
    TranslateComponent,
    ProductEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
