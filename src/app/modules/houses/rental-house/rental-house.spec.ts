import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalHouse } from './rental-house';

describe('RentalHouse', () => {
  let component: RentalHouse;
  let fixture: ComponentFixture<RentalHouse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalHouse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalHouse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
