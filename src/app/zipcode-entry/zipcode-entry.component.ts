import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {LocationService} from "../location.service";

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZipcodeEntryComponent {
  locationService = inject(LocationService);
}
