import { Component, OnInit } from '@angular/core';
import { DeactivateGuard } from '../deactivate-guard';


@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
checked: Boolean;
  constructor() { }

  ngOnInit() {
  }
  canDeactivate() {
    return this.checked;
  }

  checkboxChanged(checked) {
    console.log('Deactive Clicked');
    this.checked = checked;
  }
}
