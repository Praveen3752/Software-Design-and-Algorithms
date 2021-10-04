import { Item } from "./Item";
import { Pages } from "./Pages";

export class Magazine extends Item{
    pages! : Pages;
    title!: string;

    constructor(title:string,pages:Pages) {
        super();
        this.title = title;
        this.pages = pages;
    }

    toString()
    {
        return `Magazine: ${this.title} with number of pages: ${this.pages.length}`;
    }
}