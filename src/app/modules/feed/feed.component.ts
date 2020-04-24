import { Component, OnInit } from '@angular/core';
import { Answer } from '../../class/answer';
import { Question } from '../../class/question';
import { AskService } from '../../services/ask.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
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

  constructor(private askService: AskService, private route: ActivatedRoute) { }

  questionlist: Question[];


  ngOnInit(): void {
    console.log(Number(this.route.snapshot.paramMap.get('id')));
    this.askService.getQuestions()
        .subscribe((data: Question[]) => this.questionlist = { ...data });
  }

  getTopPosts() {
    // call service to get all the top posts
  }


}
