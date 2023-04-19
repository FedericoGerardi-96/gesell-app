import { Component, OnInit, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { SidebarServiceService } from './shared/services/sidebar-service.service';
import { UserService } from './auth/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  constructor(
    private _sidebarServiceService: SidebarServiceService,
    private _userSerevices: UserService
  ) {}
  ngOnInit(): void {
    this._userSerevices.getAuthState();
  }

  get isOpen(): boolean {
    return this._sidebarServiceService.isOpen;
  }
  title = 'gesell-app';
}
