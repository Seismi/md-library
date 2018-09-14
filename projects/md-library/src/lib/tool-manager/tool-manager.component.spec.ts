import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolManagerComponent } from './tool-manager.component';

describe('ToolManagerComponent', () => {
  let component: ToolManagerComponent;
  let fixture: ComponentFixture<ToolManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
