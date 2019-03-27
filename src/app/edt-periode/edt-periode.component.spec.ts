import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtPeriodeComponent } from './edt-periode.component';

describe('EdtPeriodeComponent', () => {
  let component: EdtPeriodeComponent;
  let fixture: ComponentFixture<EdtPeriodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtPeriodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtPeriodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
