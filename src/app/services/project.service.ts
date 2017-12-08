import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Response, Headers } from '@angular/http';
import { Project } from '../models/project';
import { User } from '../models/user';

@Injectable()
export class ProjectService {

  private _url = '/projects'
  private _projects;

  constructor(
    private http: Http, 
    private authenticationService: AuthenticationService 
  ) { }

  getProjectsFromUser(userid)
  {
    return this.http.get(`${this._url}/user/${userid}`, { headers: new Headers({Authorization: `Bearer ${this.authenticationService.token}`}) })
    .map(response => response.json().map(item => Project.fromJSON(item)));
  }

  addProjectToUser(userid, project: Project)
  {
    return this.http.post(`${this._url}/user/${userid}`, project, { headers: new Headers({Authorization: `Bearer ${this.authenticationService.token}`}) })
    .map(res => res.json());
  }

  deleteProjectFromUser(userid, project: Project)
  {
    return this.http.delete(`${this._url}/${userid}/${project.id}`, { headers: new Headers({Authorization: `Bearer ${this.authenticationService.token}`}) })
    .map(res => res.json());
  }

  getProjectById(projectid)
  {
    return this.http.get(`${this._url}/${projectid}`, { headers: new Headers({Authorization: `Bearer ${this.authenticationService.token}`}) })
    .map(response => Project.fromJSON(response.json()));
  }

  updateProject(project: Project)
  {
    return this.http.post(`${this._url}/${project.id}`, project, { headers: new Headers({Authorization: `Bearer ${this.authenticationService.token}`}) })
    .map(res => res.json());
  }
  

}
