import { Component, OnInit } from '@angular/core';
import { RoommatesService, Roommate } from './../../services/roommates.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-roommates',
  templateUrl: './roommates.component.html',
  styleUrls: ['./roommates.component.scss'],
})
export class RoommatesComponent implements OnInit {
  roommateList: Roommate[];
  roommateToOrderMap: Map<Roommate, boolean> = new Map();
  roommateWidth: number;
  roommatePadding: 2;

  constructor(private roommateService: RoommatesService) {}

  ngOnInit() {
    this.roommateList = this.roommateService.asList;
    for (const roommate of this.roommateList) {
      this.roommateToOrderMap.set(roommate, false);
      console.log(`Setting ${roommate.firstName} to false...`);
    }
    this.generateCssDimensions();
  }

  generateCssDimensions() {
    const padding = this.roommatePadding * this.roommateList.length * 2;
    this.roommateWidth = (100 / this.roommateList.length) - padding;
  }

  isIncludedInOrder(roommate: Roommate): boolean {
    return this.roommateToOrderMap.get(roommate);
  }

  toggleIncludeInOrder(roommate: Roommate): void {
    const isIncluded = this.roommateToOrderMap.get(roommate);
    this.roommateToOrderMap.set(roommate, !isIncluded);
  }
}
