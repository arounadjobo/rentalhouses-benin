import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalStore } from './rental-store';

describe('RentalStore', () => {
  let component: RentalStore;
  let fixture: ComponentFixture<RentalStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalStore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalStore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
