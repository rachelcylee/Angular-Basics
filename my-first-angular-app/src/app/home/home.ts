import { HousingLocation } from './../housing-location/housing-location';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing.service';
@Component({
    selector: 'app-home',
    imports: [HousingLocation],
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
})
export class Home {
    // ChangeDetectorRef: allows manual control over Angular's change detection
    private readonly changeDetectorRef = inject(ChangeDetectorRef);
    housingLocationList: HousingLocationInfo[] = [];
    housingService: HousingService = inject(HousingService);
    filteredLocationList: HousingLocationInfo[] = [];

    constructor() { //a method runs automatically when a component is created.
        this.housingService
            .getAllHousingLocations()
            .then((housingLocationList: HousingLocationInfo[]) => {
                this.housingLocationList = housingLocationList;
                this.filteredLocationList = housingLocationList;
                this.changeDetectorRef.markForCheck();
            });
    }

    filterResults(text: string) {

        if (!text) {
            this.filteredLocationList = this.housingLocationList;
            return;
        }

        this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
            housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
        );
    }
}