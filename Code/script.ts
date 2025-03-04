import { AIEntity } from "./AI/AIEntity"
import { SimpleEnemyShip } from "./Enemies/SimpleEnemyShip";
import { FlagShip } from "./FlagShip";

const flagShip = new FlagShip();
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

function playerAIFight(flagShip: FlagShip, enemy: AIEntity): void {
    let fightActive = true;
    while(fightActive) {
        let playerAttack = getUserInput();
        let playerAttackAction = flagShip.attack(getUserInput());
        enemy.entity.takeDamage(playerAttackAction);
        console.log(`You attack ${enemy} using ${playerAttack}!`);
        console.log(`Enemy health: ${enemy.entity.health}`)
        if (!enemy.entity.alive) {
            console.log("You have won the fight!");
            return;
        }
        let enemyAttack = enemy.attack();
        flagShip.takeDamage(enemyAttack);
        if (!flagShip.alive) {
            console.log("You have lost the fight!");
            return;
        }
    }
}

function getUserInput(): string {
    // ToDo Wright function to get user input
    return "Storm";
}


fight(aiShip1, aiShip2)
