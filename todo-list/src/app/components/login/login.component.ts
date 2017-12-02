import {AuthenticationService} from '../../services/authentication.service';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages/module';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  @ViewChild('f') form;
  private _user: User;
  private errorMsg: string;

  constructor(
    private router: Router, 
    private _flashMessagesService: FlashMessagesService,
    private _validateService: ValidateService,
    private _authenticationService: AuthenticationService
  ) { }

  get user(): User
  {
    return this._user;
  }

  ngOnInit() {
    this._user = new User(0, null, null, null, null, null);
  }

  registerBtnClick() {
    this.router.navigateByUrl('/register');
  }

  onLoginSubmit(user: User, isValid)
  {
    // Validate fields
    if(!this._validateService.validateLogin(this.user))
    {
      this._flashMessagesService.show('Gelieve alle velden in te vullen', {cssClass: 'alert alert-danger', timeout: 3000});
      return false;
    }

    this._authenticationService.login(user.username, user.password).subscribe(val => 
      {
        if (val) 
        {
          console.log(val);
          this.router.navigate(['/projects-overview']);

        } 
        else 
        {
          console.log(val);
          this._flashMessagesService.show('De door u ingevulde gegevens zijn niet correct', {cssClass: 'alert alert-danger', timeout: 3000});
          return false;
        }
      }, err => this.errorMsg = err.json().message);
  }
}
