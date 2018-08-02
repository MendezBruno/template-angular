import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoOrgComponent } from './mono-org.component';

describe('MonoOrgComponent', () => {
  let component: MonoOrgComponent;
  let fixture: ComponentFixture<MonoOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonoOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonoOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
