import { Component } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent  {

  active: boolean = false; // Variable para capturar si el semáforo está activo (del hijo)
  selectedColor: string = ''; // Para capturar que color está activo (lo emite el hijo también)

  /**
   * Captura el valor del hijo cuando emite un valor
   * @param value 
   */
  catchActiveTraffic(value: any) {
    this.active = value;
  }

  /**
   * Captura el valor del hijo cuando emite un valor
   * @param value 
   */
  catchSelectedColor(value: any) {
    this.selectedColor = '';
    this.selectedColor = value;
  }

}
