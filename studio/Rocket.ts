import { Payload } from './Payload';
import { Astronaut } from './Astronaut'; 
import { Cargo } from './Cargo';

export class Rocket {  //don't need to add --> implements Payload?
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [] = [];  //NOT string [] 
    astronauts: Astronaut [] = []; //NOT string []
    //massKg: number;  //need from Payload?

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload []): number { //(items: Payload[])
        let sum: number = 0; // accumulator pattern  (can also use --> let sum = 0;)
        for (let i = 0; i < items.length; i++) { //For loop for array
            sum += items[i].massKg; // += will keep adding each element to the sum
        }
        return sum; 
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems); // will loop through the arrays and take the masses to add
    }

    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg; //return true;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {  //needs conditional
            this.cargoItems.push(cargo); //push into cargoItems array
            return true;
        } else {   //don't need to use else, just the return false
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut); //push into astronauts array
            return true;
        } else {   //don't need to use else, just the return false
            return false;
        }
    }

}
