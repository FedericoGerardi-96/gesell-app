import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalRentFormComponent } from '../components/modal-rent-form/modal-rent-form.component';

@Injectable({
  providedIn: 'root',
})
export class MyDialogRentService {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    return this.dialog.open(ModalRentFormComponent);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
