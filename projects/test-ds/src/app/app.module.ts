import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JengaDsModule } from 'projects/jenga-ds/src/public-api';

import { AppComponent } from './app.component';
import { ButtonsInfoComponent } from './views/buttons-info/buttons-info.component';
import { AlertsInfoComponent } from './views/alerts-info/alerts-info.component';
import { IntroductionComponent } from './views/introduction/introduction.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { InstallationComponent } from './views/installation/installation.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsInfoComponent,
    AlertsInfoComponent,
    IntroductionComponent,
    LayoutComponent,
    SidebarComponent,
    InstallationComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, JengaDsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
