import { Ship, ShipStats } from "./Entities/Ship"
import { Entity } from "./Entities/entity"

const playerStartShipStats : ShipStats = {
    maxHealth: 300,
    attackingPower: 100,
    pirateStrength: 50,
    cannonStrength: 50,
    armorLevel: 0
}

const simpleShipStats : ShipStats = {
    maxHealth: 100,
    attackingPower: 30,
    pirateStrength: 40,
    cannonStrength: 20,
    armorLevel: 0
}

const flagShip = new Ship(playerStartShipStats)
const simpleShip1 = new Ship(simpleShipStats)
const simpleShip2 = new Ship(simpleShipStats)


function aiChooseAttackShip(cannonProbability: number): string {
    const rand = Math.random();
    return (rand <= cannonProbability) ? "Cannon" : "Storm";
}


function fight(entity1: Entity, entity2: Entity): void {
    while (entity1.alive && entity2.alive) {
        let entity1Attack = entity1.attack(aiChooseAttackShip(0.6));
        entity2.takeDamage(entity1Attack);
        console.log(entity1Attack.damageType, "health: ", entity2.health);
        let entity2Attack = entity2.attack(aiChooseAttackShip(0.4));
        entity1.takeDamage(entity2Attack);
        console.log(entity2Attack.damageType, "health: ", entity1.health);
    }
    if (entity1.alive) console.log("Ship1 has won!");
    else console.log("Ship2 has won!");
}


fight(simpleShip1, simpleShip2)
