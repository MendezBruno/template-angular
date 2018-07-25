import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDosComponent } from './item-dos.component';

describe('ItemDosComponent', () => {
  let component: ItemDosComponent;
  let fixture: ComponentFixture<ItemDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
