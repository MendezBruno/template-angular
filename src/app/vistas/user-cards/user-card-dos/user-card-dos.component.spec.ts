import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardDosComponent } from './user-card-dos.component';

describe('UserCardDosComponent', () => {
  let component: UserCardDosComponent;
  let fixture: ComponentFixture<UserCardDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
