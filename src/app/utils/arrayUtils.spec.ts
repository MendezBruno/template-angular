import { TestBed, async } from '@angular/core/testing';
import { ArrayUtils } from './arrayUtils';


describe('AppComponent', () => {
  beforeEach(async(() => {
    this.arrayTest = ['1','2','3'];
    this.arrayUtils = new ArrayUtils();
  }));

  it('should create arrayUtils', async(() => {
    let arrayU = new ArrayUtils();
    expect(arrayU).toBeTruthy();
  }));

  it('should create arrayTest in beforeEach', async(() => {
    expect(this.arrayTest).toBeTruthy();
  }));

  it('should have arrayTest 3 items', async(() => {
    expect(this.arrayTest.length).toBe(3);
  }));

  it('arrayTest debe contener el elemento 1 y 3 al borrarle el 2', async(() => {
    let removed = ArrayUtils.remove(this.arrayTest,'2')
    expect( removed ).toBe('2');
    expect( this.arrayTest.length ).toBe(2);
    console.log(this.arrayTest);
    console.log(removed);

  }));

  it('debe remover el ultimo y devolverlo', async(() => {
    let arrayTest: Array<any> = ['1','2','3'];
    let last = ArrayUtils.last(arrayTest);
    expect(last).toBe('3');
    expect(arrayTest.length).toBe(2);
  }));

  it('debe remover el primero y devolverlo', async(() => {
    let arrayTest: Array<any> = ['1','2','3'];
    let last = ArrayUtils.first(arrayTest);
    expect(last).toBe('1');
    expect(arrayTest.length).toBe(2);
  }));


});
