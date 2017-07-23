import { Component, ElementRef, Input, ViewChild, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {

  @Input('inputImage') public inputImage:any;
  @ViewChild('imageCanvas') public canvas;

  context: CanvasRenderingContext2D;
  
  constructor() { }

  ngAfterViewInit() {
    this.canvas = this.canvas.nativeElement;
    this.context = this.canvas.getContext("2d");
    this.tick();
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes.inputImage){
      var image = new Image;
      image.src = changes.inputImage.currentValue;
      image.onload = () => {
        this.setImage(image);
      }
    }
  }

  tick(){
    requestAnimationFrame(()=> {
      this.tick()
    });
  }

  public setImage(image:HTMLImageElement) {
    var ctx = this.context
    var imgRatio = image.width / image.height;
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.width ); 
  }

  



  ngOnInit() {

  }

}
