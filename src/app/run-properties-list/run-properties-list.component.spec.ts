import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunPropertiesListComponent } from './run-properties-list.component';

describe('RunPropertiesListComponent', () => {
  let component: RunPropertiesListComponent;
  let fixture: ComponentFixture<RunPropertiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunPropertiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunPropertiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
