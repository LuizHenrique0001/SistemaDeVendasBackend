import { ReturnState } from "src/state/dto/state.dto";
import { City } from "../entity/city.entity";

export class CityDto {
    name: string;
    state_id: number;
}
export class ReturnCity{;
    name:string
    state?: ReturnState;

    constructor(city: City){
        this.name = city.name;
        this.state = city.state ? new ReturnState(city.state): undefined;
    }
}