import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn:'root'
})
export class EventListService {
  Id;
   constructor(private httpService: HttpClient ) { }

 getEvents() {
    return this.httpService.get('../../../assets/event.json');
  }
  
  getEvent(Id): Promise<any>{
  
       return this.httpService.get('../../../assets/event.json/').toPromise();
      
  }
}