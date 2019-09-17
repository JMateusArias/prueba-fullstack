import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../players.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number
  form: FormGroup
  isForm: Promise<any>
  constructor(private activeRoute: ActivatedRoute, private service: PlayersService, private fb: FormBuilder) { }

  ngOnInit() {
    this.id = this.activeRoute.params['value']['id']
    if (this.id) {
      this.service.getPlayerById(this.id).subscribe(resp => {
        this.initForm(resp)
      })
    }
  }

  initForm(resp) {
    this.isForm = Promise.resolve(
      this.form = this.fb.group({
        firstname: [resp.first_name],
        lastname: [resp.last_name],
        position: [resp.position]
      })
    )
  }

  submit() {
    this.service.updatePlayer(this.id, this.form.value).subscribe(resp => {
      if(resp){
        alert("Registro actualizado correctamente")
      }
    })
  }

}
