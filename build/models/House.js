"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class House {
    constructor(houseData) {
        this.image = houseData.Images.length > 0 ? houseData.Images[0] : false;
        this.address = houseData.Address;
        this.city = houseData.City;
        this.link = houseData.Link;
    }
}
exports.default = House;
