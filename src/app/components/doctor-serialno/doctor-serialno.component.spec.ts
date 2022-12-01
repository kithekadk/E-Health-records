import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSerialnoComponent } from './doctor-serialno.component';

describe('DoctorSerialnoComponent', () => {
  let component: DoctorSerialnoComponent;
  let fixture: ComponentFixture<DoctorSerialnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSerialnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorSerialnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
