import { NgModule } from '@angular/core';
import { Button } from './button/button.component';
import { Alert } from './alert/alert.component';
import { BrowserModule } from '@angular/platform-browser';
import { Textfield } from './textfield/textfield.component';
import { InputDirective } from './input/input.directive';
import { LabelDirective } from './label/label.directive';
import { HintDirective } from './hint/hint.directive';
import {
  FormControlDirective,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    Alert,
    Button,
    Textfield,
    InputDirective,
    LabelDirective,
    HintDirective,
    AccordionComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [
    AccordionComponent,
    Alert,
    Button,
    Textfield,
    InputDirective,
    LabelDirective,
    HintDirective,
  ],
  providers: [FormGroupDirective, FormControlDirective],
})
export class JengaDsModule {}
