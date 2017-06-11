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
    this.matches.push({name:"John Doe", description: "I'm an evil beast", imgUrl:"https://images.pexels.com/photos/159655/quarterback-american-football-football-player-passer-159655.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"});
    this.matches.push({name:"This Nigga", description: "I'm an evil beast", imgUrl:"https://images.pexels.com/photos/431962/pexels-photo-431962.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"});
    this.matches.push({name:"Tim's evil clone", description: "I'm an evil beast", imgUrl:"https://images.pexels.com/photos/206590/pexels-photo-206590.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"});
    this.matches.push({name:"Michelle Zhang", description: "I'm an evil beast", imgUrl:"https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"});
    this.matches.push({name:"Monica Kim", description: "I'm an evil beast", imgUrl:"https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"});
    this.matches.push({name:"Delong Dong", description: "I'm an evil beast", imgUrl:"https://images.pexels.com/photos/199102/pexels-photo-199102.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"});
  }

  ngOnInit() {
  }

}
