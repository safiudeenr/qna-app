import { Component, OnInit } from '@angular/core';
import {Question} from '../../class/question';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  constructor() { }
  topics = ['Topic 1', 'Topic 2', 'Topic 3'];
  questionModel = new Question(1234567890, 'What is life?', 'Random Topic', 'James');

  ngOnInit(): void {
  }

}
