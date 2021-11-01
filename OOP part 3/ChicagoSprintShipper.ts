import { Shipper } from "./Shipper";

export class ChicagoSprintShipper implements Shipper {
    weight: number;
    type: string;
    constructor(weight: number, type: string) {
        this.weight = weight;
        this.type = type;
    }
    getCost() {
        if (this.type == 'Letter') {
            return this.weight * 0.42;
        }
        else if (this.type == 'Package') {
            return this.weight * 0.20;
        }
        else {
            return this.weight * 0.42;
        }
    }
}