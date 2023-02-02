import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsInfoComponent } from './views/alerts-info/alerts-info.component';
import { ButtonsInfoComponent } from './views/buttons-info/buttons-info.component';
import { InstallationComponent } from './views/installation/installation.component';
import { IntroductionComponent } from './views/introduction/introduction.component';
import { TextfieldInfoComponent } from './views/textfield-info/textfield-info.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'alerts', component: AlertsInfoComponent },
  { path: 'buttons', component: ButtonsInfoComponent },
  { path: 'textfield', component: TextfieldInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
