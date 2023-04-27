import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

import moment from 'moment';
import Swal from 'sweetalert2';

import { RentFirebaseService } from 'src/app/admin/services/rent-firebase.service';
import { rentDates } from 'src/app/interfaces/rentDates';
import {
  dateStartFormat,
  dateEndFormat,
  isDateRangeOccupied,
  convertStringToDate,
} from 'src/app/calendar/utils/date';

interface calendar {
  title?: string;
  start?: string;
  end?: string;
  color?: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent?: FullCalendarComponent;
  @ViewChild('miFormulario') miFormulario!: NgForm;

  calendarOptions: CalendarOptions = {};
  Events: calendar[] = [];
  ocupiedDays: Object[] = [];

  constructor(private _rentFirebaseService: RentFirebaseService) {
    this._rentFirebaseService
      .getAlquileres()
      .pipe(
        map((rent) => {
          return rent.map((rentDate: rentDates) => {
            this.ocupiedDays.push({
              startDate: dateStartFormat(rentDate.startDate!.toString()),
              endDate: dateStartFormat(rentDate.endDate!.toString()),
            });
            return {
              title: 'Alquilado',
              start: dateStartFormat(rentDate.startDate!.toString()),
              end: dateEndFormat(rentDate.endDate!.toString()),
              color: '#e57676',
              initialDate: dateStartFormat(rentDate.startDate!.toString()),
            };
          });
        })
      )
      .subscribe((rent: any) => {
        rent.forEach((element: any) => {
          this.Events?.push(element);
          this.calendarOptions = {
            initialView: 'dayGridMonth',
            plugins: [dayGridPlugin],
            events: this.Events,
            locale: 'es',
          };
        });
      });
  }

  initForm = {
    startDate: moment().toDate(),
    endDate: moment().toDate(),
  };

  ngOnInit() {}

  searchDate() {
    let { startDate, endDate } = this.miFormulario.control.value!;
    if (this.calendarComponent?.getApi().getEventById('eventoSeleccionado')) {
      this.calendarComponent
        ?.getApi()
        .getEventById('eventoSeleccionado')!
        .remove();
    }
    const isOccupied = isDateRangeOccupied(
      moment(startDate).format('YYYY-MM-DD'),
      moment(endDate).format('YYYY-MM-DD'),
      this.ocupiedDays
    );

    if (isOccupied) {
      Swal.fire(
        'No Disponible',
        'La fecha seleccionada esta ocupada',
        'warning'
      );
      return;
    } else {
      Swal.fire(
        'Disponible',
        'La fecha seleccionada esta disponible',
        'success'
      );

      const objEvent = {
        id: 'eventoSeleccionado',
        title: 'Seleccionado',
        start: moment(startDate).format('YYYY-MM-DD'),
        end: dateEndFormat(moment(endDate).format('DD/MM/YYYY')),
        color: '#3f51b5',
      };
      this.calendarComponent?.getApi().addEvent(objEvent);
    }
    startDate = moment(this.miFormulario.control.value?.startDate).format(
      'DD/MM/YYYY'
    );
    this.calendarComponent?.getApi().gotoDate(convertStringToDate(startDate));
  }
}
