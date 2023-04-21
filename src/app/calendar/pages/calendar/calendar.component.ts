import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment';
import { map } from 'rxjs';

import { RentFirebaseService } from 'src/app/admin/services/rent-firebase.service';
import { rentDates } from 'src/app/interfaces/rentDates';

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
  constructor(private _rentFirebaseService: RentFirebaseService) {}
  calendarOptions: CalendarOptions = {};
  Events: any = [];

  ngOnInit() {
    this._rentFirebaseService
      .getAlquileres()
      .pipe(
        map((rent) => {
          return rent.map((rentDate: rentDates) => {
            return {
              title: 'Alquilado',
              start: this.dateStartFormat(rentDate.startDate!.toString()),
              end: this.dateEndFormat(rentDate.endDate!.toString()),
              color: '#e57676',
              initialDate: this.dateStartFormat(rentDate.startDate!.toString()),
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

  dateStartFormat(date: string): string {
    let fechaMoment = moment(date, 'DD/MM/YYYY');
    let fechaFormateada = fechaMoment.format('YYYY-MM-DD');
    return fechaFormateada;
  }
  dateEndFormat(date: string): string {
    let fechaMoment = moment(date, 'DD/MM/YYYY');
    let fechaSumada = fechaMoment.add(1, 'days').format('YYYY-MM-DD');
    let fechaSumadaMoment = moment(fechaSumada, 'YYYY-MM-DD');
    let fechaFormateada = fechaSumadaMoment.format('YYYY-MM-DD');
    return fechaFormateada;
  }
}
