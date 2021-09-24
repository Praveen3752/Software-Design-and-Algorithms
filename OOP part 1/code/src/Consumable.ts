import { Item } from "./Item";

export abstract class Consumable extends Item {
    consumed : boolean;
    spoiled : boolean;
    abstract eat() : string;
    constructor(name:string,value:number,weight:number,spoiled:boolean) {
        super(name,value,weight);
        this.consumed = false;
        this.spoiled = spoiled;
    }

    use() : string {
       if(this.consumed) { 
           return `There is nothing left of the ${this.name} to consume.`;
       }
       if(!this.consumed && !this.spoiled) { 
           return this.eat();
       }
       if(this.spoiled) { 
           return this.eat() + 'You feel sick.';
       }
    }

    isConsumed() : boolean {
        return this.consumed;
    }

    setConsumed(consumed) : void {
        this.consumed = consumed;
    }

    isSpoiled() : boolean {
        return this.spoiled;
    }

    toString() {
        let temp = this.isSpoiled ? 'spoiled' : 'not spoiled';
        let temp1 = this.isConsumed ? 'consumed' : 'not consumed';
        return `${this.name} - value : ${this.value}, weight : ${this.weight} , isSpoiled : ${temp} , isConsumed : ${temp1}`;
    }

}