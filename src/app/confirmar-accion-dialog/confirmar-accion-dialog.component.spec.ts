import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarAccionDialogComponent } from './confirmar-accion-dialog.component';

describe('ConfirmarAccionDialogComponent', () => {
  let component: ConfirmarAccionDialogComponent;
  let fixture: ComponentFixture<ConfirmarAccionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarAccionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarAccionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
