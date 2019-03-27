import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtmodulesComponent } from './edtmodules.component';

describe('EdtmodulesComponent', () => {
  let component: EdtmodulesComponent;
  let fixture: ComponentFixture<EdtmodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtmodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
