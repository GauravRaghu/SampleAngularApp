import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { increment, decrement, reset, initialValue } from '../actions/counter.action';

@Component({
  selector: 'app-my-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.mobile.scss', './counter.component.tablet.scss', './counter.component.desktop.scss']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<any>;

  constructor(private store: Store<{ counter: number }>) {}

  ngOnInit() {
    this.store.dispatch(initialValue());
    this.count$ = this.store.pipe(select('counter'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
