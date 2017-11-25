import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {
  private _url = "http://localhost:8080/users";
  private _user$: BehaviorSubject<String>;
  
  constructor(private http: Http) { }

  registerUser(user: User): Observable<boolean> {
    return this.http.post(`${this._url}/register`, { 
      username: user.username, 
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: res.token }));
          this._user$.next(user.username);
          return true;
        } else {
          return false;
        }
      });
  }

}
