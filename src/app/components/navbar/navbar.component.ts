import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ng2-materialize';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

enum modalIndex  {
    register  = 0,
    login     = 1,
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private modalService: MzModalService) { }

  ngOnInit() {

  }

  openServiceModal(index) {
    switch(index){
      case modalIndex.register:
        this.modalService.open(RegisterComponent);
        break;
      case modalIndex.login:
        this.modalService.open(LoginComponent);
        break;
    }
    
  }

}
