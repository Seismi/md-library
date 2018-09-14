import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoManagerComponent } from './undo-manager.component';

describe('UndoManagerComponent', () => {
  let component: UndoManagerComponent;
  let fixture: ComponentFixture<UndoManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndoManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
