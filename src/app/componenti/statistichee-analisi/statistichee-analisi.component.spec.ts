import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticheeAnalisiComponent } from './statistichee-analisi.component';

describe('StatisticheeAnalisiComponent', () => {
  let component: StatisticheeAnalisiComponent;
  let fixture: ComponentFixture<StatisticheeAnalisiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticheeAnalisiComponent]
    });
    fixture = TestBed.createComponent(StatisticheeAnalisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
