import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { RentInfoComponent } from './pages/rent-info/rent-info.component';

const routes: Routes = [
  { path: '', component: AdminComponent, title: 'Admin' },
  { path: 'info', component: RentInfoComponent, title: 'Info' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
