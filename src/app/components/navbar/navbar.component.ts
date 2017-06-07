import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ng2-materialize';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: MzModalService) { }

  ngOnInit() {

  }

  openServiceModal() {
    this.modalService.open(RegisterComponent);
  }

}
