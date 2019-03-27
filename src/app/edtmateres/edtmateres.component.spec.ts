import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtmateresComponent } from './edtmateres.component';

describe('EdtmateresComponent', () => {
  let component: EdtmateresComponent;
  let fixture: ComponentFixture<EdtmateresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtmateresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtmateresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
