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

    constructor() {
      this.housingService.getAllHousingLocations()
          .then((housingLocationList: HouseInterface[]) => {
             this.housingLocationList = housingLocationList;
          });
    }
  }
