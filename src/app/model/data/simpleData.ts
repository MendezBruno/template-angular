import { Actions } from "../enums/actionEnums";

/**
 * Clase para emitir datos por @Output()
 */
export class EmitData {
    
    action: Actions;
    data: any;

    constructor(action: Actions, data?: any) {
        this.action = action;
        this.data = data;
    }
}