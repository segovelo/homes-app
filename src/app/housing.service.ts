import { Injectable } from '@angular/core';
import { HouseInterface } from './house-interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/locations";
  constructor() {}

  async getAllHousingLocations(): Promise<HouseInterface[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async gethousingLocationById(id: Number): Promise<HouseInterface | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
      console.log(firstName, lastName, email)
  }
  
}
