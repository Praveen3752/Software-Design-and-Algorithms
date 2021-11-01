import { AirEastShipper } from "./AirEastShipper";
import { ChicagoSprintShipper } from "./ChicagoSprintShipper";
import { PacificParcelShipper } from "./PacificParcelShipper";
import { AbstractFactory } from './AbstractFactory';
export class LocationFactory implements AbstractFactory {

    weight: number;
    type: string;
    constructor(weight: number, type: string) {
        this.weight = weight;
        this.type = type;
    }

    getLocation(fromZipCode: string) {
        let tempZipCode = Number(fromZipCode[0]);
        if (tempZipCode <= 0) {
            return null;
        }
        if (tempZipCode < 4) {
            return new AirEastShipper(this.weight, this.type);
        }
        else if (tempZipCode < 7) {
            return new ChicagoSprintShipper(this.weight, this.type);
        }
        else if (tempZipCode < 10) {
            return new PacificParcelShipper(this.weight, this.type);
        }
        return null;
    }

}
