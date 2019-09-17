import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PlayersRoutingModule } from './players-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    PlayersRoutingModule,
    CommonModule
  ]
})
export class PlayersModule { }
