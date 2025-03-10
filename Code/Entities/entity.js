"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    function Entity(maxHealth) {
        this.maxHealth = maxHealth;
        this.health = maxHealth;
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
            throw Error("".concat(this, " does not have the attack: ").concat(name));
        }
        else {
            return attack();
        }
    };
    return Entity;
}());
exports.Entity = Entity;
;
