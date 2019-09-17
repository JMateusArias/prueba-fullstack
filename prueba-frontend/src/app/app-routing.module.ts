import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: 'faq', component: FaqComponent},
  { path: 'players', loadChildren: './players/players.module#PlayersModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
