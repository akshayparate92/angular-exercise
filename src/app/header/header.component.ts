
import { Component ,OnInit,OnDestroy} from '@angular/core';
import { EventListService } from '../event/event-list/event-list.service';
import {  ActivatedRoute, Router, RouterStateSnapshot, RoutesRecognized, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component
({
selector: 'app-header',
templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy{
	
	id;
	event;
	sub;
	constructor(private service: EventListService, private route: ActivatedRoute, private router: Router){
		
	}
	
	ngOnInit(){
		
		return this.getEventName();
		
	}
	getEventName(){
		this.sub= this.router.events.subscribe(val => {
			if (val instanceof RoutesRecognized) {
			  this.id = val.state.root.firstChild.params.id;
			  
			  }
		  });
		  
		 return  this.service.getEvent(this.id)
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
	ngOnDestroy(){
		this.event.unsubscribe();
		return;
	}

	}
