// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation'; 

// Part 1: Declare (5) Variables With Type
let spacecraftName1: string = 'Determination';
let speedMph1: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer1: number = 0.621;

// Part 2: Print Days to Mars
let milesToMars: number = kilometersToMars * milesPerKilometer1;
let hoursToMars: number = milesToMars / speedMph1;
let daysToMars: number = hoursToMars / 24;
//console.log(daysToMars);
let milesToTheMoon: number = kilometersToTheMoon * milesPerKilometer1;
let hoursToTheMoon: number = milesToTheMoon / speedMph1;
let daysToTheMoon: number = hoursToTheMoon / 24;
//console.log(daysToTheMoon);

        // Code an output statement here (use a template literal):
console.log(`The ${spacecraftName1} shuttle will take ${daysToMars} days to get to Mars.`);
console.log(`The ${spacecraftName1} shuttle will take ${daysToTheMoon} days to get to the Moon.`);
console.log('\n');

// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation1(kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer1;
    let hoursToLocation: number = milesAway / speedMph1;
    return hoursToLocation / 24;
}

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log(`It will take ${getDaysToLocation1(kilometersToMars)} days for the ${spacecraftName1} shuttle to get to Mars.`);
console.log(`It will take ${getDaysToLocation1(kilometersToTheMoon)} days for the ${spacecraftName1} shuttle to get to the Moon.`);
console.log('\n');

// Part 4: Create a Spacecraft Class
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursToLocation: number = milesAway / this.speedMph;
        return hoursToLocation / 24;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
}

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log(`It would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days for the ${spaceShuttle.name} shuttle to get to Mars.`);
console.log(`It would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days for the ${spaceShuttle.name} shuttle to get to the Moon.`);
console.log('\n');

// Part 5: Export and Import the SpaceLocation Class
        // Add the required import statement BEFORE the part 1 concent.
//import { SpaceLocation } from './SpaceLocation'; 

        // Add the printDaysToLocation function to the Spacecraft class.
// printDaysToLocation(location: SpaceLocation) {
//     console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
//  }

// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars)); //Determination would take 332.67857142857144 days to get to Mars.
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon)); //Determination would take 0.5683628571428571 days to get to the Moon.

