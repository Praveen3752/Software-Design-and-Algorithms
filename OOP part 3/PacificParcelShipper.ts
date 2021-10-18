import { Shipper } from "./Shipper";

export class PacificParcelShipper implements Shipper {
    weight: number;
    type: string;
    constructor(weight: number, type: string) {
        this.weight = weight;
        this.type = type;
    }
    getCost() {
        if (this.type === 'Letter') {
            return this.weight * 0.51;
        }
        else if (this.type === 'Package') {
            return this.weight * 0.19;
        }
        else {
            return this.weight * 0.51 + 0.02 * this.weight;
        }
    }
}