import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WeatherService} from '../weather.service';
import {ActivatedRoute} from '@angular/router';
import {Forecast} from './forecast.type';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastsListComponent {
  forecast$: Observable<Forecast>;

  constructor(protected weatherService: WeatherService, route : ActivatedRoute) {
    this.forecast$ = route.params.pipe(switchMap(params => weatherService.getForecast(params['zipcode'])));
  }
}
