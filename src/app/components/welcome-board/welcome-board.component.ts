import { Component } from '@angular/core';
import { MzModalService } from 'ng2-materialize';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-welcome-board',
  templateUrl: './welcome-board.component.html',
  styleUrls: ['./welcome-board.component.css']
})
export class WelcomeBoardComponent  {

  constructor(private modalService: MzModalService) { }


  openRegiste(){
    this.modalService.open(RegisterComponent);
  }

}
