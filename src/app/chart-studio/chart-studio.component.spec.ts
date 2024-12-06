import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStudioComponent } from './chart-studio.component';

describe('ChartStudioComponent', () => {
  let component: ChartStudioComponent;
  let fixture: ComponentFixture<ChartStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartStudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
