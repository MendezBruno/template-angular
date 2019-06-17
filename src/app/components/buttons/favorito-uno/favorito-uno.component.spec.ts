import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritoUnoComponent } from './favorito-uno.component';

describe('FavoritoUnoComponent', () => {
  let component: FavoritoUnoComponent;
  let fixture: ComponentFixture<FavoritoUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritoUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
