import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPharma } from './main-pharma';

describe('MainPharma', () => {
  let component: MainPharma;
  let fixture: ComponentFixture<MainPharma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPharma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPharma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
