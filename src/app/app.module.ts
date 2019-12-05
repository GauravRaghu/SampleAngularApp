import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './reducers/counter.reducer';
import { MyCounterComponent } from './counter/counter.component';
import { ApiService } from './core/service/api/api.service';
import { CounterEffects } from './effects/counter.effects';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, MyCounterComponent],
  imports: [
    StoreModule.forRoot({ counter: counterReducer }),
    EffectsModule.forRoot([CounterEffects]),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25 // Retains last 25 states
        })
      : [],
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
