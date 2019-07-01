import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './event/event-list/search.pipe';
import { EventBookingComponent } from './event/event-booking/event-booking.component';
import { EventListService} from './event/event-list/event-list.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventListComponent,
    SearchPipe,
    EventBookingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [EventListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
