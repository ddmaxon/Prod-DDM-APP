import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeboxComponent } from './welcomebox.component';

describe('WelcomeboxComponent', () => {
  let component: WelcomeboxComponent;
  let fixture: ComponentFixture<WelcomeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
