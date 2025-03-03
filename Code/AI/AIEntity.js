"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIEntity = void 0;
var AIEntity = /** @class */ (function () {
    function AIEntity(entity, ai) {
        this.entity = entity;
        this.ai = ai;
    }
    AIEntity.prototype.attack = function () {
        return this.entity.attack(this.ai.chooseAttack());
    };
    return AIEntity;
}());
exports.AIEntity = AIEntity;
