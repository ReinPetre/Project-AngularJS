import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Response, Headers } from '@angular/http';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {

  private _url = "http://localhost:8080/todos"
  private _todos;

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }

  getTodosFromProject(projectId)
  {
    return this.http.get(`${this._url}/project/${projectId}`, { headers: new Headers({Authorization: `Bearer ${this.authenticationService.token}`})})
    .map(response => response.json().map(item => Todo.fromJSON(item)));
  }

  addTodoToProject(projectid, todo: Todo)
  {
    return this.http.post(`${this._url}/project/${projectid}`, todo, { headers: new Headers({Authorization: `Bearer ${this.authenticationService.token}`}) })
    .map(res => res.json());
  }

}
