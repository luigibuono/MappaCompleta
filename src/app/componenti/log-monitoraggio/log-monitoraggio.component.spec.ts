import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMonitoraggioComponent } from './log-monitoraggio.component';

describe('LogMonitoraggioComponent', () => {
  let component: LogMonitoraggioComponent;
  let fixture: ComponentFixture<LogMonitoraggioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogMonitoraggioComponent]
    });
    fixture = TestBed.createComponent(LogMonitoraggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
