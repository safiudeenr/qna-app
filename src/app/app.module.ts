import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { LogonComponent } from './modules/logon/logon.component';
import { AskComponent } from './modules/ask/ask.component';
import { QuestionComponent } from './modules/question/question.component';
import { FormsModule } from '@angular/forms';
import { FeedComponent } from './modules/feed/feed.component';
import { PostComponent } from './modules/post/post.component';
import { CommunityComponent } from './modules/community/community.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LogonComponent,
    AskComponent,
    QuestionComponent,
    FeedComponent,
    PostComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
