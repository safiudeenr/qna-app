import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Question} from '../class/question';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  url = '';
  constructor(private http: HttpClient) { }
  submitQuestion(question: Question) {
    return this.http.post<any>(this.url, question);
  }
}
