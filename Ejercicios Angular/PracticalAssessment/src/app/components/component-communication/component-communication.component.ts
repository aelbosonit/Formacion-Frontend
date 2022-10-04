import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Subject } from 'rxjs';
import { FamilyService } from '../../services/family.service';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.css']
})
export class ComponentCommunicationComponent {

  parentValue: string = ''; // Valor del componente
  childValue: string = ''; // Variable para recoger lo que el hijo emite
  subject = new Subject<string>(); // Observable

  constructor(private familyService: FamilyService) { }
  
  /**
   * Consume el servicio
   */
  parentUseService() {
    this.parentValue = ''; // Lo deja vacío para que se pueda cambiar y no se concatene
    this.parentValue = 'PARENT ' + this.familyService.useService();
  }

  /**
   * Usa el objeto Subject
   */
  parentUseSubject() {
    this.subject.subscribe(val => {
      this.parentValue = val;
    });

    this.subject.next('PARENT USING SUBJECT');
  }

  /**
   * Cambia el valor actual mostrando el mensaje
   */
  parentUseInput() {
    this.parentValue = '';
    this.parentValue = 'PARENT USING INPUT PROPERTY';
  }

  /**
   * Para onChanges: se va a usar para recoger valores del hijo cuando emita cambios
   * @param val Evento que va a recoger
   */
  parentCatchChildOutput(val: any) {
    this.childValue = ''; // Se deja vacío para que no concatene strings cada vez que se emita algún valor
    this.childValue = val;
    // console.log(val);
  }

}
