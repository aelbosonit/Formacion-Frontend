import { Component} from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styleUrls: ['./display-hide.component.css']
})
export class DisplayHideComponent{

  show: boolean = false; // Para saber si vamos a mostrar o no
  value: string = 'Enseñar'; // Valor de texto del botón

  /**
   * Cambiar el valor de show cada vez que se pulsa.
   * Comprueba si el texto del botón es el correcto.
   */
  displayAndHide() {
    this.show = !this.show; // Valor opuesto
    if(this.value === 'Enseñar') { // Cuando se pulse
      this.value = 'Esconder'; // El valor va a cambiar
    } else if(this.value ==='Esconder') { // Cuando se vuelva a pulsar
      this.value = 'Enseñar'; // Lo mismo
    }
  }
}
