import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGoogleMapsComponent } from './user-google-maps.component';

describe('UserGoogleMapsComponent', () => {
  let component: UserGoogleMapsComponent;
  let fixture: ComponentFixture<UserGoogleMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGoogleMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
