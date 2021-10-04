import { IterableMixin } from "./IterableMixin";
export abstract class Item extends IterableMixin
{
    abstract toString() : string;
}
