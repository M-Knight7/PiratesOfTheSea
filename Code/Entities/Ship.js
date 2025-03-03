"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
var entity_1 = require("./entity");
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship(shipStats) {
        var _this = _super.call(this, shipStats.maxHealth) || this;
        _this.pirateStrength = shipStats.pirateStrength;
        _this.cannonStrength = shipStats.cannonStrength;
        _this.armorLevel = shipStats.armorLevel;
        _this.attackList = new Map([
            ["Cannon", function () {
                    return {
                        damageType: "Cannon",
                        damageNumber: _this.cannonStrength
                    };
                }],
            ["Storm", function () {
                    return {
                        damageType: "Storm",
                        damageNumber: _this.pirateStrength
                    };
                }]
        ]);
        return _this;
    }
    Ship.prototype.takeDamage = function (damage) {
        var calcHealth;
        if (damage.damageType === "Basic" || damage.damageType === "Cannon") {
            calcHealth = this.health - ((100 - this.armorLevel) / 100) * damage.damageNumber;
        }
        else {
            calcHealth = this.health - damage.damageNumber;
        }
        if (calcHealth <= 0) {
            this.health = 0;
            this.alive = false;
        }
        else {
            this.health = calcHealth;
        }
    };
    Ship.prototype.upgradePirateStrength = function (upgradeVal) {
        this.pirateStrength += upgradeVal;
    };
    Ship.prototype.upgradeCannonStrength = function (upgradeVal) {
        this.cannonStrength += upgradeVal;
    };
    return Ship;
}(entity_1.Entity));
exports.Ship = Ship;
