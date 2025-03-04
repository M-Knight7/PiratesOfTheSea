import { Ship, ShipStats } from "./Entities/Ship";

const flagShipStats: ShipStats = {
    maxHealth: 300,
    pirateStrength: 40,
    cannonStrength: 20,
    armorLevel: 0
}

export class FlagShip extends Ship {

    constructor() {
        super(flagShipStats);
    }
    
}