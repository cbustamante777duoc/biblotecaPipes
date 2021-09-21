import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { MyFirstPipePipe } from './pipes/my-first-pipe.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { PassPipe } from './pipes/pass.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstPipePipe,
    DomSeguroPipe,
    PassPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
