import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalClientFormComponent } from '../components/modal-client-form/modal-client-form.component';

@Injectable({
  providedIn: 'root',
})
export class MyDialogClientService {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    return this.dialog.open(ModalClientFormComponent);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
