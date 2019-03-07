export class Event {
  eno: number;
  title: string;
  description: string;
  date_creation: Date;

  constructor(title: string, description: string, date: Date){
    this.title = title;
    this.description = description;
    this.date_creation = (date === null) ? new Date() : date;
  }
}
