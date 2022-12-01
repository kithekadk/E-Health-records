import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientregIDComponent } from './patientreg-id.component';

describe('PatientregIDComponent', () => {
  let component: PatientregIDComponent;
  let fixture: ComponentFixture<PatientregIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientregIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientregIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
