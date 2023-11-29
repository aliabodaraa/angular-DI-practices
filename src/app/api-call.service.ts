import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor() {}
  getHeroes() {
    let sub = new BehaviorSubject<string[]>([]);
    sub.next(['Ali', 'Ramadan', 'Abodaraa']);
    return sub;
  }
}
