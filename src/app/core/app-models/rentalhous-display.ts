import { RentalHouseForDisplay } from '../api-models/rentalhouse-for-display';

export class RentalHouseDisplay {
  Id: number;
  Title: string;
  Price: number;
  City: string;
  Country: string;
  Address: string;
  PropertyType: string;
  Bedrooms: number;
  Bathrooms: number;
  Area: number;
  YearBuilt: number;
  Features: string;

  constructor(input: RentalHouseForDisplay) {
    this.Id = input.id;
    this.Title = input.title;
    this.Price = input.price;
    this.City = input.city;
    this.Country = input.country;
    this.Address = input.address;
    this.PropertyType = input.propertyType;
    this.Bedrooms = input.bedrooms;
    this.Bathrooms = input.bathrooms;
    this.Area = input.area;
    this.YearBuilt = input.yearBuilt;
    this.Features = input.features;
  }
}
