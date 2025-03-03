import { AI } from "./AI";
import { Damage, Entity } from "../Entities/entity";
export class AIEntity {

    entity: Entity;
    ai: AI;

    constructor(entity: Entity, ai: AI) {
        this.entity = entity;
        this.ai = ai;
    }

    attack(): Damage {
        return this.entity.attack(this.ai.chooseAttack());
    }
}