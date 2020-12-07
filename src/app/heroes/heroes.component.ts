import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Lux Anna'
  };

  heroes = HEROES;
  selectedHero!: Hero; // nie jak w tutorialu? "definite assignment assertion"
 // nie jak w tutorialu?



  constructor() {

}

ngOnInit() {
}

onSelect(hero: Hero): void {
  this.selectedHero = hero;
   }

}

