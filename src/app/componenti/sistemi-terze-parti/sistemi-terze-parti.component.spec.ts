import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemiTerzePartiComponent } from './sistemi-terze-parti.component';

describe('SistemiTerzePartiComponent', () => {
  let component: SistemiTerzePartiComponent;
  let fixture: ComponentFixture<SistemiTerzePartiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SistemiTerzePartiComponent]
    });
    fixture = TestBed.createComponent(SistemiTerzePartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
