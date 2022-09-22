import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { University } from '../interfaces/universities.interface';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio de ejercicio "Search on Type" para peticiones a la API
 */
export class UniversityService {

  private apiUrl: string = 'http://universities.hipolabs.com/search';
  private country: string = '';

  constructor(private http: HttpClient) { }

  searchByCountry(country: string) {
    this.country = country;
    const url = `${this.apiUrl}?country=${country}`;
    return this.http.get<University[]>(url);
  }

  searchByName(name: string) {
    const url = `${this.apiUrl}?country=${this.country}&name=${name}`;
    return this.http.get<University[]>(url);
  }
}
