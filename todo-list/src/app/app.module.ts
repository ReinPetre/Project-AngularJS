import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

import { AuthenticationService } from './services/authentication.service';
import { FlashMessagesModule } from 'angular2-flash-messages';


@NgModule({
  declarations: [
    AppComponent,
    LoginNavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot([
      { path: '' , component: HomeComponent},
      { path: '', component: LoginNavbarComponent, outlet: 'navbar'},
      { path: '', component: FooterComponent, outlet: 'footer'},
      { path: 'login' , component: LoginComponent},
      { path: 'register' , component: RegisterComponent},

      { path: '**', redirectTo: '', pathMatch: 'full'}
    ]),
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }