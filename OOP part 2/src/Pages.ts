import { Page } from "./Page";

export class Pages
{
    pages : Page[] = [];
    constructor(pages : Page[])
    {
        this.pages = pages;
    }

    get length()
    {
        return this.pages.length;
    }
}