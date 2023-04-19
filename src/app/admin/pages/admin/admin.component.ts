import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TooltipPosition } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from 'src/app/auth/services/user.service';
import { ModalClientFormComponent } from '../../components/modal-client-form/modal-client-form.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor(private _userSerevices: UserService, private _dialog: MatDialog) {}

  ngOnInit(): void {
    // this.userSerevices.setLogUser();
  }
  openDialog() {
    this._dialog.open(ModalClientFormComponent);
  }
}
