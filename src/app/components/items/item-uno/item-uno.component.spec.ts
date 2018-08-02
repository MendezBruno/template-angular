import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUnoComponent } from './item-uno.component';

describe('ItemUnoComponent', () => {
  let component: ItemUnoComponent;
  let fixture: ComponentFixture<ItemUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
