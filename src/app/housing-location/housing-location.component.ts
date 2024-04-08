import { Component, Input, inject } from '@angular/core';
import { HouseInterface } from '../house-interface';
import { ActivatedRoute } from '@angular/router'; 
import {RouterModule}  from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  @Input() housingLocation!:HouseInterface
}
