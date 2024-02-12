import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNotificationComponent } from './block-notification.component';

describe('BlockNotificationComponent', () => {
  let component: BlockNotificationComponent;
  let fixture: ComponentFixture<BlockNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
