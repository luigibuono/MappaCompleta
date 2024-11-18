import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSecurityComponent } from './spring-security.component';

describe('SpringSecurityComponent', () => {
  let component: SpringSecurityComponent;
  let fixture: ComponentFixture<SpringSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpringSecurityComponent]
    });
    fixture = TestBed.createComponent(SpringSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
