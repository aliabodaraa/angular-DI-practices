import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ApiCallService } from '../../api-call.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child1',
  template: `
    <h1>Edited Heros</h1>
    <div *ngFor="let hero of heroes$ | async">{{ hero }}</div>
  `,
  styles: [``],
})
export class Child1Component extends BaseComponent implements OnInit {
  public heroes$!: BehaviorSubject<string[]>; //we can override the Observable type with one of the its subtypes (here is BehaviorSubject)
  constructor(apiCall: ApiCallService) {
    super(apiCall);
    console.log('Child1Constructor');
  }
  ngOnInit() {
    //when ngOnInit exist on child the ngOnInit On parent not invoke until we invoke it manually
    super.ngOnInit();
    console.log('ngOnInit-Child1Component');
  }

  protected override afterApiCall() {
    console.log('afterApiCall-Child1Component');
    this.heroes$.next(
      this.heroes$.getValue().map((hero) => hero + ' | Edited')
    );
  }
}
