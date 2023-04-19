import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import Swal from 'sweetalert2';
import { RentFirebaseService } from '../../services/rent-firebase.service';
import { MatSort } from '@angular/material/sort';
import { rentDates } from 'src/app/interfaces/rentDates';
import { Router } from '@angular/router';
import { ModalRentFormComponent } from '../modal-rent-form/modal-rent-form.component';
@Component({
  selector: 'app-rent-table',
  templateUrl: './rent-table.component.html',
  styleUrls: ['./rent-table.component.css'],
})
export class RentTableComponent implements OnInit {
  resultsLength = 0;
  displayedColumns: string[] = [
    'name',
    'startDate',
    'endDate',
    'totalCobrado',
    'delete',
    'info',
    'edit',
  ];
  dataSource2?: MatTableDataSource<rentDates>;
  data: rentDates[] = [];

  @ViewChild(MatPaginator) paginator2?: MatPaginator;
  @ViewChild(MatSort) sort2?: MatSort;

  constructor(
    private _rentFirebaseService: RentFirebaseService,
    private _router: Router,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._rentFirebaseService.getAlquileres().subscribe((rent: rentDates[]) => {
      this.dataSource2 = new MatTableDataSource(rent);
      this.dataSource2!.paginator = this.paginator2!;
      this.dataSource2!.sort = this.sort2!;
      this.resultsLength = rent.length;
      this.data = rent;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2!.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2!.paginator) {
      this.dataSource2!.paginator.firstPage();
    }
  }

  editarAlquiler(rent: any) {
    this._rentFirebaseService.rentSelected = rent;
    this._dialog.open(ModalRentFormComponent);
  }
  verAlquiler(rent: any) {
    this._router.navigate(['/admin/info', rent], {
      queryParams: { rent: JSON.stringify(rent) },
    });
  }

  eliminarAlquiler(rent: any, confirm: boolean) {
    if (confirm) {
      const { id } = rent;
      this._rentFirebaseService.deleteRent(id);
      Swal.fire('Correecto', 'Eliminado correctamente', 'success');
      return;
    }
    Swal.fire('Cancelado', 'No se elimino...', 'warning');
  }
}
