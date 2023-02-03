import { Component } from '@angular/core';

@Component({
  selector: 'app-textfield-info',
  templateUrl: './textfield-info.component.html',
  styleUrls: ['./textfield-info.component.scss'],
})
export class TextfieldInfoComponent {
  rawCodes = {
    default: `
  <jenga-textfield>
    <label
      jengaLabel
      for="passwordID"
      class="flex items-center justify-between"
    >
      Email
    </label>
    <input
      jengaInput
      type="email"
      name="email"
      id="emailId"
      formControlName="email"
    />
  </jenga-textfield>`,
    error: `
  <jenga-textfield error="email is invalid">
      <label
        jengaLabel
        for="emailId"
        class="flex items-center justify-between"
      >
        Email (with error)
      </label>
      <input jengaInput type="email" name="email" id="emailId" />
  </jenga-textfield>`,
  };
}
