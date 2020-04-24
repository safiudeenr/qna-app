import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue() {
     return this.currentUserSubject.value;
   }

  login(username, password) {
    //const username = username;
    //const job = password;
    // return this.http.post('https://reqres.in/api/users', {
    // return this.http.post('https://reqres.in/api/login', {
    //return this.http.post<any>('https://reqres.in/api/users', {name, job})
    return this.http.post<any>('http://localhost:8080/v1/login', {username})
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
    }

    logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

}
