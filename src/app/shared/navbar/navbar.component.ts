import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service';
import { SidebarServiceService } from '../services/sidebar-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  url = '';

  constructor(
    private _userSerevices: UserService,
    private _sidebarServiceService: SidebarServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.url = this._router.url;
  }

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

  // evento de scroll del objeto window
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // selecciona la barra de navegación por su clase CSS
    const nav = document.querySelector('.nav');
    // obtén la posición actual de scroll en la página
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    // si la posición de scroll es mayor que 545px, agrega la clase "scroll" a la barra de navegación, de lo contrario, quita la clase "scroll"
    if (offset > 545) {
      nav!.classList.add('scroll');
    } else {
      nav!.classList.remove('scroll');
    }
  }
}
