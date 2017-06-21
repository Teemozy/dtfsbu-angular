import { Component} from '@angular/core';
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
              private authenticationService: AuthenticationService) { super(); }


  onLoginSubmit(){
    const user = {
      "email": this.email,
      "password": this.password
    }

    this.authenticationService.authenticateUser(user).subscribe( data => {
      if (data.success){
        console.log('Logged in using token:' + data.token);
        this.authenticationService.saveUserData(data.token, user);
        this.modalComponent.close();
      }
    });
  }
}
