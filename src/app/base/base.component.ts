import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-base',
  template: '<div *ngFor="let hero of heroes$|async">{{hero}}</div>',
  styles: [``],
})
export class BaseComponent implements OnInit {
  public heroes$!: BehaviorSubject<string[]>;
  constructor(private apiCall: ApiCallService) {
    console.log('BaseConstructor');
  }

  ngOnInit() {
    console.log('ngOnInit-BaseComponent');
    this.heroes$ = this.apiCall.getHeroes();
    this.afterApiCall();
  }

  protected afterApiCall() {
    console.log('afterApiCall-BaseComponent');
  }
}
