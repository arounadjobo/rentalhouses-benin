import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDraw } from './cash-draw';

describe('CashDraw', () => {
  let component: CashDraw;
  let fixture: ComponentFixture<CashDraw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashDraw]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashDraw);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
