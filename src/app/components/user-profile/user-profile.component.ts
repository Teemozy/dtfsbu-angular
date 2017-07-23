import { Component, ElementRef, Input, OnInit  } from '@angular/core';
import { Router } from '@angular/router'
import { ValidationService } from '../../services/validation.service';
import { BackendService } from '../../services/backend.service';
import { ImageAdjustComponent } from '../image-adjust/image-adjust.component';

import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { MzModalService } from 'ng2-materialize';


let URL = 'http://localhost:3000/users/profile'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  constructor(private backendService: BackendService,
              private elementRef: ElementRef,
              private modalService: MzModalService){ 

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth =100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 300;
    this.cropperSettings.canvasHeight = 300;

    this.data = {};
  };

  name:any;
  description:any;
  imgUrl:any;

  data: any;
  cropperSettings: CropperSettings;




  ngOnInit(){
    this.backendService.getProfile().subscribe(data =>{
      const user = data.user

      this.name = user.firstName + ' ' + user.lastName;
      this.imgUrl = 'http://localhost:3000/' + user.imgUrl;
      console.log(user);

    });
  }

  openImageCropper(){
    this.modalService.open(ImageAdjustComponent);
  }

  onUpdateSubmit(){
     //locate the file element meant for the file upload.
    let inputElement: HTMLInputElement = this.elementRef.nativeElement.querySelector('#photo');
    let fileCount: number = inputElement.files.length;
    let formData = new FormData();

    console.log(inputElement.files.item(0));

    if (fileCount > 0) { 
        formData.append('userPhoto', inputElement.files.item(0));
        this.backendService.updateProfilePhoto(formData).subscribe(data =>{
          alert(data.msg);
        });   
    }
  }
}
  
