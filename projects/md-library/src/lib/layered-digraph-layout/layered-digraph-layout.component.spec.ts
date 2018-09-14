import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayeredDigraphLayoutComponent } from './layered-digraph-layout.component';

describe('LayeredDigraphLayoutComponent', () => {
  let component: LayeredDigraphLayoutComponent;
  let fixture: ComponentFixture<LayeredDigraphLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayeredDigraphLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayeredDigraphLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
