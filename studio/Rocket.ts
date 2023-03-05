import { Payload } from './Payload';
import { Astronaut } from './Astronaut'; 
import { Cargo } from './Cargo';

export class Rocket implements Payload {  //implements Payload
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [] = [];  //NOT string [] 
    astronauts: Astronaut [] = []; //NOT string []
    massKg: number;  //from Payload

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload []): number { //(items: Payload[])
        let sum: number = 0; //
        for (let i = 0; i < items.length; i++) { //
            sum += items[i].massKg; //
        }
        return sum; 
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems); 
    }

    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg; //return true;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo); //push into cargoItems array
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut); //push into astronauts array
            return true;
        } else {
            return false;
        }
    }

}
