import { Component, ElementRef, Input  } from '@angular/core';
import { Router } from '@angular/router'
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';
import { ValidationService } from '../../services/validation.service';
import { BackendService } from '../../services/backend.service';

//TEMP
import { Http, Headers } from '@angular/http';

let URL = 'http://localhost:3000/users/profile'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent extends MzBaseModal {

  constructor(private backendService: BackendService,
              private elementRef: ElementRef,
              private http:Http ){ super(); };

  onUpdateSubmit(){
     //locate the file element meant for the file upload.
    let inputElement: HTMLInputElement = this.elementRef.nativeElement.querySelector('#photo');
    let fileCount: number = inputElement.files.length;
    let formData = new FormData();


    if (fileCount > 0) { 
        formData.append('userPhoto', inputElement.files.item(0));
        // this.backendService.updateProfile(formData).subscribe(data =>{
        //   alert(data.msg);
        // });

        let headers = new Headers();
        headers.append('token', localStorage.getItem('id_token'));
        //headers.append('Content-Type', 'application/json');
        this.http.post(URL, formData, {headers: headers}).map(res => res.json()).subscribe(data => {
          alert(data.msg);
        });      
    }
  }
}
  
