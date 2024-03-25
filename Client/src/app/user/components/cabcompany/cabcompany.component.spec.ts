import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabcompanyComponent } from './cabcompany.component';

describe('CabcompanyComponent', () => {
  let component: CabcompanyComponent;
  let fixture: ComponentFixture<CabcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabcompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
