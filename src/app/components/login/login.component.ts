import { Component} from '@angular/core';
import { Router } from '@angular/router'
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';
import { ValidationService } from '../../services/validation.service';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends MzBaseModal {

  email: string;
  password: string;

  constructor(private validationService: ValidationService,
              private authenticationService: AuthenticationService,
              private router: Router) { super(); }


  onLoginSubmit(){
    const user = {
      "email": this.email,
      "password": this.password
    }
    this.authenticationService.authenticateUser(user, () => {
      this.router.navigateByUrl('match');
      this.modalComponent.close();
    });
  }
}
