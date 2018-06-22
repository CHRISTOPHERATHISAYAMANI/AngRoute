import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.css']
})
export class RefereeComponent implements OnInit {
checked: Boolean;
  constructor() { }

  ngOnInit() {
  }
  canDeactivate() {
    return this.checked;
  }
}
