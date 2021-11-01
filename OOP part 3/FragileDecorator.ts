import { Shipment } from "./Shipment";

export class FragileDecorator implements Shipment {
    shipmentInstance: Shipment;
    constructor(instance: Shipment) {
        this.shipmentInstance = instance;
    }
    ship(): string {
        return this.shipmentInstance.ship() + "**MARK FRAGILE**";
    }

}