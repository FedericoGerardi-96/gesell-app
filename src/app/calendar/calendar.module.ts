import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    // external modules
    FullCalendarModule,
  ],
})
export class CalendaryModule {}
