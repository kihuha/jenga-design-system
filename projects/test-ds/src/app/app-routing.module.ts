import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionInfoComponent } from './views/accordion-info/accordion-info.component';
import { AlertsInfoComponent } from './views/alerts-info/alerts-info.component';
import { ButtonsInfoComponent } from './views/buttons-info/buttons-info.component';
import { DataTableInfoComponent } from './views/data-table-info/data-table-info.component';
import { InstallationComponent } from './views/installation/installation.component';
import { IntroductionComponent } from './views/introduction/introduction.component';
import { SidebarInfoComponent } from './views/sidebar-info/sidebar-info.component';
import { TextfieldInfoComponent } from './views/textfield-info/textfield-info.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'installation', component: InstallationComponent },
  { path: 'accordion', component: AccordionInfoComponent },
  { path: 'alerts', component: AlertsInfoComponent },
  { path: 'buttons', component: ButtonsInfoComponent },
  { path: 'textfield', component: TextfieldInfoComponent },
  { path: 'sidebar', component: SidebarInfoComponent },
  { path: 'datatable', component: DataTableInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
