import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedPlanComponent } from './started-plan.component';

describe('StartedPlanComponent', () => {
  let component: StartedPlanComponent;
  let fixture: ComponentFixture<StartedPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartedPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartedPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
