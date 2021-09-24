import { Weapon } from "./Weapon";
let bowName = "bow";
export class Bow extends Weapon {
    constructor(baseDamage,baseDurability,value,weight) {
        super(bowName,baseDamage,baseDurability,value,weight);
    }
    polish() : void {
        let tempDurabilityModifier = this.getDurability() + this.MODIFIER_CHANGE_RATE;
        if(tempDurabilityModifier > 1) { 
            this.durabilityModifier = 1 - this.baseDurability;
        }
        else {
            this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
        }
    }
}
