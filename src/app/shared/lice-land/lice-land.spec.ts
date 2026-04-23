import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiceLand } from './lice-land';

describe('LiceLand', () => {
  let component: LiceLand;
  let fixture: ComponentFixture<LiceLand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiceLand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiceLand);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
