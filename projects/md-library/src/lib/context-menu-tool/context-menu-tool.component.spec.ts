import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuToolComponent } from './context-menu-tool.component';

describe('ContextMenuToolComponent', () => {
  let component: ContextMenuToolComponent;
  let fixture: ComponentFixture<ContextMenuToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextMenuToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenuToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
