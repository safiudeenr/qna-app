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


  submitQuestion(subject, message, userId, comunityId) {
    // console.log(userdIdd, ' USerId');
    // const userId = userdIdd;
    return this.http.post<any>('http://localhost:8080/v1/postQuestion', {subject, message, userId, comunityId})
    .pipe(feed => {
      console.log(JSON.stringify(feed));
      return feed;
    });
  }

  submitAnswer(message, postId, userId) {
    return this.http.post<any>('http://localhost:8080/v1/postComment', {message, postId, userId})
    .pipe(feed => {
      console.log(JSON.stringify(feed));
      return feed;
    });
  }

  getQuestions(){
    return this.http.get<any>('http://localhost:8080/v1/getUnansweredQuestions')
      .pipe(feed => {
        console.log(JSON.stringify(feed));
        return feed;
      });
  }

  getFeed() {
    return this.http.get<any>('http://localhost:8080/v1/getTopQuestions')
      .pipe(feed => {
        console.log(JSON.stringify(feed));
        return feed;
      });
  }

}
