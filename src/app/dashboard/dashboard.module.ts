import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../pages/home/home.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, SidebarComponent, NavbarComponent],
  imports: [DashboardRoutingModule],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule {}
