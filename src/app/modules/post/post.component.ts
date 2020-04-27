import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AskService } from '../../services/ask.service';
import { TopComments } from '../../class/top-comments';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId: number;
  questionForm: FormGroup;
  currentUser: any; 
  comments: TopComments[];
  question: any;
  community: any;

  feeds = {
    total: 200,
    community: '123',
    question: 'ques1',
    comments: [{output: 'comment1', likes: 10}, {output: 'comment2', likes: 10}]
  }
;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private askService: AskService,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) { 
      this.authService.currentUser.subscribe(u => this.currentUser = u);
    }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));

    this.questionForm = this.formBuilder.group({
      answerBox: ['']
    });

     this.getAllCommentsForPost(this.postId);
  }



  get f() { return this.questionForm.controls; }



  addAnswer() {
    console.log(this.postId, 'post id');
    if (!this.f.answerBox.value) {
      return;
    }

    this.askService.submitAnswer(this.f.answerBox.value, this.postId, this.authService.currentUserValue.userId)
    .subscribe(data => {
      window.alert("answer added");
    });
   
  }

  getAllCommentsForPost(id) {
    this.getComments(id)
    .subscribe(data =>{ 
      this.comments = <TopComments[]>data;
      this.community = this.comments[0].questionTitle;
      this.question = this.comments[0].questionDescription;
    });

  }

  getComments(postId) {
    return this.http.post<any>('http://localhost:8080/v1/getCommentByPostId', {postId})
    .pipe(feed => {
      console.log(JSON.stringify(feed));
      return feed;
    });
  }

}
