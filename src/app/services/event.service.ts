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
}
