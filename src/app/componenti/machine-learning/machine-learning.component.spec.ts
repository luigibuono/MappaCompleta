import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineLearningComponent } from './machine-learning.component';

describe('MachineLearningComponent', () => {
  let component: MachineLearningComponent;
  let fixture: ComponentFixture<MachineLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineLearningComponent]
    });
    fixture = TestBed.createComponent(MachineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});