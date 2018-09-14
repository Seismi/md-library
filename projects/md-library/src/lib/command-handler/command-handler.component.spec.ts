import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandHandlerComponent } from './command-handler.component';

describe('CommandHandlerComponent', () => {
  let component: CommandHandlerComponent;
  let fixture: ComponentFixture<CommandHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
