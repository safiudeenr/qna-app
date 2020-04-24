import { Component, OnInit } from '@angular/core';
import { Question } from '../../class/question';
import { AskService } from '../../services/ask.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  constructor(private askService: AskService) { }
  topics = ['Topic 1', 'Topic 2', 'Topic 3'];
  questionModel = new Question(1234567890, 'What is life?', 'Random Topic', 'James');

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.questionModel);
    // // this.askService.submitQuestion(this.questionModel)
    //     .subscribe(
    //         data => console.log('Success!', data),
    //         error => console.log('Error!', error)
    //     );
  }

}
