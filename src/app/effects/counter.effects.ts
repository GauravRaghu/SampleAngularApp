import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ApiService } from '../core/service/api/api.service';
import { environment } from 'src/environments/environment';
import { initialValue, initialValueLoaded } from '../actions/counter.action';

@Injectable()
export class CounterEffects {
  constructor(private apiService: ApiService, private actions$: Actions) {}

  initialCounterValue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initialValue),
      mergeMap(() =>
        this.apiService.get(environment.api.counter).pipe(
          map((counterData: { counter: number }) => initialValueLoaded({ payload: { counter: counterData.counter } })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
