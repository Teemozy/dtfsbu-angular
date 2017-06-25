import { Component } from '@angular/core';
import { Router } from '@angular/router'
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


  constructor(private validationService: ValidationService,
              private authenticationService: AuthenticationService,
              private router: Router) { super(); }


  public modalOptions: Materialize.ModalOptions = {
    inDuration: 300, 
    outDuration: 300
  };

  onRegisterSubmit(){
    const user = {
      "email": this.email,
      "passwordConfirm": this.passwordConfirm,
      "password": this.password,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "gender": this.gender
    }

    this.validationService.validateRegisterFields(user, (err) => {
      if(err) throw err;
    });

    this.authenticationService.registerUser(user)
      .subscribe(data => {
        if(data.success){
          this.router.navigateByUrl('match');
          this.modalComponent.close();
        }
        else {
          console.log(data.msg);
        }
      }, err =>{
        console.log(err);
      });
    
  }
}

