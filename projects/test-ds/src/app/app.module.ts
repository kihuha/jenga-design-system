import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JengaDsModule } from 'projects/jenga-ds/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, JengaDsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
