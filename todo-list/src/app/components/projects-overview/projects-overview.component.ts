import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages/module';
import {Router} from '@angular/router';
import {Project} from '../../models/project';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {

  private _projects: Project[];
  private _newProject: Project
  private _selectdProject: Project;

  constructor(
    private router: Router,
    private _projectService: ProjectService,
    private _flashMessagesService: FlashMessagesService,
    private _validateService: ValidateService,
  ) { 
    this._newProject = new Project(null);
    this._selectdProject = new Project(null);
  }

  ngOnInit() 
  {
    this._projectService.getProjectsFromUser(JSON.parse(localStorage.getItem("currentUser")).userid).subscribe(items => this._projects = items);
  }

  get projects(): Project[]
  {
    return this._projects;
  }
  
  get newProject(): Project
  {
    return this._newProject;
  }

  get selectedProject(): Project
  {
    return this._selectdProject;
  }

  onAddProjectSubmit()
  {
    if(!this._validateService.validateProject(this.newProject))
    {
      this._flashMessagesService.show('Gelieve een naam in te vullen voor uw project.', {cssClass: 'alert alert-danger', timeout: 3000});
      return false;
    }

    this._projectService.addProjectToUser(JSON.parse(localStorage.getItem("currentUser")).userid, this.newProject).subscribe();
    
    location.reload();
    //this.router.navigate(['/projects-overview']);
  }

  onDeleteButtonPressed(project: Project)
  {
    this._projectService.deleteProjectFromUser(JSON.parse(localStorage.getItem("currentUser")).userid, project).subscribe(item => console.log(item));
    location.reload();
  }

  projectNameClicked(projectid)
  {
    this.router.navigateByUrl('/todos-overview/'+projectid);
  }

  onEditButtonClicked(project: Project)
  {
    this._selectdProject = project;
  }

  onEditProjectSubmit()
  {
    if(!this._validateService.validateProject(this.selectedProject))
    {
      return false;
    }

    this._projectService.updateProject(this.selectedProject).subscribe(item => console.log(item));
    location.reload();
  }

  checkIfUserHasActiveProjects(): boolean
  {
    if(this.projects == undefined || this.projects.length <= 0)
    {
      return false
    }
    else
    {
      return true
    }
  }
}
