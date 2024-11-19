import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemacommentielikeComponent } from './sistemacommentielike.component';

describe('SistemacommentielikeComponent', () => {
  let component: SistemacommentielikeComponent;
  let fixture: ComponentFixture<SistemacommentielikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SistemacommentielikeComponent]
    });
    fixture = TestBed.createComponent(SistemacommentielikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
