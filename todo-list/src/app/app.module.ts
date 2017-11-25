import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


// Modules
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {HttpModule} from '@angular/http';


// Services
import { AuthenticationService } from './services/authentication.service';
import { ValidateService } from './services/validate.service';



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
    HttpModule,
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
  providers: [AuthenticationService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
