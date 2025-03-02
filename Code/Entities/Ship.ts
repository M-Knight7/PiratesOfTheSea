import { Entity, Attack, Damage} from "./entity";
export class Ship extends Entity {

    pirateStrength: number;
    cannonStrength: number;
    armorLevel: number;


    constructor(
        shipStats: ShipStats) {
            super(shipStats.maxHealth, shipStats.attackingPower);
            this.pirateStrength = shipStats.pirateStrength;
            this.cannonStrength = shipStats.cannonStrength;
            this.armorLevel = shipStats.armorLevel;

            this.attackList = [
                {
                    name: "Cannon",
                    attackAction: () => {
                        return {
                            damageType: "Cannon",
                            damageNumber: this.cannonStrength
                        }
                    }
                },
                {
                    name: "Storm",
                    attackAction: () => {
                        return {
                            damageType: "Storm",
                            damageNumber: this.pirateStrength
                        }
                    }
                }
            ]
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

    upgradePirateStrength(upgradeVal: number): void {
        this.pirateStrength += upgradeVal;
    }

    upgradeCannonStrength(upgradeVal: number): void {
        this.cannonStrength += upgradeVal;
    }
}

export type ShipStats = {
    maxHealth: number, 
    attackingPower: number, 
    pirateStrength: number,
    cannonStrength: number,
    armorLevel: number // 0-100
}