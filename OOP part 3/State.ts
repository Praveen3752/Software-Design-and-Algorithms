import { getShipmentId } from "./ShipmentId";
export class State {

   shipmentId: number;
   toAddress: string;
   fromAddress: string;
   toZipCode: string;
   fromZipCode: string;
   weight: number;
   marks: string[];
   constructor(shipmentId: number, toAddress: string, fromAddress: string, toZipCode: string, fromZipCode: string, weight: number, marks: string[]) {
      if (shipmentId == 0) {
         this.shipmentId = getShipmentId();
      }
      else {
         this.shipmentId = shipmentId;
      }
      this.toAddress = toAddress;
      this.fromAddress = fromAddress;
      this.toZipCode = toZipCode;
      this.fromZipCode = fromZipCode;
      this.weight = weight;
      this.marks = marks;
   }

   getFromAddress() {
      return this.fromAddress;
   }

   setFromAddress(address: string) {
      this.fromAddress = address;
   }

   getToAddress() {
      return this.toAddress;
   }

   setToAddress(address: string) {
      this.toAddress = address;
   }

   getFromZipCode() {
      return this.fromZipCode;
   }

   setFromZipCode(zipcode: string) {
      this.fromZipCode = zipcode;
   }

   getToZipCode() {
      return this.toZipCode;
   }

   setToZipCode(zipcode: string) {
      this.toZipCode = zipcode;
   }

}