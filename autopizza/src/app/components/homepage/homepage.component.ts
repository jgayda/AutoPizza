import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  backgroundImageUrl = '../../../assets/pizza-wallpaper.jpg';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToNewOrderPage() {
    this.router.navigate(['new-order']);
  }

  navigateToPastOrdersPage() {
    this.router.navigate(['past-orders']);
  }

}
