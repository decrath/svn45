import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoRolComponent } from './dialogo-rol.component';

describe('DialogoRolComponent', () => {
  let component: DialogoRolComponent;
  let fixture: ComponentFixture<DialogoRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
