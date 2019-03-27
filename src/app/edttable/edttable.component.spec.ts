import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdttableComponent } from './edttable.component';

describe('EdttableComponent', () => {
  let component: EdttableComponent;
  let fixture: ComponentFixture<EdttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
