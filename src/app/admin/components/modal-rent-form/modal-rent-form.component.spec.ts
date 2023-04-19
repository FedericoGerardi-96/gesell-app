import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRentFormComponent } from './modal-rent-form.component';

describe('ModalRentFormComponent', () => {
  let component: ModalRentFormComponent;
  let fixture: ComponentFixture<ModalRentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
