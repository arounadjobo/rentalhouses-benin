import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalShop } from './rental-shop';

describe('RentalShop', () => {
  let component: RentalShop;
  let fixture: ComponentFixture<RentalShop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalShop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalShop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
