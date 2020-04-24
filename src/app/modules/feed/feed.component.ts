import { Component, OnInit } from '@angular/core';
import { Answer } from '../../class/answer';
import { Question } from '../../class/question';
import { AskService } from '../../services/ask.service';

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

  constructor(private askService: AskService) { }

  questions: Question[];

  ngOnInit(): void {
    this.askService.getQuestions()
        .subscribe((data: Answer) => this.questions = { ...data });
  }

}
