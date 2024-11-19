import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbonamentiEPagamentiComponent } from './abbonamenti-epagamenti.component';

describe('AbbonamentiEPagamentiComponent', () => {
  let component: AbbonamentiEPagamentiComponent;
  let fixture: ComponentFixture<AbbonamentiEPagamentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbbonamentiEPagamentiComponent]
    });
    fixture = TestBed.createComponent(AbbonamentiEPagamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
