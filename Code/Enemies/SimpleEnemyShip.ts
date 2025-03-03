import { AIEntity } from "../AI/AIEntity";
import { BasicAI } from "../AI/BasicAI";
import { Ship, ShipStats } from "../Entities/Ship";

const simpleShipStats : ShipStats = {
    maxHealth: 100,
    pirateStrength: 40,
    cannonStrength: 20,
    armorLevel: 0
}

const simpleShipAI = new BasicAI(new Map<string, number>([
    ["Cannon", 0.5],
    ["Storm", 0.5]
]))

export class SimpleEnemyShip extends AIEntity {
    constructor() {
        super(new Ship(simpleShipStats), simpleShipAI)
    }
}