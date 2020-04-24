import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { LogonComponent } from './modules/logon/logon.component';
import { AskComponent } from './modules/ask/ask.component';
import { QuestionComponent } from './modules/question/question.component';



const routes: Routes = [
  {path:  '', pathMatch:  'full', redirectTo:  'home'},
  {path: 'home', component: HomeComponent},
  {path: 'logon', component: LogonComponent},
  {path: 'ask', component: AskComponent},
  {path: 'question', component: QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
