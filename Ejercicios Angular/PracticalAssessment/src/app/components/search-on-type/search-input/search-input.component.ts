import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styles: [
    `
    input {
      padding: 0.85em;
      border-color: #2980B9;}
    `
  ]
})
export class SearchInputComponent implements OnInit {

  // DEBOUNCE Declarations
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();
  // Lo que se va a buscar en el input
  term: string = '';

  // Cuando se inicie el componente
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(100)) // Trae los valores en 100ms
      .subscribe(value => {
        this.onDebounce.emit(value); // Y emite el valor
      })
  }

  /**
   * Coge cada valor a medida que se va escribiendo letra por letra
   * @param event 
   */
  pressedKey(event: any) {
    this.debouncer.next(this.term); 
  }

}
