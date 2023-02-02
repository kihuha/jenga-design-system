import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Label } from './label.component';

describe('LabelComponent', () => {
  let component: Label;
  let fixture: ComponentFixture<Label>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Label],
    }).compileComponents();

    fixture = TestBed.createComponent(Label);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
