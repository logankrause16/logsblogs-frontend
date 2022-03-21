import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSeriesComponent } from './black-series.component';

describe('BlackSeriesComponent', () => {
  let component: BlackSeriesComponent;
  let fixture: ComponentFixture<BlackSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
