import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  matches: any[];

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.backendService.getMatches().subscribe( data => {
      this.matches = data;
    }, err => console.log(err));
  }

}
