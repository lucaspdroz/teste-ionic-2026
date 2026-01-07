import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person.model'

@Injectable({
  providedIn: 'root',
})
export class GetStarwarsPeople {
  private http = inject(HttpClient);
  private url = 'https://swapi.info/api/people';

  getPeople() {
    return this.http.get<Person[]>(this.url);
  }
}
