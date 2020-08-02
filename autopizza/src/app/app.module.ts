import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { Roommates } from './roommate-data/roommates';

import { NewOrderComponent } from './components/new-order/new-order.component';
import { PastOrdersComponent } from './components/past-orders/past-orders.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { RoommatesComponent } from './components/roommates/roommates.component';

@NgModule({
  declarations: [
    AppComponent,
    NewOrderComponent,
    PastOrdersComponent,
    HomepageComponent,
    HeaderComponent,
    RoommatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
  ],
  providers: [Roommates],
  bootstrap: [AppComponent]
})
export class AppModule { }
