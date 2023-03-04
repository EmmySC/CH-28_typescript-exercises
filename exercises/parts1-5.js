"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName1 = 'Determination';
var speedMph1 = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer1 = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer1;
var hoursToMars = milesToMars / speedMph1;
var daysToMars = hoursToMars / 24;
//console.log(daysToMars);
var milesToTheMoon = kilometersToTheMoon * milesPerKilometer1;
var hoursToTheMoon = milesToTheMoon / speedMph1;
var daysToTheMoon = hoursToTheMoon / 24;
//console.log(daysToTheMoon);
// Code an output statement here (use a template literal):
console.log("The ".concat(spacecraftName1, " shuttle will take ").concat(daysToMars, " days to get to Mars."));
console.log("The ".concat(spacecraftName1, " shuttle will take ").concat(daysToTheMoon, " days to get to the Moon."));
console.log('\n');
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation1(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer1;
    var hoursToLocation = milesAway / speedMph1;
    return hoursToLocation / 24;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log("It will take ".concat(getDaysToLocation1(kilometersToMars), " days for the ").concat(spacecraftName1, " shuttle to get to Mars."));
console.log("It will take ".concat(getDaysToLocation1(kilometersToTheMoon), " days for the ").concat(spacecraftName1, " shuttle to get to the Moon."));
console.log('\n');
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("It would take ".concat(spaceShuttle.getDaysToLocation(kilometersToMars), " days for the ").concat(spaceShuttle.name, " shuttle to get to Mars."));
console.log("It would take ".concat(spaceShuttle.getDaysToLocation(kilometersToTheMoon), " days for the ").concat(spaceShuttle.name, " shuttle to get to the Moon."));
console.log('\n');
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
//import { SpaceLocation } from './SpaceLocation'; 
// Add the printDaysToLocation function to the Spacecraft class.
// printDaysToLocation(location: SpaceLocation) {
//     console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
//  }
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
