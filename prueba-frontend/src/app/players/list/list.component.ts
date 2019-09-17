import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players: any
  constructor(private service: PlayersService) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.players = this.service.getPlayers()
  }

}
