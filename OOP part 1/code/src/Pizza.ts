import { Consumable } from "./Consumable";
let pizzaName = "pizza";
let weightPerSlice = 3;
export class  Pizza extends Consumable{
    numberOfSlices : number;
    slicesEaten : number = 0;
    weightPerSlice : number = 3;
    constructor(numberOfSlices:number,spoiled:boolean) {
        super(pizzaName,numberOfSlices,numberOfSlices * weightPerSlice,spoiled);
        this.numberOfSlices = numberOfSlices;
    }

    eat():string
    {
        if(this.slicesEaten < this.numberOfSlices)
        {
            this.slicesEaten++;
            if(this.slicesEaten >= this.numberOfSlices)
            {
                this.setConsumed(true);
            }

            return `You eat a slice of the ${pizzaName}`;
        }
        else
        {
            return `No slices to eat the ${pizzaName}`;
        }
      
    }
}