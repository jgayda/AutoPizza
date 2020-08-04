import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { NewOrderComponent } from './components/new-order/new-order.component';
import { PastOrdersComponent } from './components/past-orders/past-orders.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { RoommatesComponent } from './components/roommates/roommates.component';

import { RoommatesService } from './services/roommates.service';
import { MenuComponent } from './components/menu/menu.component';
import { ReviewOrderComponent } from './components/review-order/review-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NewOrderComponent,
    PastOrdersComponent,
    HomepageComponent,
    HeaderComponent,
    RoommatesComponent,
    MenuComponent,
    ReviewOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatSnackBarModule,
  ],
  providers: [RoommatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
