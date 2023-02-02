import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textfield } from './textfield.component';

describe('Textfield', () => {
  let component: Textfield;
  let fixture: ComponentFixture<Textfield>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Textfield],
    }).compileComponents();

    fixture = TestBed.createComponent(Textfield);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
