import { NgModule } from '@angular/core';
import { Button } from './button/button.component';
import { Alert } from './alert/alert.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Textfield } from './textfield/textfield.component';
import { Label } from './label/label.component';
import { InputDirective } from './input/input.directive';

@NgModule({
  declarations: [Alert, Button, Textfield, Label, InputDirective],
  imports: [BrowserModule],
  exports: [Alert, Button, Textfield, Label, InputDirective],
})
export class JengaDsModule {}
