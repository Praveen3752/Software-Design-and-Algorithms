import { Item } from "./Item";

export abstract class  Weapon extends Item {
    MODIFIER_CHANGE_RATE = 0.05;
    baseDamage;
    damageModifier = 0.05;
    baseDurability;
    durabilityModifier = 0.05; 
    abstract polish() : void;
    constructor(name:string,baseDamage:number,baseDurability:number,value:number,weight:number) {
        super(name,value,weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
    }

    getDamage() : number {
        return (this.baseDamage + this.damageModifier).toFixed(2);
    }

    getDurability() : number {
        return (this.baseDurability + this.durabilityModifier).toFixed(2);
    }

    toString() : string {
        return `${this.name} − Value: ${this.value}, Weight : ${this.weight} , Damage : ${this.getDamage()} , Durability : ${this.getDurability() * 100}%`;
    }

    use() : string {
        if(this.getDurability() <= 0) { 
            return `You can't use the ${this.name} , it is broken.`;
        }
        this.durabilityModifier -= this.MODIFIER_CHANGE_RATE;
        if(this.getDurability() <= 0) { 
            return `You use the ${this.name} , dealing ${this.getDamage().toFixed(2)} points of damage . The hammer breaks.`;
        }
        return `You use the ${this.name} , dealing ${this.getDamage().toFixed(2)} points of damage.`;
    }

  getBaseDamage() : number {
      return this.baseDamage;
  }

  setBaseDamage(damage:number) : void {
      this.baseDamage = damage;
  }

  getDamageModifier() : number {
      return this.damageModifier;
  }

  setDamageModifier(damageModifier : number) : void {
      this.damageModifier = damageModifier;
  }

  getBaseDurability() : number {
      return this.baseDurability;
  }

  setBaseDurability(baseDurability : number) : void {
      this.baseDurability = baseDurability;
  }

  getDurabilityModifier() : number {
      return this.durabilityModifier;
  }

  setDurabilityModifier(durabilityModifier : number) : void {
      this.durabilityModifier = durabilityModifier;
  }

}