import { Component } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service';
import { SidebarServiceService } from '../services/sidebar-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showFiller = false;

  constructor(
    private _userSerevices: UserService,
    private _sidebarServiceService: SidebarServiceService,
    private _router: Router
  ) {}

  isLoged(): boolean {
    return this._userSerevices.userLoged.isLoged;
  }

  toggleNav(): void {
    this._sidebarServiceService.toggle();
  }

  logOut(): void {
    this._userSerevices.firebaseLogOut();
    this._router.navigate(['/']);
  }
}
