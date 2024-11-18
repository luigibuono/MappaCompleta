import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcComponent } from './plc.component';

describe('PlcComponent', () => {
  let component: PlcComponent;
  let fixture: ComponentFixture<PlcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlcComponent]
    });
    fixture = TestBed.createComponent(PlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
