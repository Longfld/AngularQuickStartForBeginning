import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MaterialModule, MdNativeDateModule} from '@angular/material';

import 'rxjs/Rx';
import 'hammerjs/hammer';

@NgModule({
  imports:      [ BrowserModule, MaterialModule, MdNativeDateModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
