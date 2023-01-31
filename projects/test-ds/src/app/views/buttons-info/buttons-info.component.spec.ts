import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsInfoComponent } from './buttons-info.component';

describe('ButtonsInfoComponent', () => {
  let component: ButtonsInfoComponent;
  let fixture: ComponentFixture<ButtonsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
