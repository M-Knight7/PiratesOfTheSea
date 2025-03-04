"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleEnemyShip_1 = require("./Enemies/SimpleEnemyShip");
var FlagShip_1 = require("./FlagShip");
var flagShip = new FlagShip_1.FlagShip();
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
function playerAIFight(flagShip, enemy) {
    var fightActive = true;
    while (fightActive) {
        var playerAttack = getUserInput();
        var playerAttackAction = flagShip.attack(getUserInput());
        enemy.entity.takeDamage(playerAttackAction);
        console.log("You attack ".concat(enemy, " using ").concat(playerAttack, "!"));
        console.log("Enemy health: ".concat(enemy.entity.health));
        if (!enemy.entity.alive) {
            console.log("You have won the fight!");
            return;
        }
        var enemyAttack = enemy.attack();
        flagShip.takeDamage(enemyAttack);
        if (!flagShip.alive) {
            console.log("You have lost the fight!");
            return;
        }
    }
}
function getUserInput() {
    // ToDo Wright function to get user input
    return "Storm";
}
fight(aiShip1, aiShip2);
