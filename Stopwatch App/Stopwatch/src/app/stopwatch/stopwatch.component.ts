import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  start_clock = "";
  startDate = new Date('2020-03-08 00:00:00');
  time_lapse: any;
  myDate: any;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.start_clock = "Hello";
    this.myDate = timer(1000, 1000)
      .pipe(
        map((x: number) => {
          const newDate = new Date(this.startDate.getTime());
          newDate.setSeconds(newDate.getSeconds() + x);
          return newDate;
        })
      ).subscribe(t => this.time_lapse = t);

  }

  stop() {
    this.myDate.unsubscribe();
  }

}
