import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PlayersRoutingModule } from './players-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    PlayersRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class PlayersModule { }
