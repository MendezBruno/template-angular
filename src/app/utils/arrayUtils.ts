export class ArrayUtils {
    
    constructor() {
        console.log('cree el array utils');
    }
    

    /**
     * Remueve el elemento del array si lo encuentra y lo devuelve
     * 
     * @param array array target
     * @param index elemento a remover
     * @returns el elemento removido o undefined si el indice esta fuera de rango
     */
    static removeAt<T>(array: Array<T>, index: number ): T {
        return index >= array.length ? undefined: array.splice(index,1)[0];
    }
    
    /**
     * Remueve el elemento con ese indice del array si lo encuentra y lo devuelve
     * 
     * @param array array target
     * @param item elemento a remover
     * @returns el elemento removido o undefined si no le encuentra
     */
    static remove<T>(array: Array<T>, item: T ): T {
        let index = array.indexOf(item);
        if ( index >= 0  ) { return this.removeAt(array, index) }
        else  { return undefined } 
    }

    static last<T>(array: Array<T>): T {
        const last = array.length - 1; // porque consideramos que empieza en 0
        return array.splice(last, 1)[0];
    } 
    
    static first<T>(array: Array<T>): T {
        const first = 0; // porque consideramos que empieza en 0
        return array.splice(first, 1)[0];    
    }
    
    static allSatisfy<T>(array: Array<T>, condicion: Function): boolean {
        return array.filter( (e) => { return condicion(e) } ).length == array.length;
    }
    
    static allSatisfyByExpression<T>(array: Array<T>, cuerpo: string, variable1?: string, variable2?: string, variable3?: string): boolean {
        let auxCuerpo = 'return ';
        let fun;
        auxCuerpo = auxCuerpo + cuerpo;
        if ( variable1 && variable2 && variable3 ) { fun = new Function ( variable1, variable2, variable3 , auxCuerpo ); }
        if ( variable1 && variable2 ) { fun = new Function ( variable1, variable2, auxCuerpo ); }
        if ( variable1 ) { fun = new Function ( variable1 , auxCuerpo ); }
        return array.filter( (e) => {return fun(e)} ).length == array.length;
    }
    
    static anySatisfyByExpression<T>(array: Array<T>, cuerpo: string, variable1?: string, variable2?: string, variable3?: string): boolean {
        const aReturn = 'return ';
        const aElement = 'e ';
        let fun;
        let auxCuerpo = aReturn + cuerpo;
        if ( variable1 && variable2 && variable3 ) { fun = new Function ( variable1, variable2, variable3 , auxCuerpo ); }
        if ( variable1 && variable2 ) { fun = new Function ( variable1, variable2, auxCuerpo ); }
        if ( variable1 ) { fun = new Function ( variable1 , auxCuerpo ); }
        if ( !(variable1 || variable2 || variable3) ) { fun = new Function ( 'e', aReturn + aElement + cuerpo  ); }
        return array.filter( (e) => {return fun(e)} ).length > 0;
    }
    static anySatisfy<T>(array: Array<T>, condicion: Function): boolean {
        return array.filter( (e) => { return condicion(e) } ).length > 0;
    }

    static difference<T>(arraySurce: Array<T>, arrayTarget: Array<T>): Array<T> {
        return  arraySurce.filter( (e) =>  {return !arrayTarget.includes(e) })
                .concat( arrayTarget.filter( (e) =>  {return !arraySurce.includes(e) }));
    }

    

    


    
    
}


/*
 if ( cuerpo ) {
            let auxCuerpo = 'return ';
            auxCuerpo = auxCuerpo + cuerpo;
            const fun = new Function ( 'e' , auxCuerpo );
            return array.filter( (e) => { fun(e) } ).length > 0;
        } 
*/