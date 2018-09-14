import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationManagerComponent } from './animation-manager.component';

describe('AnimationManagerComponent', () => {
  let component: AnimationManagerComponent;
  let fixture: ComponentFixture<AnimationManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
