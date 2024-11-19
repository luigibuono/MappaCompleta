import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguaeTraduzioneComponent } from './linguae-traduzione.component';

describe('LinguaeTraduzioneComponent', () => {
  let component: LinguaeTraduzioneComponent;
  let fixture: ComponentFixture<LinguaeTraduzioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinguaeTraduzioneComponent]
    });
    fixture = TestBed.createComponent(LinguaeTraduzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
