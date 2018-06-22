import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RefereeComponent } from './referee/referee.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

import {  DeactivateGuard} from './deactivate-guard';
import { ActivateGuard } from './activate-guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'players', component: PlayersComponent, pathMatch: 'full'},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'referee', component: RefereeComponent},
  {path: 'sponsor', component: SponsorsComponent, canActivate: [ActivateGuard],
  canDeactivate: [DeactivateGuard]},
  { path: 'showDetails/:jersyNo', component: PlayersComponent },
  { path: 'showPlayerName/:playerName', component: PlayersComponent },
  {path: '**', redirectTo: 'login'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
