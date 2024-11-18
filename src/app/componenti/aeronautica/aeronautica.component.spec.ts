import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeronauticaComponent } from './aeronautica.component';

describe('AeronauticaComponent', () => {
  let component: AeronauticaComponent;
  let fixture: ComponentFixture<AeronauticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AeronauticaComponent]
    });
    fixture = TestBed.createComponent(AeronauticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
