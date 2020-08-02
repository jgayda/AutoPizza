import { HomepageComponent } from './components/homepage/homepage.component';
import { PastOrdersComponent } from './components/past-orders/past-orders.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'new-order',
    component: NewOrderComponent,
  },
  {
    path: 'past-orders',
    component: PastOrdersComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
