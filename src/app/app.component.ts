import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _authentticationService: AuthenticationService
  ) {}

  get currentUser(): BehaviorSubject<string>
  {
    return this._authentticationService.user$;
  }

  




}
