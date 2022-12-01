import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientInfoComponent } from './update-patient-info.component';

describe('UpdatePatientInfoComponent', () => {
  let component: UpdatePatientInfoComponent;
  let fixture: ComponentFixture<UpdatePatientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePatientInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
