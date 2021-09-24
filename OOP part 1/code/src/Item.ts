import { Comparable } from './Comparable';

let id = 0;
let counter = 0;
export abstract class Item implements Comparable<Item> {
    id:number;
    value:number;
    name:string;
    weight:number; 
    abstract use():void;
    constructor(name:string,value:number,weight:number)
    {
        this.id = id;
        this.name = name;
        this.value = value;
        this.weight = weight;
        id++;
        counter++;
    }

    static numberOfItems() : number
    {
        return counter;
    }

    public compareTo(other: Item): number {
        if(this.value > other.value) return 1;
        if(this.value < other.value) return -1;
        if(this.name > other.name) return 1;
        return -1;
    }

    toString() : string
    {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }

    reset() : void
    {
        counter = 0;
    }

    getId() : number
    {
        return this.id;
    }

    setValue(price)
    {   
        this.value = price;
    }

    getValue()
    {
        return this.value;
    }

    setName(name)
    {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }

    setWeight(weight)
    {
        this.weight = weight;
    }

    getWeight()
    {
        return this.weight;
    }

}
