import getHouses from "../api/getHouses"
import House from "../models/House"
import IHouse from "../models/IHouse.interface"

export default class housesController {
  async getList() {
    const rawhouseList = await getHouses()
    const modeledHouseList: IHouse[] = []

    for (let index = 0; index < rawhouseList.length; index++) {
      const rawHouse = rawhouseList[index]
      if(index >= 50) break

      modeledHouseList.push(new House(rawHouse))
    }

    return modeledHouseList
  }
}
