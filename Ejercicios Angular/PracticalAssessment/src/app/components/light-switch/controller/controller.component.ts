import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['../light-switch.component.css']
})
export class ControllerComponent implements OnInit {

  @Output() onActiveTraffic: EventEmitter<boolean> = new EventEmitter(); // Cuando se active el semáforo
  @Output() onSelectedColor: EventEmitter<string> = new EventEmitter(); // Cuando se seleccione el color

  active: boolean = false;
  selectedColor: string = 'rojo'; //! Por defecto está en rojo porque es el primer valor

  /**
   * * Cuando se inicie el componente, manda el valor 'rojo'
   */
  ngOnInit(): void {
    this.onSelectedColor.emit(this.selectedColor);
  }

  /**
   * Cada vez que se de click, cambia al valor opuesto (true, false, true, false...)
   */
  activateTraffic() {
    this.active = !this.active;
    this.onActiveTraffic.emit(this.active); // Hay que emitir siempre el valor cada vez que cambia
  }

  /**
   * Método que recoge el valor del color seleccionado en la lista
   * @param value -> colores.value
   */
  onSelected(value: string) {
    this.selectedColor = value;
    this.onSelectedColor.emit(this.selectedColor);
  }

}
