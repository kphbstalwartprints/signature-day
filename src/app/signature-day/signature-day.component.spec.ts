import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureDayComponent } from './signature-day.component';

describe('SignatureDayComponent', () => {
  let component: SignatureDayComponent;
  let fixture: ComponentFixture<SignatureDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignatureDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignatureDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
