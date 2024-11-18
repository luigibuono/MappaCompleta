import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificheRealLifeComponent } from './notifiche-real-life.component';

describe('NotificheRealLifeComponent', () => {
  let component: NotificheRealLifeComponent;
  let fixture: ComponentFixture<NotificheRealLifeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificheRealLifeComponent]
    });
    fixture = TestBed.createComponent(NotificheRealLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
