import { forwardRef, NgModule } from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JengaDsModule, Textfield } from 'projects/jenga-ds/src/public-api';

import { AppComponent } from './app.component';
import { ButtonsInfoComponent } from './views/buttons-info/buttons-info.component';
import { AlertsInfoComponent } from './views/alerts-info/alerts-info.component';
import { IntroductionComponent } from './views/introduction/introduction.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { InstallationComponent } from './views/installation/installation.component';
import { DialogComponent } from './views/alerts-info/widgets/dialog/dialog.component';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { CodeViewComponent } from './shared/code-view/code-view.component';
import { TextfieldInfoComponent } from './views/textfield-info/textfield-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsInfoComponent,
    AlertsInfoComponent,
    IntroductionComponent,
    LayoutComponent,
    SidebarComponent,
    InstallationComponent,
    DialogComponent,
    CodeViewComponent,
    TextfieldInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    JengaDsModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
