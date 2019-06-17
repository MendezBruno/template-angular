import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardUnoComponent } from './user-card-uno.component';

describe('UserCardUnoComponent', () => {
  let component: UserCardUnoComponent;
  let fixture: ComponentFixture<UserCardUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
