import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';
import { ValidationService } from '../../services/validation.service';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends MzBaseModal implements OnInit {

  email: string;
  password: string;

  constructor(private validationService: ValidationService,
              private authenticationService: AuthenticationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { super(); }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const token = params['token'];
      if (token) {
        localStorage.setItem('id_token', token);
        this.router.navigateByUrl('profile');
      }
    });
  }


  onLoginSubmit() {
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
