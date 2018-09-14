import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLinksModelComponent } from './graph-links-model.component';

describe('GraphLinksModelComponent', () => {
  let component: GraphLinksModelComponent;
  let fixture: ComponentFixture<GraphLinksModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphLinksModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphLinksModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
