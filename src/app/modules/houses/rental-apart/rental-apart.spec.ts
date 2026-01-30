import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalApart } from './rental-apart';

describe('RentalApart', () => {
  let component: RentalApart;
  let fixture: ComponentFixture<RentalApart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalApart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalApart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
