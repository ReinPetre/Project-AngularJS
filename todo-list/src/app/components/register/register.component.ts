import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit 
{
  @ViewChild('f') form;
  private _user: User;
  passwordCheck: string;

  constructor(
    private router: Router, 
    private _flashMessagesService: FlashMessagesService,
    private _validateService: ValidateService,
    private _authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this._user = new User(0, null, null, null, null, null);
  }

  get user(): User{
    return this._user;
  }

  onRegisterSubmit(user: User, isValid)
  {
    // Validate fields
    if(!this._validateService.validateRegister(user))
    {
      this._flashMessagesService.show('Gelieve alle velden in te vullen', {cssClass: 'alert alert-danger', timeout: 3000});
      return false;
    }

    // Validate email
    if(!this._validateService.validateEmail(user.email))
    {
      this._flashMessagesService.show('Gelieve een geldig emailadres te gebruiken', {cssClass: 'alert alert-danger', timeout: 3000});
      return false;
    }

    // Validate username
    if(!this._validateService.validateUsername(user.username))
    {
      this._flashMessagesService.show('Gelieve enkel alfanumerieke tekens te gebruiken in uw gebruikernaam', {cssClass: 'alert alert-danger', timeout: 3000});
      return false;
    }

    // Validate passwords
    if(!this._validateService.validatePasswords(user, this.passwordCheck))
    {
      this._flashMessagesService.show('Gelieve twee maal hetzelfde wachtwoord op te geven', {cssClass: 'alert alert-danger', timeout: 3000});
      return false;
    }
    
    this._authenticationService.checkUserNameAvailability(this.user.username).subscribe(available => {
      if(available)
      {
        // Register user
        this._authenticationService.registerUser(this.user).subscribe(data => {
          if (data) 
          {
            console.log("De gebruiker is succesvol geregistreerd!\n" + user.firstname + "\n" + user.lastname + "\n" + user.email + "\n" + user.username + "\n" + user.password + "\n" + isValid);
            this._flashMessagesService.show('Succes! U bent geregistreerd en kunt nu inloggen.', {cssClass: 'alert alert-success', timeout: 3000 });
            setTimeout((router: Router) => {
              this.router.navigate(['/login']);
            }, 3000);
          }
          else{
            this._flashMessagesService.show('Oeps.. Er is iets misgelopen.', {cssClass: 'alert alert-danger', timeout: 3000 });
            setTimeout((router: Router) => {
              this.router.navigate(['/login']);
            }, 3000);
          }
        });
      }
      else 
      {
        this._flashMessagesService.show('Deze username is al in gebruik, gelieve een andere gebruikernaam te kiezen.', {cssClass: 'alert alert-danger', timeout: 3000 });
      }
    })
    
  }

  cancelBtnClick() 
  {
    this.router.navigateByUrl('/login');
  }

}
