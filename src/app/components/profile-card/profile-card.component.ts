import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() name:any;
  @Input() description:any;
  @Input() imgUrl:any;

  safeImgUrl:any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }
}

