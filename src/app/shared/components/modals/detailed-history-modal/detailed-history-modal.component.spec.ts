import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedHistoryModalComponent } from './detailed-history-modal.component';

describe('DetailedHistoryModalComponent', () => {
  let component: DetailedHistoryModalComponent;
  let fixture: ComponentFixture<DetailedHistoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedHistoryModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedHistoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
