import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, initialValueLoaded } from '../actions/counter.action';

export const initialState = { counter: 0 };

const counterReducerImpl = createReducer(
  initialState,
  on(initialValueLoaded, (state, { payload }) => {
    return { ...state, counter: payload.counter };
  }),
  on(increment, state => {
    return {
      ...state,
      counter: state.counter + 1
    };
  }),
  on(decrement, state => {
    return {
      ...state,
      counter: state.counter - 1
    };
  }),
  on(reset, state => {
    return { ...state, counter: 0 };
  })
);

export function counterReducer(state, action) {
  return counterReducerImpl(state, action);
}
