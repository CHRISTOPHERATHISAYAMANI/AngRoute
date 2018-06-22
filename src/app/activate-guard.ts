import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ActivateGuard implements CanActivate {
  private can: Boolean = false;
  constructor (private actRoute: ActivatedRoute) {}
  canActivate() {
    console.log('ActivateGuard#canActivate called, can: ', this.can);
     if (!this.can) {
       alert('Activation blocked');
       console.log('canActivate Triggered');
       console.log(this.actRoute.url);
       console.log(this.actRoute.component);
       return false;
     }
    return true;
  }

  setCanActivate(can) {
    this.can = can;
  }
}
