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
        const reader = new FileReader();
        reader.onload = (e : any) => {
            this.imageData = e.target.result;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  onSubmitImage() {


    // locate the file element meant for the file upload.
    const inputElement: HTMLInputElement = this.elementRef.nativeElement.querySelector('#photo');
    const fileCount: number = inputElement.files.length;
    const formData = new FormData();


    this.imageCropper.getCropBlob((blob) => {
      const image = blob;
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
