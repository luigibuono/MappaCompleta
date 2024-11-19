import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionePreferenzeUtenteComponent } from './gestione-preferenze-utente.component';

describe('GestionePreferenzeUtenteComponent', () => {
  let component: GestionePreferenzeUtenteComponent;
  let fixture: ComponentFixture<GestionePreferenzeUtenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionePreferenzeUtenteComponent]
    });
    fixture = TestBed.createComponent(GestionePreferenzeUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
