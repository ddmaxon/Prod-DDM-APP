import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNavComponent } from './chart-nav.component';

describe('ChartNavComponent', () => {
  let component: ChartNavComponent;
  let fixture: ComponentFixture<ChartNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
