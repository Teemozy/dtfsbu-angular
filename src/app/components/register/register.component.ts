import { Component } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends MzBaseModal{


  public modalOptions: Materialize.ModalOptions = {
    inDuration: 300, // Transition in duration
    outDuration: 300, // Transition out duration
  };

}

