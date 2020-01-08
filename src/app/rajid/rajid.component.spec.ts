import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajidComponent } from './rajid.component';

describe('RajidComponent', () => {
  let component: RajidComponent;
  let fixture: ComponentFixture<RajidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
