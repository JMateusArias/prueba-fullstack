import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PlayersRoutingModule } from './players-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    PlayersRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class PlayersModule { }
