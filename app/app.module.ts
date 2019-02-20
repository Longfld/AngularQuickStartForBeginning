import {NgModule }      from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppComponent }   from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyMaterialModule} from './my.material.module';
import 'hammerjs/hammer';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule,
                  FormsModule, 
                  MyMaterialModule,ReactiveFormsModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

