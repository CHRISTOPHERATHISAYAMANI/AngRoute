import { Component, OnInit } from '@angular/core';

import { ActivateGuard } from '../activate-guard';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  checked: Boolean;
  constructor(private activateGuard: ActivateGuard) {}

  ngOnInit() {
  }
  submit(formData) {
  }
  checkboxChanged(canActivate) {
    // Update guard when checkbox checked.
    console.log(canActivate);
    this.activateGuard.setCanActivate(canActivate);
 }
 canDeactivate() {
   console.log('login', this.checked);
  return this.checked;
}
}