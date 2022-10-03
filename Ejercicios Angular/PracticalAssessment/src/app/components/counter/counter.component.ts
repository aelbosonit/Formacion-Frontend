import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  setup: string[] = ['start', 'pause', 'reset'];
  count: string[] = ['count up', 'coutn down'];
  
  counter =  {
    "count": false,
    "countUp": true,
    "value": 0,
    "speed": 1000,
    "step": 2
  }

  start() {
    this.counter.count = true;
    this.counting(this.counter.value);
  }

  /**
   * RECURSIVIDAD
   * @param value Es el valor que vamos a volver a sumar una y otra vez
   */
  counting(value: number) {

    setTimeout(() => {
      if(this.counter.count && this.counter.countUp) { // Si se cuenta para arriba
        this.counter.value += this.counter.step;
        this.counting(this.counter.value); // RECURSIVIDAD

      } else if(this.counter.count && !this.counter.countUp) { // Si se cuenta para abajo
        this.counter.value -= this.counter.step;
        this.counting(this.counter.value); // RECURSIVIDAD
      }
    }, 1000);
    
  }
  
  pause() {
    this.counter.count = false;
  }

  reset() {
    this.counter.value = 0;
  }

  countUp() {
    this.counter.countUp = true;
  }

  countDown() {
    this.counter.countUp = false;
  }

  // TODO formControl -> coger valor de input cada vez que cambie
  setTo() {
    this.counter.value;
  }

  // TODO formControl -> coger valor de input cada vez que cambie
  step() {
    this.counter.step;
  }

}
