"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity(maxHealth, attackingPower) {
        this.maxHealth = maxHealth;
        this.health = maxHealth;
        this.attackingPower = attackingPower;
        this.alive = true;
        this.attackList = new Map;
    }
    Entity.prototype.takeDamage = function (damage) {
        var calcHealth = this.health - damage.damageNumber;
        if (calcHealth <= 0) {
            this.health = 0;
            this.alive = false;
        }
        else {
            this.health = calcHealth;
        }
    };
    Entity.prototype.attack = function (name) {
        var attack = this.attackList.get(name);
        if (attack == null) {
            return {
                damageNumber: 0,
                damageType: "Basic"
            };
        }
        else {
            return attack();
        }
    };
    return Entity;
}());
exports.Entity = Entity;
;
