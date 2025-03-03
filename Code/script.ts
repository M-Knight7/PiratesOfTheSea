import { AIEntity } from "./AI/AIEntity"
import { BasicAI } from "./AI/BasicAI"
import { SimpleEnemyShip } from "./Enemies/SimpleEnemyShip";
import { Ship, ShipStats } from "./Entities/Ship"
import { Entity } from "./Entities/entity"




const aiShip1 = new SimpleEnemyShip();
const aiShip2 = new SimpleEnemyShip();

function fight(entity1: AIEntity, entity2: AIEntity): void {
    while (entity1.entity.alive && entity2.entity.alive) {
        let entity1Attack = entity1.attack();
        entity2.entity.takeDamage(entity1Attack);
        console.log(entity1Attack.damageType, "health: ", entity2.entity.health);
        let entity2Attack = entity2.attack();
        entity1.entity.takeDamage(entity2Attack);
        console.log(entity2Attack.damageType, "health: ", entity1.entity.health);
    }
    if (entity1.entity.alive) console.log("Ship1 has won!");
    else console.log("Ship2 has won!");
}


fight(aiShip1, aiShip2)
