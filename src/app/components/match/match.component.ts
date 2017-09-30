import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  matches: any[];
  rows: any[];


  constructor( private backendService: BackendService ) {}

  ngOnInit() {
    this.backendService.getMatches().subscribe( data => {
      this.matches = data;

      for (var index = 0; index < (this.matches.length / 4); index++) {
        this.rows.push([this.matches[index], this.matches[index +1 ], this.matches[index +2 ], this.matches[index + 3] ]);
      }
      

    }, err => console.log(err));
  }



}
