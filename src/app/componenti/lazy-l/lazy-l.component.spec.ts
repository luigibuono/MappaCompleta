import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLComponent } from './lazy-l.component';

describe('LazyLComponent', () => {
  let component: LazyLComponent;
  let fixture: ComponentFixture<LazyLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyLComponent]
    });
    fixture = TestBed.createComponent(LazyLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
