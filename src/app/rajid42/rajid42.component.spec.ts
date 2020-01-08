import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rajid42Component } from './rajid42.component';

describe('Rajid42Component', () => {
  let component: Rajid42Component;
  let fixture: ComponentFixture<Rajid42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rajid42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rajid42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
