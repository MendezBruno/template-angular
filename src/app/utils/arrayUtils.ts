export class ArrayUtils {
    
    constructor() {
        console.log('cree el array utils');
    }
    
    static remove<T>(array: Array<T>, item: T ): T {
        return array.splice(array.indexOf(item),1)[0]
    }
    
    static last<T>(array: Array<T>): T {
        const last = array.length - 1; // porque consideramos que empieza en 0
        return array.splice(last, 1)[0];
    } 
    
    static first<T>(array: Array<T>): T {
        const first = 0; // porque consideramos que empieza en 0
        return array.splice(first, 1)[0];    }
}