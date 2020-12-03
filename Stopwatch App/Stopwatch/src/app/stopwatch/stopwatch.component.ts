import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  clock_text = "start";
  startDate = new Date('2020-03-08 00:00:00');
  time_lapse: any;
  myDate: any;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.clock_text = "stopOrClear";
    this.myDate = timer(1000, 1000)
      .pipe(
        map((x: number) => {
          const newDate = new Date(this.startDate.getTime());
          newDate.setSeconds(newDate.getSeconds() + x);
          return newDate;
        })
      ).subscribe(t => this.time_lapse = t);
        //How to stop the timer?
  }

  stop() {
    this.clock_text = "resumeOrClear";
    this.myDate.unsubscribe();
    console.log(this.time_lapse.getTime());
  }

  resume() {
    this.clock_text = "stopOrClear";
    this.myDate = timer(1000, 1000)
      .pipe(
        map((x: number) => {
          const newDate = new Date(this.time_lapse.getTime());
          newDate.setSeconds(newDate.getSeconds() + x);
          return newDate;
        })
      ).subscribe(t => this.time_lapse = t);
  }

  clear() {
    this.clock_text = "start";
    this.myDate.unsubscribe();
    this.time_lapse = new Date('03-03-2003 00:00:00');
  }

}
