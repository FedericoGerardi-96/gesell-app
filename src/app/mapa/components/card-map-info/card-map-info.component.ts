import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-map-info',
  templateUrl: './card-map-info.component.html',
  styleUrls: ['./card-map-info.component.css'],
})
export class CardMapInfoComponent {
  @Input() distance: number | null = 0;
  @Input() duration: number | null = 0;
}
