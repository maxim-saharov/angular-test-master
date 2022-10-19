import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorPageComponent} from './components/error-page/error-page.component';

@NgModule({
   declarations: [
      AppComponent,
      ErrorPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NoopAnimationsModule,
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})

export class AppModule {
}
