import { Entity, Attack, Damage} from "./entity";
export class Ship extends Entity {

    pirateStrength: number;
    cannonStrength: number;
    armorLevel: number;


    constructor(
        shipStats: ShipStats) {
            super(shipStats.maxHealth);
            this.pirateStrength = shipStats.pirateStrength;
            this.cannonStrength = shipStats.cannonStrength;
            this.armorLevel = shipStats.armorLevel;

            this.attackList = new Map<string, Attack>([
                ["Cannon", () => {
                    return {
                        damageType: "Cannon",
                        damageNumber: this.cannonStrength
                    }}],
                ["Storm", () => {
                    return {
                        damageType: "Storm",
                        damageNumber: this.pirateStrength
                    }
                }]
            ])
    }

    override takeDamage(damage: Damage): void {
        var calcHealth;
        if (damage.damageType === "Basic" || damage.damageType === "Cannon"){
            calcHealth = this.health - ((100 - this.armorLevel) / 100) * damage.damageNumber;
        }
        else {
            calcHealth = this.health - damage.damageNumber;
        }

        if (calcHealth <= 0) {
            this.health = 0
            this.alive = false
        }
        else {
            this.health = calcHealth;
        }
    }

    updateAttribute(currentVal: number, diff: number): number {
        const result = currentVal + diff;
        return (result >= 0) ? result : 0;
    }

    updatePirateStrength(diff: number): void {
        this.pirateStrength = this.updateAttribute(this.pirateStrength, diff);

    }

    updateCannonStrength(diff: number): void {
        this.cannonStrength = this.updateAttribute(this.cannonStrength, diff);
    }

    updateArmor(diff: number): void {
        this.armorLevel = this.updateAttribute(this.armorLevel, diff);
    }
}

export type ShipStats = {
    maxHealth: number, 
    pirateStrength: number,
    cannonStrength: number,
    armorLevel: number // 0-100
}