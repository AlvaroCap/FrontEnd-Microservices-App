import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from '../models/event';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Nuevo
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventUrl = 'http://localhost:8081/event';
  constructor(private http: HttpClient) {}


  //Listado de todos los eventos
  public getEvents() {
    return this.http.get<Event[]>(this.eventUrl);
  }

  //Seleccionar un evento por su ID
  public getEventsById(id: any) {
    return this.http.get<Event>(this.eventUrl + '/' + id);
  }

  //Agregar un nuevo evento
  public addEvent(event: Event) {
    return this.http.post<Event>(this.eventUrl + '/save', event);
  }

    //Función en service para modificar el usuario
    public updateEvent(event: Event) {
      return this.http.put<Event>(this.eventUrl, event);
    }

  // modifyEvent(event: any): Observable<any> {
  //   let result: Observable<Object>;
  //   console.log(event.id + "Es el ID que trae el formulario");
    
  //   if (event.id) {
  //     console.log("Pasa por PUT");
  //     result = this.http.put(event.id, event);
      
  //   } else {
  //     console.log("Pasa por POST");
  //     result = this.http.post(this.eventUrl, event);
      
  //   }

  //   return result;
  // }

  public deleteEvent(event: Event) {
    return this.http.delete(this.eventUrl + '/delete/' + event.id);
  }
}
