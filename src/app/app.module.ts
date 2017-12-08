// Modules
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {HttpModule} from '@angular/http';


// Services & Guards
import { AuthenticationService } from './services/authentication.service';
import { ValidateService } from './services/validate.service';
import { AuthGuard } from './guards/auth.guard';
import { ProjectService } from './services/project.service';
import { TodoService } from './services/todo.service';

// Components
import { AppComponent } from './app.component';
import { LoginNavbarComponent } from './components/login-navbar/login-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProjectsOverviewComponent } from './components/projects-overview/projects-overview.component';
import { ProjectsOverviewNavbarComponent } from './components/projects-overview-navbar/projects-overview-navbar.component';
import { TodosOverviewComponent } from './components/todos-overview/todos-overview.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginNavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProjectsOverviewComponent,
    ProjectsOverviewNavbarComponent,
    TodosOverviewComponent
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
      { path: 'logout', component: LogoutComponent},
      { path: 'projects-overview', component: ProjectsOverviewComponent, canActivate:[AuthGuard] },
      { path: 'todos-overview/:projectid', component: TodosOverviewComponent, canActivate:[AuthGuard]},

      { path: '**', redirectTo: '', pathMatch: 'full'}
    ]),
  ],
  providers: [AuthenticationService, ValidateService, AuthGuard, ProjectService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
