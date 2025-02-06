import { State } from "../entity/state.entity";

export class StateDto {
    name: string;
}
export class ReturnState{
    name: string
    constructor(state: State){
        this.name = state.name
    }
}