import { Actions, Effect, ofType }  from '@ngrx/effects';
import { Injectable } from '@angular/core';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects{
  @Effect()
  authSignup = this.actions$
  .pipe(
    ofType(AuthActions.TRY_SIGNUP), // use the pipeable ofType operator
    map((action: AuthActions.TrySignup) =>{
      return action.payload;
    })
  );

  constructor(private actions$: Actions){

  }
}