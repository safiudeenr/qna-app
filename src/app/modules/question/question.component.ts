import { Component, OnInit } from '@angular/core';
import { AskService } from '../../services/ask.service';
import { TopQuestions }  from '../../class/top-questions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  currentUser: any;
  topQuestions: TopQuestions[];
  questionForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private askService: AskService,
    private authService: AuthService,
    private router: Router) { 
      this.authService.currentUser.subscribe(u => this.currentUser = u);
    }

  ngOnInit(): void {
    this.askService.getQuestions().subscribe(data => {
      // console.log(JSON.stringify(data));
      this.topQuestions = data as TopQuestions[];
    });

    this.questionForm = this.formBuilder.group({
      answerBox: ['']
    });


  }

  
  get f() { return this.questionForm.controls; }

  addAnswer(postId) {
    if (!this.f.answerBox.value) {
      return;
    }

    this.askService.submitAnswer(this.f.answerBox.value, postId, this.authService.currentUserValue.userId)
    .subscribe(data => console.log(JSON.stringify(data)));
    // console.log(postId);
    // console.log(this.f.answerBox.value);
    // console.log(JSON.stringify(this.authService.currentUserValue));
  }

}
