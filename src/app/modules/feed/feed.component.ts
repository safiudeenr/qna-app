import { Component, OnInit } from '@angular/core';
import { Answer } from '../../class/answer';
import { Question } from '../../class/question';
import { AskService } from '../../services/ask.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  searchForm: FormGroup;
  submitted = true;

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

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private askService: AskService) { }

  ngOnInit(): void {
    //console.log(Number(this.route.snapshot.paramMap.get('id')));

    this.searchForm = this.formBuilder.group({
      searchBox: ['']
    });

    console.log(Number(this.route.snapshot.paramMap.get('id')));
    this.askService.getQuestions()
        .subscribe((data: Question[]) => this.questionlist = { ...data });
  }

  get f() { return this.searchForm.controls; }

  getTopPosts() {
    // call service to get all the top posts
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




  }
}