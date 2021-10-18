import { Item } from "./Item";
import { Pages } from "./Pages";

export class Book extends Item {
    pages!: Pages;
    title!: string;
    author!: string;
    constructor(title: string, author: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    toString() {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.length}`;
    }

    get titleName() {
        return this.title;
    }

    set titleName(name) {
        this.title = name;
    }

    get authorName() {
        return this.author;
    }

    set authorName(name) {
        this.author = name;
    }

}