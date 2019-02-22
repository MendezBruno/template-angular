import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDinamicaComponent } from './vista-dinamica.component';

describe('VistaDinamicaComponent', () => {
  let component: VistaDinamicaComponent;
  let fixture: ComponentFixture<VistaDinamicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDinamicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
