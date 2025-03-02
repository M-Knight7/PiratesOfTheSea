class entity {

    maxHealth: number;
    health: number;
    alive: boolean;
    attackingPower: number;
    attackAction: (number) => Damage;

    constructor(maxHealth: number, attackingPower: number, attackAction: (number) => Damage) {
        this.maxHealth = maxHealth;
        this.health = maxHealth;
        this.attackingPower = attackingPower;
        this.attackAction = attackAction;
        this.alive = true;
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

    attack() {
        return this.attackAction(this.attackingPower);
    }
};


type Damage = {
    damageNumber: number;
    damageType: string;
}