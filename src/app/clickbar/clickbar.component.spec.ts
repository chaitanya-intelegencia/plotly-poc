import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickbarComponent } from './clickbar.component';

describe('ClickbarComponent', () => {
  let component: ClickbarComponent;
  let fixture: ComponentFixture<ClickbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
