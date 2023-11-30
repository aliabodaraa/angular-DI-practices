import { Component, Inject, OnInit } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { ApiCallService } from 'src/app/api-call.service';

export const Prev_Heroes = new InjectionToken<string[]>('prev_heroes');
export const ALL_HEROES = new InjectionToken<string[]>('all_heroes');
function getSomeHeroes(num_of_heroes: number) {
  console.log('__________________');
  return (prev_heroes: string[], new_heroes_api_call: ApiCallService) => {
    return getHeroes(prev_heroes, new_heroes_api_call, num_of_heroes);
  };
}
@Component({
  selector: 'app-hero-of-the-month',
  template: `
    <p>hero-of-the-month works!</p>
    <ul *ngFor="let hero of heroes$">
      <li>{{ hero }}</li>
    </ul>
  `,
  styles: [],
  providers: [
    { provide: Prev_Heroes, useValue: ['prev_hero1', 'prev_hero2'] },
    {
      provide: ALL_HEROES,
      useFactory: getSomeHeroes(4),
      deps: [Prev_Heroes, ApiCallService],
    },
  ],
})
export class HeroOfTheMonthComponent implements OnInit {
  public heroes$!: string[];
  constructor(@Inject(ALL_HEROES) private heroes_: string[]) {
    this.heroes$ = this.heroes_;
  }

  ngOnInit(): void {}
}
function getHeroes(
  prev_heroes: string[],
  new_heroes_api_call: ApiCallService,
  num_of_heroes: number
) {
  let new_heroes = new_heroes_api_call.getHeroes();
  console.log(new_heroes.value);
  const all_heroes = [...new_heroes.value, ...prev_heroes];
  return all_heroes.slice(0, num_of_heroes);
}
