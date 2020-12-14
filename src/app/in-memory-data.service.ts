import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Minto' },
      { id: 12, name: 'Aviator' },
      { id: 13, name: 'Branze' },
      { id: 14, name: 'Caitline' },
      { id: 15, name: 'Mountain' },
      { id: 16, name: 'Rusty Mech' },
      { id: 17, name: 'Zigi' },
      { id: 18, name: 'Porfessor' },
      { id: 19, name: 'Kay' },
      { id: 20, name: 'Ja Nai' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}