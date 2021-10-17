"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getHouses() {
    const URL = 'http://feeds.spotahome.com/ads-housinganywhere.json';
    return axios_1.default.get(URL)
        .then(response => {
        return response.data;
    });
}
exports.default = getHouses;
