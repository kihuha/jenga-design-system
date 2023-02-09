import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableInfoComponent } from './data-table-info.component';

describe('DataTableInfoComponent', () => {
  let component: DataTableInfoComponent;
  let fixture: ComponentFixture<DataTableInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTableInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
