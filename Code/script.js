"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleEnemyShip_1 = require("./Enemies/SimpleEnemyShip");
var aiShip1 = new SimpleEnemyShip_1.SimpleEnemyShip();
var aiShip2 = new SimpleEnemyShip_1.SimpleEnemyShip();
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
