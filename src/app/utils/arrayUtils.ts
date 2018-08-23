export class ArrayUtils { 

constructor() {
    console.log('cree el array utils');
}

    static remove<T>(array: Array<T>, item: T ): T {
        return array.splice(array.indexOf(item),1)[0]
    }

}