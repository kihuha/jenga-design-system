import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldInfoComponent } from './textfield-info.component';

describe('TextfieldInfoComponent', () => {
  let component: TextfieldInfoComponent;
  let fixture: ComponentFixture<TextfieldInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfieldInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextfieldInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
