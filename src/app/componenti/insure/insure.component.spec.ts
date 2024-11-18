import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsureComponent } from './insure.component';

describe('InsureComponent', () => {
  let component: InsureComponent;
  let fixture: ComponentFixture<InsureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsureComponent]
    });
    fixture = TestBed.createComponent(InsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
