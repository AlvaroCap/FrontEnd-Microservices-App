import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss'],
})
export class EventAddComponent {
  event: Event = new Event();

  constructor(private router: Router, private eventService: EventService) {}

  addEvent(): void {
    this.eventService.addEvent(this.event).subscribe((data) => {
      alert('Se ha introducido con exito un nuevo Evento');
    });
  }
}
