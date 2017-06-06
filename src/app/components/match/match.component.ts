import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  matches: any[];

  constructor() { 
    this.matches =[];
    this.matches.push({name:"Timofej Jermolaev", description: "IM A BEAST", imgUrl:"https://avatars2.githubusercontent.com/u/11130291?v=3&s=460"});
    this.matches.push({name:"Tim's evil clone", description: "I'm an evil beast", imgUrl:"https://avatars2.githubusercontent.com/u/11130291?v=3&s=460"});
  }

  ngOnInit() {
  }

}
