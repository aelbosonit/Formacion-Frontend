import { Component } from '@angular/core';
import { University } from 'src/app/interfaces/universities.interface';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-search-on-type',
  templateUrl: './search-on-type.component.html',
  styleUrls: ['./search-on-type.component.css']
})
export class SearchOnTypeComponent {

  // Lista de países que hay por defecto (en minúsculas)
  defaultCountries: string[] = ['spain', 'united kingdom', 'portugal']; 
  countries: University[] = [];
  activeCountry: string = '';

  // DEBOUNCE Declarations
  suggestedCountries: University[] = [];
  showSuggested: boolean = false;
  // Lo que se va a emitir para buscar resultados ("input")
  term: string = '';

  constructor(private universityService: UniversityService) { }

  /**
   * Al pulsar un botón de país, consume la petición y los muestra
   * @param country 
   */
  activateCountry(country: string) {
    // ***********************
    // Optimización de código
    if (country === this.activeCountry) {return;}
    this.countries = [];
    // ***********************

    //Cuando se pulse otro país, se borran todas las sugerencias que ya hay
    this.suggestedCountries = [];
    // Ahora el país activo será el que pulsemos
    this.activeCountry = country;

    // Consume la petición  y asigna las universidades a nuestro atributo interno
    this.universityService.searchByCountry(this.activeCountry)
      .subscribe((country) => {this.countries = country;});
  }

  /**
   * Muestra las sugerencias que se van introduciendo por teclado
   * @param term 
   */
  suggestions(term: string) {
    // El término de búsqueda será el que recoga el teclado (mediante un evento)
    this.term = term;
    
    // Si el término de búsqueda esta vacío no muestra sugerencias
    if(this.term === ''){ this.showSuggested = false;}
    else {this.showSuggested = true;}

    // Consume la petición
    this.universityService.searchByName(this.term)
      .subscribe(
        countries => this.suggestedCountries = countries,
        (err) => this.suggestedCountries = [] // Si hay un error en la petición no hace nada
      );
  }
}
