import { Shipper } from "./Shipper";

export class AirEastShipper implements Shipper {
    weight: number;
    type: string;
    constructor(weight: number, type: string) {
        this.weight = weight;
        this.type = type;
    }
    getCost() {
        if (this.type == 'Letter') {
            return this.weight * 0.39;
        }
        else if (this.type == 'Package') {
            return this.weight * 0.25;
        }
        else {
            return (this.weight * 0.39) + 10;
        }
    }
}