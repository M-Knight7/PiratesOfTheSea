"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AIEntity_1 = require("./AI/AIEntity");
var BasicAI_1 = require("./AI/BasicAI");
var Ship_1 = require("./Entities/Ship");
var playerStartShipStats = {
    maxHealth: 300,
    pirateStrength: 50,
    cannonStrength: 50,
    armorLevel: 0
};
var simpleShipStats = {
    maxHealth: 100,
    pirateStrength: 40,
    cannonStrength: 20,
    armorLevel: 0
};
var flagShip = new Ship_1.Ship(playerStartShipStats);
var simpleShipAI = new BasicAI_1.BasicAI(new Map([
    ["Cannon", 0.5],
    ["Storm", 0.5]
]));
var aiShip1 = new AIEntity_1.AIEntity(new Ship_1.Ship(simpleShipStats), simpleShipAI);
var aiShip2 = new AIEntity_1.AIEntity(new Ship_1.Ship(simpleShipStats), simpleShipAI);
function fight(entity1, entity2) {
    while (entity1.entity.alive && entity2.entity.alive) {
        var entity1Attack = entity1.attack();
        entity2.entity.takeDamage(entity1Attack);
        console.log(entity1Attack.damageType, "health: ", entity2.entity.health);
        var entity2Attack = entity2.attack();
        entity1.entity.takeDamage(entity2Attack);
        console.log(entity2Attack.damageType, "health: ", entity1.entity.health);
    }
    if (entity1.entity.alive)
        console.log("Ship1 has won!");
    else
        console.log("Ship2 has won!");
}
fight(aiShip1, aiShip2);
