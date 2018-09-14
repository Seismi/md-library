import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphObjectComponent } from './graph-object.component';

describe('GraphObjectComponent', () => {
  let component: GraphObjectComponent;
  let fixture: ComponentFixture<GraphObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
