"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ship_1 = require("./Entities/Ship");
var playerStartShipStats = {
    maxHealth: 300,
    attackingPower: 100,
    pirateStrength: 50,
    cannonStrength: 50,
    armorLevel: 0
};
var simpleShipStats = {
    maxHealth: 100,
    attackingPower: 30,
    pirateStrength: 40,
    cannonStrength: 20,
    armorLevel: 0
};
var flagShip = new Ship_1.Ship(playerStartShipStats);
var simpleShip1 = new Ship_1.Ship(simpleShipStats);
var simpleShip2 = new Ship_1.Ship(simpleShipStats);
function aiChooseAttackShip(cannonProbability) {
    var rand = Math.random();
    return (rand <= cannonProbability) ? "Cannon" : "Storm";
}
function fight(entity1, entity2) {
    while (entity1.alive && entity2.alive) {
        var entity1Attack = entity1.attack(aiChooseAttackShip(0.6));
        entity2.takeDamage(entity1Attack);
        console.log(entity1Attack.damageType, "health: ", entity2.health);
        var entity2Attack = entity2.attack(aiChooseAttackShip(0.4));
        entity1.takeDamage(entity2Attack);
        console.log(entity2Attack.damageType, "health: ", entity1.health);
    }
    if (entity1.alive)
        console.log("Ship1 has won!");
    else
        console.log("Ship2 has won!");
}
fight(simpleShip1, simpleShip2);
