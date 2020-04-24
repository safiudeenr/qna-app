import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Question} from '../class/question';
import {Answer} from '../class/answer';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  url = '';
  constructor(private http: HttpClient) { }
  submitQuestion(question: Question) {
    this.url = 'post question';
    return this.http.post<any>(this.url, question);
  }

  submitAnswer(answer: Answer) {
    this.url = 'post answer';
    return this.http.post<any>(this.url, answer);
  }

  getQuestions(){
    this.url = 'retrieve answers';
    return this.http.get<any>(this.url);
  }
}
