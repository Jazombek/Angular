import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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

  heroes!: Hero[];

  selectedHero!: Hero; // nie jak w tutorialu? "definite assignment assertion"
 // nie jak w tutorialu?



  constructor(private heroService: HeroService) {

}
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

ngOnInit() {
  this.getHeroes();
}

onSelect(hero: Hero): void {
  this.selectedHero = hero;
   }

}

