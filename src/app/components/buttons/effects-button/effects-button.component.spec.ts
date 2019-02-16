import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsButtonComponent } from './effects-button.component';

describe('EffectsButtonComponent', () => {
  let component: EffectsButtonComponent;
  let fixture: ComponentFixture<EffectsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
