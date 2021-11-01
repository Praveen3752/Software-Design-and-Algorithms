import { Letter } from "./Letter";
import { Oversize } from "./Oversize";
import { PackageShip } from "./Package";
import { Shipment } from "./Shipment";
import { getShipmentId } from "./ShipmentId";
import { State } from "./State";

class ShipmentFactory {
    shipment: Shipment;

    constructor(state: State) {
        if (state.fromZipCode.length != 5 || state.toZipCode.length != 5) {
            throw new Error('Invalid zip code.');
        }
        state.shipmentId = state.shipmentId ? state.shipmentId : getShipmentId();
        this.shipment = this.createShipmentInstance(state);
    }

    createShipmentInstance(state: State): Shipment {
        if (state.weight <= 15) {
            return new Letter(state);
        } else if (state.weight <= 160) {
            return new PackageShip(state);
        } else return new Oversize(state);
    }

    getShipment(): Shipment {
        return this.shipment;
    }

}

export default ShipmentFactory;