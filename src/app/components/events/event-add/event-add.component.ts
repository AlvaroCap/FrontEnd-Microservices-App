import { Component, OnInit } from '@angular/core';

import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss'],
})
export class EventAddComponent implements OnInit {
  event: Event = new Event();
  constructor(
    private router: Router,
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  async addEvent(): Promise<void> {
    await this.eventService.addEvent(this.event).subscribe((data) => {
      this.router.navigate(['/event-list']);
    });
  }
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.eventService.getEventsById(this.id).subscribe((data) => {
        this.event.id = data.id;
        this.event.name = data.name;
        this.event.shortDesc = data.shortDesc;
        this.event.price = data.price;
        this.event.capacity = data.capacity;
      });
    }
  }

  updateEvent(): void {
    this.eventService.updateEvent(this.event).subscribe((data) => {});
  }
}
