import axios from 'axios'
import IRawHouse from './IRawHouse.interface'

export default function getHouses () {
  const URL = 'http://feeds.spotahome.com/ads-housinganywhere.json'
  return axios.get<IRawHouse[]>(URL)
    .then(response => {
      return response.data
    })
}
