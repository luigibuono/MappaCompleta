import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitoComponent } from './invito.component';

describe('InvitoComponent', () => {
  let component: InvitoComponent;
  let fixture: ComponentFixture<InvitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvitoComponent]
    });
    fixture = TestBed.createComponent(InvitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
