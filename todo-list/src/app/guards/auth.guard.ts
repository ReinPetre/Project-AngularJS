import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private _authenticationService: AuthenticationService, private _router:Router){

  }

  canActivate(){
    if (this._authenticationService.user$.getValue()) 
    {
      return true;
    } else 
    {
      this._router.navigate(['/login']);
      return false;
    }
  }
}