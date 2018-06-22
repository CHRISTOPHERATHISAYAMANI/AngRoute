import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { RefereeComponent } from './referee/referee.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ActivateGuard } from './activate-guard';
import { DeactivateGuard } from './deactivate-guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    RefereeComponent,
    ScheduleComponent,
    SponsorsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [ActivateGuard, DeactivateGuard, RefereeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
