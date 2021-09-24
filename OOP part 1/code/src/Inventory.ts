import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";
import { ItemWeightComparator } from "./ItemWeightComparator";

export class Inventory implements ItemComparator
{
    items : Array<Item>;

    constructor()
    {
        this.items = [];
    }

    addItem(item : Item) : void
    {
        this.items.push(item);
    }

    sort():void;
    sort(comparator : ItemWeightComparator):void;
    sort(comparator? : ItemWeightComparator):void
    {
        if(!comparator) this.items.sort((a,b) => this.compare(a,b));
        else this.items.sort((a,b) => comparator.compare(a,b));
    }

    compare(first: Item, second: Item): number {
        if(first.value > second.value) return 1;
        if(first.value < second.value) return -1;
        if(first.name > second.name) return 1;
        return -1;
    }

    toString():string
    {
        return this.items.toString();
    }

}