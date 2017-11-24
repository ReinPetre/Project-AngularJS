import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private _url = "/users";
  private _user$: BehaviorSubject<String>;
  
  constructor(private http: Http) { }

}
