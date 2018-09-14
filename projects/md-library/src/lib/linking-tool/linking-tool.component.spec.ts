import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkingToolComponent } from './linking-tool.component';

describe('LinkingToolComponent', () => {
  let component: LinkingToolComponent;
  let fixture: ComponentFixture<LinkingToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkingToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
