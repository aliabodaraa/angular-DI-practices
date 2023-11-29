import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-child1',
  template: 'ss<div *ngFor="let hero of heroes$|async">{{hero}}</div>',
  styles: [``],
})
export class Child1Component extends BaseComponent implements OnInit {
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
  ngOnDestroy(): void {
    this.heroes$.unsubscribe();
  }
}
