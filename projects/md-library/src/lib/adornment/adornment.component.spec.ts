import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdornmentComponent } from './adornment.component';

describe('AdornmentComponent', () => {
  let component: AdornmentComponent;
  let fixture: ComponentFixture<AdornmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdornmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdornmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
