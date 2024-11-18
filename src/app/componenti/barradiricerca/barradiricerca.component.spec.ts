import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarradiricercaComponent } from './barradiricerca.component';

describe('BarradiricercaComponent', () => {
  let component: BarradiricercaComponent;
  let fixture: ComponentFixture<BarradiricercaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarradiricercaComponent]
    });
    fixture = TestBed.createComponent(BarradiricercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
