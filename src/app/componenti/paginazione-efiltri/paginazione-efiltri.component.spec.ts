import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginazioneEfiltriComponent } from './paginazione-efiltri.component';

describe('PaginazioneEfiltriComponent', () => {
  let component: PaginazioneEfiltriComponent;
  let fixture: ComponentFixture<PaginazioneEfiltriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginazioneEfiltriComponent]
    });
    fixture = TestBed.createComponent(PaginazioneEfiltriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
