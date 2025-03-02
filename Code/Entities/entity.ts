export class Entity {

    maxHealth: number;
    health: number;
    alive: boolean;
    attackingPower: number;
    attackList: Array<Attack>;

    constructor(maxHealth: number,
            attackingPower: number) {
        this.maxHealth = maxHealth;
        this.health = maxHealth;
        this.attackingPower = attackingPower;
        this.alive = true;
        this.attackList = [];
    }

    takeDamage(damage: Damage) {
        let calcHealth = this.health - damage.damageNumber;
        if (calcHealth <= 0) {
            this.health = 0
            this.alive = false
        }
        else {
            this.health = calcHealth;
        }
    }

    attack(name: string): Damage {
        const attack = this.attackList.find(att => att.name === name);
        if (attack == null){
            return {
                damageNumber: 0,
                damageType: "Basic"
            }
        }
        else {
            return attack.attackAction();
        }
    }
};

export type Attack = {
    name: string,
    attackAction: () => Damage
}

export type Damage = {
    damageNumber: number;
    damageType: string;
}