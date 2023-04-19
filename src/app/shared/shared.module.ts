import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoadingComponent,
  ],
})
export class SharedModule {}
