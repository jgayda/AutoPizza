import { Component, OnInit } from '@angular/core';
import { Roommates, Roommate } from '../../roommate-data/roommates';

@Component({
  selector: 'app-roommates',
  templateUrl: './roommates.component.html',
  styleUrls: ['./roommates.component.scss']
})
export class RoommatesComponent implements OnInit {

  roommateList: Roommate[];

  constructor(private roommates: Roommates) { }

  ngOnInit() {
    this.roommateList = this.roommates.asList;
  }

}
