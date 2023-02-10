import { forwardRef, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { JengaDsModule } from 'projects/jenga-ds/src/public-api';
import { JengaDsModule } from 'jenga-ds';

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
import { CdkTableModule } from '@angular/cdk/table';
import { CodeViewComponent } from './shared/code-view/code-view.component';
import { TextfieldInfoComponent } from './views/textfield-info/textfield-info.component';
import { AccordionInfoComponent } from './views/accordion-info/accordion-info.component';
import { SidebarInfoComponent } from './views/sidebar-info/sidebar-info.component';
import { DataTableInfoComponent } from './views/data-table-info/data-table-info.component';

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
    AccordionInfoComponent,
    SidebarInfoComponent,
    DataTableInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    JengaDsModule,
    ClipboardModule,
    CdkTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
