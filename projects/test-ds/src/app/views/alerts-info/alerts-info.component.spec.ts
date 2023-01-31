import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsInfoComponent } from './alerts-info.component';

describe('AlertsInfoComponent', () => {
  let component: AlertsInfoComponent;
  let fixture: ComponentFixture<AlertsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
