export class Entity {

    maxHealth: number;
    health: number;
    alive: boolean;
    attackList: Map<string, Attack>;

    constructor(maxHealth: number) {
        this.maxHealth = maxHealth;
        this.health = maxHealth;
        this.alive = true;
        this.attackList = new Map;
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
        const attack = this.attackList.get(name);
        if (attack == null){
            return {
                damageNumber: 0,
                damageType: "Basic"
            }
        }
        else {
            return attack();
        }
    }
};

export type Attack = () => Damage;

export type Damage = {
    damageNumber: number;
    damageType: string;
}