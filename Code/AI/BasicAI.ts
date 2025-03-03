import { AI } from "./AI";
export class BasicAI extends AI {

    attackChoices: Array<string>;
    attackChoiceProbabilities: Map<string, number>;

    constructor(attackChoiceProbabilities: Map<string, number>) {
        super();
        this.attackChoiceProbabilities = attackChoiceProbabilities;
        this.attackChoices = Array.from(this.attackChoiceProbabilities.keys());
    }

    chooseAttack(): string {
        const rand = Math.random();
        let accumulatedProb = 0;
        let result = null;
        
        this.attackChoiceProbabilities.forEach((value: number, key: string) => {
            accumulatedProb += value;
            if (rand <= accumulatedProb) {
                result = key;
            }
        })
        if (result === null) throw new Error("Accumulated Probabilities are less than 1");
        else return result;
    }

}