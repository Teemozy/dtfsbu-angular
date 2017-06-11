import { Component } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';
import { ValidationService } from '../../services/validation.service';
import { AuthenticationService } from '../../services/authentication.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends MzBaseModal{


  email: string;
  password: string;
  passwordConfirm: string;
  firstName: string;
  lastName: string;
  gender: any; 



  //TODO FIX THIS BULLSHIT
  constructor(private validationService: ValidationService,
              private authenticationService: AuthenticationService) { super(); }


  public modalOptions: Materialize.ModalOptions = {
    inDuration: 300, // Transition in duration
    outDuration: 300, // Transition out duration
  };

  onRegisterSubmit(){
    const user = {
      "email": this.email,
      "password": this.password,
      "passwordConfirm": this.passwordConfirm,
      "firstName": this.firstName,
      "lastName": this.lastName,
    }

    this.validationService.validateRegisterFields(user, function(err){
      if(err) throw err;
    })
  }
}

