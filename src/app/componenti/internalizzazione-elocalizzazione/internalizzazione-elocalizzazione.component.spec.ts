import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalizzazioneElocalizzazioneComponent } from './internalizzazione-elocalizzazione.component';

describe('InternalizzazioneElocalizzazioneComponent', () => {
  let component: InternalizzazioneElocalizzazioneComponent;
  let fixture: ComponentFixture<InternalizzazioneElocalizzazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternalizzazioneElocalizzazioneComponent]
    });
    fixture = TestBed.createComponent(InternalizzazioneElocalizzazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
