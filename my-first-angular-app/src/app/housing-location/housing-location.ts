import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrls: ['./housing-location.css'],
})
export class HousingLocation {
  //using signal to pass the housing location info to the component
  //to output formatted text like {{housingLocation().name}} in the template
  housingLocation = input.required<HousingLocationInfo>();

}
