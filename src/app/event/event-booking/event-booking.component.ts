import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { EventListService } from '../event-list/event-list.service';



@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent implements OnInit {
  id: number;
  event;
  private sub: any;
  inputArr=[];
  
  private numbers: any = [1,2,3,4,5,6];
  submitted : boolean = false;
  disabledValue : boolean = false;
  model:any ={
    username: null,
    email: null,
    phonenumber:null,
    seats: null,
    attendees: { attendeess0: null,attendeess1: null,
      attendeess2: null,attendeess3: null,attendeess4: null, attendeess5: null,}
     };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EventListService
  ) {}

  validSeat(){
    
    if(this.model.seats > this.event.Seats){
      return true;
    }else{
      return false;
    }
  }

  ngOnInit() {
    alert('please refresh the page  to proper data rendering');
    this.getOne().then( res => console.log(res));
    return this.getOne();  
  }

  addBooking(frm: any){   

    if(!frm.valid){
      return false;
    }else{
    this.submitted = true;
    this.disabledValue = true;
    console.log(frm.value);
    return true;
    }
  }
  getOne(){
    this.id = this.route.snapshot.params.id;
    
    console.log(this.id);
    return this.service.getEvent(this.id)
          .then(res=> 
            { 
             for(var i=0 ; i<8 ;i++) {
     
               if(res[i].ID == this.id){
            console.log(res[i]);
              return this.event = res[i];
           }
             }
           },
           (error)=>{
             console.log(error);
           });
      
  }
  nrChanged(value:any){
    this.inputArr = [];
    for(var i = 0; i < value.target.value-1; i++){
      this.inputArr[i] = {neededInfo: 'I am the ' + i + 'Element'};
  }
  
}
  
}
