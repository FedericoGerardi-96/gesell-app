import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactComponent } from '../components/modal-contact/modal-contact.component';

@Injectable({
  providedIn: 'root',
})
export class ContactModalService {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    return this.dialog.open(ModalContactComponent);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
