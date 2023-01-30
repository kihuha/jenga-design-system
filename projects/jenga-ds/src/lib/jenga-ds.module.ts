import { NgModule } from '@angular/core';
import { Button } from './button/button.component';
import { Alert } from './alert/alert.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Alert, Button],
  imports: [BrowserModule],
  exports: [Alert, Button],
})
export class JengaDsModule {}
