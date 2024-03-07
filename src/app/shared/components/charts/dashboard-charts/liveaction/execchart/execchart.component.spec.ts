import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecchartComponent } from './execchart.component';

describe('ExecchartComponent', () => {
  let component: ExecchartComponent;
  let fixture: ComponentFixture<ExecchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExecchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
