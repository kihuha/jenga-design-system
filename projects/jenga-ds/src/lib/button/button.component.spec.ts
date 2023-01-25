import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Button } from './button.component';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Button);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the correct label', () => {
    component.label = 'Button here';
    fixture.detectChanges();

    const label = fixture.debugElement.query(
      By.css('[data-testid="btn-label"]')
    );

    expect(label).toBeTruthy();
    expect(label.nativeElement.textContent).toBe('Button here');
  });

  it('should show the icon passed', () => {
    component.icon = 'info';
    fixture.detectChanges();

    const icon = fixture.debugElement.query(By.css('[data-testid="btn-icon"]'));

    expect(icon).toBeTruthy();
  });
});
