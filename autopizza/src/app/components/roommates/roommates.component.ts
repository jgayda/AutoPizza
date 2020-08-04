import { Component, OnInit } from '@angular/core';
import { RoommatesService, Roommate } from './../../services/roommates.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private roommateService: RoommatesService,
    private snackBar: MatSnackBar
  ) {}

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
    this.roommateWidth = 100 / this.roommateList.length - padding;
  }

  isIncludedInOrder(roommate: Roommate): boolean {
    return this.roommateToOrderMap.get(roommate);
  }

  toggleIncludeInOrder(roommate: Roommate): void {
    const isIncluded = this.roommateToOrderMap.get(roommate);
    const snackbarDurationMs = 2000;
    const message = isIncluded
      ? `Removed ${roommate.firstName} from the order`
      : `Added ${roommate.firstName} to the order`;
    this.roommateToOrderMap.set(roommate, !isIncluded);
    this.snackBar.open(message, 'Dismiss', { duration: snackbarDurationMs });
  }
}
