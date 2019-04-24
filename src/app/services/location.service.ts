import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface Country {
  id: string;
  name: string;
}

export interface Department {
  id: string;
  name: string;
}

@Injectable()
export class LocationService {


  getCountries(): Observable<Country[]> {
    return of([
      {id: 'ARG', name: 'Argentina'},
      {id: 'BOL', name: 'Bolivia'},
      {id: 'BRA', name: 'Brasil'},
      {id: 'CHI', name: 'Chile'},
      {id: 'COL', name: 'Colombia'},
      {id: 'ECU', name: 'Ecuador'},
      {id: 'PAY', name: 'Paraguay'},
      {id: 'PER', name: 'Perú'},
      {id: 'URU', name: 'Uruguay'},
      {id: 'VEN', name: 'Venezuela'},
    ]);
  }

  getDepartaments(): Observable<Department[]>{
    return of([
      {id: '1', name: 'Artigas'},
      {id: '2', name: 'Canelones'},
      {id: '3', name: 'Cerro Largo'},
      {id: '4', name: 'Colonia'},
      {id: '5', name: 'Durazno'},
      {id: '6', name: 'Flores'},
      {id: '7', name: 'Florida'},
      {id: '8', name: 'Lavalleja'},
      {id: '9', name: 'Maldonado'},
      {id: '10', name: 'Montevideo'},
      {id: '11', name: 'Paysandú'},
      {id: '12', name: 'Río Negro'},
      {id: '13', name: 'Rivera'},
      {id: '14', name: 'Rocha'},
      {id: '15', name: 'Salto'},
      {id: '16', name: 'San José'},
      {id: '17', name: 'Mercedes'},
      {id: '18', name: 'Tacuarembó'},
      {id: '19', name: 'Treinta y Tres'},

    ]);
  }
}
