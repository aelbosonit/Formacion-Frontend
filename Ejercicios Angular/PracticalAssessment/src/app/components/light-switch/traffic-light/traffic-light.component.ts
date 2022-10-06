import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['../light-switch.component.css']
})
export class TrafficLightComponent {

  @Input() inputActive: boolean = false; // Recoge valor de padre -> si el semáforo está activo
  @Input() inputColor: string = ''; // Recoge valor de padre -> el color seleccionado

}
