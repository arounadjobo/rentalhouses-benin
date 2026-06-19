import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHeaderDisplayComponent } from './auth-header-display.component';

describe('AuthHeaderDisplayComponent', () => {
  let component: AuthHeaderDisplayComponent;
  let fixture: ComponentFixture<AuthHeaderDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthHeaderDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthHeaderDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
