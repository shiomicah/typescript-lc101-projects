"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sumMassKg;
        for (var i = 0; i < items.length; i++) {
        }
        return sumMassKg;
    };
    Rocket.prototype.currentMassKg = function () {
        var currentMass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentMass;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else if (this.canAdd(cargo) === false) {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else if (this.canAdd(astronaut) === false) {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
//export class Rocket implements Payload {
// massKg: number;
// name: string;
// totalCapacityKg: number;
// cargoItems: Cargo[] = [];
// astronauts: Astronaut[] =[];
// constructor(name: string, totalCapacityKg: number) {
//     this.name = name;
//     this.totalCapacityKg = totalCapacityKg;
// }
// sumMass( items: Payload[] ): number {
//     this.massKg = 0;
//     for(let i = 0; i < items.length; i++){
//         this.massKg += items[i].massKg;
//     }
//     return this.massKg;
