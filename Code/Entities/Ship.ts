class Ship extends Entity {

    pirateStrength: number;
    cannonStrength: number;

    constructor(
        maxHealth: number, 
        attackingPower: number, 
        pirateStrength: number,
        cannonStrength: number,
        attackAction: (number) => Damage) {
            super(maxHealth, attackingPower, attackAction);
            this.pirateStrength = pirateStrength;
            this.cannonStrength = cannonStrength;
    }

    upgradePirateStrength(upgradeVal: number): void {
        this.pirateStrength += upgradeVal;
    }

    upgradeCannonStrength(upgradeVal: number): void {
        this.cannonStrength += upgradeVal;
    }

}