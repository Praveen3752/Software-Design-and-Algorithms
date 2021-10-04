import { Item } from "./Item";
import { Pages } from "./Pages";

export class Comics extends Item{
    pages!: Pages;
    title !: string;
    author !: string;
    artist !: string;
    constructor(title: string, author: string, artist: string, pages: Pages) {
        super();
        this.title = title;
        this.artist = artist;
        this.author = author;
        this.pages = pages;
    }

    toString() {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.length}`;
    }

    set titleName(name: string) {
        this.title = name;
    }

    get titleName() {
        return this.title;
    }

    set authorName(name: string) {
        this.author = name;
    }

    get authorName() {
        return this.author;
    }

    set artistName(name: string) {
        this.artist = name;
    }

    get artistName() {
        return this.artist;
    }

}