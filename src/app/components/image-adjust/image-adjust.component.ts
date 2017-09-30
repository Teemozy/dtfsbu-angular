import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-image-adjust',
  templateUrl: './image-adjust.component.html',
  styleUrls: ['./image-adjust.component.css']
})
export class ImageAdjustComponent implements OnInit  {

  imageData: any;
  @ViewChild('imageCropper') imageCropper;

  
  
  constructor(private backendService: BackendService,
              private elementRef: ElementRef) { 
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

    
    // // //locate the file element meant for the file upload.
    // let inputElement: HTMLInputElement = this.elementRef.nativeElement.querySelector('#photo');
    // let fileCount: number = inputElement.files.length;
    // let formData = new FormData();
    // formData.append('userPhoto', inputElement.files.item(0));

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
   
    this.imageCropper.getCropBlob((blob) =>{
      let image = blob; 
      if (fileCount > 0) { 
        formData.append('userPhoto', image);
        this.backendService.updateProfilePhoto(formData).subscribe(data =>{
          alert(data.msg);
        });   
      }
    });
    

  }


  ngOnInit() {

  }
}
