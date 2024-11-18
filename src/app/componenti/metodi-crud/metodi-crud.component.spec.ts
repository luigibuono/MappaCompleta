import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodiCrudComponent } from './metodi-crud.component';

describe('MetodiCrudComponent', () => {
  let component: MetodiCrudComponent;
  let fixture: ComponentFixture<MetodiCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetodiCrudComponent]
    });
    fixture = TestBed.createComponent(MetodiCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
