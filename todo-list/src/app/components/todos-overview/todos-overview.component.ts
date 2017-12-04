import {Project} from '../../models/project';
import {FlashMessagesService} from 'angular2-flash-messages/module';
import {ValidateService} from '../../services/validate.service';
import {Todo} from '../../models/todo';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Data } from '@angular/router/src/config';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-todos-overview',
  templateUrl: './todos-overview.component.html',
  styleUrls: ['./todos-overview.component.scss']
})
export class TodosOverviewComponent implements OnInit {

  private _projectId;
  private _selectedProject: Project;
  private _todos: Todo[];
  private _newTodo: Todo;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _flashMessagesService: FlashMessagesService,
    private _validateService: ValidateService,
    private _todoService: TodoService,
    private _projectService: ProjectService
  ) {
      this._newTodo = new Todo(null, new Date());
  }

  get todos(): Todo[]
  {
    return this._todos;
  }

  get newTodo(): Todo
  {
    return this._newTodo;
  }

  get projectId()
  {
    return this._projectId
  }

  get selectedProject(): Project
  {
    return this._selectedProject;
  }

  ngOnInit() 
  {
    this._projectId = this._route.snapshot.paramMap.get('projectid');
    console.log(this.projectId);
    this._todoService.getTodosFromProject(this.projectId).subscribe(items => this._todos = items);
    this._projectService.getProjectById(this._projectId).subscribe(item => this._selectedProject = item);
    (window as any).toggleTodoModal();
    (window as any).setDateToToday();
  }

  onBackButtonClicked()
  {
    this._router.navigate(['/projects-overview']);
  }

  onAddTodoSubmit()
  {
    if(!this._validateService.validateTodo(this.newTodo))
    {
      this._flashMessagesService.show('Gelieve alle velden in te vullen voor uw todo.', {cssClass: 'alert alert-danger', timeout: 3000});
      return false;
    }

    if(!this._validateService.validatDueDate(this.newTodo))
    {
      this._flashMessagesService.show('Gelieve een deadline op te geven die in de toekomst ligt.', {cssClass: 'alert alert-danger', timeout: 3000});
      return false;
    }

    this._todoService.addTodoToProject(this.projectId, this.newTodo).subscribe(item => console.log(item));
    location.reload();
  }

  formatDate(date: Date): string
  {
    var newDate = new Date(date);
    //return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
    return newDate.toLocaleDateString();
  }



}
