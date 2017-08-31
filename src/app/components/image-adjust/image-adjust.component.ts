import { Component, ElementRef, OnInit } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';
// import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-image-adjust',
  templateUrl: './image-adjust.component.html',
  styleUrls: ['./image-adjust.component.css']
})
export class ImageAdjustComponent extends MzBaseModal implements OnInit  {

  imageData: any;
  // cropperSettings: CropperSettings;
  
  
  constructor(private backendService: BackendService,
              private elementRef: ElementRef) { super(); 

    // this.cropperSettings = new CropperSettings();
    // this.cropperSettings.noFileInput = true;
    
    // this.cropperSettings = new CropperSettings();
    // this.cropperSettings.width = 300;
    // this.cropperSettings.height = 300;
    // this.cropperSettings.croppedWidth = 300;
    // this.cropperSettings.croppedHeight = 300;
    // this.cropperSettings.canvasWidth = 300;
    // this.cropperSettings.canvasHeight = 300;
    this.imageData = {};
  }

  onFileChanged(fileInput){
    if (fileInput.target.files && fileInput.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (e : any) => {
            this.imageData = e.target.result;
        }
        reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  onSubmitImage(){

    //    //locate the file element meant for the file upload.
    // let inputElement: HTMLInputElement = this.elementRef.nativeElement.querySelector('#photo');
    // let fileCount: number = inputElement.files.length;
    // let formData = new FormData();
    // //formData.append('userPhoto', inputElement.files.item(0));

    // console.log(this.data);
    // console.log(inputElement.files.item(0));
    // formData.append('userPhoto', this.data);
    // this.backendService.updateProfilePhoto(formData).subscribe(data =>{
    //   alert(data.msg);
    // });

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

  ngOnInit() {

  }
}
