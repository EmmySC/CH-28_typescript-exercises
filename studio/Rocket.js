"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    //massKg: number;  //need from Payload?
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = []; //NOT string [] 
        this.astronauts = []; //NOT string []
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0; // accumulator pattern  (can also use --> let sum = 0;)
        for (var i = 0; i < items.length; i++) { //For loop for array
            sum += items[i].massKg; // += will keep adding each element to the sum
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems); // will loop through the arrays and take the masses to add
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg; //return true;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) { //needs conditional
            this.cargoItems.push(cargo); //push into cargoItems array
            return true;
        }
        else { //don't need to use else, just the return false
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut); //push into astronauts array
            return true;
        }
        else { //don't need to use else, just the return false
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
