import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HouseInterface } from '../house-interface';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    housingLocationList: HouseInterface[] = [];
    housingService: HousingService = inject(HousingService);
    filteredLocationList: HouseInterface[] = [];
    constructor() {
      this.housingService.getAllHousingLocations()
          .then((housingLocationList: HouseInterface[]) => {
             this.housingLocationList = housingLocationList;
             this.filteredLocationList = housingLocationList;
          });
    }

    filterResults(text: string) {
      if(!text || text.trim() === "")  this.filteredLocationList = this.housingLocationList;
        else this.filteredLocationList = this.housingLocationList.filter(
                  housingLocation => housingLocation?.city.toLowerCase()
                      .includes(text.trim().toLowerCase())
      );
    }
  }
