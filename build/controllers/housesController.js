"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getHouses_1 = __importDefault(require("../api/getHouses"));
const House_1 = __importDefault(require("../models/House"));
class housesController {
    getList() {
        return __awaiter(this, void 0, void 0, function* () {
            const rawhouseList = yield (0, getHouses_1.default)();
            const modeledHouseList = [];
            for (let index = 0; index < rawhouseList.length; index++) {
                const rawHouse = rawhouseList[index];
                if (index >= 50)
                    break;
                modeledHouseList.push(new House_1.default(rawHouse));
            }
            return modeledHouseList;
        });
    }
}
exports.default = housesController;
