import {Todo} from '../models/todo';
import {Project} from '../models/project';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { unescapeIdentifier } from '@angular/compiler';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user: User)
  {
    if(user.firstname == undefined || user.lastname == undefined || user.password == undefined)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  validateLogin(user: User)
  {
    if(user.username == undefined || user.password == undefined)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  validateEmail(email: string)
  {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(email);
  }

  validatePasswords(user: User, password: string)
  {
    if(user.password === password)
    {
      return true;
    }
    else 
    {
      return false;
    }
  }
  
  validateUsername(username: string)
  {
    const regexAlphanumeric = /^[a-z0-9]+$/i;
    return regexAlphanumeric.test(username);
  }

  validateProject(project: Project)
  {
    if(project.projectName == undefined || project.projectName == "" || project.projectName == " ")
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  validateTodo(todo: Todo)
  {
    if(todo.description == undefined || todo.description == "" || todo.description == " " || todo.dueDate == undefined)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  validatDueDate(todo: Todo)
  {
    let today = new Date();
    
    if(todo.dueDate < today)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
}
