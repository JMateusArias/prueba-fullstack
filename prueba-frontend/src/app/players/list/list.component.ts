import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players: any
  form: FormGroup
  constructor(private service: PlayersService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.getData()
    this.initForm()
  }

  getData(): void {
    this.players = this.service.getPlayers()
  }

  initForm() {
    this.form = this.fb.group({
      search: ['']
    })
  }

  searchFirstName(): void {
    this.players = this.service.findPlayer(this.form.value.search)
  }

  detail(id):void {
    this.router.navigateByUrl(`/players/${id}`)
  }

}
