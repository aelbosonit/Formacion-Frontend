import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio que devuelve un mensaje diciendo que lo están usando
 */
export class FamilyService {

  useService(): string {
    return 'USING SERVICE';
  }
}
