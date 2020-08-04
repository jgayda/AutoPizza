import { Roommate } from '../../services/roommates.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() roommate: Roommate;

  firstName: string;

  constructor() { }

  ngOnInit(): void {
    this.firstName = this.roommate.firstName;
  }

}
