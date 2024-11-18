import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRComponent } from './button-r.component';

describe('ButtonRComponent', () => {
  let component: ButtonRComponent;
  let fixture: ComponentFixture<ButtonRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonRComponent]
    });
    fixture = TestBed.createComponent(ButtonRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
