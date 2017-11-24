import {Router} from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') form;
  private _user: User;

  constructor(private router: Router, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this._user = new User(0, "", "", "", "", "");
  }

  get user(): User{
    return this._user;
  }

  onRegisterSubmit(user: User, isValid)
  {
    console.log("De gebruiker is succesvol geregistreerd!\n" + user.firstname + "\n" + user.lastname + "\n" + user.email + "\n" + user.username + "\n" + user.password + "\n" + isValid);
    this._flashMessagesService.show('Succes! U bent geregistreerd!', {cssClass: 'alert alert-success', timeout: 3000 });
    setTimeout((router: Router) => {
      this.router.navigate(['/login']);
  }, 3000);
  }

  cancelBtnClick() 
  {
    this.router.navigateByUrl('/login');
  }

}
