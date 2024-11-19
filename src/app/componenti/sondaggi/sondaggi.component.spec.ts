import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SondaggiComponent } from './sondaggi.component';

describe('SondaggiComponent', () => {
  let component: SondaggiComponent;
  let fixture: ComponentFixture<SondaggiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SondaggiComponent]
    });
    fixture = TestBed.createComponent(SondaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
