import { Component, OnInit } from '@angular/core';
import { RoommatesService, Roommate } from './../../services/roommates.service';

@Component({
  selector: 'app-roommates',
  templateUrl: './roommates.component.html',
  styleUrls: ['./roommates.component.scss']
})
export class RoommatesComponent implements OnInit {

  roommateList: Roommate[];

  constructor(private roommateService: RoommatesService) { }

  ngOnInit() {
    this.roommateList = this.roommateService.asList;
  }

}
