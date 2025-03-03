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
exports.BasicAI = void 0;
var AI_1 = require("./AI");
var BasicAI = /** @class */ (function (_super) {
    __extends(BasicAI, _super);
    function BasicAI(attackChoiceProbabilities) {
        var _this = _super.call(this) || this;
        _this.attackChoiceProbabilities = attackChoiceProbabilities;
        _this.attackChoices = Array.from(_this.attackChoiceProbabilities.keys());
        return _this;
    }
    BasicAI.prototype.chooseAttack = function () {
        var rand = Math.random();
        var accumulatedProb = 0;
        var result = null;
        this.attackChoiceProbabilities.forEach(function (value, key) {
            accumulatedProb += value;
            if (rand <= accumulatedProb) {
                result = key;
            }
        });
        if (result === null)
            throw new Error("Accumulated Probabilities are less than 1");
        else
            return result;
    };
    return BasicAI;
}(AI_1.AI));
exports.BasicAI = BasicAI;
