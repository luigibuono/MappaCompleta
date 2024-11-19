import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioniERuoliComponent } from './sessioni-eruoli.component';

describe('SessioniERuoliComponent', () => {
  let component: SessioniERuoliComponent;
  let fixture: ComponentFixture<SessioniERuoliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessioniERuoliComponent]
    });
    fixture = TestBed.createComponent(SessioniERuoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
