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
exports.SimpleEnemyShip = void 0;
var AIEntity_1 = require("../AI/AIEntity");
var BasicAI_1 = require("../AI/BasicAI");
var Ship_1 = require("../Entities/Ship");
var simpleShipStats = {
    maxHealth: 100,
    pirateStrength: 40,
    cannonStrength: 20,
    armorLevel: 0
};
var simpleShipAI = new BasicAI_1.BasicAI(new Map([
    ["Cannon", 0.5],
    ["Storm", 0.5]
]));
var SimpleEnemyShip = /** @class */ (function (_super) {
    __extends(SimpleEnemyShip, _super);
    function SimpleEnemyShip() {
        return _super.call(this, new Ship_1.Ship(simpleShipStats), simpleShipAI) || this;
    }
    return SimpleEnemyShip;
}(AIEntity_1.AIEntity));
exports.SimpleEnemyShip = SimpleEnemyShip;
