import { Weapon } from "./Weapon";
let swordName = "sword";
export class  Sword extends Weapon {
    
    constructor(baseDamage:number,baseDurability:number,value:number,weight:number) {
        super(swordName,baseDamage,baseDurability,value,weight);
    }

    polish() : void
    {
        let maxPolish = this.baseDamage%25;
        let tempDamageModifier = this.MODIFIER_CHANGE_RATE + this.damageModifier;
        if(tempDamageModifier > maxPolish) this.damageModifier = maxPolish;
        else this.damageModifier = tempDamageModifier;
    }
}