import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FamilyService } from 'src/app/services/family.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['../component-communication.component.css'] // Para que coja el estilo del componente principal padre (../)
})
export class ChildComponent  {
  
  @Input() inputChild: string = ''; // Recoge valor del padre
  @Output() onChildOutput: EventEmitter<string> = new EventEmitter(); // Para emitir valores al padre

  subject = new Subject<string>(); // Observable
  childValue: string = ''; // Valor del componente

  constructor(private familyService: FamilyService) { }

  /**
   * Consume el servicio
   */
  childUseService() {
    this.childValue = 'CHILD ' + this.familyService.useService();
    // IMPORTANTE: cada vez que el valor del hijo cambie se debe emitir
    this.onChildOutput.emit(this.childValue);
  }

  /**
   * Usa el objeto Subject
   */
  childUseSubject() {
    this.subject.subscribe(val => {
      this.childValue = val;
    });

    this.subject.next('CHILD USING SUBJECT');
    // Se emite el valor cada vez que el valor del hijo cambie
    // Si no emitimos ningún valor cuando cambia, el padre no lo va a recibir
    this.onChildOutput.emit(this.childValue);
  }

  /**
   * Emite mensaje informativo para indicar que está emitiendo
   */
  childEmitOutput() {
    this.onChildOutput.emit('CHILD USING OUTPUT EVENT');
  }
  
}
