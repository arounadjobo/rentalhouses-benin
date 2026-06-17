import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainResto } from './main-resto';

describe('MainResto', () => {
  let component: MainResto;
  let fixture: ComponentFixture<MainResto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainResto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainResto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
