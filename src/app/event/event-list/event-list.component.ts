import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { EventListService } from './event-list.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})

export class EventListComponent{
  arrEvents: string [];

constructor( private eventListService: EventListService,
  private router: Router , private route: ActivatedRoute){}

ngOnInit() {
  this.eventListService.getEvents().subscribe(
    data => {
      this.arrEvents = data as string [];	 // FILL THE ARRAY WITH DATA.
       },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );

}
btnClick(ID:number){
 // console.log(ID);
 
  this.router.navigate(['/event-booking', ID]);
}
}