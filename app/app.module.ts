import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'rxjs/Rx';
import 'hammerjs/hammer';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
