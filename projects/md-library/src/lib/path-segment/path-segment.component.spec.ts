import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathSegmentComponent } from './path-segment.component';

describe('PathSegmentComponent', () => {
  let component: PathSegmentComponent;
  let fixture: ComponentFixture<PathSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
