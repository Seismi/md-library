import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelinkingToolComponent } from './relinking-tool.component';

describe('RelinkingToolComponent', () => {
  let component: RelinkingToolComponent;
  let fixture: ComponentFixture<RelinkingToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelinkingToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelinkingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
