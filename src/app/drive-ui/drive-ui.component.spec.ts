import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveUiComponent } from './drive-ui.component';

describe('DriveUiComponent', () => {
  let component: DriveUiComponent;
  let fixture: ComponentFixture<DriveUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
