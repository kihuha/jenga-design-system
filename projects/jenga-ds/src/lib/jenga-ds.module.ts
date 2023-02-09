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
import { Accordion } from './accordion/accordion.component';
import { Sidebar } from './sidebar/sidebar.component';
import { CdkTableModule } from '@angular/cdk/table';
import { PortalModule } from '@angular/cdk/portal';
import { CellDirective } from './datatable/cell.directive';
@NgModule({
  declarations: [
    Alert,
    Button,
    Textfield,
    InputDirective,
    LabelDirective,
    HintDirective,
    Accordion,
    Sidebar,
    CellDirective,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CdkTableModule],
  exports: [
    Accordion,
    Alert,
    Button,
    Textfield,
    InputDirective,
    LabelDirective,
    HintDirective,
    Sidebar,
    CellDirective,
  ],
  providers: [FormGroupDirective, FormControlDirective],
})
export class JengaDsModule {}
