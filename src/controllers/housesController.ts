import getHouses from "../api/getHouses"
import House from "../models/House"

export default class housesController {
  async getList() {
    const houseList = await getHouses()

    return houseList.map(house => new House(house))
  }
}
