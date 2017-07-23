import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HelperComponent } from './components/helper/helper.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MatchComponent } from './components/match/match.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { WelcomeBoardComponent } from './components/welcome-board/welcome-board.component';
import { ImageAdjustComponent } from './components/image-adjust/image-adjust.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';

//Serivces
import { AuthenticationService } from './services/authentication.service';
import { BackendService } from './services/backend.service';
import { ValidationService } from './services/validation.service';

//Directives
import { EqualValidateDirective } from './directives/equal-validate.directive';

//External Libraries
import { MaterializeModule } from 'ng2-materialize';
import { ImageCropperModule } from 'ng2-img-cropper';



const appRoutes: Routes = [
  {path:'register', component: RegisterComponent},
  {path:'login/:token', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'image-adjust', component: ImageAdjustComponent},
  {path:'match', component: MatchComponent},
  {path:'profile', component: UserProfileComponent},
  {path:'welcomeboard', component: WelcomeBoardComponent,},
  {path: '', redirectTo: '/welcomeboard', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HelperComponent,
    WelcomeBoardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileCardComponent,
    MatchComponent,
    UserProfileComponent,
    EqualValidateDirective,
    ImageAdjustComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule.forRoot(),
    ImageCropperModule
  ],
  providers: [
  ValidationService, 
  AuthenticationService,
  BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
