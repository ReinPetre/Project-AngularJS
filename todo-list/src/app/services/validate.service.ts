import { Injectable } from '@angular/core';
import { User } from '../models/user';

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
}
