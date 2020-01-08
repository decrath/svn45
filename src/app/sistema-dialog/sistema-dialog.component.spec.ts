import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaDialogComponent } from './sistema-dialog.component';

describe('SistemaDialogComponent', () => {
  let component: SistemaDialogComponent;
  let fixture: ComponentFixture<SistemaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
