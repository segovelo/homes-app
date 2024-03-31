import { Component, Input } from '@angular/core';
import { HouseInterface } from '../house-interface'; 

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!:HouseInterface
}
