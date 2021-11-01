import { LocationFactory } from "./LocationFactory";
import { Shipment } from "./Shipment";
import { Shipper } from "./Shipper";
import { State } from "./State";

export class Letter implements Shipment {
    state: State;
    shipper: Shipper;
    constructor(state: State) {
        this.state = state;
        let factory = new LocationFactory(this.state.weight, 'Letter');
        this.shipper = factory.getLocation(this.state.fromZipCode);
    }
    ship() {
        return `Shipment with the ID ${this.state.shipmentId} will be picked up from ${this.state.fromAddress} ${this.state.fromZipCode} and shipped to ${this.state.toAddress} ${this.state.toZipCode} Cost = ${this.shipper.getCost()}`;
    }

}