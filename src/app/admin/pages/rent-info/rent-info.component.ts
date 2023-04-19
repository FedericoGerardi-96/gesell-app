import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import { rentDates } from 'src/app/interfaces/rentDates';
import moment from 'moment';

@Component({
  selector: 'app-rent-info',
  templateUrl: './rent-info.component.html',
  styleUrls: ['./rent-info.component.css'],
})
export class RentInfoComponent implements OnInit {
  rent?: rentDates;
  senia?: number = 0;

  calendarOptions: CalendarOptions = {};

  constructor(
    private _routeActivate: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const querRent = this._routeActivate.snapshot.queryParamMap.get('rent');
    if (querRent) {
      this.rent = JSON.parse(querRent);
    } else {
      this._router.navigate(['/admin']);
      return;
    }
    this.senia = this.rent?.seña;

    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin],
      events: [
        {
          start: this.dateStartFormat(this.rent!.startDate!.toString()),
          end: this.dateEndFormat(this.rent!.endDate!.toString()),
          color: 'red',
        },
      ],
    };
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
