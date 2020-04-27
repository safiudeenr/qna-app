import { Component, OnInit } from '@angular/core';
import { Answer } from '../../class/answer';
import { Question } from '../../class/question';
import { AskService } from '../../services/ask.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Toppost } from '../../class/toppost';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  searchForm: FormGroup;
  submitted = true;
  currentUser: any;


  feeds = [{
    question: 'ques1',
    answer: 'answer',
    community: '123',
    id: 1
  },
  {
    question: 'ques2',
    answer: 'answer2',
    community: '123',
    id: 2
  }
  ];

  questionlist: Question[];

  topfeed: Toppost[];

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private askService: AskService,
    private authService: AuthService,
    private router: Router) {
    this.authService.currentUser.subscribe(u => this.currentUser = u);
    if (!this.currentUser) {
      this.router.navigate(['/logon']);
    }
  }

  ngOnInit(): void {
    //console.log(Number(this.route.snapshot.paramMap.get('id')));

    this.searchForm = this.formBuilder.group({
      searchBox: ['']
    });

    console.log(Number(this.route.snapshot.paramMap.get('id')));
    // this.askService.getQuestions()
    //   .subscribe((data: Question[]) => this.questionlist = { ...data });

    //Get top post
    this.getTopPosts();
  }

  get f() { return this.searchForm.controls; }

  getTopPosts() {
    // call service to get all the top posts

    this.askService.getFeed()
      .subscribe(data => {
        //console.log(JSON.stringify(data), "from feed");
        this.topfeed = data as Toppost[];
        console.log(this.topfeed[0].postId);
      });


  }

  performSearch() {

    if (!this.f.searchBox.value) {
      return;
    }


    this.feeds = [{
      question: 'ques1123',
      answer: 'answer',
      community: '123',
      id: 1
    },
    {
      question: 'ques2111',
      answer: 'answer2',
      community: '123',
      id: 2
    }
    ];
  }


  addQuestion() {
    if (!this.f.searchBox.value) {
      return;
    }

    this.askService.submitQuestion(this.f.searchBox.value, 
      this.f.searchBox.value,<number> this.authService.currentUserValue.userId, 1)
      .subscribe(data => {
        // console.log(JSON.stringify(data));
        window.alert("Question Added");
        this.searchForm = this.formBuilder.group({
          searchBox: ['']
        });
      });

  }
}