import IrepositoryHouse from '../api/IRawHouse.interface'
import IHouse from './IHouse.interface'

export default class House implements IHouse {
  image
  address
  city
  link

  constructor (houseData: IrepositoryHouse) {
    this.image = houseData.Images.length > 0 ? houseData.Images[0] : false
    this.address = houseData.Address
    this.city = houseData.City
    this.link = houseData.Link
  }
}
