import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveactionComponent } from './liveaction.component';

describe('LiveactionComponent', () => {
  let component: LiveactionComponent;
  let fixture: ComponentFixture<LiveactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
