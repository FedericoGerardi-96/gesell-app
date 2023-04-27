import { Component } from '@angular/core';
import { ContactModalService } from 'src/app/services/contact-modal.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(private _contactModalService: ContactModalService) {}

  openContactDialog() {
    this._contactModalService.openDialog();
  }
}
