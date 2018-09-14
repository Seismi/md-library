import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdLibraryComponent } from './md-library.component';

describe('MdLibraryComponent', () => {
  let component: MdLibraryComponent;
  let fixture: ComponentFixture<MdLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
