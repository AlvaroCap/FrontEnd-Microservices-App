import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../models/event';
import { Injectable } from '@angular/core';

//Nuevo
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  private eventUrl = 'http://localhost:8081/event';

  public getEvents() {
    return this.http.get<Event[]>(this.eventUrl);
  }

  public addEvent(event: Event) {
    return this.http.post<Event>(this.eventUrl + "/save", event);
  }

  public deleteEvent(event: Event) {
    return this.http.delete(this.eventUrl + '/delete/' + event.id);
  }
}
