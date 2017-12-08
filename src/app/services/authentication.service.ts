import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { User } from '../models/user';
import { Project } from '../models/project';

@Injectable()
export class AuthenticationService {
  private _url = "/users";
  private _user$: BehaviorSubject<string>;
  
  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(currentUser && currentUser.username);
   }

  get user$(): BehaviorSubject<string>
  {
    return this._user$;
  }

  get token(): string {
    return JSON.parse(localStorage.getItem('currentUser')).token;
  }

  /* getLoggedInUser()
  {
    return this.http.get(`${this._url}/${JSON.parse(localStorage.getItem("currentUser")).username}`);
  } */

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

  checkUserNameAvailability(username: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkusername`, { username: username }).map(res => res.json())
    .map(item => {
      if (item.username === 'alreadyexists') {
        return false;
      } else {
        return true;
      }
    });
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/login`, { username: username, password: password })
      .map(res => res.json()).map(res => {
        const token = res.token;
        const userid = res.user._id;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ username: username, userid: userid, token: token }));
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      });
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      setTimeout(() => this._user$.next(null));
    }
  }

  

}
