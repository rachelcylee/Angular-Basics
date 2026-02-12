import { HousingLocation } from './../housing-location/housing-location';
import { Component, inject } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing.service';
@Component({
    selector: 'app-home',
    imports: [HousingLocation],
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
})
export class Home {
    housingLocationList: HousingLocationInfo[] = [];
    housingService: HousingService = inject(HousingService);
    filteredLocationList: HousingLocationInfo[] = [];

    constructor() { //a method runs automatically when a component is created.
        this.housingLocationList = this.housingService.getAllHousingLocations();
        this.filteredLocationList = this.housingLocationList;
    }

    filterResults(text: string) {

        if (!text) {
            this.filteredLocationList = this.housingLocationList;

            return;
        }

        this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
            housingLocation?.city.toLowerCase().includes(text.toLowerCase())
        );
    }
}