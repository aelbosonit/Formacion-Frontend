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

  /**
   * * Cuando se pulsa, llama a una función recursiva que va sumando valores según ciertos parámetros
   */
  start() {
    this.counter.count = true;
    this.counting();
  }

  /**
   * ! RECURSIVIDAD
   * @param value Es el valor que vamos a volver a sumar una y otra vez
   */
  counting() {

    setTimeout(() => {
      if(this.counter.count && this.counter.countUp) { // Si se cuenta para arriba
        this.counter.value += this.counter.step; // Súmalo con los saltos (step) que haya en el objeto
        this.counting(); // RECURSIVIDAD

      } else if(this.counter.count && !this.counter.countUp) { // Si se cuenta para abajo
        this.counter.value -= this.counter.step; // Réstalo con los saltos (step) que haya en el objeto
        this.counting(); // RECURSIVIDAD
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

  //TODO formControl -> coger valor de input cada vez que cambie para set y step

}
