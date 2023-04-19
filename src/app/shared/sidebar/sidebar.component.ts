import { Component } from '@angular/core';
import { SidebarServiceService } from '../services/sidebar-service.service';
import { UserService } from 'src/app/auth/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(
    private _sidebarServiceService: SidebarServiceService,
    private _userSerevices: UserService,
    private _router: Router
  ) {}

  isLoged(): boolean {
    return this._userSerevices.userLoged.isLoged;
  }
  get isOpen(): boolean {
    return this._sidebarServiceService.isOpen;
  }
  toggleNav(): void {
    this._sidebarServiceService.toggle();
  }
  logOut(): void {
    this._userSerevices.firebaseLogOut();
    this._router.navigate(['/']);
  }
}
