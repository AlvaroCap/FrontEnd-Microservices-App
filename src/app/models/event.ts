export class Event {
  // private Long id;
  // String name;
  // String shortDesc;
  // String longDesc;
  // Date date;
  // LocalDateTime schedule;
  // double price;
  // String siteName;
  // String siteCity;
  // int capacity;
  // String genre;
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  date: string;
  schedule: string;
  price: number;
  siteName: string;
  siteCity: string;
  capacity: number;
  genre: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.shortDesc = '';
    this.longDesc = '';
    this.date = '';
    this.schedule = '';
    this.price = 0;
    this.siteName = '';
    this.siteCity = '';
    this.capacity = 0;
    this.genre = '';
  }
}
