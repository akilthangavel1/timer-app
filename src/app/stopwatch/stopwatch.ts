import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.css',
})
export class Stopwatch {
  time = signal(0);
  interval: any = null;

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.time.update((v) => v + 1);
      }, 1000);
    }
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  reset() {
    this.stop();
    this.time.set(0);
  }
}