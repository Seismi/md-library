import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathFigureComponent } from './path-figure.component';

describe('PathFigureComponent', () => {
  let component: PathFigureComponent;
  let fixture: ComponentFixture<PathFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
