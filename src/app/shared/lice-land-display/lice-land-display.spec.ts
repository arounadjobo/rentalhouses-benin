import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiceLandDisplay } from './lice-land-display';

describe('LiceLandDisplay', () => {
  let component: LiceLandDisplay;
  let fixture: ComponentFixture<LiceLandDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiceLandDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiceLandDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
