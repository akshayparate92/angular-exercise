import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventBookingComponent } from './event/event-booking/event-booking.component';
import { EventListComponent } from './event/event-list/event-list.component';

const routes: Routes = [

  { path: '' , redirectTo: '/event-list', pathMatch: 'full'},
   { path: 'event-list' , component: EventListComponent },
  { path: 'event-booking/:id' , component: EventBookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
