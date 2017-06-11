import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MatchComponent } from './components/match/match.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

import { AuthenticationService } from './services/authentication.service';
import { ValidationService } from './services/validation.service';

import { MaterializeModule } from 'ng2-materialize';



const appRoutes: Routes = [
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'match', component: MatchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProfileCardComponent,
    MatchComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule.forRoot()
  ],
  providers: [
  ValidationService, 
  AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
