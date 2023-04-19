import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AdminComponent } from './pages/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/Rent-form/Rent-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonFormComponent } from './components/client-form/person-form.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { ModalClientFormComponent } from './components/modal-client-form/modal-client-form.component';
import { RentTableComponent } from './components/rent-table/rent-table.component';
import { RentInfoComponent } from './pages/rent-info/rent-info.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalRentFormComponent } from './components/modal-rent-form/modal-rent-form.component';

@NgModule({
  declarations: [
    AdminComponent,
    FormComponent,
    PersonFormComponent,
    ClientsTableComponent,
    ModalClientFormComponent,
    RentTableComponent,
    RentInfoComponent,
    ModalRentFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    // external modules
    FullCalendarModule,
  ],
})
export class AdminModule {}
