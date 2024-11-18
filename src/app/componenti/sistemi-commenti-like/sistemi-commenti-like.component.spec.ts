import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemiCommentiLikeComponent } from './sistemi-commenti-like.component';

describe('SistemiCommentiLikeComponent', () => {
  let component: SistemiCommentiLikeComponent;
  let fixture: ComponentFixture<SistemiCommentiLikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SistemiCommentiLikeComponent]
    });
    fixture = TestBed.createComponent(SistemiCommentiLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
