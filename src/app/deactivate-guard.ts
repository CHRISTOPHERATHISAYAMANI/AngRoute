import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginComponent } from './login/login.component';

@Injectable()
export class DeactivateGuard  {
  canDeactivate(component: LoginComponent ) {
    const can = component.canDeactivate();
    console.log('DeactivateGuard#canDeactivate called, can: ', can);
    if (!can) {
      alert('Deactivation blocked');
      return false;
    }

    return true;
  }
  }

