import { Component, OnInit } from '@angular/core';
import { Roommates } from './../../roommate-data/roommateList';

@Component({
  selector: 'app-roommates',
  templateUrl: './roommates.component.html',
  styleUrls: ['./roommates.component.scss']
})
export class RoommatesComponent implements OnInit {

  constructor(roommates: Roommates) { }

  ngOnInit(): void {
  }

}
