export default interface IRawHouse {
  Address: string
  City: string
  CountryCode: string
  Price: number
  StartDate: string
  EndDate: string
  Currency: string
  Description: string
  Lat: number,
  Lng: number,
  Facilities: object
  Deposit: number
  Images: string[]
  LastUpdated: string,
  ListingReference: string,
  Link: string
}
