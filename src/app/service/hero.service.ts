import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = [
    {
      id: 1,
      name: "Deadpool",
      superPower: "love",
      address: "San Francisco"
    },
    {
      id: 2,
      name: "Dopinder",
      superPower: "driver",
      address: "San Francisco"
    },
    {
      id: 3,
      name: "Ajax",
      superPower: "extrastrong",
      address: "San Francisco"
    },
    {
      id: 4,
      name: "Tiny",
      superPower: "nice",
      address: "San Francisco"
    },
    {
      id: 5,
      name: "Angeldust",
      superPower: "invisible",
      address: "San Francisco"
    },
  ]

  constructor() { }

  getAll(): Hero[] {
    return this.heroes;
  }

}

