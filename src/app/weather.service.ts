import {inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {CurrentConditions} from './current-conditions/current-conditions.type';
import {Forecast} from './forecasts-list/forecast.type';
import {ForecastCacheService} from './servises/forecast-cache.service';
import {LocationCacheService} from './servises/location-cache.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class WeatherService {
  private static readonly URL = 'https://api.openweathermap.org/data/2.5';
  private static readonly APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  private static readonly ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  protected locationService = inject(LocationCacheService);
  protected forecastService = inject(ForecastCacheService);
  protected http = inject(HttpClient);

  addCurrentConditionsObservable(zipcode: string):Observable<CurrentConditions> {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    const request = this.http.get<CurrentConditions>(`${WeatherService.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService.APPID}`)
        .pipe(catchError(() => of(null)));
    return this.locationService.getDataOrFetch(request, zipcode);
  }

  getForecast(zipcode: string): Observable<Forecast> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    const request = this.http.get<Forecast>(`${WeatherService.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService.APPID}`);
    return this.forecastService.getDataOrFetch(request, zipcode);
  }

  getWeatherIcon(id: number): string {
    if (id >= 200 && id <= 232)
      return WeatherService.ICON_URL + "art_storm.png";
    else if (id >= 501 && id <= 511)
      return WeatherService.ICON_URL + "art_rain.png";
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.ICON_URL + "art_light_rain.png";
    else if (id >= 600 && id <= 622)
      return WeatherService.ICON_URL + "art_snow.png";
    else if (id >= 801 && id <= 804)
      return WeatherService.ICON_URL + "art_clouds.png";
    else if (id === 741 || id === 761)
      return WeatherService.ICON_URL + "art_fog.png";
    else
      return WeatherService.ICON_URL + "art_clear.png";
  }
}
