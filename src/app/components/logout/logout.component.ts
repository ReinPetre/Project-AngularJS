import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit() 
  {
    setTimeout(() => {
      this._router.navigate(['']);
    }, 3000);
    this._authenticationService.logout();
  }

}
