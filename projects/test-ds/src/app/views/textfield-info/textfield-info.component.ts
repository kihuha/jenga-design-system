import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-textfield-info',
  templateUrl: './textfield-info.component.html',
  styleUrls: ['./textfield-info.component.scss'],
})
export class TextfieldInfoComponent {
  testForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(4),
    ]),
  });

  constructor() {}

  handleTestSubmit(ev: any) {
    ev.preventDefault();
  }
}
