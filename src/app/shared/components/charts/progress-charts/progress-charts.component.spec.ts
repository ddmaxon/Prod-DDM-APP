import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressChartsComponent } from './progress-charts.component';

describe('ProgressChartsComponent', () => {
  let component: ProgressChartsComponent;
  let fixture: ComponentFixture<ProgressChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
