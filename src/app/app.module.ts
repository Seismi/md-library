import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdLibraryModule } from 'md-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
